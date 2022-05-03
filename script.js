const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'nemo', 'gill', 'hank'];

const findNemo = array => {
  array.forEach(fish => {
    if(fish === 'nemo') {
      console.log('Found Nemo!');
    } else {
      console.log('No Nemo');
    }
  })
}

const findPaul = array => {
 for (let fish of array) {
    if(fish === 'paul') {
      console.log('found Paul!');
    }  else {
      console.log('No Paul');
    }
  }
}

findNemo(everyone);
findPaul(everyone);