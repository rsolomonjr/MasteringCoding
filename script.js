const nemo = ['nemo'];
const everyone = ['dory', 'bruce', 'gill', 'hank'];

const findNemo = array => {
  array.forEach(fish => {
    if(fish === 'nemo') {
      console.log('found Nemo!');
    }
  })
}

const findNemo2 = array => {
 for (let fish of array) {
    if(fish === 'nemo') {
      console.log('found Nemo!');
    }
  }
}

findNemo(everyone);
findNemo2(everyone);