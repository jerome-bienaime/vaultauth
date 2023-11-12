/* eslint-disable */

import resolve from '@rollup/plugin-node-resolve'
import commonjs from '@rollup/plugin-commonjs'
import typescript from 'rollup-plugin-typescript2'
import external from 'rollup-plugin-peer-deps-external'
import { terser } from 'rollup-plugin-terser'
import json from '@rollup/plugin-json'
import { visualizer } from 'rollup-plugin-visualizer'

const packageJson = require('./package.json')

export default [
  {
    input: 'React/components/index.tsx',
    output: [
      {
        file: packageJson.component,
        format: 'cjs',
        sourcemap: true,
        name: 'VaultAuthComponent',
      },
    ],
    external: ['react', 'react-dom'],
    plugins: [
      json(),
      external(),
      resolve(),
      commonjs(),
      typescript({
        tsconfig: './tsconfig.json',
        rollupCommonJSResolveHack: false,
        clean: true,
        tsconfigOverride: {
          compilerOptions: {
            module: 'ES2015',
            moduleResolution: 'node10',
          },
        },
      }),
      terser(),
      visualizer(),
    ],
  },

  {
    input: 'lib/index.ts',
    output: [
      {
        file: packageJson.main,
        format: 'cjs',
        sourcemap: true,
        name: 'vault-auth-lib',
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
