const nemo = ['nemo']

const findNemo = (array) => {
  for(let i = 0; i < array.lenght; i++){
    if(array[i] === 'nemo'){
      console.log('Found NEMO!')
    }
  }
}

console.log(findNemo(nemo))