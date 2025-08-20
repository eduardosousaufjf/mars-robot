import executeSingleRobot from "./src/utilities/executeSingleRobot";
import generateMap from "./src/utilities/generateMap";
import {readFileSync} from 'fs'

try {
    const data: Array<string> = readFileSync('./input.txt', 'utf8').split('\n');

    //Reading data from input
    const [rightLimit, upperLimit]: Array<number> = data.shift().split(' ').map(val => parseInt(val))
    const map = generateMap(upperLimit, rightLimit)

    while (data.length > 2) {
        const initialPosition: Array<string> = data.shift().split(' ')
        const commands: Array<string> = data.shift().split('')
        //Line space
        void data.shift()
        executeSingleRobot(map, initialPosition, commands)
        const database = connect({user: 'root', password: '123456'})
        console.log(database);
    }
} catch (e) {
    console.log('Error:', e);
}
