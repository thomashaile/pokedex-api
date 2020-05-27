// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const keyValue = (pokeArray, key, value) => {

    const byKeyValue = pokeArray.find(element => element[key] == value);

    if (!byKeyValue) return null;

    const result = pokeArray.filter(element => element[key] == value);

    let resultOutPut = [];
    result.forEach(element => {
        resultOutPut.push({ "num": element.num, "name": element.name })
    });
    return resultOutPut;

};


module.exports = keyValue;