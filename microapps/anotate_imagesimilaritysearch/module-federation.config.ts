import { ModuleFederationConfig } from '@nx/webpack';

const config: ModuleFederationConfig = {
  name: 'anotate_imagesimilaritysearch',

  exposes: {
    './Module': './src/remote-entry.ts',
  },
};

export default config;
