# McMakler living Design System

----
## Getting started
This is a monorepo and managed with [lerna](https://github.com/lerna/lerna).
Clone the repository

```
git clone https://github.com/mcmakler/components.git
cd components
```

Setup the dependencies
```
yarn
yarn bootstrap
```
This will run install node modules in all included packages and link them together.

## Run the Storybook based demo of the components
The package react-components contains [Storybook](https://github.com/storybooks/storybook) as a demo.

```
cd packages/react-components
npm run serve
```

## How to create new reusable components
All styling shall be independently usable from the react components themselves. To enable independent usage in static projects that are not able to use react. All styles of a component go to design-guide while the reusable react component shall life in the react-components package.
