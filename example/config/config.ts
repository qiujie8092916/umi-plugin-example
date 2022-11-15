import { join } from 'path';
import { defineConfig } from 'umi';
import routes from './routes';

export default defineConfig({
  routes,
  plugins: [
    join(
      `${__dirname}/../../${
        require(join(__dirname, '../../package.json')).main
      }`,
    ),
  ],
  example: {
    routerPath: 'config/routes',
  },
});
