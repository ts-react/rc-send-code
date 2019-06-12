import { IBundleOptions } from 'father';

const options: IBundleOptions = {
  esm: 'rollup',
  cjs: 'rollup',
  umd: {
    name: 'sendCode',
    globals: {
      react: 'React'
    }
  }
};

export default options;
