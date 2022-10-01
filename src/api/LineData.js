function getLineData(value, times) {
  var data = []

  for(var i=0; i < times; i++) {
    data.push(value)
  }

  return data
}
export default getLineData
