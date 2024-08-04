# Steering Behavior - Steering Food

## Theme

The **Steering Behavior - Steering Food** project simulates autonomous agents (such as animals or characters) navigating towards food sources in a 2D environment. This demo illustrates how agents use sensory input and neural networks to make decisions while avoiding obstacles and interacting with each other. This project utilizes the p5.js library.

## Functioning

Each agent, or vehicle, is equipped with several **sensors** that provide information about their environment. These sensors detect:

- **Proximity to obstacles**: Measures the distance between the agent and surrounding obstacles.
- **Position of food**: Identifies the direction and distance to the nearest food source.
- **Neighboring agents**: Evaluates the position and distance of other agents to facilitate cohesion or separation behaviors.

### Agent Brain

Each agent has a **brain**, which is a neural network. This brain can be:

- **New**: Created from scratch for a newly introduced agent.
- **Inherited**: Transferred from a previous agent that performed well, allowing the agent to learn effective behaviors.

This neural network can also **mutate** over generations, introducing variations in agent behaviors, allowing exploration of new strategies for avoidance and food seeking.

### Navigation Behaviors

Agents utilize several navigation behaviors:

1. **Seek**: Agents head towards food by calculating a steering force based on their brain's predictions.
2. **Avoidance**: Agents avoid obstacles by applying a force that steers them away from potential collisions.
3. **Flocking (optional)**: If multiple agents are present, they can exhibit group behaviors by maintaining cohesion, separation, and alignment with other agents.

### Debug Mode

A **debug mode** is included to track the evolution of agents and observe their behavior in real-time.

## Source

This is a tutorial of [The Coding Train](https://www.youtube.com/@TheCodingTrain) by Daniel Shiffman.
This project is inspired by classic steering behaviors in artificial intelligence and graphics. It illustrates how principles of reinforcement learning and neural networks can be applied to simulate complex behaviors in a dynamic environment.
