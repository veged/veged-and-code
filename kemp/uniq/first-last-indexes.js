export default function(arr) {
  const uniqArr = []

  for(const i in arr) { // TODO in
    if(i == arr.lastIndexOf(arr[i])) {
      uniqArr.push(arr[i])
    }
  }

  return uniqArr
}
