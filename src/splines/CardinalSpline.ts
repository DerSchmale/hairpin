import { Spline } from "./Spline";
import { Vector } from "../types";
import { distanceSqr } from "../utils/vector";

// this is currently a uniform version of the spline. Will look at chordal and centripetal later.
export class CardinalSpline extends Spline
{
    private _alpha: number = 0.5;

    constructor(alpha: number = 0.5)
    {
        super();
        this._alpha = alpha;
    }

    protected _getTangent(index: number, tgt: Vector)
    {
        const points = this._points;
        const knots = this._knots;
        const len = points.length;
        let i0, i1;

        if (index === 0 && !this.loop) {
            i0 = 0;
            i1 = 1;
        }
        else if (index === len - 1 && !this.loop) {
            i0 = index - 1;
            i1 = index;
        }
        else {
            i0 = index - 1;
            if (i0 < 0) i0 += len;
            i1 = (index + 1) % len;
        }

        const p0 = points[i0];
        const p1 = points[i1];
        const x0 = knots[i0];
        const x1 = knots[i1];
        const f = this._alpha / (x1 - x0)

        const dim = p0.length;
        // let s = 0
        for (let i = 0; i < dim; ++i) {
            tgt[i] = f * (p1[i] - p0[i]);
            // s += tgt[i] * tgt[i];
        }
        // s = 1.0 / Math.sqrt(s);

        // for (let i = 0; i < dim; ++i) {
        //     tgt[i] *= s;
        // }
    }

    protected _estimateTime(from: Vector, to: Vector): number
    {
        return Math.pow(distanceSqr(from, to), 0.5 * this._alpha);
    }
}