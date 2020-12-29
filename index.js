const fs = require('fs');
const {execSync} = require('child_process');
const colors = require('colors');

let commands;
try {
    const config = JSON.parse(fs.readFileSync('./config.json'))[0]
    commands = config.comandi;
    process.chdir(config.path)
} catch (error) {
    console.error('Il file config.json non è stato impostato correttamente, leggi il Readme!');
    process.exit(-1);
}

commands.forEach(command => {
    console.log(`Executing => ${command}`.yellow)
    console.log(execSync(command).toString());
})

