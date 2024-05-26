export default function uniq(arr) {
  const uniqArr = []

  for(const i in arr)
    if(i == arr.lastIndexOf(arr[i]))
      uniqArr.push(arr[i])

  return uniqArr
}
