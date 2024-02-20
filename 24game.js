// const arr = [1, 2, 3, 4]

// for (let i = -1; i < arr.length; i++) {

//   const newArr = arr.filter((ar, index) => {
//     return index !== i
//   })

//   for (let i = 0; i < newArr.length; i++) {
//     for (let j = 1; j < newArr.length; j++) {
//       console.log(`${newArr[i]}+${newArr[j]}`)
//     }
//   }

//   // console.log(newArr)
// }

// const arr = [6, 4, 3, 2]
// const add = []
// const subtract = []
// const multiply = []
// const divide = []

// for (let i = 0; i < arr.length; i++) {
//   for (let j = 0; j < arr.length; j++) {
//     if (i !== j) {
//       // console.log(`${arr[i]} + ${arr[j]}`);
//       // add[cal] = `${arr[i]} + ${arr[j]}`
//       // add[sum] = arr[i] + arr[j]
//       add.push({
//         formula: `${arr[i]} + ${arr[j]}`,
//         result: arr[i] + arr[j],
//       })
//       subtract.push({
//         formula: `${arr[i]} - ${arr[j]}`,
//         result: arr[i] - arr[j],
//       })
//       multiply.push({
//         formula: `${arr[i]} * ${arr[j]}`,
//         result: arr[i] * arr[j],
//       })
//       divide.push({
//         formula: `${arr[i]} / ${arr[j]}`,
//         result: arr[i] / arr[j],
//       })
//     }
//   }
// }
// // console.log(add)
// // console.log(subtract)

// for (let i = 0; i < add.length; i++) {
//   for (let j = 0; j < subtract.length; j++) {
//     for (let k = 0; k < multiply.length; k++) {
//       for (let l = 0; l < divide.length; l++) {
//         if (
//           add[i].result +
//             subtract[j].result +
//             multiply[k].result * divide[l].result ===
//           24
//         ) {
//           console.log(
//             `${add[i].formula}+${subtract[j].formula}+${multiply[k].formula}*${
//               divide[l].formula
//             } = ${
//               add[i].result +
//               subtract[j].result +
//               multiply[k].result * divide[l].result
//             }`
//           )
//         }
//       }
//     }
//   }
// }

// const arr = [6, 6, 5, 9]
const arr = [6, 4, 3, 2]
const permutations = [
  [arr[0], arr[1], arr[2], arr[3]],
  //   [arr[0], arr[1], arr[3], arr[2]],
  [arr[0], arr[2], arr[1], arr[3]],
  //   [arr[0], arr[2], arr[3], arr[1]],
  [arr[0], arr[3], arr[1], arr[2]],
  //   [arr[0], arr[3], arr[2], arr[1]],

  //   [arr[1], arr[0], arr[2], arr[3]],
  //   [arr[1], arr[0], arr[3], arr[2]],
  //   [arr[1], arr[2], arr[0], arr[3]],
  //   [arr[1], arr[2], arr[3], arr[0]],
  //   [arr[1], arr[3], arr[0], arr[2]],
  //   [arr[1], arr[3], arr[2], arr[0]],

  //   [arr[2], arr[0], arr[1], arr[3]],
  //   [arr[2], arr[0], arr[3], arr[1]],
  //   [arr[2], arr[1], arr[0], arr[3]],
  //   [arr[2], arr[1], arr[3], arr[0]],
  //   [arr[2], arr[3], arr[0], arr[1]],
  //   [arr[2], arr[3], arr[1], arr[0]],

  //   [arr[3], arr[0], arr[1], arr[2]],
  //   [arr[3], arr[0], arr[2], arr[1]],
  //   [arr[3], arr[1], arr[0], arr[2]],
  //   [arr[3], arr[1], arr[2], arr[0]],
  //   [arr[3], arr[2], arr[0], arr[1]],
  //   [arr[3], arr[2], arr[1], arr[0]],
]

