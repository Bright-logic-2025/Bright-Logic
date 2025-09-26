// Rainbow background colors array
const rainbowColors = [
    "linear-gradient(45deg, #dbbee2ff, #dbecf1ff)",
    "linear-gradient(45deg, #6adc9d70, #7ac1b2ff)",
    "linear-gradient(45deg, #f0fca2ff, #cb59acff)",
    "linear-gradient(45deg, #7cd09fff, #7293d0ff)",
    "linear-gradient(45deg, #e16c6cff, #d5a8b3ff)",
     "linear-gradient(45deg, #537662ff, #7bcdb7ff)",
    "linear-gradient(45deg, #947fe5ff, #6c5ce7)"
];

let colorIndex = 0;

// Function to change background every 3 seconds
function changeBackground() {
    document.body.style.background = rainbowColors[colorIndex];
    colorIndex = (colorIndex + 1) % rainbowColors.length;
}

// Start background change
setInterval(changeBackground, 3000);

// Initial call
changeBackground();

// Function to filter demo blocks
function filterBlocks() {
    let input = document.getElementById('searchInput').value.toLowerCase();
    let blocks = document.getElementById('demoBlocks').getElementsByClassName('demo-block');

    for (let i = 0; i < blocks.length; i++) {
        let title = blocks[i].getElementsByTagName('h3')[0].innerText.toLowerCase();
        blocks[i].style.display = title.includes(input) ? "" : "none";
    }
}
