import inquirer from "inquirer";
import chalk from "chalk";
console.log(chalk.yellowBright("WELCOME TO THE CHEMISTRY QUIZ"));
console.log(chalk.red(">>>>>>>>>>>>>>>>>>>>>>>>>>>>>"));
const answer1 = await inquirer.prompt([
    {
        message: "The step polymerisation takes place by __________",
        type: "list",
        name: "mcqs1",
        choices: ["a) Addition reaction", "b) Condensation reaction", "c) Co-ordination polymerisation", "d) Anionic polymerisation"],
    },
]);
console.log(answer1);
//condition
if (answer1.mcqs1 === "b) Condensation reaction") {
    console.log(chalk.greenBright("yes!you are right."));
}
else {
    console.log(chalk.red("you are wrong"));
}
const answer2 = await inquirer.prompt([
    {
        message: "What is the mass and charge of an electron?",
        type: "list",
        name: "mcqs2",
        choices: ["a)Mass = Almost zero;Charge = negative",
            "b)Mass = 1;Charge = negative",
            "c)Mass = 1; Charge = positive",
            "d)Mass = 1;Charge = neutrala"]
    },
]);
console.log(answer2);
if (answer2.mcqs2 === "a)Mass = Almost zero;Charge = negative") {
    console.log(chalk.greenBright, "yes!you are right.Electrons are negative sub-atomic particles. They are found in the shells around the nucleus and have almost zero mass.");
}
else {
    console.log(chalk.redBright("you are wrong"));
}
const answer3 = await inquirer.prompt([
    {
        message: "What is the name of the force between oppositely charged ions in an ionic lattice?",
        type: "list",
        name: "mcqs3",
        choices: [
            'a)Electromagnetic force',
            'b)Intermolecular force',
            'c)Reaction force',
            'd)Electrostatic force'
        ]
    },
]);
console.log(answer3);
if (answer3.mcqs3 === "d)Electrostatic force") {
    console.log(chalk.greenBright("yes!you are right.Electrostatic forces are attractive forces that occur between oppositely charged particles, such as the positive and negative ions in an ionic lattice."));
}
else {
    console.log(chalk.redBright, "you are wrong");
}
