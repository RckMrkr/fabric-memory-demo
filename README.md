## Intro

This is meant to be a minimal example showing that there is a memory leak during the creation of a canvas object.

I have tested the equivalent directly with node-canvas and no such leak occurs.

## Test
The example requires `docker-compose`. Once that is installed you can simply run `npm start`, and the container will start up. In the console you should be able to see the results of `process.memoryUsage()` every second.