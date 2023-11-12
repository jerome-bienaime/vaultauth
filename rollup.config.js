/* eslint-disable */

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'

const packageJson = require('./package.json')

export default [
  {
    input: 'lib/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'vaultauth-lib',
      },
      {
        file: packageJson.module,
        format: 'esm',
        sourcemap: true,
      },
    ],
    plugins: [
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        tsconfigOverride: {
          compilerOptions: {
            module: 'ES2015',
            moduleResolution: 'node10',
          },
        },
        rollupCommonJSResolveHack: false,
        clean: true,
      }),
      terser(),
    ],
  },
]
