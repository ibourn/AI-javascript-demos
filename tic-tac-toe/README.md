# Tic Tac Toe with Minimax Algorithm

## Overview

This project is a simple implementation of the classic Tic Tac Toe game, demonstrating the Minimax algorithm. The game allows a player to compete against an AI that calculates the optimal move at each turn using the Minimax strategy, ensuring a challenging experience. This project utilizes the p5.js library.

## How It Works

In this Tic Tac Toe game, players take turns placing their marks (X or O) on a 3x3 grid. The first player to align three of their marks vertically, horizontally, or diagonally wins the game. If all cells are filled without a winner, the game ends in a draw.

### Minimax Algorithm

The AI opponent uses the **Minimax algorithm** to determine its moves. The algorithm works by simulating all possible moves, evaluating the potential outcomes, and selecting the move that maximizes its chances of winning while minimizing the player's chances.

1. **Game States**: The algorithm evaluates the current state of the game board.
2. **Recursion**: It recursively explores all possible future states of the game for both players.
3. **Scoring**: Each terminal state (win, loss, draw) is assigned a score:
   - Win for AI (O): +10
   - Loss for AI (X): -10
   - Draw: 0
4. **Optimal Move**: The AI selects the move that leads to the best possible outcome based on these scores.

## Source

This is a tutorial of [The Coding Train](https://www.youtube.com/@TheCodingTrain) by Daniel Shiffman.
This project is inspired by classic game development principles and algorithms in artificial intelligence. The Minimax algorithm is widely used in two-player games to provide optimal decision-making for AI opponents
