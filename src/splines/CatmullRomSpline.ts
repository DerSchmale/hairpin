import { CardinalSpline } from "./CardinalSpline";

// this is currently a uniform version of the spline. Will look at chordal and centripetal later.
export class CatmullRomSpline extends CardinalSpline
{
    constructor()
    {
        super(0.5);
    }
}