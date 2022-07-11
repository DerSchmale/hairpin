import { CatmullRomSpline } from "../../build/hairpin.module.js";

(() => {
    window.onload = init;
    document.addEventListener("click", reconstruct);

    let drawing;
    let point = [ 0.5, 0.5 ];
    let t = 0;
    let spline;
    let points;

    function init()
    {
        drawing = initCanvas(document.getElementById("canvas2D"), draw);

        generatePoints();
        requestAnimationFrame(draw);
    }

    function generatePoints()
    {
        points = [];
        spline = new CatmullRomSpline();
        spline.loop = true;

        for (let i = 0; i < 10; ++i) {
            const p = [
                (Math.random() - 0.5) * 2.0,
                (Math.random() - 0.5) * 2.0
            ]
            points.push(p);
            spline.addPoint(p);
        }

        // add final point to fix loop
        spline.addPoint(points[0]);
    }

    function draw()
    {
        drawing.clear();
        drawing.drawPoints(points);
        drawing.drawPoints([point], "red");

        requestAnimationFrame(draw);

        t += 0.03;

        spline.evaluate(t, point);
    }

    function reconstruct()
    {
        generatePoints();
        t = 0;
    }
})();