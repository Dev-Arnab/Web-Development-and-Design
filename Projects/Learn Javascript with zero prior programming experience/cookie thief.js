let suspects = [];

for (let citizen of citizens) {
	if(citizen.firstName.length === 7){
		if(citizen.age > 35){
			if(citizen.height <= 170){
				if(citizen.smokes === false){
					suspects.push(citizen);
				}
			}
		}
	}
    
}

console.log("The first citizen off the list is ", citizens[0].firstName, citizens[0].age, citizens[0].height, citizens[0].smokes);
console.log(suspects);