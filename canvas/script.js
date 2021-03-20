// olimpic rings
const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

const radius = 75;
ctx.lineWidth = 15;

const angle = (degrees) => {
    return (Math.PI * degrees) / (180);
}

const circles = [
    // blue 
    {
        x: 100,
        y: 100,
        color: 'dodgerblue',
        start: 0,
        end: 60
    },
    // yellow
    {
        x: 180, 
        y: 180,
        color: 'gold',
        start: 261,
        end: -20
    },
    // blue
    {
        x: 100,
        y: 100,
        color: 'dodgerblue',
        start: 70,
        end: 0
    },
    // black
    {
        x: 270,
        y: 100,
        color: 'black',
        start: 110,
        end: 160
    },
    // yellow
    {
        x: 180, 
        y: 180,
        color: 'gold',
        start: -15,
        end: 271
    },
    // black
    {
        x: 270,
        y: 100,
        color: 'black',
        start: 160,
        end: 110
    },
    // green
    {
        x: 350, 
        y: 180,
        color: 'green',
        start: 260,
        end: -2
    },
    // red
    {
        x: 450, 
        y: 100,
        color: 'red',
        start: 360,
        end: 120
    },
    // green
    {
        x: 350, 
        y: 180,
        color: 'green',
        start: 10,
        end: 271
    },
    // red
    {
        x: 450, 
        y: 100,
        color: 'red',
        start: 130,
        end: 0
    }
]

const draw = (x, y, color, start, end) => {
    ctx.beginPath();
    ctx.arc(x, y, radius, angle(start), angle(end), true);
    ctx.strokeStyle = color;
    ctx.stroke();
    ctx.closePath();
}

circles.forEach( circle => draw(circle.x, circle.y, circle.color, circle.start, circle.end));

// paint
const paint = document.getElementById('paint'),
    paintCtx = paint.getContext('2d'), 
    color = document.getElementById('color'), 
    range = document.getElementById('range');

color.addEventListener('input', () => paintCtx.strokeStyle = color.value);
range.addEventListener('input', () => paintCtx.lineWidth = range.value);


paint.addEventListener('mousemove', e => {
    const x = e.offsetX,
        y = e.offsetY,
        mx = e.movementX,
        my = e.movementY;

    if (e.buttons > 0) {
        paintCtx.lineCap = "round";
        paintCtx.beginPath();
        paintCtx.moveTo(x, y);
        paintCtx.lineTo(x - mx, y - my);
        paintCtx.stroke();
        paintCtx.closePath();
    }
    
});