import { Vector } from "../types";
declare type EasingFunc = (x: number) => number;
/**
 * A collection of standard easing functions used in animations that map 0 - 1 to 0 - 1.
 */
export declare const Easing: {
    linear: (x: number) => number;
    easeInQuad: (x: number) => number;
    easeOutQuad: (x: number) => number;
    easeInOutQuad: (x: number) => number;
    easeInCubic: (x: number) => number;
    easeOutCubic: (x: number) => number;
    easeInOutCubic: (x: number) => number;
    easeInQuart: (x: number) => number;
    easeOutQuart: (x: number) => number;
    easeInOutQuart: (x: number) => number;
    easeInQuint: (x: number) => number;
    easeOutQuint: (x: number) => number;
    easeInOutQuint: (x: number) => number;
};
export declare class EasingBase {
    a: Vector;
    b: Vector;
    private func;
    constructor(func: EasingFunc, a?: Vector, b?: Vector);
    evaluate(x: number, target?: Vector): Vector;
}
export declare class EaseLinear extends EasingBase {
    constructor();
}
export declare class EaseInQuad extends EasingBase {
    constructor();
}
export declare class EaseOutQuad extends EasingBase {
    constructor();
}
export declare class EaseInOutQuad extends EasingBase {
    constructor();
}
export declare class EaseInCubic extends EasingBase {
    constructor();
}
export declare class EaseOutCubic extends EasingBase {
    constructor();
}
export declare class EaseInOutCubic extends EasingBase {
    constructor();
}
export declare class EaseInQuart extends EasingBase {
    constructor();
}
export declare class EaseOutQuart extends EasingBase {
    constructor();
}
export declare class EaseInOutQuart extends EasingBase {
    constructor();
}
export declare class EaseInQuint extends EasingBase {
    constructor();
}
export declare class EaseOutQuint extends EasingBase {
    constructor();
}
export declare class EaseInOutQuint extends EasingBase {
    constructor();
}
export {};
