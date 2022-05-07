const connection = require('../config/connection');
const { User, Thought } = require('../models');
const { getNames, getRandomThoughts, getRandomReactions } = require('./data');

connection.on('error', (err) => err);

connection.once('open', async () => {
    console.log('connected');

    // Drop existing users
    await User.deleteMany({});  
    // Drop existing thoughts
    await Thought.deleteMany({});

    //get names from ./db/data
    const names = getNames();
    const users = [];

  // Loop through all names items -- add user info to the users array
    for (let i = 0; i < names.length; i++) {
        // Get some random thoughts
        const randomReactions = getRandomReactions(3);

        const userName = names[i];
        const email = `${names[i]}@email.com`

        users.push({
          userName,
          email,
        });
    }

    // Add users to the collection and await the results
    await User.collection.insertMany(users);

    await Thought.collection.insertOne({
        thoughtText: 'Default thought',
        userName: users[0].userName,
    });

    // Log out the seed data to indicate what should appear in the database
    console.table(users);
    console.info('Seeding complete.');
    process.exit(0);
});

