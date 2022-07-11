import typescript from "rollup-plugin-typescript2";
import {terser} from "rollup-plugin-terser";
import nodeResolve from '@rollup/plugin-node-resolve';

export default [{
    input: ["./src/main.ts"],
    output: [
        {
            file: "build/hairpin.js",
            format: "iife",
            name: "TYMP" // the global which can be used in a browser
        },
        {
            file: "build/hairpin.min.js",
            format: "iife",
            name: "TYMP", // the global which can be used in a browser
            plugins: [terser()]
        },
        {
            file: "build/hairpin.module.js",
            format: "es",
        }
    ],
    watch: {
        clearScreen: true,
        include: 'src/**/*'
    },
    plugins: [
        typescript({
            useTsconfigDeclarationDir: true,
            sourceMap: true,
            inlineSources: true
        }),
        nodeResolve()
    ]
}];
