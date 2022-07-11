/**
 * Vector is the representation for any N-dimensional vector. This can be either an array of numbers, or a Float32Array.
 */
export type Vector = number[] | Float32Array;

/**
 * Curve is the most basic type for any sort of curve
 */
export type Curve =
{
    /**
     * Evaluates the curve at a given position.
     * @param x The position of the curve to evaluate. Usually a value between 0 and 1.
     */
    evaluate(x: number, target?: Vector): Vector;
}