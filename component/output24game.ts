type Operation = "add" | "sub" | "mul" | "div"

export const opList: Operation[] = ["div", "add", "sub", "mul"]

export const ops: Operation[][] = product(opList, 3)

export const opMap: Record<Operation, string> = {
  add: "+",
  sub: "-",
  mul: "x",
  div: "/",
}

export const opFunc: Record<Operation, (a: number, b: number) => number> = {
  add: (a, b) => a + b,
  sub: (a, b) => a - b,
  mul: (a, b) => a * b,
  div: (a, b) => a / b,
}

export function product<T>(iterables: T[], repeat: number): T[][] {
  let argv = Array.from(arguments)
  let argc = argv.length

  if (argc === 2 && !isNaN(argv[argc - 1])) {
    const copies: T[][] = []

    for (let i = 0; i < argv[argc - 1]; i++) {
      copies.push([...argv[0]])
    }

    argv = copies
  }

  return argv.reduce(
    function tl(accumulator: T[][], value: T[]) {
      const tmp: T[][] = []

      accumulator.forEach(function (a0) {
        value.forEach(function (a1) {
          tmp.push([...a0, a1])
        })
      })

      return tmp
    },
    [[]]
  )
}

export function uniqueList<T>(list: T[]): T[] {
  let ans: string[] = []

  for (let l of list) {
    let ls = JSON.stringify(l)
    if (ans.indexOf(ls) < 0) {
      ans.push(ls)
    }
  }

  return ans.map((x) => JSON.parse(x))
}

export function permutator<T>(inputArr: T[]): T[][] {
  let result: T[][] = []

  const permute = (arr: T[], m: T[] = []) => {
    if (arr.length === 0) {
      result.push(m)
    } else {
      for (let i = 0; i < arr.length; i++) {
        let curr = arr.slice()
        let next = curr.splice(i, 1)
        permute(curr.slice(), m.concat(next))
      }
    }
  }

  permute(inputArr)

  return result
}

export function is24(map: Record<string, number>): string[] {
  const middle2: string[] = []
  const numList: number[] = []
  let n1: number, n2: number, n3: number, n4: number

  const ans: string[] = []

  for (let key in map) {
    numList.push(Number(map[key]))
  }

  const ops: Operation[][] = product(opList, 3)

  const numLists = uniqueList(permutator(numList))

  for (let nums of numLists) {
    ;[n1, n2, n3, n4] = nums

    for (let op of ops) {
      let op1: Operation, op2: Operation, op3: Operation
      let opFunc1: (a: number, b: number) => number,
        opFunc2: (a: number, b: number) => number,
        opFunc3: (a: number, b: number) => number
      let result = 0
      let firstNum, secondNum, numStr
      ;[op1, op2, op3] = op
      ;[opFunc1, opFunc2, opFunc3] = op.map((x) => opFunc[x])

      const expression2 = (
        num1 = n1,
        num2 = n2,
        num3 = n3,
        num4 = n4,
        opr1 = op1,
        opr2 = op2,
        opr3 = op3
      ) =>
        `${num1}${opMap[opr1]}(${num2}${opMap[opr2]}(${num3}${opMap[opr3]}${num4}))`
      firstNum = opFunc3(n3, n4)
      secondNum = opFunc2(n2, firstNum)
      result = opFunc1(n1, opFunc2(n2, opFunc3(n3, n4)))
      numStr = firstNum.toString() + "\\" + secondNum.toString()
      if (result === 24 && middle2.indexOf(numStr) === -1) {
        middle2.push(numStr)
        ans.push(expression2())
      }

      const expression3 = (
        num1 = n1,
        num2 = n2,
        num3 = n3,
        num4 = n4,
        opr1 = op1,
        opr2 = op2,
        opr3 = op3
      ) =>
        `(${num1}${opMap[opr1]}${num2})${opMap[opr2]}(${num3}${opMap[opr3]}${num4})`
      firstNum = opFunc1(n1, n2)
      secondNum = opFunc3(n3, n4)
      result = opFunc2(firstNum, secondNum)
      if (result === 24 && middle2.indexOf(numStr) === -1) {
        middle2.push(numStr)
        ans.push(expression3())
      }
    }
  }

  return ans
}
