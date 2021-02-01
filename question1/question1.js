const persons = [
	{"name": "rick", "cars": ["Corvette Z06", "Lotus Exite S"]},
	{"name": "john", "cars": ["BMW 320D"]},
	{"name": "zing", "cars": ["Honda Jazz", "Honda Click", "Honda Waves"]}
]

function printPerson(person) {
	let str_name = person.name.charAt(0).toUpperCase() + person.name.slice(1)
	let str_car_list = person.cars.toString()
	console.log(`${str_name} want to buy ${str_car_list}`)
}

let sorted_persons = persons.sort((a, b) =>{
	if(a.name < b.name){
		return -1
	}
	if(a.name > b.name){
		return 1
	}
	return 0
})
console.log(sorted_persons)
sorted_persons.forEach(person => {
	printPerson(person)
});