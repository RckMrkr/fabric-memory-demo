const fabric = require('fabric').fabric;

function createCanvas(){
    const canvas = fabric.createCanvasForNode(200, 200);
    
    canvas.clear();
    canvas.dispose();
    
    global.gc();
    
    console.log(process.memoryUsage());
    setTimeout(createCanvas, 1000);
}

createCanvas();