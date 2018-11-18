# Friend Finder <!-- omit in toc -->
<!-- TOC -->

- [Application Overview](#application-overview)
- [Live Server](#live-server)
- [Requirements](#requirements)
- [Dependencies](#dependencies)
- [Installation](#installation)
- [Development Process](#development-process)
- [Development NOTES](#development-notes)
  - [totalDifference function](#totaldifference-function)
  - [Array Functions](#array-functions)

<!-- /TOC -->

# Application Overview

Friend Finder is a web based app which allow you to find the best Friend Match in the Application Users Database.

You will be asked 10 self defining questions, your answers will be compared with the ones provided by other app users to find the best match.


# Live Server
[https://seiji-friend-finder.herokuapp.com/](https://seiji-friend-finder.herokuapp.com/)

# Requirements

* NodeJS 8.x or higher.

# Dependencies
* [Express](https://expressjs.com/en/starter/installing.html)
* [Path](https://github.com/jinder/path)

# Installation
```console
git clone git@github.com:seiji13r/2018bootcamp11FriendFinder.git
cd 2018bootcampFriendFinder
npm -i

node server.js
```

# Development Process
1. Create Github Repository.
2. Create Project File Structure.
3. Load dependencies.
4. Create and Test the server using express.
5. Connect Github Project with Heroku.
6. Create the Basic HTML Files.
7. Create the `friendsArray`, containing all the people responses.
8. Create the html Routes module and require it into the `server.js`.
9. Create the api Routes module and require it into the `server.js`.
10. Create the **Matching Logic** into the `POST` method of `/api/friends`
    1.  Create a Function that will get totalDifference given the newUser' scores and an existing user' scores.
    2.  This function return a new object with the containing {name, index, difference}
    3.  Iterate over the original base of friends and compute the survey difference with each one.
    4.  Return a new array containing the Results.
    5.  Sort this new array to find the best match.
    6.  Return the best match.
11. Update the databse with at least 5 possible friends.
12. Complete the styling in the HTML file.


# Development NOTES

## totalDifference function

This function receives the New User Object and an existing Friend Object with its corresponding Index in the friendsArray, this way we can locate the best match in the database.

```javascript
function totalDifference(userNew, friend, friendIndex){
  // Create a New Array with the absolute score differences between the New User and the Exiting Friend.
  var diffArray = userNew.scores.map((score, index) => Math.abs(score-friend.scores[index]));
  // Sum all the elements in the diffArray to obtain the total Difference.
  var diffTotal = diffArray.reduce((a, b) => a + b, 0);
  // console.log(diffTotal)
  
  return {
   name: friend.name,
   friendIndex: friendIndex,
   diff: diffTotal,
  }
}
```

## Array Functions
* [forEach](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/forEach)
* [map](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map)
* [filter](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/filter)
* [sort](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/sort)
* [reduce](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/Reduce)