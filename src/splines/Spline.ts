import { Vector } from "../types";
import { copy } from "../utils/vector";

const t0 = [];
const t1 = [];

export abstract class Spline
{
    protected _points: Vector[] = [];
    protected _knots: number[] = [];
    loop: boolean = false;

    constructor()
    {
    }

    /**
     * @param p
     * @param time If not provided, an estimate will be made based on distance
     */
    addPoint(p: Vector, time?: number)
    {
        const points = this._points;
        const knots = this._knots;

        // estimate time
        if (time === undefined) {
            const len = points.length;
            if (len === 0)
                time = 0;
            else {
                let scale = 1;
                const i0 = len - 1;
                const from = points[i0];
                // in case we've already provided some time info, we need to match the "velocity" by scaling the times
                if (len > 1) {
                    const i1 = len - 2;
                    const pre = points[i1];
                    const expected = this._estimateTime(pre, from);
                    const real = knots[i0] - knots[i1];
                    scale = real / expected;
                }
                time = knots[i0] + this._estimateTime(from, p) * scale;
            }
        }

        points.push(p);
        knots.push(time);
    }

    get points(): Vector[]
    {
        return this._points;
    }

    evaluate(x: number, tgt?: Vector): Vector
    {
        const points = this._points;
        const knots = this._knots;
        const len = points.length;
        const duration = knots[len - 1];
        const loop = this.loop;

        if (x < 0.0 && !loop) {
            copy(points[0], tgt);
            return tgt;
        }

        if (x >= duration && !loop) {
            copy(points[len - 1], tgt);
            return tgt;
        }

        while (x >= duration)
            x -= duration;
        while (x < 0.0)
            x += duration;

        tgt = tgt ?? [];

        let i0 = 0;

        // TODO: Could probably do a binary search?
        while (x >= knots[i0] && i0 < len)
            ++i0;

        const i1 = (i0--) % len;
        const p0 = points[i0];
        const p1 = points[i1];

        const t = (x - knots[i0]) / (knots[i1] - knots[i0]);
        const t2 = t * t;
        const t3 = t2 * t;

        this._getTangent(i0, t0);
        this._getTangent(i1, t1);

        const dim = p0.length;
        for (let i = 0; i < dim; ++i) {
            const _p0 = p0[i];
            const _p1 = p1[i];
            const _m0 = t0[i];
            const _m1 = t1[i];
            tgt[i] =
                (2.0 * _p0 + _m0 - 2.0 * _p1 + _m1) * t3 +
                (-3.0 * _p0 + 3.0 * _p1 - 2.0 * _m0 - _m1) * t2 +
                _m0 * t + _p0;
        }
    }

    protected abstract _getTangent(index: number, tgt: Vector);

    protected abstract _estimateTime(from: Vector, to: Vector): number;
}