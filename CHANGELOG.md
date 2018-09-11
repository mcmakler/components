## **1.0.0-rc.1 (11.09.18)**

Introduce the RC1 for version 1. This version contains breaking changes to the library import as well and removing the build process for the React components which created different folders for React and NextJS projects.

- Imports for the library should be done to `dist` folder example:
```javascript
  import { RadioButton } from 'mcmakler-components-react/dist'; 
  // or mcmakler-components-react/dist/components/RadioButton;
```
- Build script removed from React package [PR#46](https://github.com/mcmakler/components/pull/46)
- Added `PreFooterComponent` [PR#45](https://github.com/mcmakler/components/pull/45)
- Added `CHANGELOG` to repository
