// const lines = 5;
// let result = '';
//
// for (let i = 0; i <= lines; i++) {
//     if (i=lines.length) {
//     result=result+'**'
//     console.log(result)
//     } else {
//         result=result+'**'+'\n'
//     }
// }

// const lines = 5;
// let result = '';
//
// for (let i = 0; i <= lines; i++) {
//     for (let j = 0; j < lines - i; j++) {
//         result += " ";
//     }
//     for (let j = 0; j < 2 * i + 1; j++) {
//         result += "*";
//     }
//     result += "\n";
// }
//
// console.log(result)

function calculateVolumeAndArea(length) {
    const volume = length*length*length;
    const area = 6*length*length;
    if (typeof(length) !== 'number' || length < 0 || !Number.isInteger(length)) {
        console.log('Error! Not a number!')
    } else {
    console.log(`Volume of cube:${volume},` + ` Area of cube: ${area}`)
    }
}
calculateVolumeAndArea('dev');