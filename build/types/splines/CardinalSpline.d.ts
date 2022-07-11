import { Spline } from "./Spline";
import { Vector } from "../types";
export declare class CardinalSpline extends Spline {
    private _alpha;
    constructor(alpha?: number);
    protected _getTangent(index: number, tgt: Vector): void;
    protected _estimateTime(from: Vector, to: Vector): number;
}
