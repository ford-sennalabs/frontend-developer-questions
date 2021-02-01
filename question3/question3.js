const testCase = [
	[1,1,1,2,1,1],
	[0,0, 0.55, 0, 0],
	[1, 0, 0, 0, 0],
	[0, 1, 0, 0, 0]
]

const findUniq = (arr) => {
	let valuesAlreadySeen = []
	for(let i=0; i< arr.length; i++){
		let value = arr[i]
    if (valuesAlreadySeen.indexOf(value) !== -1) {
      continue
    }
    valuesAlreadySeen.push(value)
	}
	
	for(let index=0; index < valuesAlreadySeen.length; index++){
		let count = howManyDuplicate(valuesAlreadySeen[index], arr)
		if(count === 1){
			return valuesAlreadySeen[index]
		}
	}
}

const howManyDuplicate = (value, arr) => {
	let count = 0
	for(let i=0; i< arr.length;i++){
		if(arr[i] === value) {
			count = count + 1
		}
	}
	return count
}

testCase.forEach(currentCase => {
	let result = findUniq(currentCase)
	console.log(`case [${currentCase}] return ${result}`)
});