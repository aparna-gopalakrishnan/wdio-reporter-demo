# wdio-reporter-demo
A simple test project to demo different reporting options in Webdriverio

This project uses a mocha-webdriverio project with one spec file to login to OpenCart application

## To use this project, 
1. clone or download the project and do `npm install` from the root of the project
2. Run `npm run wdio` from terminal to get the test running
3. By default, this project uses [LAMDATEST](https://www.lambdatest.com/) to run tests. Default services such as chromedriver can also be used. In that case, comment out the `lamdaTest` service and use `chromeservice`
from `services` in wdio.config


