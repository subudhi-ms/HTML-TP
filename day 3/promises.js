function validateAge(age, cb) {
  if (age < 0) {
    cb(new Error("Age cannot be negative"));
  } else {
    cb(null, age >= 18);
  }
}

function giveVote(vote, cb) {
  if (vote) {
    cb(null, "you can vote");
  } else {
    cb(new Error("You are not eligible to vote"));
  }
}

// Demonstrating Callback Hell by nesting the callbacks:
validateAge(20, (err, hasPassedAgeCheck) => {
  if (err) {
    console.error("Age Validation Error:", err.message);
  } else {
    giveVote(hasPassedAgeCheck, (err, successMessage) => {
      if (err) {
        console.error("Voting Error:", err.message);
      } else {
        console.log("Success:", successMessage);
      }
    });
  }
});





function validateAgePromise(age) {
  return new Promise((resolve, reject) => {
    if (age < 0) {
      reject(new Error("Age cannot be negative"));
    } else {
      resolve(age >= 18);
    }
  });
}

function giveVotePromise(vote) {
  return new Promise((resolve, reject) => {
    if (vote) {
      resolve("you can vote");
    } else {
      reject(new Error("You are not eligible to vote"));
    }
  });
}

// Solving Callback Hell using Promise Chaining:
validateAgePromise(20)
  .then((hasPassedAgeCheck) => {
    return giveVotePromise(hasPassedAgeCheck);
  })
  .then((successMessage) => {
    console.log("Promise Success:", successMessage);
  })
  .catch((err) => {
    console.error("Promise Error occurred:", err.message);
  });
