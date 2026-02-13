function generarDatos(size) {
  return Array.from({ length: size }, (_, i) => i);
}


function testFilterMap(arr) {
  console.time("filter+map");

  const result = arr
    .filter(n => n % 2 === 0)
    .map(n => n * 2);

  console.timeEnd("filter+map");
  return result;
}

function testReduce(arr) {
  console.time("reduce");

  const result = arr.reduce((acc, n) => {
    if (n % 2 === 0) acc.push(n * 2);
    return acc;
  }, []);

  console.timeEnd("reduce");
  return result;
}

function testFor(arr) {
  console.time("for");

  const result = [];
  for (let i = 0; i < arr.length; i++) {
    const n = arr[i];
    if (n % 2 === 0) {
      result.push(n * 2);
    }
  }

  console.timeEnd("for");
  return result;
}

function runBenchmark(size) {
  console.log("\n======================");
  console.log("Tamaño:", size);
  console.log("======================");

  const data = generarDatos(size);

  testFilterMap(data);
  testReduce(data);
  testFor(data);
}

[10_000, 100_000, 1_000_000, 5_000_000].forEach(runBenchmark);
