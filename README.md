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
npm install --global lerna
lerna bootstrap
```
This will run npm install on all included packages and symlink them with each other. So all local changes you do in one package are available in the other one.

## Run the Storybook based demo of the components
The package react-components contains [Storybook](https://github.com/storybooks/storybook) as a demo.

```
cd packages/react-components
npm run serve
```

## How to create new reusable components
All styling shall be independently usable from the react components themselves. To enable independent usage in static projects that are not able to use react. All styles of a component go to design-guide while the reusable react component shall life in the react-components package.
