# Friendly_Visitors-fxhash-hackathon2023

I initiated the development of the project using the boilerplate provided by fx(hash) on GitHub and the local development environment fx(lens), relying on the file structure suggested by the fx(hash) team. Here is a brief description. 

Here's a breakdown of the key components and functionalities found in the shared.js file: 

- Color Palette and Center Color: The colors array contains nine different color values, while the centerColor variable is assigned a random color from the colors array. This color will be used for the central element of the artwork. 

- Shadow and Line Settings: The variable Blur represents the shadow blur applied to the canvas, and the canvas context's shadow blur is set to the Blur value, creating a shadow effect around elements. The line width for drawing is determined by the size parameter divided by 388. 

- Looping for Drawing Lines: Two loops are used to draw lines. The outer loop executes twice, and the inner loop iterates from 0 to 359 degrees. The angle is calculated based on the iteration, and trigonometric functions are used to determine line endpoints. 

- Drawing Center Elements: Circles are drawn at the center of the main element using the centerColor for filling. The alpha value adds transparency to the circles above the eyes, creating an interesting visual effect. 

- Particle Drawing Functions: Three functions, drawParticles1, drawParticles2, and drawParticles3, are defined to draw particles on the canvas. These functions use random angles, distances, and noise to position particles, small dots, and lines across the canvas. Particle sizes and positions differ between the functions, creating varied particle effects. 

- Particle Drawing Calls: drawParticles1 and drawParticles2 are called using different center X positions (centerX1). drawParticles3 is called twice with different center X positions (centerX1 and centerX2) and the same center Y position. 

- Functions for Harmonic Color Variation: Three functions, f1, f2, and f3, apply harmonic color variations by adding random offsets to sine wave calculations based on the input x. 

- Overall Function Execution: The entire drawing logic is wrapped within the drawLines function, which takes four parameters. This function is called from other parts of the project to create the generative art. 

In summary, the shared.js file contains the foundational code for drawing the core elements. It leverages dynamic parameters, trigonometry, and randomness. 

Now let's analyze the minting.js file in detail. This script is responsible for rendering and interacting with the generative artwork on the canvas. Here's a breakdown of its main components and functionalities: 

- Importing Shared Functionality: The drawLines function from the shared.js file is imported. This function is used to draw the generative elements on the canvas. 

- Minting Function: The minting function serves as the main entry point for rendering the artwork. The canvas element and its context are obtained, and the canvas size is set to 900x900 pixels, with the context scaled accordingly. 

- Division Options: An array named divisionOptions holds different division values for the grid. A random value from this array is assigned to the division variable, determining the number of divisions/elements in the grid. 

- Drawing Squares: This function calculates the position and size of each square in the grid and draws the generative elements using the drawLines function. 

- Mouse Interaction: Mouse interaction is handled through event listeners. The refreshPosition function normalizes mouse coordinates and emits an event with updated parameters. The canvas listens for mouse events to update the cursor position and trigger the refreshPosition function. 

- Drawing Function: The draw function is responsible for redrawing the canvas based on parameter changes. It resets the random number generator and retrieves parameter values like x, y, size, and particles. The divisions variable is randomly assigned a new value from the divisionOptions array. A loop iterates through the grid squares, drawing generative elements using the drawSquare and drawPointer functions. 

- Key Event Handling: The script listens for the "F" or "f" key press to trigger exporting the canvas as a PNG image.
In summary, minting.js is the engine that drives the rendering, interaction, and export functionalities of the generative artwork. It dynamically adjusts parameters based on user inputs and leverages the ‘drawLines’ function from shared.js to create patterns and designs on the canvas. 

This script empowers the users to explore a world of creative possibilities through real-time easy interaction.

The Fx(hash) Hackathon 2023 provided the perfect opportunity to create and present this project, and I am excited to see how it resonates with others. 









