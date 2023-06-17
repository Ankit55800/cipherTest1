let returnLarger = (arr, num) => {
return arr.reduce((acc, curr)=>{
	if(curr > num){
	return acc.concat(curr) 
	}else{
	return acc
	}
}, [])
}

console.log(returnLarger( [6, 40, 16, 64, 15, 68], 26))
console.log(returnLarger([56, 54, 65, 4, 65], 50))

