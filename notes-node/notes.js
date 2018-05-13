console.log('Starting node.js')

// console.log(module)

// module.exports.age = 25

module.exports.addNote = () => {
    console.log('addNote');
    return 'New note';
}

module.exports.addFunc = (a,b) => {
    console.log('addFunc');
    return a+b;
}
