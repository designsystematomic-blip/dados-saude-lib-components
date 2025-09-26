import { NodePlopAPI } from "plop";

export default function (plop: NodePlopAPI) {
  // Composition pattern component
  plop.setGenerator("🏗️  Composition pattern component", {
    description: "Create a composition pattern component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
      {
        type: "input",
        name: "parts",
        message: "What subcomponents do you want to create? (comma separated)",
      },
    ],
    actions(answers) {
      const parts = answers?.parts
        ? answers.parts
            .split(",")
            .map((p: any) => p.trim())
            .filter(Boolean)
        : [];

      const actions: any[] = [];

      const basePath = "../lib/components/{{pascalCase name}}";

      // Create main component files
      actions.push({
        type: "add",
        path: `${basePath}/index.ts`,
        template: `console.log("Index file for {{pascalCase name}} component")`,
      });

      // Create Subcomponents
      parts.forEach((part: any) => {
        const subPath = `${basePath}/{{pascalCase part}}`;
        actions.push(
          {
            type: "add",
            path: `${subPath}/{{pascalCase part}}.tsx`,
            templateFile: "plop-templates/SubComponent/SubComponent.tsx.hbs",
            data: { part },
          },
          {
            type: "add",
            path: `${subPath}/{{pascalCase part}}.module.css`,
            templateFile:
              "plop-templates/SubComponent/SubComponent.module.css.hbs",
            data: { part },
          },
          {
            type: "add",
            path: `${subPath}/{{pascalCase part}}.types.ts`,
            templateFile: "plop-templates/SubComponent/SubComponent.types.hbs",
            data: { part },
          },
          {
            type: "add",
            path: `${subPath}/{{pascalCase part}}.stories.tsx`,
            templateFile:
              "plop-templates/SubComponent/SubComponent.stories.tsx.hbs",
            data: { part },
          },
          {
            type: "add",
            path: `${subPath}/index.ts`,
            templateFile: "plop-templates/SubComponent/index.ts.hbs",
            data: { part },
          },
          {
            type: "append",
            path: `${basePath}/index.ts`,
            pattern: /$/,
            template: `import {{pascalCase part}} from "./{{pascalCase part}}";`,
            data: { part },
          }
        );
      });

      return actions;
    },
  });

  // Common component
  plop.setGenerator("🧩 Common component", {
    description: "Create a common component",
    prompts: [
      {
        type: "input",
        name: "name",
        message: "What is your component name?",
      },
    ],
    actions() {
      const basePath = "../lib/components/{{pascalCase name}}";
      const actions: any[] = [];

      actions.push(
        {
          type: "add",
          path: `${basePath}/index.ts`,
          templateFile: "plop-templates/Component/index.ts.hbs",
        },
        {
          type: "add",
          path: `${basePath}/{{ pascalCase name}}.tsx`,
          templateFile: "plop-templates/Component/Component.tsx.hbs",
        },
        {
          type: "add",
          path: `${basePath}/{{ pascalCase name}}.module.css`,
          templateFile: "plop-templates/Component/Component.module.css.hbs",
        },
        {
          type: "add",
          path: `${basePath}/{{ pascalCase name}}.types.ts`,
          templateFile: "plop-templates/Component/Component.types.hbs",
        },
        {
          type: "add",
          path: `${basePath}/{{ pascalCase name}}.stories.tsx`,
          templateFile: "plop-templates/Component/Component.stories.tsx.hbs",
        },
        // To update automatic exports in components index file
        {
          type: "append",
          path: `../lib/components/index.ts`,
          pattern: /$/,
          template: `export { default as {{ pascalCase name}} } from "./{{ pascalCase name}}";`,
        }
        // {
        //   type: "append",
        //   path: `${basePath}/index.ts`,
        //   pattern: /$/,
        //   template: `export { default as {{ pascalCase name}} } from "./{{ pascalCase name}}";`,
        // }
      );

      return actions;
    },
  });

  // Icon component
  plop.setGenerator("🎨 Icon component", {
    description: "Create an icon component",
    prompts: [
      {
        type: "input",
        name: "name",
        message:
          "What is your icon name? (e.g., Home, User, Settings) without 'Icon' suffix",
      },
    ],
    actions() {
      const basePath = "../lib/icons/Icon{{pascalCase name}}";
      const actions: any[] = [];

      actions.push(
        {
          type: "add",
          path: `${basePath}/index.ts`,
          templateFile: "plop-templates/Icon/index.ts.hbs",
        },
        {
          type: "add",
          path: `${basePath}/Icon{{ pascalCase name}}.tsx`,
          templateFile: "plop-templates/Icon/Icon.tsx.hbs",
        },
        {
          type: "add",
          path: `${basePath}/Icon{{ pascalCase name}}.stories.tsx`,
          templateFile: "plop-templates/Icon/Icon.stories.tsx.hbs",
        },
        // To update automatic exports in components index file
        {
          type: "append",
          path: `../lib/icons/index.ts`,
          pattern: /$/,
          template: `export { default as Icon{{ pascalCase name}} } from "./Icon{{ pascalCase name}}";`,
        },
        // To handle with generic types
        {
          type: "add",
          path: `../lib/icons/Icon.types.ts`,
          templateFile: "plop-templates/Icon/Icon.types.ts.hbs",
        }
      );

      return actions;
    },
  });
}
