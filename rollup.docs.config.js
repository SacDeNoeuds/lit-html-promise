import typescript from '@rollup/plugin-typescript'
import resolve from '@rollup/plugin-node-resolve'

export default {
  input: './docs/demo.ts',
  output: [
    { file: './docs/assets/demo.js', format: 'esm', sourcemap: false },
  ],
  plugins: [
    resolve(),
    typescript({ sourceMap: false }),
  ],
}
