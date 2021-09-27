import { getMe, getUser, User } from './0.jobs.ts';

interface Object {
  [index: string]: any
}

function findMostCommonTitle(myId: number, degreesOfSeparation: number): string {
  
  // create queue
  let queue = createQueue(myId, degreesOfSeparation);

  // create object that contatins number of titles repetitions
  let commonTitles: Object = getTitlesRepetitionsNumber(queue);

  // find the most common title
  return findGreatestValue(commonTitles);
}

// *** not finished yet ***
// function takes userId and degree of separation
// and return an array that contains IDs of users
function createQueue(myId: number, degreesOfSeparation: number): number[] {

  let finalArray: number[] = [];
  // get user connections
  let userConnections = getUser(myId).connections;
  let queue: number[] = [];

  // iterate over user connections array
  userConnections.forEach(el => {
    queue.push(el);
    let n = degreesOfSeparation;
    while(n > 0) {
      
      // iterate over nested connections
      for(let i = 0; i <= 1; i++) {
        
        // breadth first over connections
        // remove id from queue
        let userId = queue.shift();
  
        // add id to final array
        finalArray.push(userId);
  
        // get nested connections
        let nestedConnections = getUser(userId).connections;
  
        // add nested connections to queue
        queue.concat(nestedConnections);
        
        i = i + queue.length;
      }
      
      n--;
    }
  });

  return finalArray;
}

// function takes queue of user ids
// and return an object that contains number of titles repetitions
function getTitlesRepetitionsNumber(array: number[]): object {
  let commonTitles: Object = {};

  // iterate over an array
  array.forEach(el => {
    // get user
    let user: User = getUser(el)!;

    // check user title
    if(commonTitles[user.title]) {
      commonTitles[user.title]++;
    } else {
      commonTitles[user.title] = 1;
    }
  });

  return commonTitles;
}

// function takes number of titles repetitions object
// and return the most common title
function findGreatestValue(object: Object): string {

  let mostCommonTite = '';
  let greatestValue = 0;

  // iterate over an object
  for (const key in object) {
    if(object[key] > greatestValue) {
      mostCommonTite = key;
      greatestValue = object[key];
    }
  }
  console.log(object);
  return mostCommonTite;
}

const mostCommonTite = findMostCommonTitle(1, 3);

console.log('Most common title: ', mostCommonTite);