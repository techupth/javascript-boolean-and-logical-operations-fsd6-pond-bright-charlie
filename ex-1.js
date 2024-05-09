let isOver18 = true;
let hasCriminalBlacklist = true;
isOver18 = 18;
hasCriminalBlacklist = false;

let isAllow = (isOver18 && !hasCriminalBlacklist);


console.log(isAllow);
