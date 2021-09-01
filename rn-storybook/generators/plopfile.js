module.exports = (plop) => {
  plop.setGenerator('component', {
    description: 'Create a component',
    prompts: [
      {
        type: 'input',
        name: 'name',
        message: 'What is your component name?'
      }
    ],
    actions: [
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/index.ts',
        templateFile: 'templates/component/index.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{kebabCase name}}.spec.tsx',
        templateFile: 'templates/component/example.spec.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{kebabCase name}}.stories.tsx',
        templateFile: 'templates/component/example.stories.tsx.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{kebabCase name}}.styles.ts',
        templateFile: 'templates/component/example.styles.ts.hbs'
      },
      {
        type: 'add',
        path: '../src/components/{{pascalCase name}}/{{kebabCase name}}.component.tsx',
        templateFile: 'templates/component/example.component.tsx.hbs'
      },
      {
        type: 'append',
        path: '../src/components/index.ts',
        pattern: `/* PLOP_INJECT_EXPORT_COMPONENT */`,
        template: `export * from './lib/components/{{pascalCase name}}'`
      }
    ]
  })
}
