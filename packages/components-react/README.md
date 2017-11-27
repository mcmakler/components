# McMakler Components (React)

## Usage

The package distributes _two_ folders: `nextjs` and `lib`. The `nextjs` package distributes es5 JS and CSS modules to be used in NextJS projects, we have to do this due to [this](https://github.com/zeit/next.js/issues/706) issue. The `lib` folder distributes ES6 modules with imported SCSS to be used in projects where we can run webpack loaders in the node modules.

### Example Usage

For webpack projects
```js
// ...
import { RadioButton } from 'mcmakler-components-react';
```

For NextJS projects

*main.scss*
```scss
// ...
@import "~mcmakler-components-react/nextjs/all";
```
Can also import individual components

```scss
// ...
@import "~mcmakler-components-react/nextjs/components/RadioButton/RadioButton";
```

*component.js*
```js
//...
import { RadioButton } from 'mcmakler-components-react/nextjs';
```
