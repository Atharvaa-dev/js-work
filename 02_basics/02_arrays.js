const Marvel_heros = ["thor", "spiderman", "Ironman"]
const dc_heros = ["superman", "flash", "batman"]
const fc_player = ["messi", "nejmar", "rolando"]

// Marvel_heros.push(dc_heros);
// console.log(Marvel_heros);

// console.log(Marvel_heros);
// console.log(Marvel_heros[3][1]);


// const allHeros = Marvel_heros.concat(dc_heros)
// console.log(allHeros)


const all_new_heroes = [...Marvel_heros, ...dc_heros, ...fc_player]
// console.log(all_new_heroes);

const another_array = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]

const real_another_array = another_array.flat(Infinity)
// console.log(real_another_array)

// console.log(Array.isArray("Athrava"))
// console.log(Array.from("Athrava"))
console.log(Array.from({ name: "Atharva" }))  //imp



let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1, score2, score3))

