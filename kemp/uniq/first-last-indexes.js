export default function(arr) {
  const uniqArr = [];

  for (let i = 0; i < arr.length; i++) { // TODO in
    if (i === arr.lastIndexOf(arr[i])) {
      uniqArr.push(arr[i])
    }
  }

  return uniqArr;
}

