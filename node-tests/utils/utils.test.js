const expect = require('expect');
const utils = require('./utils');

it('should add two numbers', () => {
    var res = utils.add(33, 11);
    expect(res).toBe(44).toBeA('number');
});

it('should async add two numbers', (done) => {
    utils.asyncAdd(4, 3, (sum)=>{
        expect(sum).toBe(7).toBeA('number');
        done();
    });
});

it('should square a number', () => {
    var res = utils.square(3);
    expect(res).toBe(9).toBeA('number');
});

it('should async square a number', (done) => {
    utils.asyncSquare(3, (res)=>{
        expect(res).toBe(9).toBeA('number');
        done();
    });
});

it('should set first name and last name', ()=> {
    var user = {location:'blr',age:25};
    var res = utils.setName(user, 'moh vinsmoke');
    expect(res).toInclude({
        firstName:'moh',
        lastName:'vinsmoke'
    })
});

// it('should expect some values', ()=> {
//     // expect(12).toNotBe(11);
//     // expect({name:'moh'}).toEqual({name:'moh'});
//     // expect([2,3,4]).toInclude(2);
//     expect({
//         name:'moh',
//         age:25,
//         location:'blr'
//     }).toInclude({
//         age:25
//     })
// });
