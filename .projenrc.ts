import * as path from 'node:path'

import { CustomTypescriptProject } from '@vladcos/projen-base'

const project = new CustomTypescriptProject({
  defaultReleaseBranch: 'main',
  devDeps: ['@vladcos/projen-base'],
  name: '@vladcos/tsconfig',
  projenrcTs: true,
  entrypoint: `lib/tsconfig.json`,
  tsconfigTemplatePath: path.resolve('./src/tsconfig.json'),
})
project.compileTask.reset(`cp -R src  ${project.libdir}`)
project.synth()
