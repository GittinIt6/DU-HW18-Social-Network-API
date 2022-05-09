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

//--FUTURE USE--//
// const thoughts = [
//     "Why is the sky blue?",
//     "Tokoyo has many O's",
//     "Johnsonville is a long name",
//     "Tuesdays are better than Mondays",
//     "2nd place is the first loser",
//     "If grass seed comes from grass, why do we reseed lawns?",
//     "Lorm ipsum does not rhym",
//     "Rhym rhyms with crime but not crimes",
//     "For Unyouthful Carnal Knowledge",
//     "Arrays are fun",
//     "Is this a thought or a question?",
// ];

//--FUTURE USE--//
// const reactions = [
//     "Cool",
//     "Neat",
//     "Blah",
//     "Nice",
//     "Awesome",
//     "Crap",
// ];

//--FUTURE USE--//
// const getRandomArrItem = (arr) => arr[Math.floor(Math.random() * arr.length)];

//--FUTURE USE--//
//get random thoughts with input of number of thoughts to return (for future use)
// const getRandomThoughts = (int) => {
//     const results = [];
//     for (let i = 0; i < int; i++) {
//       results.push({
//         thought: getRandomArrItem(thoughts),
//       });
//     }
//     return results;
// };

//--FUTURE USE--//
//get random reactions with input of number of reactions to return (for future use)
// const getRandomReactions = (int) => {
//     const results = [];
//     for (let i = 0; i < int; i++) {
//       results.push({
//         reaction: getRandomArrItem(reactions),
//       });
//     }
//     return results;
// };

//return full names array
const getNames = () => {
    return names;
};

module.exports = { getNames };