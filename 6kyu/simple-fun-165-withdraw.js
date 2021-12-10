// Simple Fun #165: Withdraw

function withdraw(n) {
  const addTriads = (a, b) => {
    if (a === null || b === null) return null;
    return [a[0] + b[0], a[1] + b[1], a[2] + b[2]];
  };
  if (n === 20) return [0, 0, 1];
  if (n === 50) return [0, 1, 0];
  if (n === 100) return [1, 0, 0];
  if (n < 20) return null;
  return (
    addTriads(withdraw(n - 100), [1, 0, 0]) ||
    addTriads(withdraw(n - 50), [0, 1, 0]) ||
    addTriads(withdraw(n - 20), [0, 0, 1])
  );
}

const Test = {
  assertDeepEquals: (a, b) => console.log(a[0] === b[0] && a[1] === b[1] && a[2] === b[2])
}

Test.assertDeepEquals(withdraw(40),[0, 0, 2])
Test.assertDeepEquals(withdraw(250),[2, 1, 0])
Test.assertDeepEquals(withdraw(260),[2, 0, 3])
Test.assertDeepEquals(withdraw(230),[1, 1, 4])
Test.assertDeepEquals(withdraw(60),[0, 0, 3])
