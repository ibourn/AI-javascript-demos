# Mood Detection

## Overview

The **Mood Detection** project utilizes computer vision and machine learning to analyze facial expressions in real-time. By leveraging the capabilities of **face-api.js** and the **HTML5 Canvas**, the application detects faces in the camera feed, draws contours and representative meshes, and predicts the user's mood based on their facial expressions.

## Technologies Used

- **face-api.js**: A JavaScript library for face detection and recognition that runs in the browser.
- **HTML5 Canvas**: Used to draw the detected face contours and facial landmarks.
- **WebRTC**: Enables real-time video streaming from the user's webcam.

## How It Works

1. **Camera Access**: The application accesses the user's webcam to capture real-time video.
2. **Face Detection**: Using face-api.js, the application detects faces in the video feed.
3. **Facial Landmarking**: The application draws contours around detected faces and identifies key facial landmarks (meshes).
4. **Mood Prediction**: The application analyzes the facial expressions to predict the user's mood (e.g., happy, sad, surprised, etc.).
5. **Display Results**: The predicted mood is displayed on the screen along with the video feed and drawn face contours.

### Mood Prediction Process

- The facial landmarks are analyzed using a pre-trained model to classify the mood based on common emotional expressions.
- The application uses a mapping of facial features to moods, helping to enhance the accuracy of predictions.

## Source

It's a tutorial from [Web Dev Simplified](https://www.youtube.com/@WebDevSimplified).
This project is inspired by the intersection of technology and psychology, aiming to create tools that can understand human emotions through facial expressions. The use of machine learning and computer vision opens up new possibilities for user interaction and emotional analysis.
