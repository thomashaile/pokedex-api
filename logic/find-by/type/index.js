const type = (pokeArray, type) => {

    const result = pokeArray.filter(element =>
        element["type"].find(item => item == type));

    if (!result) {
        return [];

    }
    const resultOutput = [];
    result.forEach(element => {
        resultOutput.push({ "num": element.num, "name": element.name })
    });
    return resultOutput;

};

module.exports = type;