// Define our labelmap
const labelMap = {
    1:{name:'Text', color:'red'},
    2:{name:'Solid', color:'yellow'},
    3:{name:'Pattern', color:'lime'},
    4:{name:'PatternPants', color:'blue'},
    5:{name:'SolidPants', color:'pink'},
}

// Define a drawing function
export const drawRect = (boxes, classes, scores, threshold, imgWidth, imgHeight, ctx) => {
    // Clear the canvas
    ctx.clearRect(0, 0, imgWidth, imgHeight);
    for (let i = 0; i < boxes.length; i++) {
        if (boxes[i] && classes[i] && scores[i] > threshold) {
            // Extract variables
            const [y, x, height, width] = boxes[i];
            const text = classes[i];
            // Set styling
            ctx.strokeStyle = labelMap[text]['color'];
            ctx.lineWidth = 2; // Adjusted for better visibility
            ctx.fillStyle = 'white';
            ctx.font = '18px Arial'; // Adjusted for better visibility
            // DRAW!!
            ctx.beginPath();
            ctx.fillText(
                `${labelMap[text]['name']} - ${(scores[i] * 100).toFixed(2)}%`,
                x * imgWidth,
                y * imgHeight - 10
            );
            ctx.rect(
                x * imgWidth,
                y * imgHeight,
                (width - x) * imgWidth,
                (height - y) * imgHeight
            );
            ctx.stroke();
        }
    }
};



