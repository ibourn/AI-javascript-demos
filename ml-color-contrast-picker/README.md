# Machine Learning Color Contrast Picker

## Overview

The **Machine Learning Color Contrast Picker** project is designed to help users select optimal text colors (black or white) based on a given background color. The application uses a machine learning model to learn from user selections and make predictions for future color contrast scenarios.

## How It Works

1. **Color Background**: A random colored background is displayed to the user.
2. **User Selection**: The user selects either black or white as the text color based on the background color.
3. **Training Phase**: After a certain number of selections, the model is trained using the collected data.
4. **Printing the Learning Table**: Once training is complete, the user can press the "Print" button to display the learning table in the console.
5. **Copying the Learning Table**: The user copies the printed learning table into the `script.js` file, which will be used for making predictions on future color combinations.

### Learning Process

The application utilizes a simple machine learning algorithm to learn from user input. Each time the user makes a selection, the background color and corresponding text color are stored in a learning table. After a set number of interactions, the model is trained using this data to improve its predictions.

### Prediction

Once the learning table is copied into `script.js`, the application will use this data to predict the best text color (black or white) for any new background color presented in future sessions.

## Source

This project is inspired by a tutorial from [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified)
This project is inspired by the need for accessible design and the principles of machine learning. It aims to improve the user experience by providing intelligent color contrast suggestions based on data-driven insights.
