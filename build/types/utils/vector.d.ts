import { Vector } from "../types";
export declare function add(a: Vector, b: Vector, tgt: Vector): void;
export declare function sub(a: Vector, b: Vector, tgt: Vector): void;
export declare function distanceSqr(a: Vector, b: Vector): number;
export declare function distance(a: Vector, b: Vector): number;
export declare function lengthSqr(a: Vector): number;
export declare function length(a: Vector): number;
export declare function copy(a: Vector, tgt: Vector): void;
export declare function lerp(a: Vector, b: Vector, t: number, tgt?: Vector): Vector;
