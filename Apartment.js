main(blocks,list)
  let hashMap = {}
  
  for(let key in list){
    hashMap[key] = blocks.map((el) => Infinity)
  }
 
for(let i = 1; i < blocks.length; i++){
    for(let item in hashMap){
    let currObj = blocks[item]
        if(currObj[item] === true){
          hashMap[item][i] = 0
        }else {
          hashMap[item][i] = hashMap[item][i - 1] + 1
        }
    }
 }


for(let j = blocks.length - 2; j >= 0; j--){
   for(let item in hashMap){
          hashMap[item][i] = Math.min(hashMap[item][j], hashMap[item][j + 1] + 1)
    }
}
let result = []

for(let i = 0; i < blocks.length; i++){
let maxDist = -Infinity
  for(let item in hashMap){
     maxDist = Math.max(maxDist, hashMap[item][i])
  }
  result[i] = maxDist
}

return result.indexOf(Math.min(...result))


function apartmentHunting(blocks, reqs) {
  let hashMap = {}
  for(let items of reqs){
    hashMap[items] = blocks.map((el) => Infinity)
  }
  
  for(let i = 1; i < blocks.length; i++){
    for(let items of reqs){
      let currObj = blocks[i]
      if(currObj[items]){
        hashMap[items][i] = 0
      }else {
        hashMap[items][i] = hashMap[items][i - 1] + 1
      }
    }
  }
  
  
  for(let j = blocks.length - 2; j >= 0; j--){
    for(let items of reqs){
      hashMap[items][j] = Math.min(hashMap[items][j], hashMap[items][j + 1] + 1)
    }
  }
  
  let result = []
  
  for(let i = 0; i < blocks.length; i++){
  let maxDist = -Infinity
    for(let items of reqs){
      maxDist = Math.max(maxDist, hashMap[items][i])
    }
    result[i] = maxDist
  }
  
  return result.indexOf(Math.min(...result))
}