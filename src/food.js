// comment
console.log('code');
console.log('more code');
// another comment
let something = 'test';

const getTheRightFood = (animel) => {
    if (animel === 'cat') {
        const catFood = ['fish', 'milk', 'meat'];
        // cat food is fish - return it
        return catFood;
    } else if (animel === 'dog') {
        return 'meat';
    } else {
        return 'grass';
    }
}

const getCatsFood = () => {
    return getTheRightFood('cat');
}