import { Vector } from "../types";

export function add(a: Vector, b: Vector, tgt: Vector)
{
    const dim = a.length;
    for (let i = 0; i < dim; ++i)
        tgt[i] = a[i] + b[i];
}

export function sub(a: Vector, b: Vector, tgt: Vector)
{
    const dim = a.length;
    for (let i = 0; i < dim; ++i)
        tgt[i] = a[i] - b[i];
}

export function distanceSqr(a: Vector, b: Vector): number
{
    const dim = a.length;
    let t = a[0] - b[0];
    t *= t;
    for (let i = 1; i < dim; ++i) {
        const d = a[i] - b[i];
        t += d * d;
    }
    return t;
}

export function distance(a: Vector, b: Vector): number
{
    return Math.sqrt(distanceSqr(a, b));
}

export function lengthSqr(a: Vector): number
{
    const dim = a.length;
    let t = a[0] * a[0];
    for (let i = 1; i < dim; ++i)
        t += a[i] * a[i];
    return t;
}

export function length(a: Vector): number
{
    return Math.sqrt(lengthSqr(a));
}

export function copy(a: Vector, tgt: Vector)
{
    const dim = a.length;
    for (let i = 0; i < dim; ++i)
        tgt[i] = a[i];
}

export function lerp(a: Vector, b: Vector, t: number, tgt?: Vector): Vector
{
    const dim = a.length;

    tgt = tgt ?? [];

    for (let i = 0; i < dim; ++i) {
        tgt[i] = a[i] + (b[i] - a[i]) * t;
    }

    return tgt;
}
