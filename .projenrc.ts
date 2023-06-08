import { CustomTypescriptProject } from '@chetzof/projen-base'

const project = new CustomTypescriptProject({
  defaultReleaseBranch: 'main',
  devDeps: ['@chetzof/projen-base'],
  name: '@vladcos/tsconfig',
  projenrcTs: true,
  entrypoint: `lib/tsconfig.json`,
  entrypointTypes: undefined,

  // deps: [],                /* Runtime dependencies of this module. */
  // description: undefined,  /* The description is just a string that helps people understand the purpose of the package. */
  // packageName: undefined,  /* The "name" in package.json. */
})
project.compileTask.reset(`cp -R src  ${project.libdir}`)
project.synth()
