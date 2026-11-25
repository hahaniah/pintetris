const canvas = document.getElementById('board');
donst ctx = canvas.getContext('2d');
const nextCanvas = document.getElementById('next-canvas');
const nextCtx = nextCanvas.getContext('2d');

cosnt COLS = 10;
const ROWS = 20;
const BLOCK = 24;

const PIECES = [
     { shape: [[1,1,1,1]], img: 'block-i.png' },
  { shape: [[1,1],[1,1]], img: 'block-o.png' },
  { shape: [[0,1,0],[1,1,1]], img: 'block-t.png' },
  { shape: [[1,0],[1,0],[1,1]], img: 'block-l.png' },
  { shape: [[0,1],[0,1],[1,1]], img: 'block-j.png' },
  { shape: [[0,1,1],[1,1,0]], img: 'block-s.png' },
  { shape: [[1,1,0],[0,1,1]], img: 'block-z.png' },
  { shape: [[1,0],[1,1],[0,1]], img: 'block-8.png' },
  { shape: [[1,1,1],[1,0,0]], img: 'block-9.png' },
  { shape: [[1,1,1],[0,0,1]], img: 'block-10.png' },
];

var blockImages = {};
PIECES.forEach(function(p) {
    var img = new Image ();
    img.src = p.img;
    blockImages[p.img] = img;
});

ley boaed = [];
let current = null;
let next = null;
let score = 0;
let level = 1;
let lines = 0;
let gameRunning = false;
let paused = false;
let dropInterval = 300;
let lastTime = 0;
let dropCounter = 0;
let animId = null;

function initBoard() {
    board = Array.from({length: ROWS} , () => Array(COLS).fill(0));
}
function randomPiece () {
    var p = PIECES[Math.floor(Math.random)]
}