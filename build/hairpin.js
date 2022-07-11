var TYMP = (function (exports) {
    'use strict';

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise */

    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }

    /**
     * A collection of standard easing functions used in animations that map 0 - 1 to 0 - 1.
     */
    var Easing = {
        linear: function (x) { return x; },
        easeInQuad: function (x) { return x * x; },
        easeOutQuad: function (x) { return x * (2 - x); },
        easeInOutQuad: function (x) { return x < .5 ? 2 * x * x : -1 + (4 - 2 * x) * x; },
        easeInCubic: function (x) { return x * x * x; },
        easeOutCubic: function (x) { return (--x) * x * x + 1; },
        easeInOutCubic: function (x) { return x < .5 ? 4 * x * x * x : (x - 1) * (2 * x - 2) * (2 * x - 2) + 1; },
        easeInQuart: function (x) { return x * x * x * x; },
        easeOutQuart: function (x) { return 1 - (--x) * x * x * x; },
        easeInOutQuart: function (x) { return x < .5 ? 8 * x * x * x * x : 1 - 8 * (--x) * x * x * x; },
        easeInQuint: function (x) { return x * x * x * x * x; },
        easeOutQuint: function (x) { return 1 + (--x) * x * x * x * x; },
        easeInOutQuint: function (x) { return x < .5 ? 16 * x * x * x * x * x : 1 + 16 * (--x) * x * x * x * x; }
    };
    var EasingBase = /** @class */ (function () {
        function EasingBase(func, a, b) {
            this.func = func;
            this.a = a || [0, 0];
            this.b = b || [0, 0];
        }
        EasingBase.prototype.evaluate = function (x, target) {
            var t = this.func(x);
            var _a = this, a = _a.a, b = _a.b;
            var dim = a.length;
            if (!target)
                target = [];
            for (var i = 0; i < dim; ++i)
                target[i] = a[i] + (b[i] - a[i]) * t;
            return target;
        };
        return EasingBase;
    }());
    var EaseLinear = /** @class */ (function (_super) {
        __extends(EaseLinear, _super);
        function EaseLinear() {
            return _super.call(this, Easing.linear) || this;
        }
        return EaseLinear;
    }(EasingBase));
    var EaseInQuad = /** @class */ (function (_super) {
        __extends(EaseInQuad, _super);
        function EaseInQuad() {
            return _super.call(this, Easing.easeInQuad) || this;
        }
        return EaseInQuad;
    }(EasingBase));
    var EaseOutQuad = /** @class */ (function (_super) {
        __extends(EaseOutQuad, _super);
        function EaseOutQuad() {
            return _super.call(this, Easing.easeOutQuad) || this;
        }
        return EaseOutQuad;
    }(EasingBase));
    var EaseInOutQuad = /** @class */ (function (_super) {
        __extends(EaseInOutQuad, _super);
        function EaseInOutQuad() {
            return _super.call(this, Easing.easeInOutQuad) || this;
        }
        return EaseInOutQuad;
    }(EasingBase));
    var EaseInCubic = /** @class */ (function (_super) {
        __extends(EaseInCubic, _super);
        function EaseInCubic() {
            return _super.call(this, Easing.easeInCubic) || this;
        }
        return EaseInCubic;
    }(EasingBase));
    var EaseOutCubic = /** @class */ (function (_super) {
        __extends(EaseOutCubic, _super);
        function EaseOutCubic() {
            return _super.call(this, Easing.easeOutCubic) || this;
        }
        return EaseOutCubic;
    }(EasingBase));
    var EaseInOutCubic = /** @class */ (function (_super) {
        __extends(EaseInOutCubic, _super);
        function EaseInOutCubic() {
            return _super.call(this, Easing.easeInOutCubic) || this;
        }
        return EaseInOutCubic;
    }(EasingBase));
    var EaseInQuart = /** @class */ (function (_super) {
        __extends(EaseInQuart, _super);
        function EaseInQuart() {
            return _super.call(this, Easing.easeInQuart) || this;
        }
        return EaseInQuart;
    }(EasingBase));
    var EaseOutQuart = /** @class */ (function (_super) {
        __extends(EaseOutQuart, _super);
        function EaseOutQuart() {
            return _super.call(this, Easing.easeOutQuart) || this;
        }
        return EaseOutQuart;
    }(EasingBase));
    var EaseInOutQuart = /** @class */ (function (_super) {
        __extends(EaseInOutQuart, _super);
        function EaseInOutQuart() {
            return _super.call(this, Easing.easeInOutQuart) || this;
        }
        return EaseInOutQuart;
    }(EasingBase));
    var EaseInQuint = /** @class */ (function (_super) {
        __extends(EaseInQuint, _super);
        function EaseInQuint() {
            return _super.call(this, Easing.easeInQuint) || this;
        }
        return EaseInQuint;
    }(EasingBase));
    var EaseOutQuint = /** @class */ (function (_super) {
        __extends(EaseOutQuint, _super);
        function EaseOutQuint() {
            return _super.call(this, Easing.easeOutQuint) || this;
        }
        return EaseOutQuint;
    }(EasingBase));
    var EaseInOutQuint = /** @class */ (function (_super) {
        __extends(EaseInOutQuint, _super);
        function EaseInOutQuint() {
            return _super.call(this, Easing.easeInOutQuint) || this;
        }
        return EaseInOutQuint;
    }(EasingBase));

    function distanceSqr(a, b) {
        var dim = a.length;
        var t = a[0] - b[0];
        t *= t;
        for (var i = 1; i < dim; ++i) {
            var d = a[i] - b[i];
            t += d * d;
        }
        return t;
    }
    function copy(a, tgt) {
        var dim = a.length;
        for (var i = 0; i < dim; ++i)
            tgt[i] = a[i];
    }

    var t0 = [];
    var t1 = [];
    var Spline = /** @class */ (function () {
        function Spline() {
            this._points = [];
            this._knots = [];
            this.loop = false;
        }
        /**
         * @param p
         * @param time If not provided, an estimate will be made based on distance
         */
        Spline.prototype.addPoint = function (p, time) {
            var points = this._points;
            var knots = this._knots;
            // estimate time
            if (time === undefined) {
                var len = points.length;
                if (len === 0)
                    time = 0;
                else {
                    var scale = 1;
                    var i0 = len - 1;
                    var from = points[i0];
                    // in case we've already provided some time info, we need to match the "velocity" by scaling the times
                    if (len > 1) {
                        var i1 = len - 2;
                        var pre = points[i1];
                        var expected = this._estimateTime(pre, from);
                        var real = knots[i0] - knots[i1];
                        scale = real / expected;
                    }
                    time = knots[i0] + this._estimateTime(from, p) * scale;
                }
            }
            points.push(p);
            knots.push(time);
        };
        Object.defineProperty(Spline.prototype, "points", {
            get: function () {
                return this._points;
            },
            enumerable: false,
            configurable: true
        });
        Spline.prototype.evaluate = function (x, tgt) {
            var points = this._points;
            var knots = this._knots;
            var len = points.length;
            var duration = knots[len - 1];
            var loop = this.loop;
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
            tgt = tgt !== null && tgt !== void 0 ? tgt : [];
            var i0 = 0;
            // TODO: Could probably do a binary search?
            while (x >= knots[i0] && i0 < len)
                ++i0;
            var i1 = (i0--) % len;
            var p0 = points[i0];
            var p1 = points[i1];
            var t = (x - knots[i0]) / (knots[i1] - knots[i0]);
            var t2 = t * t;
            var t3 = t2 * t;
            this._getTangent(i0, t0);
            this._getTangent(i1, t1);
            var dim = p0.length;
            for (var i = 0; i < dim; ++i) {
                var _p0 = p0[i];
                var _p1 = p1[i];
                var _m0 = t0[i];
                var _m1 = t1[i];
                tgt[i] =
                    (2.0 * _p0 + _m0 - 2.0 * _p1 + _m1) * t3 +
                        (-3.0 * _p0 + 3.0 * _p1 - 2.0 * _m0 - _m1) * t2 +
                        _m0 * t + _p0;
            }
        };
        return Spline;
    }());

    // this is currently a uniform version of the spline. Will look at chordal and centripetal later.
    var CardinalSpline = /** @class */ (function (_super) {
        __extends(CardinalSpline, _super);
        function CardinalSpline(alpha) {
            if (alpha === void 0) { alpha = 0.5; }
            var _this = _super.call(this) || this;
            _this._alpha = 0.5;
            _this._alpha = alpha;
            return _this;
        }
        CardinalSpline.prototype._getTangent = function (index, tgt) {
            var points = this._points;
            var knots = this._knots;
            var len = points.length;
            var i0, i1;
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
                if (i0 < 0)
                    i0 += len;
                i1 = (index + 1) % len;
            }
            var p0 = points[i0];
            var p1 = points[i1];
            var x0 = knots[i0];
            var x1 = knots[i1];
            var f = this._alpha / (x1 - x0);
            var dim = p0.length;
            // let s = 0
            for (var i = 0; i < dim; ++i) {
                tgt[i] = f * (p1[i] - p0[i]);
                // s += tgt[i] * tgt[i];
            }
            // s = 1.0 / Math.sqrt(s);
            // for (let i = 0; i < dim; ++i) {
            //     tgt[i] *= s;
            // }
        };
        CardinalSpline.prototype._estimateTime = function (from, to) {
            return Math.pow(distanceSqr(from, to), 0.5 * this._alpha);
        };
        return CardinalSpline;
    }(Spline));

    // this is currently a uniform version of the spline. Will look at chordal and centripetal later.
    var CatmullRomSpline = /** @class */ (function (_super) {
        __extends(CatmullRomSpline, _super);
        function CatmullRomSpline() {
            return _super.call(this, 0.5) || this;
        }
        return CatmullRomSpline;
    }(CardinalSpline));

    exports.CardinalSpline = CardinalSpline;
    exports.CatmullRomSpline = CatmullRomSpline;
    exports.EaseInCubic = EaseInCubic;
    exports.EaseInOutCubic = EaseInOutCubic;
    exports.EaseInOutQuad = EaseInOutQuad;
    exports.EaseInOutQuart = EaseInOutQuart;
    exports.EaseInOutQuint = EaseInOutQuint;
    exports.EaseInQuad = EaseInQuad;
    exports.EaseInQuart = EaseInQuart;
    exports.EaseInQuint = EaseInQuint;
    exports.EaseLinear = EaseLinear;
    exports.EaseOutCubic = EaseOutCubic;
    exports.EaseOutQuad = EaseOutQuad;
    exports.EaseOutQuart = EaseOutQuart;
    exports.EaseOutQuint = EaseOutQuint;
    exports.Easing = Easing;
    exports.EasingBase = EasingBase;
    exports.Spline = Spline;

    Object.defineProperty(exports, '__esModule', { value: true });

    return exports;

})({});
