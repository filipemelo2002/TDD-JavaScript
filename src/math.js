class Math {
 sum(a, b, callback){
    setTimeout(()=>{
      callback(a +  b)
    }, 5)
  }

  printSum(req, res, a,b) {
    res.load('index', a + b)
  }
}

module.exports = Math