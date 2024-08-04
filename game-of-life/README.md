# Game of Life

## Theme

The **Game of Life** is a mathematical simulation that explores the dynamics of complex systems. This project utilizes the p5.js library to visualize the behavior of cells on a grid.

## Functioning

The Game of Life, created by mathematician John Conway, is a cellular automaton where each cell in the grid can be either alive or dead. The state of each cell changes with each iteration according to a set of simple rules:

1. **Overpopulation**: A living cell with more than three living neighbors dies.
2. **Underpopulation**: A living cell with fewer than two living neighbors dies.
3. **Birth**: A dead cell with exactly three living neighbors becomes alive.
4. **Stability**: A living cell with two or three living neighbors remains alive.

The simulation continues indefinitely, and patterns can evolve unpredictably, creating dynamic structures.

## Source

This project is inspired by [The Coding Train](https://www.youtube.com/@TheCodingTrain) by Daniel Shiffman, which provides an excellent tutorial on creating the Game of Life using p5.js.