for (const perm of permutations) {
  //   console.log(perm)

  const expressions = [
    //0123
    `${perm[0]} + ${perm[1]} + ${perm[2]} + ${perm[3]}`,
    `${perm[0]} + ${perm[1]} + ${perm[2]} - ${perm[3]}`,
    `${perm[0]} + ${perm[1]} - ${perm[2]} - ${perm[3]}`,
    `${perm[0]} + ${perm[1]} + ${perm[2]} * ${perm[3]}`,
    `${perm[0]} + ${perm[1]} * ${perm[2]} * ${perm[3]}`,
    `${perm[0]} + ${perm[1]} + ${perm[2]} / ${perm[3]}`,
    `${perm[0]} + ${perm[1]} / ${perm[2]} / ${perm[3]}`,

    `${perm[0]} + ${perm[1]} - ${perm[2]} + ${perm[3]}`,
    `${perm[0]} + ${perm[1]} * ${perm[2]} + ${perm[3]}`,
    `${perm[0]} + ${perm[1]} / ${perm[2]} + ${perm[3]}`,

    `${perm[0]} - ${perm[1]} - ${perm[2]} - ${perm[3]}`,
    `${perm[0]} - ${perm[1]} - ${perm[2]} + ${perm[3]}`,
    `${perm[0]} - ${perm[1]} + ${perm[2]} + ${perm[3]}`,
    `${perm[0]} - ${perm[1]} - ${perm[2]} * ${perm[3]}`,
    `${perm[0]} - ${perm[1]} * ${perm[2]} * ${perm[3]}`,
    `${perm[0]} - ${perm[1]} - ${perm[2]} / ${perm[3]}`,
    `${perm[0]} - ${perm[1]} / ${perm[2]} / ${perm[3]}`,

    `${perm[0]} - ${perm[1]} + ${perm[2]} - ${perm[3]}`,
    `${perm[0]} - ${perm[1]} * ${perm[2]} - ${perm[3]}`,
    `${perm[0]} - ${perm[1]} / ${perm[2]} - ${perm[3]}`,

    `${perm[0]} * ${perm[1]} * ${perm[2]} * ${perm[3]}`,
    `${perm[0]} * ${perm[1]} * ${perm[2]} + ${perm[3]}`,
    `${perm[0]} * ${perm[1]} + ${perm[2]} + ${perm[3]}`,
    `(${perm[0]} * ${perm[1]}) * (${perm[2]} - ${perm[3]})`,
    `${perm[0]} * ${perm[1]} - ${perm[2]} - ${perm[3]}`,
    `${perm[0]} * ${perm[1]} * ${perm[2]} / ${perm[3]}`,
    `${perm[0]} * ${perm[1]} / ${perm[2]} / ${perm[3]}`,

    `${perm[0]} * ${perm[1]} + ${perm[2]} * ${perm[3]}`,
    `${perm[0]} * ${perm[1]} - ${perm[2]} * ${perm[3]}`,
    `${perm[0]} * ${perm[1]} / ${perm[2]} * ${perm[3]}`,

    `${perm[0]} / ${perm[1]} / ${perm[2]} / ${perm[3]}`,
    `${perm[0]} / ${perm[1]} / ${perm[2]} + ${perm[3]}`,
    `${perm[0]} / ${perm[1]} + ${perm[2]} + ${perm[3]}`,
    `${perm[0]} / ${perm[1]} / ${perm[2]} - ${perm[3]}`,
    `${perm[0]} / ${perm[1]} - ${perm[2]} - ${perm[3]}`,
    `${perm[0]} / ${perm[1]} / ${perm[2]} * ${perm[3]}`,
    `${perm[0]} / ${perm[1]} * ${perm[2]} * ${perm[3]}`,

    `${perm[0]} / ${perm[1]} + ${perm[2]} / ${perm[3]}`,
    `${perm[0]} / ${perm[1]} - ${perm[2]} / ${perm[3]}`,
    `${perm[0]} / ${perm[1]} * ${perm[2]} / ${perm[3]}`,

    // //0132
    // `${perm[0]} + ${perm[1]} + ${perm[3]} + ${perm[2]}`,
    // `${perm[0]} + ${perm[1]} + ${perm[3]} - ${perm[2]}`,
    // `${perm[0]} + ${perm[1]} - ${perm[3]} - ${perm[2]}`,
    // `${perm[0]} + ${perm[1]} + ${perm[3]} * ${perm[2]}`,
    // `${perm[0]} + ${perm[1]} * ${perm[3]} * ${perm[2]}`,
    // `${perm[0]} + ${perm[1]} + ${perm[3]} / ${perm[2]}`,
    // `${perm[0]} + ${perm[1]} / ${perm[3]} / ${perm[2]}`,

    // `${perm[0]} - ${perm[1]} - ${perm[3]} - ${perm[2]}`,
    // `${perm[0]} - ${perm[1]} - ${perm[3]} + ${perm[2]}`,
    // `${perm[0]} - ${perm[1]} + ${perm[3]} + ${perm[2]}`,
    // `${perm[0]} - ${perm[1]} - ${perm[3]} * ${perm[2]}`,
    // `${perm[0]} - ${perm[1]} * ${perm[3]} * ${perm[2]}`,
    // `${perm[0]} - ${perm[1]} - ${perm[3]} / ${perm[2]}`,
    // `${perm[0]} - ${perm[1]} / ${perm[3]} / ${perm[2]}`,

    // `${perm[0]} * ${perm[1]} * ${perm[3]} * ${perm[2]}`,
    // `${perm[0]} * ${perm[1]} * ${perm[3]} + ${perm[2]}`,
    // `${perm[0]} * ${perm[1]} + ${perm[3]} + ${perm[2]}`,
    // `${perm[0]} * ${perm[1]} * ${perm[3]} - ${perm[2]}`,
    // `${perm[0]} * ${perm[1]} - ${perm[3]} - ${perm[2]}`,
    // `${perm[0]} * ${perm[1]} * ${perm[3]} / ${perm[2]}`,
    // `${perm[0]} * ${perm[1]} / ${perm[3]} / ${perm[2]}`,

    // `${perm[0]} / ${perm[1]} / ${perm[3]} / ${perm[2]}`,
    // `${perm[0]} / ${perm[1]} / ${perm[3]} + ${perm[2]}`,
    // `${perm[0]} / ${perm[1]} + ${perm[3]} + ${perm[2]}`,
    // `${perm[0]} / ${perm[1]} / ${perm[3]} - ${perm[2]}`,
    // `${perm[0]} / ${perm[1]} - ${perm[3]} - ${perm[2]}`,
    // `${perm[0]} / ${perm[1]} / ${perm[3]} * ${perm[2]}`,
    // `${perm[0]} / ${perm[1]} * ${perm[3]} * ${perm[2]}`,

    // //0213
    // `${perm[0]} + ${perm[2]} + ${perm[1]} + ${perm[3]}`,
    // `${perm[0]} + ${perm[2]} + ${perm[1]} - ${perm[3]}`,
    // `${perm[0]} + ${perm[2]} - ${perm[1]} - ${perm[3]}`,
    // `${perm[0]} + ${perm[2]} + ${perm[1]} * ${perm[3]}`,
    // `${perm[0]} + ${perm[2]} * ${perm[1]} * ${perm[3]}`,
    // `${perm[0]} + ${perm[2]} + ${perm[1]} / ${perm[3]}`,
    // `${perm[0]} + ${perm[2]} / ${perm[1]} / ${perm[3]}`,

    // `${perm[0]} - ${perm[2]} - ${perm[1]} - ${perm[3]}`,
    // `${perm[0]} - ${perm[2]} - ${perm[1]} + ${perm[3]}`,
    // `${perm[0]} - ${perm[2]} + ${perm[1]} + ${perm[3]}`,
    // `${perm[0]} - ${perm[2]} - ${perm[1]} * ${perm[3]}`,
    // `${perm[0]} - ${perm[2]} * ${perm[1]} * ${perm[3]}`,
    // `${perm[0]} - ${perm[2]} - ${perm[1]} / ${perm[3]}`,
    // `${perm[0]} - ${perm[2]} / ${perm[1]} / ${perm[3]}`,
    // `${perm[0]} * ${perm[2]} * ${perm[1]} * ${perm[3]}`,
    // `${perm[0]} * ${perm[2]} * ${perm[1]} + ${perm[3]}`,
    // `${perm[0]} * ${perm[2]} + ${perm[1]} + ${perm[3]}`,
    // `${perm[0]} * ${perm[2]} * ${perm[1]} - ${perm[3]}`,
    // `${perm[0]} * ${perm[2]} - ${perm[1]} - ${perm[3]}`,
    // `${perm[0]} * ${perm[2]} * ${perm[1]} / ${perm[3]}`,
    // `${perm[0]} * ${perm[2]} / ${perm[1]} / ${perm[3]}`,

    // `${perm[0]} / ${perm[2]} / ${perm[1]} / ${perm[3]}`,
    // `${perm[0]} / ${perm[2]} / ${perm[1]} + ${perm[3]}`,
    // `${perm[0]} / ${perm[2]} + ${perm[1]} + ${perm[3]}`,
    // `${perm[0]} / ${perm[2]} / ${perm[1]} - ${perm[3]}`,
    // `${perm[0]} / ${perm[2]} - ${perm[1]} - ${perm[3]}`,
    // `${perm[0]} / ${perm[2]} / ${perm[1]} * ${perm[3]}`,
    // `${perm[0]} / ${perm[2]} * ${perm[1]} * ${perm[3]}`,

    // //0231
    // `${perm[0]} + ${perm[2]} + ${perm[3]} + ${perm[1]}`,
    // `${perm[0]} + ${perm[2]} + ${perm[3]} - ${perm[1]}`,
    // `${perm[0]} + ${perm[2]} - ${perm[3]} - ${perm[1]}`,
    // `${perm[0]} + ${perm[2]} + ${perm[3]} * ${perm[1]}`,
    // `${perm[0]} + ${perm[2]} * ${perm[3]} * ${perm[1]}`,
    // `${perm[0]} + ${perm[2]} + ${perm[3]} / ${perm[1]}`,
    // `${perm[0]} + ${perm[2]} / ${perm[3]} / ${perm[1]}`,

    // `${perm[0]} - ${perm[2]} - ${perm[3]} - ${perm[1]}`,
    // `${perm[0]} - ${perm[2]} - ${perm[3]} + ${perm[1]}`,
    // `${perm[0]} - ${perm[2]} + ${perm[3]} + ${perm[1]}`,
    // `${perm[0]} - ${perm[2]} - ${perm[3]} * ${perm[1]}`,
    // `${perm[0]} - ${perm[2]} * ${perm[3]} * ${perm[1]}`,
    // `${perm[0]} - ${perm[2]} - ${perm[3]} / ${perm[1]}`,
    // `${perm[0]} - ${perm[2]} / ${perm[3]} / ${perm[1]}`,
    // `${perm[0]} * ${perm[2]} * ${perm[3]} * ${perm[1]}`,
    // `${perm[0]} * ${perm[2]} * ${perm[3]} + ${perm[1]}`,
    // `${perm[0]} * ${perm[2]} + ${perm[3]} + ${perm[1]}`,
    // `${perm[0]} * ${perm[2]} * ${perm[3]} - ${perm[1]}`,
    // `${perm[0]} * ${perm[2]} - ${perm[3]} - ${perm[1]}`,
    // `${perm[0]} * ${perm[2]} * ${perm[3]} / ${perm[1]}`,
    // `${perm[0]} * ${perm[2]} / ${perm[3]} / ${perm[1]}`,

    // `${perm[0]} / ${perm[2]} / ${perm[3]} / ${perm[1]}`,
    // `${perm[0]} / ${perm[2]} / ${perm[3]} + ${perm[1]}`,
    // `${perm[0]} / ${perm[2]} + ${perm[3]} + ${perm[1]}`,
    // `${perm[0]} / ${perm[2]} / ${perm[3]} - ${perm[1]}`,
    // `${perm[0]} / ${perm[2]} - ${perm[3]} - ${perm[1]}`,
    // `${perm[0]} / ${perm[2]} / ${perm[3]} * ${perm[1]}`,
    // `${perm[0]} / ${perm[2]} * ${perm[3]} * ${perm[1]}`,

    // //0312
    // `${perm[0]} + ${perm[3]} + ${perm[1]} + ${perm[2]}`,
    // `${perm[0]} + ${perm[3]} + ${perm[1]} - ${perm[2]}`,
    // `${perm[0]} + ${perm[3]} - ${perm[1]} - ${perm[2]}`,
    // `${perm[0]} + ${perm[3]} + ${perm[1]} * ${perm[2]}`,
    // `${perm[0]} + ${perm[3]} * ${perm[1]} * ${perm[2]}`,
    // `${perm[0]} + ${perm[3]} + ${perm[1]} / ${perm[2]}`,
    // `${perm[0]} + ${perm[3]} / ${perm[1]} / ${perm[2]}`,

    // `${perm[0]} - ${perm[3]} - ${perm[1]} - ${perm[2]}`,
    // `${perm[0]} - ${perm[3]} - ${perm[1]} + ${perm[2]}`,
    // `${perm[0]} - ${perm[3]} + ${perm[1]} + ${perm[2]}`,
    // `${perm[0]} - ${perm[3]} - ${perm[1]} * ${perm[2]}`,
    // `${perm[0]} - ${perm[3]} * ${perm[1]} * ${perm[2]}`,
    // `${perm[0]} - ${perm[3]} - ${perm[1]} / ${perm[2]}`,
    // `${perm[0]} - ${perm[3]} / ${perm[1]} / ${perm[2]}`,
    // `${perm[0]} * ${perm[3]} * ${perm[1]} * ${perm[2]}`,
    // `${perm[0]} * ${perm[3]} * ${perm[1]} + ${perm[2]}`,
    // `${perm[0]} * ${perm[3]} + ${perm[1]} + ${perm[2]}`,
    // `${perm[0]} * ${perm[3]} * ${perm[1]} - ${perm[2]}`,
    // `${perm[0]} * ${perm[3]} - ${perm[1]} - ${perm[2]}`,
    // `${perm[0]} * ${perm[3]} * ${perm[1]} / ${perm[2]}`,
    // `${perm[0]} * ${perm[3]} / ${perm[1]} / ${perm[2]}`,

    // `${perm[0]} / ${perm[3]} / ${perm[1]} / ${perm[2]}`,
    // `${perm[0]} / ${perm[3]} / ${perm[1]} + ${perm[2]}`,
    // `${perm[0]} / ${perm[3]} + ${perm[1]} + ${perm[2]}`,
    // `${perm[0]} / ${perm[3]} / ${perm[1]} - ${perm[2]}`,
    // `${perm[0]} / ${perm[3]} - ${perm[1]} - ${perm[2]}`,
    // `${perm[0]} / ${perm[3]} / ${perm[1]} * ${perm[2]}`,
    // `${perm[0]} / ${perm[3]} * ${perm[1]} * ${perm[2]}`,

    // //0321
    // `${perm[0]} + ${perm[3]} + ${perm[2]} + ${perm[1]}`,
    // `${perm[0]} + ${perm[3]} + ${perm[2]} - ${perm[1]}`,
    // `${perm[0]} + ${perm[3]} - ${perm[2]} - ${perm[1]}`,
    // `${perm[0]} + ${perm[3]} + ${perm[2]} * ${perm[1]}`,
    // `${perm[0]} + ${perm[3]} * ${perm[2]} * ${perm[1]}`,
    // `${perm[0]} + ${perm[3]} + ${perm[2]} / ${perm[1]}`,
    // `${perm[0]} + ${perm[3]} / ${perm[2]} / ${perm[1]}`,

    // `${perm[0]} - ${perm[3]} - ${perm[2]} - ${perm[1]}`,
    // `${perm[0]} - ${perm[3]} - ${perm[2]} + ${perm[1]}`,
    // `${perm[0]} - ${perm[3]} + ${perm[2]} + ${perm[1]}`,
    // `${perm[0]} - ${perm[3]} - ${perm[2]} * ${perm[1]}`,
    // `${perm[0]} - ${perm[3]} * ${perm[2]} * ${perm[1]}`,
    // `${perm[0]} - ${perm[3]} - ${perm[2]} / ${perm[1]}`,
    // `${perm[0]} - ${perm[3]} / ${perm[2]} / ${perm[1]}`,
    // `${perm[0]} * ${perm[3]} * ${perm[2]} * ${perm[1]}`,
    // `${perm[0]} * ${perm[3]} * ${perm[2]} + ${perm[1]}`,
    // `${perm[0]} * ${perm[3]} + ${perm[2]} + ${perm[1]}`,
    // `${perm[0]} * ${perm[3]} * ${perm[2]} - ${perm[1]}`,
    // `${perm[0]} * ${perm[3]} - ${perm[2]} - ${perm[1]}`,
    // `${perm[0]} * ${perm[3]} * ${perm[2]} / ${perm[1]}`,
    // `${perm[0]} * ${perm[3]} / ${perm[2]} / ${perm[1]}`,

    // `${perm[0]} / ${perm[3]} / ${perm[2]} / ${perm[1]}`,
    // `${perm[0]} / ${perm[3]} / ${perm[2]} + ${perm[1]}`,
    // `${perm[0]} / ${perm[3]} + ${perm[2]} + ${perm[1]}`,
    // `${perm[0]} / ${perm[3]} / ${perm[2]} - ${perm[1]}`,
    // `${perm[0]} / ${perm[3]} - ${perm[2]} - ${perm[1]}`,
    // `${perm[0]} / ${perm[3]} / ${perm[2]} * ${perm[1]}`,
    // `${perm[0]} / ${perm[3]} * ${perm[2]} * ${perm[1]}`,

    // //1023
    // `${perm[1]} + ${perm[0]} + ${perm[2]} + ${perm[3]}`,
    // `${perm[1]} + ${perm[0]} + ${perm[2]} - ${perm[3]}`,
    // `${perm[1]} + ${perm[0]} - ${perm[2]} - ${perm[3]}`,
    // `${perm[1]} + ${perm[0]} + ${perm[2]} * ${perm[3]}`,
    // `${perm[1]} + ${perm[0]} * ${perm[2]} * ${perm[3]}`,
    // `${perm[1]} + ${perm[0]} + ${perm[2]} / ${perm[3]}`,
    // `${perm[1]} + ${perm[0]} / ${perm[2]} / ${perm[3]}`,

    // `${perm[1]} - ${perm[0]} - ${perm[2]} - ${perm[3]}`,
    // `${perm[1]} - ${perm[0]} - ${perm[2]} + ${perm[3]}`,
    // `${perm[1]} - ${perm[0]} + ${perm[2]} + ${perm[3]}`,
    // `${perm[1]} - ${perm[0]} - ${perm[2]} * ${perm[3]}`,
    // `${perm[1]} - ${perm[0]} * ${perm[2]} * ${perm[3]}`,
    // `${perm[1]} - ${perm[0]} - ${perm[2]} / ${perm[3]}`,
    // `${perm[1]} - ${perm[0]} / ${perm[2]} / ${perm[3]}`,
    // `${perm[1]} * ${perm[0]} * ${perm[2]} * ${perm[3]}`,
    // `${perm[1]} * ${perm[0]} * ${perm[2]} + ${perm[3]}`,
    // `${perm[1]} * ${perm[0]} + ${perm[2]} + ${perm[3]}`,
    // `${perm[1]} * ${perm[0]} * ${perm[2]} - ${perm[3]}`,
    // `${perm[1]} * ${perm[0]} - ${perm[2]} - ${perm[3]}`,
    // `${perm[1]} * ${perm[0]} * ${perm[2]} / ${perm[3]}`,
    // `${perm[1]} * ${perm[0]} / ${perm[2]} / ${perm[3]}`,

    // `${perm[1]} / ${perm[0]} / ${perm[2]} / ${perm[3]}`,
    // `${perm[1]} / ${perm[0]} / ${perm[2]} + ${perm[3]}`,
    // `${perm[1]} / ${perm[0]} + ${perm[2]} + ${perm[3]}`,
    // `${perm[1]} / ${perm[0]} / ${perm[2]} - ${perm[3]}`,
    // `${perm[1]} / ${perm[0]} - ${perm[2]} - ${perm[3]}`,
    // `${perm[1]} / ${perm[0]} / ${perm[2]} * ${perm[3]}`,
    // `${perm[1]} / ${perm[0]} * ${perm[2]} * ${perm[3]}`,

    // //1032
    // `${perm[1]} + ${perm[0]} + ${perm[3]} + ${perm[2]}`,
    // `${perm[1]} + ${perm[0]} + ${perm[3]} - ${perm[2]}`,
    // `${perm[1]} + ${perm[0]} - ${perm[3]} - ${perm[2]}`,
    // `${perm[1]} + ${perm[0]} + ${perm[3]} * ${perm[2]}`,
    // `${perm[1]} + ${perm[0]} * ${perm[3]} * ${perm[2]}`,
    // `${perm[1]} + ${perm[0]} + ${perm[3]} / ${perm[2]}`,
    // `${perm[1]} + ${perm[0]} / ${perm[3]} / ${perm[2]}`,

    // `${perm[1]} - ${perm[0]} - ${perm[3]} - ${perm[2]}`,
    // `${perm[1]} - ${perm[0]} - ${perm[3]} + ${perm[2]}`,
    // `${perm[1]} - ${perm[0]} + ${perm[3]} + ${perm[2]}`,
    // `${perm[1]} - ${perm[0]} - ${perm[3]} * ${perm[2]}`,
    // `${perm[1]} - ${perm[0]} * ${perm[3]} * ${perm[2]}`,
    // `${perm[1]} - ${perm[0]} - ${perm[3]} / ${perm[2]}`,
    // `${perm[1]} - ${perm[0]} / ${perm[3]} / ${perm[2]}`,
    // `${perm[1]} * ${perm[0]} * ${perm[3]} * ${perm[2]}`,
    // `${perm[1]} * ${perm[0]} * ${perm[3]} + ${perm[2]}`,
    // `${perm[1]} * ${perm[0]} + ${perm[3]} + ${perm[2]}`,
    // `${perm[1]} * ${perm[0]} * ${perm[3]} - ${perm[2]}`,
    // `${perm[1]} * ${perm[0]} - ${perm[3]} - ${perm[2]}`,
    // `${perm[1]} * ${perm[0]} * ${perm[3]} / ${perm[2]}`,
    // `${perm[1]} * ${perm[0]} / ${perm[3]} / ${perm[2]}`,

    // `${perm[1]} / ${perm[0]} / ${perm[3]} / ${perm[2]}`,
    // `${perm[1]} / ${perm[0]} / ${perm[3]} + ${perm[2]}`,
    // `${perm[1]} / ${perm[0]} + ${perm[3]} + ${perm[2]}`,
    // `${perm[1]} / ${perm[0]} / ${perm[3]} - ${perm[2]}`,
    // `${perm[1]} / ${perm[0]} - ${perm[3]} - ${perm[2]}`,
    // `${perm[1]} / ${perm[0]} / ${perm[3]} * ${perm[2]}`,
    // `${perm[1]} / ${perm[0]} * ${perm[3]} * ${perm[2]}`,

    // //1203
    // `${perm[1]} + ${perm[2]} + ${perm[0]} + ${perm[3]}`,
    // `${perm[1]} + ${perm[2]} + ${perm[0]} - ${perm[3]}`,
    // `${perm[1]} + ${perm[2]} - ${perm[0]} - ${perm[3]}`,
    // `${perm[1]} + ${perm[2]} + ${perm[0]} * ${perm[3]}`,
    // `${perm[1]} + ${perm[2]} * ${perm[0]} * ${perm[3]}`,
    // `${perm[1]} + ${perm[2]} + ${perm[0]} / ${perm[3]}`,
    // `${perm[1]} + ${perm[2]} / ${perm[0]} / ${perm[3]}`,

    // `${perm[1]} - ${perm[2]} - ${perm[0]} - ${perm[3]}`,
    // `${perm[1]} - ${perm[2]} - ${perm[0]} + ${perm[3]}`,
    // `${perm[1]} - ${perm[2]} + ${perm[0]} + ${perm[3]}`,
    // `${perm[1]} - ${perm[2]} - ${perm[0]} * ${perm[3]}`,
    // `${perm[1]} - ${perm[2]} * ${perm[0]} * ${perm[3]}`,
    // `${perm[1]} - ${perm[2]} - ${perm[0]} / ${perm[3]}`,
    // `${perm[1]} - ${perm[2]} / ${perm[0]} / ${perm[3]}`,
    // `${perm[1]} * ${perm[2]} * ${perm[0]} * ${perm[3]}`,
    // `${perm[1]} * ${perm[2]} * ${perm[0]} + ${perm[3]}`,
    // `${perm[1]} * ${perm[2]} + ${perm[0]} + ${perm[3]}`,
    // `${perm[1]} * ${perm[2]} * ${perm[0]} - ${perm[3]}`,
    // `${perm[1]} * ${perm[2]} - ${perm[0]} - ${perm[3]}`,
    // `${perm[1]} * ${perm[2]} * ${perm[0]} / ${perm[3]}`,
    // `${perm[1]} * ${perm[2]} / ${perm[0]} / ${perm[3]}`,

    // `${perm[1]} / ${perm[2]} / ${perm[0]} / ${perm[3]}`,
    // `${perm[1]} / ${perm[2]} / ${perm[0]} + ${perm[3]}`,
    // `${perm[1]} / ${perm[2]} + ${perm[0]} + ${perm[3]}`,
    // `${perm[1]} / ${perm[2]} / ${perm[0]} - ${perm[3]}`,
    // `${perm[1]} / ${perm[2]} - ${perm[0]} - ${perm[3]}`,
    // `${perm[1]} / ${perm[2]} / ${perm[0]} * ${perm[3]}`,
    // `${perm[1]} / ${perm[2]} * ${perm[0]} * ${perm[3]}`,

    // //1230
    // `${perm[1]} + ${perm[2]} + ${perm[3]} + ${perm[0]}`,
    // `${perm[1]} + ${perm[2]} + ${perm[3]} - ${perm[0]}`,
    // `${perm[1]} + ${perm[2]} - ${perm[3]} - ${perm[0]}`,
    // `${perm[1]} + ${perm[2]} + ${perm[3]} * ${perm[0]}`,
    // `${perm[1]} + ${perm[2]} * ${perm[3]} * ${perm[0]}`,
    // `${perm[1]} + ${perm[2]} + ${perm[3]} / ${perm[0]}`,
    // `${perm[1]} + ${perm[2]} / ${perm[3]} / ${perm[0]}`,

    // `${perm[1]} - ${perm[2]} - ${perm[3]} - ${perm[0]}`,
    // `${perm[1]} - ${perm[2]} - ${perm[3]} + ${perm[0]}`,
    // `${perm[1]} - ${perm[2]} + ${perm[3]} + ${perm[0]}`,
    // `${perm[1]} - ${perm[2]} - ${perm[3]} * ${perm[0]}`,
    // `${perm[1]} - ${perm[2]} * ${perm[3]} * ${perm[0]}`,
    // `${perm[1]} - ${perm[2]} - ${perm[3]} / ${perm[0]}`,
    // `${perm[1]} - ${perm[2]} / ${perm[3]} / ${perm[0]}`,
    // `${perm[1]} * ${perm[2]} * ${perm[3]} * ${perm[0]}`,
    // `${perm[1]} * ${perm[2]} * ${perm[3]} + ${perm[0]}`,
    // `${perm[1]} * ${perm[2]} + ${perm[3]} + ${perm[0]}`,
    // `${perm[1]} * ${perm[2]} * ${perm[3]} - ${perm[0]}`,
    // `${perm[1]} * ${perm[2]} - ${perm[3]} - ${perm[0]}`,
    // `${perm[1]} * ${perm[2]} * ${perm[3]} / ${perm[0]}`,
    // `${perm[1]} * ${perm[2]} / ${perm[3]} / ${perm[0]}`,

    // `${perm[1]} / ${perm[2]} / ${perm[3]} / ${perm[0]}`,
    // `${perm[1]} / ${perm[2]} / ${perm[3]} + ${perm[0]}`,
    // `${perm[1]} / ${perm[2]} + ${perm[3]} + ${perm[0]}`,
    // `${perm[1]} / ${perm[2]} / ${perm[3]} - ${perm[0]}`,
    // `${perm[1]} / ${perm[2]} - ${perm[3]} - ${perm[0]}`,
    // `${perm[1]} / ${perm[2]} / ${perm[3]} * ${perm[0]}`,
    // `${perm[1]} / ${perm[2]} * ${perm[3]} * ${perm[0]}`,

    // //1302
    // `${perm[1]} + ${perm[3]} + ${perm[0]} + ${perm[2]}`,
    // `${perm[1]} + ${perm[3]} + ${perm[0]} - ${perm[2]}`,
    // `${perm[1]} + ${perm[3]} - ${perm[0]} - ${perm[2]}`,
    // `${perm[1]} + ${perm[3]} + ${perm[0]} * ${perm[2]}`,
    // `${perm[1]} + ${perm[3]} * ${perm[0]} * ${perm[2]}`,
    // `${perm[1]} + ${perm[3]} + ${perm[0]} / ${perm[2]}`,
    // `${perm[1]} + ${perm[3]} / ${perm[0]} / ${perm[2]}`,

    // `${perm[1]} - ${perm[3]} - ${perm[0]} - ${perm[2]}`,
    // `${perm[1]} - ${perm[3]} - ${perm[0]} + ${perm[2]}`,
    // `${perm[1]} - ${perm[3]} + ${perm[0]} + ${perm[2]}`,
    // `${perm[1]} - ${perm[3]} - ${perm[0]} * ${perm[2]}`,
    // `${perm[1]} - ${perm[3]} * ${perm[0]} * ${perm[2]}`,
    // `${perm[1]} - ${perm[3]} - ${perm[0]} / ${perm[2]}`,
    // `${perm[1]} - ${perm[3]} / ${perm[0]} / ${perm[2]}`,
    // `${perm[1]} * ${perm[3]} * ${perm[0]} * ${perm[2]}`,
    // `${perm[1]} * ${perm[3]} * ${perm[0]} + ${perm[2]}`,
    // `${perm[1]} * ${perm[3]} + ${perm[0]} + ${perm[2]}`,
    // `${perm[1]} * ${perm[3]} * ${perm[0]} - ${perm[2]}`,
    // `${perm[1]} * ${perm[3]} - ${perm[0]} - ${perm[2]}`,
    // `${perm[1]} * ${perm[3]} * ${perm[0]} / ${perm[2]}`,
    // `${perm[1]} * ${perm[3]} / ${perm[0]} / ${perm[2]}`,

    // `${perm[1]} / ${perm[3]} / ${perm[0]} / ${perm[2]}`,
    // `${perm[1]} / ${perm[3]} / ${perm[0]} + ${perm[2]}`,
    // `${perm[1]} / ${perm[3]} + ${perm[0]} + ${perm[2]}`,
    // `${perm[1]} / ${perm[3]} / ${perm[0]} - ${perm[2]}`,
    // `${perm[1]} / ${perm[3]} - ${perm[0]} - ${perm[2]}`,
    // `${perm[1]} / ${perm[3]} / ${perm[0]} * ${perm[2]}`,
    // `${perm[1]} / ${perm[3]} * ${perm[0]} * ${perm[2]}`,

    // //1320
    // `${perm[1]} + ${perm[3]} + ${perm[2]} + ${perm[0]}`,
    // `${perm[1]} + ${perm[3]} + ${perm[2]} - ${perm[0]}`,
    // `${perm[1]} + ${perm[3]} - ${perm[2]} - ${perm[0]}`,
    // `${perm[1]} + ${perm[3]} + ${perm[2]} * ${perm[0]}`,
    // `${perm[1]} + ${perm[3]} * ${perm[2]} * ${perm[0]}`,
    // `${perm[1]} + ${perm[3]} + ${perm[2]} / ${perm[0]}`,
    // `${perm[1]} + ${perm[3]} / ${perm[2]} / ${perm[0]}`,

    // `${perm[1]} - ${perm[3]} - ${perm[2]} - ${perm[0]}`,
    // `${perm[1]} - ${perm[3]} - ${perm[2]} + ${perm[0]}`,
    // `${perm[1]} - ${perm[3]} + ${perm[2]} + ${perm[0]}`,
    // `${perm[1]} - ${perm[3]} - ${perm[2]} * ${perm[0]}`,
    // `${perm[1]} - ${perm[3]} * ${perm[2]} * ${perm[0]}`,
    // `${perm[1]} - ${perm[3]} - ${perm[2]} / ${perm[0]}`,
    // `${perm[1]} - ${perm[3]} / ${perm[2]} / ${perm[0]}`,
    // `${perm[1]} * ${perm[3]} * ${perm[2]} * ${perm[0]}`,
    // `${perm[1]} * ${perm[3]} * ${perm[2]} + ${perm[0]}`,
    // `${perm[1]} * ${perm[3]} + ${perm[2]} + ${perm[0]}`,
    // `${perm[1]} * ${perm[3]} * ${perm[2]} - ${perm[0]}`,
    // `${perm[1]} * ${perm[3]} - ${perm[2]} - ${perm[0]}`,
    // `${perm[1]} * ${perm[3]} * ${perm[2]} / ${perm[0]}`,
    // `${perm[1]} * ${perm[3]} / ${perm[2]} / ${perm[0]}`,

    // `${perm[1]} / ${perm[3]} / ${perm[2]} / ${perm[0]}`,
    // `${perm[1]} / ${perm[3]} / ${perm[2]} + ${perm[0]}`,
    // `${perm[1]} / ${perm[3]} + ${perm[2]} + ${perm[0]}`,
    // `${perm[1]} / ${perm[3]} / ${perm[2]} - ${perm[0]}`,
    // `${perm[1]} / ${perm[3]} - ${perm[2]} - ${perm[0]}`,
    // `${perm[1]} / ${perm[3]} / ${perm[2]} * ${perm[0]}`,
    // `${perm[1]} / ${perm[3]} * ${perm[2]} * ${perm[0]}`,

    // //2013
    // `${perm[2]} + ${perm[0]} + ${perm[1]} + ${perm[3]}`,
    // `${perm[2]} + ${perm[0]} + ${perm[1]} - ${perm[3]}`,
    // `${perm[2]} + ${perm[0]} - ${perm[1]} - ${perm[3]}`,
    // `${perm[2]} + ${perm[0]} + ${perm[1]} * ${perm[3]}`,
    // `${perm[2]} + ${perm[0]} * ${perm[1]} * ${perm[3]}`,
    // `${perm[2]} + ${perm[0]} + ${perm[1]} / ${perm[3]}`,
    // `${perm[2]} + ${perm[0]} / ${perm[1]} / ${perm[3]}`,

    // `${perm[2]} - ${perm[0]} - ${perm[1]} - ${perm[3]}`,
    // `${perm[2]} - ${perm[0]} - ${perm[1]} + ${perm[3]}`,
    // `${perm[2]} - ${perm[0]} + ${perm[1]} + ${perm[3]}`,
    // `${perm[2]} - ${perm[0]} - ${perm[1]} * ${perm[3]}`,
    // `${perm[2]} - ${perm[0]} * ${perm[1]} * ${perm[3]}`,
    // `${perm[2]} - ${perm[0]} - ${perm[1]} / ${perm[3]}`,
    // `${perm[2]} - ${perm[0]} / ${perm[1]} / ${perm[3]}`,
    // `${perm[2]} * ${perm[0]} * ${perm[1]} * ${perm[3]}`,
    // `${perm[2]} * ${perm[0]} * ${perm[1]} + ${perm[3]}`,
    // `${perm[2]} * ${perm[0]} + ${perm[1]} + ${perm[3]}`,
    // `${perm[2]} * ${perm[0]} * ${perm[1]} - ${perm[3]}`,
    // `${perm[2]} * ${perm[0]} - ${perm[1]} - ${perm[3]}`,
    // `${perm[2]} * ${perm[0]} * ${perm[1]} / ${perm[3]}`,
    // `${perm[2]} * ${perm[0]} / ${perm[1]} / ${perm[3]}`,

    // `${perm[2]} / ${perm[0]} / ${perm[1]} / ${perm[3]}`,
    // `${perm[2]} / ${perm[0]} / ${perm[1]} + ${perm[3]}`,
    // `${perm[2]} / ${perm[0]} + ${perm[1]} + ${perm[3]}`,
    // `${perm[2]} / ${perm[0]} / ${perm[1]} - ${perm[3]}`,
    // `${perm[2]} / ${perm[0]} - ${perm[1]} - ${perm[3]}`,
    // `${perm[2]} / ${perm[0]} / ${perm[1]} * ${perm[3]}`,
    // `${perm[2]} / ${perm[0]} * ${perm[1]} * ${perm[3]}`,

    // //2031
    // `${perm[2]} + ${perm[0]} + ${perm[3]} + ${perm[1]}`,
    // `${perm[2]} + ${perm[0]} + ${perm[3]} - ${perm[1]}`,
    // `${perm[2]} + ${perm[0]} - ${perm[3]} - ${perm[1]}`,
    // `${perm[2]} + ${perm[0]} + ${perm[3]} * ${perm[1]}`,
    // `${perm[2]} + ${perm[0]} * ${perm[3]} * ${perm[1]}`,
    // `${perm[2]} + ${perm[0]} + ${perm[3]} / ${perm[1]}`,
    // `${perm[2]} + ${perm[0]} / ${perm[3]} / ${perm[1]}`,

    // `${perm[2]} - ${perm[0]} - ${perm[3]} - ${perm[1]}`,
    // `${perm[2]} - ${perm[0]} - ${perm[3]} + ${perm[1]}`,
    // `${perm[2]} - ${perm[0]} + ${perm[3]} + ${perm[1]}`,
    // `${perm[2]} - ${perm[0]} - ${perm[3]} * ${perm[1]}`,
    // `${perm[2]} - ${perm[0]} * ${perm[3]} * ${perm[1]}`,
    // `${perm[2]} - ${perm[0]} - ${perm[3]} / ${perm[1]}`,
    // `${perm[2]} - ${perm[0]} / ${perm[3]} / ${perm[1]}`,
    // `${perm[2]} * ${perm[0]} * ${perm[3]} * ${perm[1]}`,
    // `${perm[2]} * ${perm[0]} * ${perm[3]} + ${perm[1]}`,
    // `${perm[2]} * ${perm[0]} + ${perm[3]} + ${perm[1]}`,
    // `${perm[2]} * ${perm[0]} * ${perm[3]} - ${perm[1]}`,
    // `${perm[2]} * ${perm[0]} - ${perm[3]} - ${perm[1]}`,
    // `${perm[2]} * ${perm[0]} * ${perm[3]} / ${perm[1]}`,
    // `${perm[2]} * ${perm[0]} / ${perm[3]} / ${perm[1]}`,

    // `${perm[2]} / ${perm[0]} / ${perm[3]} / ${perm[1]}`,
    // `${perm[2]} / ${perm[0]} / ${perm[3]} + ${perm[1]}`,
    // `${perm[2]} / ${perm[0]} + ${perm[3]} + ${perm[1]}`,
    // `${perm[2]} / ${perm[0]} / ${perm[3]} - ${perm[1]}`,
    // `${perm[2]} / ${perm[0]} - ${perm[3]} - ${perm[1]}`,
    // `${perm[2]} / ${perm[0]} / ${perm[3]} * ${perm[1]}`,
    // `${perm[2]} / ${perm[0]} * ${perm[3]} * ${perm[1]}`,

    // //2103
    // `${perm[2]} + ${perm[1]} + ${perm[0]} + ${perm[3]}`,
    // `${perm[2]} + ${perm[1]} + ${perm[0]} - ${perm[3]}`,
    // `${perm[2]} + ${perm[1]} - ${perm[0]} - ${perm[3]}`,
    // `${perm[2]} + ${perm[1]} + ${perm[0]} * ${perm[3]}`,
    // `${perm[2]} + ${perm[1]} * ${perm[0]} * ${perm[3]}`,
    // `${perm[2]} + ${perm[1]} + ${perm[0]} / ${perm[3]}`,
    // `${perm[2]} + ${perm[1]} / ${perm[0]} / ${perm[3]}`,

    // `${perm[2]} - ${perm[1]} - ${perm[0]} - ${perm[3]}`,
    // `${perm[2]} - ${perm[1]} - ${perm[0]} + ${perm[3]}`,
    // `${perm[2]} - ${perm[1]} + ${perm[0]} + ${perm[3]}`,
    // `${perm[2]} - ${perm[1]} - ${perm[0]} * ${perm[3]}`,
    // `${perm[2]} - ${perm[1]} * ${perm[0]} * ${perm[3]}`,
    // `${perm[2]} - ${perm[1]} - ${perm[0]} / ${perm[3]}`,
    // `${perm[2]} - ${perm[1]} / ${perm[0]} / ${perm[3]}`,
    // `${perm[2]} * ${perm[1]} * ${perm[0]} * ${perm[3]}`,
    // `${perm[2]} * ${perm[1]} * ${perm[0]} + ${perm[3]}`,
    // `${perm[2]} * ${perm[1]} + ${perm[0]} + ${perm[3]}`,
    // `${perm[2]} * ${perm[1]} * ${perm[0]} - ${perm[3]}`,
    // `${perm[2]} * ${perm[1]} - ${perm[0]} - ${perm[3]}`,
    // `${perm[2]} * ${perm[1]} * ${perm[0]} / ${perm[3]}`,
    // `${perm[2]} * ${perm[1]} / ${perm[0]} / ${perm[3]}`,

    // `${perm[2]} / ${perm[1]} / ${perm[0]} / ${perm[3]}`,
    // `${perm[2]} / ${perm[1]} / ${perm[0]} + ${perm[3]}`,
    // `${perm[2]} / ${perm[1]} + ${perm[0]} + ${perm[3]}`,
    // `${perm[2]} / ${perm[1]} / ${perm[0]} - ${perm[3]}`,
    // `${perm[2]} / ${perm[1]} - ${perm[0]} - ${perm[3]}`,
    // `${perm[2]} / ${perm[1]} / ${perm[0]} * ${perm[3]}`,
    // `${perm[2]} / ${perm[1]} * ${perm[0]} * ${perm[3]}`,

    // //2130
    // `${perm[2]} + ${perm[1]} + ${perm[3]} + ${perm[0]}`,
    // `${perm[2]} + ${perm[1]} + ${perm[3]} - ${perm[0]}`,
    // `${perm[2]} + ${perm[1]} - ${perm[3]} - ${perm[0]}`,
    // `${perm[2]} + ${perm[1]} + ${perm[3]} * ${perm[0]}`,
    // `${perm[2]} + ${perm[1]} * ${perm[3]} * ${perm[0]}`,
    // `${perm[2]} + ${perm[1]} + ${perm[3]} / ${perm[0]}`,
    // `${perm[2]} + ${perm[1]} / ${perm[3]} / ${perm[0]}`,

    // `${perm[2]} - ${perm[1]} - ${perm[3]} - ${perm[0]}`,
    // `${perm[2]} - ${perm[1]} - ${perm[3]} + ${perm[0]}`,
    // `${perm[2]} - ${perm[1]} + ${perm[3]} + ${perm[0]}`,
    // `${perm[2]} - ${perm[1]} - ${perm[3]} * ${perm[0]}`,
    // `${perm[2]} - ${perm[1]} * ${perm[3]} * ${perm[0]}`,
    // `${perm[2]} - ${perm[1]} - ${perm[3]} / ${perm[0]}`,
    // `${perm[2]} - ${perm[1]} / ${perm[3]} / ${perm[0]}`,
    // `${perm[2]} * ${perm[1]} * ${perm[3]} * ${perm[0]}`,
    // `${perm[2]} * ${perm[1]} * ${perm[3]} + ${perm[0]}`,
    // `${perm[2]} * ${perm[1]} + ${perm[3]} + ${perm[0]}`,
    // `${perm[2]} * ${perm[1]} * ${perm[3]} - ${perm[0]}`,
    // `${perm[2]} * ${perm[1]} - ${perm[3]} - ${perm[0]}`,
    // `${perm[2]} * ${perm[1]} * ${perm[3]} / ${perm[0]}`,
    // `${perm[2]} * ${perm[1]} / ${perm[3]} / ${perm[0]}`,

    // `${perm[2]} / ${perm[1]} / ${perm[3]} / ${perm[0]}`,
    // `${perm[2]} / ${perm[1]} / ${perm[3]} + ${perm[0]}`,
    // `${perm[2]} / ${perm[1]} + ${perm[3]} + ${perm[0]}`,
    // `${perm[2]} / ${perm[1]} / ${perm[3]} - ${perm[0]}`,
    // `${perm[2]} / ${perm[1]} - ${perm[3]} - ${perm[0]}`,
    // `${perm[2]} / ${perm[1]} / ${perm[3]} * ${perm[0]}`,
    // `${perm[2]} / ${perm[1]} * ${perm[3]} * ${perm[0]}`,

    // //2301
    // `${perm[2]} + ${perm[3]} + ${perm[0]} + ${perm[1]}`,
    // `${perm[2]} + ${perm[3]} + ${perm[0]} - ${perm[1]}`,
    // `${perm[2]} + ${perm[3]} - ${perm[0]} - ${perm[1]}`,
    // `${perm[2]} + ${perm[3]} + ${perm[0]} * ${perm[1]}`,
    // `${perm[2]} + ${perm[3]} * ${perm[0]} * ${perm[1]}`,
    // `${perm[2]} + ${perm[3]} + ${perm[0]} / ${perm[1]}`,
    // `${perm[2]} + ${perm[3]} / ${perm[0]} / ${perm[1]}`,

    // `${perm[2]} - ${perm[3]} - ${perm[0]} - ${perm[1]}`,
    // `${perm[2]} - ${perm[3]} - ${perm[0]} + ${perm[1]}`,
    // `${perm[2]} - ${perm[3]} + ${perm[0]} + ${perm[1]}`,
    // `${perm[2]} - ${perm[3]} - ${perm[0]} * ${perm[1]}`,
    // `${perm[2]} - ${perm[3]} * ${perm[0]} * ${perm[1]}`,
    // `${perm[2]} - ${perm[3]} - ${perm[0]} / ${perm[1]}`,
    // `${perm[2]} - ${perm[3]} / ${perm[0]} / ${perm[1]}`,
    // `${perm[2]} * ${perm[3]} * ${perm[0]} * ${perm[1]}`,
    // `${perm[2]} * ${perm[3]} * ${perm[0]} + ${perm[1]}`,
    // `${perm[2]} * ${perm[3]} + ${perm[0]} + ${perm[1]}`,
    // `${perm[2]} * ${perm[3]} * ${perm[0]} - ${perm[1]}`,
    // `${perm[2]} * ${perm[3]} - ${perm[0]} - ${perm[1]}`,
    // `${perm[2]} * ${perm[3]} * ${perm[0]} / ${perm[1]}`,
    // `${perm[2]} * ${perm[3]} / ${perm[0]} / ${perm[1]}`,

    // `${perm[2]} / ${perm[3]} / ${perm[0]} / ${perm[1]}`,
    // `${perm[2]} / ${perm[3]} / ${perm[0]} + ${perm[1]}`,
    // `${perm[2]} / ${perm[3]} + ${perm[0]} + ${perm[1]}`,
    // `${perm[2]} / ${perm[3]} / ${perm[0]} - ${perm[1]}`,
    // `${perm[2]} / ${perm[3]} - ${perm[0]} - ${perm[1]}`,
    // `${perm[2]} / ${perm[3]} / ${perm[0]} * ${perm[1]}`,
    // `${perm[2]} / ${perm[3]} * ${perm[0]} * ${perm[1]}`,

    // //2310
    // `${perm[2]} + ${perm[3]} + ${perm[1]} + ${perm[0]}`,
    // `${perm[2]} + ${perm[3]} + ${perm[1]} - ${perm[0]}`,
    // `${perm[2]} + ${perm[3]} - ${perm[1]} - ${perm[0]}`,
    // `${perm[2]} + ${perm[3]} + ${perm[1]} * ${perm[0]}`,
    // `${perm[2]} + ${perm[3]} * ${perm[1]} * ${perm[0]}`,
    // `${perm[2]} + ${perm[3]} + ${perm[1]} / ${perm[0]}`,
    // `${perm[2]} + ${perm[3]} / ${perm[1]} / ${perm[0]}`,

    // `${perm[2]} - ${perm[3]} - ${perm[1]} - ${perm[0]}`,
    // `${perm[2]} - ${perm[3]} - ${perm[1]} + ${perm[0]}`,
    // `${perm[2]} - ${perm[3]} + ${perm[1]} + ${perm[0]}`,
    // `${perm[2]} - ${perm[3]} - ${perm[1]} * ${perm[0]}`,
    // `${perm[2]} - ${perm[3]} * ${perm[1]} * ${perm[0]}`,
    // `${perm[2]} - ${perm[3]} - ${perm[1]} / ${perm[0]}`,
    // `${perm[2]} - ${perm[3]} / ${perm[1]} / ${perm[0]}`,
    // `${perm[2]} * ${perm[3]} * ${perm[1]} * ${perm[0]}`,
    // `${perm[2]} * ${perm[3]} * ${perm[1]} + ${perm[0]}`,
    // `${perm[2]} * ${perm[3]} + ${perm[1]} + ${perm[0]}`,
    // `${perm[2]} * ${perm[3]} * ${perm[1]} - ${perm[0]}`,
    // `${perm[2]} * ${perm[3]} - ${perm[1]} - ${perm[0]}`,
    // `${perm[2]} * ${perm[3]} * ${perm[1]} / ${perm[0]}`,
    // `${perm[2]} * ${perm[3]} / ${perm[1]} / ${perm[0]}`,

    // `${perm[2]} / ${perm[3]} / ${perm[1]} / ${perm[0]}`,
    // `${perm[2]} / ${perm[3]} / ${perm[1]} + ${perm[0]}`,
    // `${perm[2]} / ${perm[3]} + ${perm[1]} + ${perm[0]}`,
    // `${perm[2]} / ${perm[3]} / ${perm[1]} - ${perm[0]}`,
    // `${perm[2]} / ${perm[3]} - ${perm[1]} - ${perm[0]}`,
    // `${perm[2]} / ${perm[3]} / ${perm[1]} * ${perm[0]}`,
    // `${perm[2]} / ${perm[3]} * ${perm[1]} * ${perm[0]}`,

    // //3012
    // `${perm[3]} + ${perm[0]} + ${perm[1]} + ${perm[2]}`,
    // `${perm[3]} + ${perm[0]} + ${perm[1]} - ${perm[2]}`,
    // `${perm[3]} + ${perm[0]} - ${perm[1]} - ${perm[2]}`,
    // `${perm[3]} + ${perm[0]} + ${perm[1]} * ${perm[2]}`,
    // `${perm[3]} + ${perm[0]} * ${perm[1]} * ${perm[2]}`,
    // `${perm[3]} + ${perm[0]} + ${perm[1]} / ${perm[2]}`,
    // `${perm[3]} + ${perm[0]} / ${perm[1]} / ${perm[2]}`,

    // `${perm[3]} - ${perm[0]} - ${perm[1]} - ${perm[2]}`,
    // `${perm[3]} - ${perm[0]} - ${perm[1]} + ${perm[2]}`,
    // `${perm[3]} - ${perm[0]} + ${perm[1]} + ${perm[2]}`,
    // `${perm[3]} - ${perm[0]} - ${perm[1]} * ${perm[2]}`,
    // `${perm[3]} - ${perm[0]} * ${perm[1]} * ${perm[2]}`,
    // `${perm[3]} - ${perm[0]} - ${perm[1]} / ${perm[2]}`,
    // `${perm[3]} - ${perm[0]} / ${perm[1]} / ${perm[2]}`,
    // `${perm[3]} * ${perm[0]} * ${perm[1]} * ${perm[2]}`,
    // `${perm[3]} * ${perm[0]} * ${perm[1]} + ${perm[2]}`,
    // `${perm[3]} * ${perm[0]} + ${perm[1]} + ${perm[2]}`,
    // `${perm[3]} * ${perm[0]} * ${perm[1]} - ${perm[2]}`,
    // `${perm[3]} * ${perm[0]} - ${perm[1]} - ${perm[2]}`,
    // `${perm[3]} * ${perm[0]} * ${perm[1]} / ${perm[2]}`,
    // `${perm[3]} * ${perm[0]} / ${perm[1]} / ${perm[2]}`,

    // `${perm[3]} / ${perm[0]} / ${perm[1]} / ${perm[2]}`,
    // `${perm[3]} / ${perm[0]} / ${perm[1]} + ${perm[2]}`,
    // `${perm[3]} / ${perm[0]} + ${perm[1]} + ${perm[2]}`,
    // `${perm[3]} / ${perm[0]} / ${perm[1]} - ${perm[2]}`,
    // `${perm[3]} / ${perm[0]} - ${perm[1]} - ${perm[2]}`,
    // `${perm[3]} / ${perm[0]} / ${perm[1]} * ${perm[2]}`,
    // `${perm[3]} / ${perm[0]} * ${perm[1]} * ${perm[2]}`,

    // //3021
    // `${perm[3]} + ${perm[0]} + ${perm[2]} + ${perm[1]}`,
    // `${perm[3]} + ${perm[0]} + ${perm[2]} - ${perm[1]}`,
    // `${perm[3]} + ${perm[0]} - ${perm[2]} - ${perm[1]}`,
    // `${perm[3]} + ${perm[0]} + ${perm[2]} * ${perm[1]}`,
    // `${perm[3]} + ${perm[0]} * ${perm[2]} * ${perm[1]}`,
    // `${perm[3]} + ${perm[0]} + ${perm[2]} / ${perm[1]}`,
    // `${perm[3]} + ${perm[0]} / ${perm[2]} / ${perm[1]}`,

    // `${perm[3]} - ${perm[0]} - ${perm[2]} - ${perm[1]}`,
    // `${perm[3]} - ${perm[0]} - ${perm[2]} + ${perm[1]}`,
    // `${perm[3]} - ${perm[0]} + ${perm[2]} + ${perm[1]}`,
    // `${perm[3]} - ${perm[0]} - ${perm[2]} * ${perm[1]}`,
    // `${perm[3]} - ${perm[0]} * ${perm[2]} * ${perm[1]}`,
    // `${perm[3]} - ${perm[0]} - ${perm[2]} / ${perm[1]}`,
    // `${perm[3]} - ${perm[0]} / ${perm[2]} / ${perm[1]}`,
    // `${perm[3]} * ${perm[0]} * ${perm[2]} * ${perm[1]}`,
    // `${perm[3]} * ${perm[0]} * ${perm[2]} + ${perm[1]}`,
    // `${perm[3]} * ${perm[0]} + ${perm[2]} + ${perm[1]}`,
    // `${perm[3]} * ${perm[0]} * ${perm[2]} - ${perm[1]}`,
    // `${perm[3]} * ${perm[0]} - ${perm[2]} - ${perm[1]}`,
    // `${perm[3]} * ${perm[0]} * ${perm[2]} / ${perm[1]}`,
    // `${perm[3]} * ${perm[0]} / ${perm[2]} / ${perm[1]}`,

    // `${perm[3]} / ${perm[0]} / ${perm[2]} / ${perm[1]}`,
    // `${perm[3]} / ${perm[0]} / ${perm[2]} + ${perm[1]}`,
    // `${perm[3]} / ${perm[0]} + ${perm[2]} + ${perm[1]}`,
    // `${perm[3]} / ${perm[0]} / ${perm[2]} - ${perm[1]}`,
    // `${perm[3]} / ${perm[0]} - ${perm[2]} - ${perm[1]}`,
    // `${perm[3]} / ${perm[0]} / ${perm[2]} * ${perm[1]}`,
    // `${perm[3]} / ${perm[0]} * ${perm[2]} * ${perm[1]}`,

    // //3102
    // `${perm[3]} + ${perm[1]} + ${perm[0]} + ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} + ${perm[0]} - ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} - ${perm[0]} - ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} + ${perm[0]} * ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} * ${perm[0]} * ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} + ${perm[0]} / ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} / ${perm[0]} / ${perm[2]}`,

    // `${perm[3]} - ${perm[1]} - ${perm[0]} - ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} - ${perm[0]} + ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} + ${perm[0]} + ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} - ${perm[0]} * ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} * ${perm[0]} * ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} - ${perm[0]} / ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} / ${perm[0]} / ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} * ${perm[0]} * ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} * ${perm[0]} + ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} + ${perm[0]} + ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} * ${perm[0]} - ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} - ${perm[0]} - ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} * ${perm[0]} / ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} / ${perm[0]} / ${perm[2]}`,

    // `${perm[3]} / ${perm[1]} / ${perm[0]} / ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} / ${perm[0]} + ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} + ${perm[0]} + ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} / ${perm[0]} - ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} - ${perm[0]} - ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} / ${perm[0]} * ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} * ${perm[0]} * ${perm[2]}`,

    // //3120
    // `${perm[3]} + ${perm[1]} + ${perm[2]} + ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} + ${perm[2]} - ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} - ${perm[2]} - ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} + ${perm[2]} * ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} * ${perm[2]} * ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} + ${perm[2]} / ${perm[2]}`,
    // `${perm[3]} + ${perm[1]} / ${perm[2]} / ${perm[2]}`,

    // `${perm[3]} - ${perm[1]} - ${perm[2]} - ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} - ${perm[2]} + ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} + ${perm[2]} + ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} - ${perm[2]} * ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} * ${perm[2]} * ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} - ${perm[2]} / ${perm[2]}`,
    // `${perm[3]} - ${perm[1]} / ${perm[2]} / ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} * ${perm[2]} * ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} * ${perm[2]} + ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} + ${perm[2]} + ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} * ${perm[2]} - ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} - ${perm[2]} - ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} * ${perm[2]} / ${perm[2]}`,
    // `${perm[3]} * ${perm[1]} / ${perm[2]} / ${perm[2]}`,

    // `${perm[3]} / ${perm[1]} / ${perm[2]} / ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} / ${perm[2]} + ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} + ${perm[2]} + ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} / ${perm[2]} - ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} - ${perm[2]} - ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} / ${perm[2]} * ${perm[2]}`,
    // `${perm[3]} / ${perm[1]} * ${perm[2]} * ${perm[2]}`,

    // //3201
    // `${perm[3]} + ${perm[2]} + ${perm[0]} + ${perm[1]}`,
    // `${perm[3]} + ${perm[2]} + ${perm[0]} - ${perm[1]}`,
    // `${perm[3]} + ${perm[2]} - ${perm[0]} - ${perm[1]}`,
    // `${perm[3]} + ${perm[2]} + ${perm[0]} * ${perm[1]}`,
    // `${perm[3]} + ${perm[2]} * ${perm[0]} * ${perm[1]}`,
    // `${perm[3]} + ${perm[2]} + ${perm[0]} / ${perm[1]}`,
    // `${perm[3]} + ${perm[2]} / ${perm[0]} / ${perm[1]}`,

    // `${perm[3]} - ${perm[2]} - ${perm[0]} - ${perm[1]}`,
    // `${perm[3]} - ${perm[2]} - ${perm[0]} + ${perm[1]}`,
    // `${perm[3]} - ${perm[2]} + ${perm[0]} + ${perm[1]}`,
    // `${perm[3]} - ${perm[2]} - ${perm[0]} * ${perm[1]}`,
    // `${perm[3]} - ${perm[2]} * ${perm[0]} * ${perm[1]}`,
    // `${perm[3]} - ${perm[2]} - ${perm[0]} / ${perm[1]}`,
    // `${perm[3]} - ${perm[2]} / ${perm[0]} / ${perm[1]}`,
    // `${perm[3]} * ${perm[2]} * ${perm[0]} * ${perm[1]}`,
    // `${perm[3]} * ${perm[2]} * ${perm[0]} + ${perm[1]}`,
    // `${perm[3]} * ${perm[2]} + ${perm[0]} + ${perm[1]}`,
    // `${perm[3]} * ${perm[2]} * ${perm[0]} - ${perm[1]}`,
    // `${perm[3]} * ${perm[2]} - ${perm[0]} - ${perm[1]}`,
    // `${perm[3]} * ${perm[2]} * ${perm[0]} / ${perm[1]}`,
    // `${perm[3]} * ${perm[2]} / ${perm[0]} / ${perm[1]}`,

    // `${perm[3]} / ${perm[2]} / ${perm[0]} / ${perm[1]}`,
    // `${perm[3]} / ${perm[2]} / ${perm[0]} + ${perm[1]}`,
    // `${perm[3]} / ${perm[2]} + ${perm[0]} + ${perm[1]}`,
    // `${perm[3]} / ${perm[2]} / ${perm[0]} - ${perm[1]}`,
    // `${perm[3]} / ${perm[2]} - ${perm[0]} - ${perm[1]}`,
    // `${perm[3]} / ${perm[2]} / ${perm[0]} * ${perm[1]}`,
    // `${perm[3]} / ${perm[2]} * ${perm[0]} * ${perm[1]}`,

    // //3210
    // `${perm[3]} + ${perm[2]} + ${perm[1]} + ${perm[0]}`,
    // `${perm[3]} + ${perm[2]} + ${perm[1]} - ${perm[0]}`,
    // `${perm[3]} + ${perm[2]} - ${perm[1]} - ${perm[0]}`,
    // `${perm[3]} + ${perm[2]} + ${perm[1]} * ${perm[0]}`,
    // `${perm[3]} + ${perm[2]} * ${perm[1]} * ${perm[0]}`,
    // `${perm[3]} + ${perm[2]} + ${perm[1]} / ${perm[0]}`,
    // `${perm[3]} + ${perm[2]} / ${perm[1]} / ${perm[0]}`,

    // `${perm[3]} - ${perm[2]} - ${perm[1]} - ${perm[0]}`,
    // `${perm[3]} - ${perm[2]} - ${perm[1]} + ${perm[0]}`,
    // `${perm[3]} - ${perm[2]} + ${perm[1]} + ${perm[0]}`,
    // `${perm[3]} - ${perm[2]} - ${perm[1]} * ${perm[0]}`,
    // `${perm[3]} - ${perm[2]} * ${perm[1]} * ${perm[0]}`,
    // `${perm[3]} - ${perm[2]} - ${perm[1]} / ${perm[0]}`,
    // `${perm[3]} - ${perm[2]} / ${perm[1]} / ${perm[0]}`,
    // `${perm[3]} * ${perm[2]} * ${perm[1]} * ${perm[0]}`,
    // `${perm[3]} * ${perm[2]} * ${perm[1]} + ${perm[0]}`,
    // `${perm[3]} * ${perm[2]} + ${perm[1]} + ${perm[0]}`,
    // `${perm[3]} * ${perm[2]} * ${perm[1]} - ${perm[0]}`,
    // `${perm[3]} * ${perm[2]} - ${perm[1]} - ${perm[0]}`,
    // `${perm[3]} * ${perm[2]} * ${perm[1]} / ${perm[0]}`,
    // `${perm[3]} * ${perm[2]} / ${perm[1]} / ${perm[0]}`,

    // `${perm[3]} / ${perm[2]} / ${perm[1]} / ${perm[0]}`,
    // `${perm[3]} / ${perm[2]} / ${perm[1]} + ${perm[0]}`,
    // `${perm[3]} / ${perm[2]} + ${perm[1]} + ${perm[0]}`,
    // `${perm[3]} / ${perm[2]} / ${perm[1]} - ${perm[0]}`,
    // `${perm[3]} / ${perm[2]} - ${perm[1]} - ${perm[0]}`,
    // `${perm[3]} / ${perm[2]} / ${perm[1]} * ${perm[0]}`,
    // `${perm[3]} / ${perm[2]} * ${perm[1]} * ${perm[0]}`,
  ]

  for (const expr of expressions) {
    if (eval(expr) === 24) {
      console.log(`24: ${expr}`)
    }
  }
}
