const names = [
    'Liam',
    'Olivia',
    'Noah',
    'Oliver',
    'Elijah',
    'James',
    'William',
    'Benjamin',
    'Lucas',
    'Henry',
    'Theodore',
    'Emma',
    'Charlotte',
    'Amelia',
    'Ava',
    'Sophia',
    'Isabella',
    'Mia',
    'Evelyn',
    'Harper',
];

const thoughts = [
    "Why is the sky blue?",
    "Tokoyo has many O's",
    "Johnsonville is a long name",
    "Tuesdays are better than Mondays",
    "2nd place is the first loser",
    "If grass seed comes from grass, why do we reseed lawns?",
    "Lorm ipsum does not rhym",
    "Rhym rhyms with crime but not crimes",
    "For Unyouthful Carnal Knowledge",
    "Arrays are fun",
    "Is this a thought or a question?",
];

const reactions = [
    "Cool",
    "Neat",
    "Blah",
    "Nice",
    "Awesome",
    "Crap",
];

const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

//get random thoughts with input of number of thoughts to return
const getRandomThoughts = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        thought: getRandomArrItem(thoughts),
      });
    }
    return results;
};

//get random reactions with input of number of reactions to return
const getRandomReactions = (int) => {
    const results = [];
    for (let i = 0; i < int; i++) {
      results.push({
        reaction: getRandomArrItem(reactions),
      });
    }
    return results;
};

//return full names array
const getNames = () => {
    return names;
};


module.exports = { getNames, getRandomThoughts, getRandomReactions };