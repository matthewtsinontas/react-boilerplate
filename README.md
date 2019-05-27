# React boilerplate

More of a personal technical exercise, I want to architect a production ready react app from the ground up, without using create-react-app including a CI pipeline

## Checklist (WIP)

### Basic "Hello world" with CI and 100% coverage
- [x] Install react w/ webpack, ES6 + some ES7 modules
- [x] Separate dev/production webpack builds
- [x] Jest unit testing with code coverage report
- [x] CircleCI build pipeline, PR/Master builds (squash and merge?)
- [x] Auto deploy to a cloud hosting service

### Next steps
- [x] Routing
- [x] Pre commit/push hooks
- [x] PR build steps, 100% coverage required, linting required, build successful
- [x] Linting
- [x] Styled components
- [ ] Hot reloading

:point_up: - Not so sure about this one anymore, after reading into the method by which hot reloading loads the page in react applications I would worry about certain potential bugs being missed.

When you hot-reload a react component the initial lifecycle methods don't run (which makes sense) and classes won't be initialised again, this means any sort of logic that is being tested in those methods will need to manually refresh - which worries me a bit over the original auto-refresh from webpack dev... will need to think about this one.

[Further reading when I come back to it](https://webpack.js.org/guides/hot-module-replacement/)

- [ ] Clever minification steps, including image bundling, code splitting

[Further reading about webpack chunking of modules](https://webpack.js.org/guides/caching/)

- [ ] Some kind of error handling/logging service

### Component library?
- [ ] Set up component library, maybe a monorepo with lerna?
- [ ] Storybook / Styleguide
