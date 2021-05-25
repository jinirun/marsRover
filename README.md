# MARS ROVERS Challenge
A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a complete view of the surrounding terrain to send back to Earth. A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points.The plateau is divided up into a grid to simplify navigation.

## Aim
To compute the final co-ordinates and direction of these Mars Rovers 

## Given (Input)
The first line of input is the upper-right coordinates of the plateau, the lower-left coordinates are assumed to be 0,0.

Each rover has two lines of input.

  Rover's position and  
  a series of instructions 
  
The position is made up of two integers and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's 
orientation.
An example position might be 0, 0, N, which means the rover is in the bottom left corner and facing North.

The possible letters are 'L', 'R' and 'M'. 'L' and 'R' makes the rover 
spin 90 degrees left or right respectively, without moving from its current spot.
'M' means move forward one grid point, and maintain the same heading.
Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished 
moving.

# Instructions to run the program
Change directory to where the source code is

Type in the following commands in the command prompt 

#### npm init
#### npm install
#### npm test

