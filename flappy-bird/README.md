# Flappy Bird AI

## Theme

The **Flappy Bird AI** project is a simulation of the popular Flappy Bird game where artificial agents (the birds) learn to navigate through pipes using a neural network. The agents improve their performance over time by learning from their experiences. This project utilizes the p5.js library.

## Functioning

In this project, each bird is controlled by a neural network that determines whether to flap or not based on its current state (position, velocity, distance to pipes, etc.). The training process involves the following key components:

1. **Neural Network**: Each agent utilizes a neural network that takes inputs from the game state and outputs a flap decision.
2. **Reinforcement Learning**: Agents receive rewards for successfully navigating through pipes and penalties for collisions. This feedback helps the neural network learn optimal behaviors.
3. **Evolutionary Strategy**: When a game session ends, the best-performing agents are selected to create the next generation. This allows the simulation to evolve over time, with successful traits being passed on to new agents.

The goal is to maximize the average score of the agents, allowing them to learn and adapt through repeated play.

## Source

This is a tutorial of [The Coding Train](https://www.youtube.com/@TheCodingTrain) by Daniel Shiffman.
This project is inspired by the original Flappy Bird game and various machine learning techniques, including neural networks and reinforcement learning. The concept of evolving agents through an evolutionary strategy is based on principles from artificial intelligence research.
