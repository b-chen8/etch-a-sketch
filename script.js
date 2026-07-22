const container = document.getElementById('container');
for(let i = 0; i < 16; i++) {
    for(let j = 0; j < 16; j++) {
        const newDiv = document.createElement('div');
        newDiv.classList.add("box");
        newDiv.addEventListener('mouseenter', () => {
            newDiv.style.backgroundColor = `rgb(${Math.floor(Math.random()* 256)}, ${Math.floor(Math.random()* 256)}, ${Math.floor(Math.random()* 256)})`;
            newDiv.style.opacity = 0.10;
        }, { once: true });
        newDiv.addEventListener('mouseenter', () => {
            if(newDiv.style.opacity != 1) {
                newDiv.style.opacity = parseFloat(newDiv.style.opacity || 1) + 0.1;
            }
        });
        container.appendChild(newDiv);
    }
}
const button = document.querySelector('.modify');
button.addEventListener("click", () => {
    const newSize = prompt("Enter the number of boxes on each side:");
    if(newSize > 100 || newSize <= 0) {
        alert("Invalid number; Please enter a number between 1 and 100");
        return;
    }
    const allBoxes = document.querySelectorAll(".box");
    allBoxes.forEach(item => {
        item.remove();
    })
    const newDimen = 800 / newSize;
    for(let i = 0; i < newSize; i++) {
        for(let j = 0; j < newSize; j++) {
            const newDiv = document.createElement('div');
            newDiv.classList.add("box");
            newDiv.style.height = `${newDimen}px`;
            newDiv.style.width = `${newDimen}px`;
            newDiv.style.borderWidth = `${Math.max(newDimen / 48, 0.5)}px`;
            newDiv.addEventListener('mouseenter', () => {
                newDiv.style.backgroundColor = `rgb(${Math.floor(Math.random()* 256)}, ${Math.floor(Math.random()* 256)}, ${Math.floor(Math.random()* 256)})`;
                newDiv.style.opacity = 0.10;
            },{ once: true });
            newDiv.addEventListener('mouseenter', () => {
                if(newDiv.style.opacity != 1) {
                    newDiv.style.opacity = parseFloat(newDiv.style.opacity || 1) + 0.1;
                }
            });
            container.appendChild(newDiv)
        }
    }
});