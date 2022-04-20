import { Config } from '@stencil/core';

export const config: Config = {
  autoprefixCss: true,
  namespace: 'mytodo',
  outputTargets: [
    {
      type: 'www',
      serviceWorker: null,
      baseUrl: '/stencil-todo/',
    },
    {
      type: 'dist',
      esmLoaderPath: '../loader',
    },
    {
      type: 'dist-custom-elements',
      dir: 'components',
    },
  ],
  buildEs5: 'prod',
  extras: {
    dynamicImportShim: true,
    initializeNextTick: true,
    scriptDataOpts: true,
  },
  sourceMap: false,
};
