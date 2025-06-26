import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'anotate_imagecreation',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
