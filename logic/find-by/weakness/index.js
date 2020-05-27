const weakness = (pokeArray, type) => {

    if (type === 'Normal') {
        return null;
    }

    //check if we have any pokemon with this weakness
    const resultArrayFull = pokeArray.filter(element =>
        element["weaknesses"].find(item => item === type));

    //return array include name and num
    const resultArrayExpected = [];
    resultArrayFull.forEach(element => {
        resultArrayExpected.push({ "name": element.name, "num": element.num })
    });
    return resultArrayExpected;

};

module.exports = weakness;