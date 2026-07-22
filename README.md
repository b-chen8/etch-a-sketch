# Etch-a-Sketch

A browser-based sketch pad built with vanilla HTML, CSS, and JavaScript as part of [The Odin Project](https://www.theodinproject.com/) foundations course. Hover over the grid to draw, just like the toy.

## Live Demo

[(https://b-chen8.github.io/etch-a-sketch/)]

## Features

- 16x16 grid of divs, generated dynamically with JavaScript (not hardcoded in HTML)
- Grid squares laid out with Flexbox inside a container div
- Hover effect: squares change color as the mouse passes over them, leaving a pixelated trail
- "New Grid" button that prompts for a number of squares per side (up to 100) and rebuilds the grid at the same total size, so the sketch pad area never changes

### Extra Credit

- [x] Randomized RGB color per square on each interaction
- [x] Progressive darkening: each interaction darkens a square by 10%, reaching full color/black after ten passes

## How It Works

- The grid container is defined once in `index.html`.
- JavaScript creates the individual grid squares as div elements and appends them to the container, so the grid size can be changed at runtime.
- CSS Flexbox (not CSS Grid) arranges the squares into rows and wraps them into a grid.
- Event listeners on each square respond to `mouseover` to trigger the drawing effect.

## Built With

- HTML
- CSS (Flexbox)
- JavaScript (DOM manipulation, event listeners)

## Running Locally

Clone the repo and open `index.html` in your browser:

```bash
git clone git@github.com:b-chen8/etch-a-sketch.git
cd etch-a-sketch
open index.html
```

## Acknowledgments

Project brief from [The Odin Project](https://www.theodinproject.com/lessons/foundations-etch-a-sketch).
