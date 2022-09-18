// 6'26

// app

let nums = [1, 2, 3];
let mystery = [1, 2, 3];
let moreNums = nums;

//They 'look' the same, but refer to different arrays
nums === mystery; // false

//These two arrays reference the exact same array, so we get true:
nums === moreNums; //true

const user = {
    username: 'CherryGarcia8',
    email: 'garcia@gmail.com',
    notifications: ['message', 'alert']
};

//THIS WILL NOT WORK!
// Zato sto svako tipkanje [] array-litterarsa znaci novo polje u memoriji i iako lice nisu vise isti!
if (user.notifications === []) {
    console.log('NO NEW NOTIFICATIONS!');
}
// THIS VERSION DOES WORK!
if (!user.notifications.length) {
    console.log('NO NEW NOTIFICATIONS!');
}

// ista prica je i za objekte!
// {} === {}  // false
// tj isti su samo ako pointaju na istu referencu tj ako se jedan defimira preko drugog!