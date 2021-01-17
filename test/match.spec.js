const assert = require('assert')
const Math = require('../src/math.js')
const expect = require('chai').expect
const sinon = require('sinon')


describe('Math class', function(){
  it('Sum two numbers', function(done){
    this.timeout(10000)
    const math = new Math()

    math.sum(5, 5, (value)=>{
      expect(value).to.equals(10)
      done()
    })
    
  })

  it.only('Calls req with sum and index values', function(){
    const req = {}
    const res = {
      load: function load(){
        console.log("CALLED")
      }
    }
    sinon.spy(res, 'load')
    const math = new Math()

    math.printSum(req, res, 5, 5)

    expect(res.load.args[0][0]).to.be.equal('index')
  })
})