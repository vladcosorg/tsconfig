import * as path from 'node:path'

import { TypeScriptProject } from '@vladcos/projen-base'

const project = new (class extends TypeScriptProject {
  constructor() {
    super({
      defaultReleaseBranch: 'main',
      devDeps: ['@vladcos/projen-base'],
      name: '@vladcos/tsconfig',
      projenrcTs: true,
      entrypoint: `lib/tsconfig.json`,
      tsconfigTemplatePath: path.resolve('./src/tsconfig.json'),
    })
  }

  override preSynthesize() {
    super.preSynthesize()
    project.compileTask.reset(`cp -R src  ${project.libdir}`)
  }
})()

project.synth()
