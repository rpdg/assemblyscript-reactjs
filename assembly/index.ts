// The entry file of your WebAssembly module.
NativeMath.seedRandom(1234);


export function add(a: i32, b: i32): i32 {
  return a + b;
}


export function factorial(num: f64): f64 {
  let rval: f64 = 1;
  let l = num + 1;
  for (let i: f64 = 2; i < l; i++)
    rval = rval * i;
  return rval;
}


export function scramble(input: string): string {
  let result = input;
  for (let n = 0; n < 100; n++) {
    const start = <i32> Math.floor(Math.random() * input.length);
    const end = start + <i32> Math.floor(Math.random() * (input.length - start));
    result = result.substring(0, start) + result.substring(end) + result.substring(start, end);
  }
  return result;
}