# Positioning Mars Rovers
A squad of robotic rovers are to be landed by NASA on a plateau on Mars. This plateau, which is curiously rectangular, must be navigated by the rovers so that their on board cameras can get a complete view of the surrounding terrain to send back to Earth. A rover's position is represented by a combination of an x and y co-ordinates and a letter representing one of the four cardinal compass points.The plateau is divided up into a grid to simplify navigation.

## Aim
To compute the final co-ordinates and direction of these Mars Rovers

## Given (Input)
* The Plateau co-ordinates Ex: 5 5
* Rover's position Ex: 0 0 N
* A series of instructions Ex: RMMLMMLM

## Further Information
* The lower left co-ordinates of the plateau are 0,0
* The position of the rover are two integers, and a letter separated by spaces, corresponding to the x and y co-ordinates and the rover's
orientation
* The possible letters for instructions are 'L', 'R' and 'M'
* 'L' and 'R' makes the rover spin 90 degrees left or right respectively, without moving from its current spot
* 'M' means move forward one grid point, and maintain the same heading
* Each rover will be finished sequentially, which means that the second rover won't start to move until the first one has finished
moving
## Assumptions
* Number of Rovers on the current plateau is 2
* There might be a possibility of collision, which is being assessed when we receive the instructions

## Tech Stack
I chose Java Script as it has been a new learning for me through Tech Returners

<table>
 <tr>
  <td>
   <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSvNot6mDntxX5pZj1frNrpbVtkNx2S1zyXHg&usqp=CAU"/>
  </td>
  <td>
   <img src="https://user-images.githubusercontent.com/67764332/119673449-437ff180-be33-11eb-98b3-887632450141.png"/>
  </td>
 </tr>
</table>



## My approach
* I have used TDD approach to complete this project
* I find TDD very interesting and helpful as it gives a starting point for development and further progression with the logic
* I have divided the project into functions and have unit tests for each of them
* Each function caters to a particular functionality of the project

## Challenges faced
* Decide on a data structure to be used to represent a Rover
  * I decided to go with JSON objects as they could encompass the plateau, co-ordinates and the direction
* A way to deal with more than 2 rovers
  * This is a feature which could be included to improvise the current project
* What is the best way to avoid a collision between rovers -
  * I initially thought of avoiding collision when a rover encountered another rover when actually moving. But had difficulty reaching the final destination after skipping a move
  * So, I decided to check for possible collision initially and wait for a new set of instructions instead of going ahead and losing both rovers

## Screenshot of test data

![MarsRover_TestData](https://user-images.githubusercontent.com/67764332/119681692-3286ae80-be3a-11eb-9c89-4a4d1a7447c3.jpg)
Key:
I- Instructions; N- North; S- South; E- East; W- West;
L- Left; R- Right; M- Move

## Instructions to run the project

Please follow the steps below on your terminal-

```bash
git clone https://github.com/jinirun/marsRover.git
```

Type in the following commands after changing the directory

```bash
npm init
npm install
npm test
```
## My learnings and Conclusion
I thoroughly enjoyed working on this challenge. It made me think of various scenarios to be considered while building a logic
Following are my learnings -
* Used JSON objects and used deep copy method to compare them
* Used Regular expressions in Java Script
* Enhanced my TDD writing skills

Thank you for stopping by and reading through my project

## License
[MIT](https://choosealicense.com/licenses/mit/)

