![alt vue-electron-app](src/assets/print-app-dev.png "Vue electron app")

## About
This is a simple example of how to make an electron app using vuejs

## Usage
1. First run the development server with ```npm run serve```

2. After the server us up run ```npm run electron```, this will open an electron window loading the url localhost:8080 that is the server default port.

> The app open a localhost port in development mode, so remember to have a server runing before start the electron.

## Project setup
```
npm install
```

### Run vue serve
```
npm run serve
```
### Run electron
```
npm run electron
```

### Compiles and minifies for production
```
npm run build
```
### Run electron in production mode with build files
```
NODE_ENV=production npm run electron
```
