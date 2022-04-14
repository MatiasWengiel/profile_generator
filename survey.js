const readline = require('readline');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

let responseObject = {
  name: "",
  activity: "",
  music: "",
  favMeal: "",
  favFood:"",
  favSport: "",
  superpower: ""
};

rl.question("What's your name? Nicknames are always welcome:", (answerName) => {
  responseObject.name = answerName;

  rl.question("What's an activity you like doing?", (answerActivity) => {
    responseObject.activity = answerActivity;

    rl.question(`What do you like ot listen while doing ${responseObject.activity}?`, (answerMusic) =>{
      responseObject.music = answerMusic;

      rl.question('Which meal is your favourite? (e.g. dinner, brunch, etc)', (favMealAnswer) => {
        responseObject.favMeal = favMealAnswer;

        rl.question(`What is your favourite thing to eat for ${responseObject.favMeal} ?`, (favFoodAnswer) => {
          responseObject.favFood = favFoodAnswer;

          rl.question(`What is your favourite sport?`, (favSportAnswer) => {
            responseObject.favSport = favSportAnswer;

            rl.question(`What is your superpower?`, (superpowerAnswer) => {
              responseObject.superpower = superpowerAnswer;

              rl.question(`Thank you for your answers! Click any key to see your super awesome automatically generated profile`, () => {
                console.log(`${responseObject.name} loves listening to ${responseObject.music} while ${responseObject.activity}, devouring ${responseObject.favFood} for ${responseObject.favMeal}, prefers ${responseObject.favSport} over any over sport and is amazing at ${responseObject.superpower}`);

                rl.close();
              });
            });
          });
        });
      });
    });
  });


});

