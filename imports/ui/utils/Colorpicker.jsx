const colorArray = [
    "rgba(221, 255, 220, 1)",
    "rgba(212, 255, 247, 1)",
    "rgba(255, 242, 208, 1)",
    "rgba(207, 218, 255, 1)"
    
  ];

function getcolorByIndex(index) {
    const colorIndex = index % colorArray.length;
    return colorArray[colorIndex];
}

console.log(getcolorByIndex(0));
console.log(getcolorByIndex(1));
console.log(getcolorByIndex(4));
