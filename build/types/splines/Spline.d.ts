import { Vector } from "../types";
export declare abstract class Spline {
    protected _points: Vector[];
    protected _knots: number[];
    loop: boolean;
    constructor();
    /**
     * @param p
     * @param time If not provided, an estimate will be made based on distance
     */
    addPoint(p: Vector, time?: number): void;
    get points(): Vector[];
    evaluate(x: number, tgt?: Vector): Vector;
    protected abstract _getTangent(index: number, tgt: Vector): any;
    protected abstract _estimateTime(from: Vector, to: Vector): number;
}
