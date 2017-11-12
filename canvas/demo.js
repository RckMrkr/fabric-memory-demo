const Canvas = require('canvas');

function createCanvas(){
    const canvas = new Canvas(200, 200)
    const ctx = canvas.getContext('2d')
    
    global.gc();
    
    console.log(process.memoryUsage());
    setTimeout(createCanvas, 1000);
}

createCanvas();