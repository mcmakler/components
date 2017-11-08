# mcm-design-components

This project is mcmakler react component library.
Component can be created in src/components with support for scss and then exported from src/index.
Each component should have its own style.

This also uses storybook to describe components and immediately test them, to start the app

    npm run serve

which will start the storybook(https://storybook.js.org/) in live serve mode

To make the application ready for npm publish use,

    npm run build

which generates es6/es5 module ready to be imported anywhere

NOTE: Places where this component is used should support necessary loaders(SCSS etc).

