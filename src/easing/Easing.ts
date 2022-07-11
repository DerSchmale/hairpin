import { Vector } from "../types";

type EasingFunc = (x: number) => number;

/**
 * A collection of standard easing functions used in animations that map 0 - 1 to 0 - 1.
 */
export const Easing = {
    linear: (x: number) => x,
    easeInQuad: (x: number) => x * x,
    easeOutQuad: (x: number) => x * (2 - x),
    easeInOutQuad: (x: number) => x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x,
    easeInCubic: (x: number) => x * x * x,
    easeOutCubic: (x: number) => (--x) * x * x + 1,
    easeInOutCubic: (x: number) => x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1,
    easeInQuart: (x: number) => x * x * x * x,
    easeOutQuart: (x: number) => 1 - (--x) * x * x * x,
    easeInOutQuart: (x: number) => x < .5 ? 8 * x * x * x * x : 1 - 8 * (--x) * x * x * x,
    easeInQuint: (x: number) => x * x * x * x * x,
    easeOutQuint: (x: number) => 1 + (--x) * x * x * x * x,
    easeInOutQuint: (x: number) => x < .5 ? 16 * x * x * x * x * x : 1 + 16 * (--x) * x * x * x * x
}

export class EasingBase
{
    a: Vector;
    b: Vector;
    private func: EasingFunc;

    constructor(func: EasingFunc, a?: Vector, b?: Vector)
    {
        this.func = func;
        this.a = a || [0, 0];
        this.b = b || [0, 0];
    }

    evaluate(x: number, target?: Vector): Vector
    {
        const t = this.func(x);
        const {a, b} = this;
        const dim = a.length;

        if (!target)
            target = [];

        for (let i = 0; i < dim; ++i)
            target[i] = a[i] + (b[i] - a[i]) * t;

        return target;
    }
}

export class EaseLinear extends EasingBase
{
    constructor() { super(Easing.linear); }
}

export class EaseInQuad extends EasingBase
{
    constructor() { super(Easing.easeInQuad); }
}

export class EaseOutQuad extends EasingBase
{
    constructor() { super(Easing.easeOutQuad); }
}

export class EaseInOutQuad extends EasingBase
{
    constructor() { super(Easing.easeInOutQuad); }
}

export class EaseInCubic extends EasingBase
{
    constructor() { super(Easing.easeInCubic); }
}

export class EaseOutCubic extends EasingBase
{
    constructor() { super(Easing.easeOutCubic); }
}

export class EaseInOutCubic extends EasingBase
{
    constructor() { super(Easing.easeInOutCubic); }
}

export class EaseInQuart extends EasingBase
{
    constructor() { super(Easing.easeInQuart); }
}

export class EaseOutQuart extends EasingBase
{
    constructor() { super(Easing.easeOutQuart); }
}

export class EaseInOutQuart extends EasingBase
{
    constructor() { super(Easing.easeInOutQuart); }
}

export class EaseInQuint extends EasingBase
{
    constructor() { super(Easing.easeInQuint); }
}

export class EaseOutQuint extends EasingBase
{
    constructor() { super(Easing.easeOutQuint); }
}

export class EaseInOutQuint extends EasingBase
{
    constructor() { super(Easing.easeInOutQuint); }
}