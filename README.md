## Intro

This is meant to be a minimal example showing that there is a memory leak during the creation of a canvas object using `fabric.js`, but not using plain `canvas`.

## Test
The examples requires `docker-compose`. Once that is installed you can simply run `npm start` in either directory, and the container will start up. In the console you should be able to see the results of `process.memoryUsage()` every second.