const { describe } = require('node:test')
const {add, sub, mul, div} = require ('./math')

describe('math.js test', ()=>
{
    it("should add", ()=>{
        expect(add(1,2)).toBe(3);
    });

    it("should sub", ()=>{
        expect(sub(3,2)).toBe(1);
    });

    it("should mul", ()=>{
        expect(mul(1,2)).toBe(2);
    });

    it("should div", ()=>{
        expect(div(6,2)).toBe(3);
    });
})