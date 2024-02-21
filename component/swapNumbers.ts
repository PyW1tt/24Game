export function runNumber(n: string): string[] {
  const nums: string[] = []
  const numbers: string[] = n.split("")

  for (let i = 0; i <= 3; i++) {
    for (let j = 0; j <= 3; j++) {
      if (i === j) continue

      for (let k = 0; k <= 3; k++) {
        if (k === i || k === j) continue

        for (let l = 0; l <= 3; l++) {
          if (l === i || l === j || l === k) continue

          const num: string =
            "" + numbers[i] + numbers[j] + numbers[k] + numbers[l]
          if (!nums.includes(num)) {
            nums.push(num)
          }
        }
      }
    }
  }
  return nums
}
