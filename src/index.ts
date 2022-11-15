import chalk from 'chalk';
import { join } from 'path';
import { IApi } from 'umi';
import generate from './generate';

export default function (api: IApi) {
  api.describe({
    key: 'example',
    config: {
      schema(joi: any) {
        return joi.object({
          routerPath: joi.string(),
        });
      },
    },
  });

  api.onGenerateFiles(() => {
    try {
      const source = new generate({
        routerPath: join(
          api.paths.cwd ?? '',
          api.userConfig.example.routerPath,
        ),
      }).run();

      api.writeTmpFile({
        content: `export default ${JSON.stringify(source, null, 2)}`,
        path: `plugin-example/echoRoutes.ts`,
      });
    } catch (e) {
      console.log(
        chalk.red(`Write authorize config file failed, error message: ${e}`),
      );
    }
  });
}
