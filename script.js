// Rainbow background colors array
const rainbowColors = [
    "linear-gradient(45deg, #cb3ce7ff, #55c1dcff)",
    "linear-gradient(45deg, #3498db, #1abc9c)",
    "linear-gradient(45deg, #9b59b6, #cb59acff)",
    "linear-gradient(45deg, #2ecc71, #7293d0ff)",
    "linear-gradient(45deg, #e84393, #6c5ce7)",
     "linear-gradient(45deg, #519f72ff, #8b33baff)",
    "linear-gradient(45deg, #e84393, #6c5ce7)"
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