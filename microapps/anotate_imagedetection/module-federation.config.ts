import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'anotate_imagedetection',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
