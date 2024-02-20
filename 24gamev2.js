function game24(num) {
  const arr = num.toString().split("")
  console.log(arr)

  const permutations = [
    [arr[0], arr[1], arr[2], arr[3]],
    [arr[0], arr[2], arr[1], arr[3]],
    [arr[0], arr[3], arr[1], arr[2]],
  ]

  for (const perm of permutations) {
    //   console.log(perm)

    const expressions = [
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
    ]

    for (const expr of expressions) {
      if (eval(expr) === 24) {
        console.log(`${expr} = 24`)
      }
    }
  }
}
let randomValue = Math.floor(Math.random() * 9000) + 1000

// game24(6432)
// game24(6659)
game24(randomValue)
