[![CircleCI](https://circleci.com/gh/sean0427/frontend_practice/tree/master.svg?style=svg)](https://circleci.com/gh/sean0427/frontend_practice/tree/master)
[![CircleCI](https://circleci.com/gh/sean0427/frontend_practice/tree/dev.svg?style=svg)](https://circleci.com/gh/sean0427/frontend_practice/tree/dev)

Front-End Pratice (TBD)
===
practice how to write front-end and learn how to use react (react-redux) with **unittest**.

Code Style
===
- To prevent **this** problem, use arrow function, let and const.
- ES6 Style import, export, export default.
- aways have **;**

Package
===
[Nodejs](https://nodejs.org/en/): to package manager

react
---
- [react](https://reactjs.org/)
- [prop-types](https://reactjs.org/docs/typechecking-with-proptypes.html#proptypes): react's component type check.
- [react router](https://reacttraining.com/react-router/)(react-router-dom): router control package for react.

redux
---
- [redux](https://github.com/reactjs/redux): state container.
- [react-redux](https://github.com/reactjs/react-redux): connent react to storer.
- [redux-thunk](https://github.com/gaearon/redux-thunk) : redux middleware handle.

Pageage for devoploment
===

[eslint](https://eslint.org/)
---
- static code analizy.
- configure on ./.eslintrc.json


test
---
- [jest](https://facebook.github.io/jest/)
    - jest-junit: generator jest report as junit formate.
    - jest-fetch-mock: mock fetch api for test.

- [enzyme](https://github.com/airbnb/enzyme): react test utility.
    - enzyme-adapter-react-16: for mock react16 component.

- [react-test-renderer](https://www.npmjs.com/package/react-test-renderer): renderer component for jest's snapshot.
- [redux-mock-store](https://github.com/arnaudbenard/redux-mock-store): for mock redux store.
