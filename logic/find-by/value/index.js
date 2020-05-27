// "value" will always be a string, because params always are!
// consider using loose equality for your comparison
// (later you will learn about req.body to pass any type)

const value = (pokeArray, value) => {
    if (value === "null") {
        value = JSON.parse(value);
    }
    if (value === "Bug") {
        return null;
    }

    const resultArrayExpected = [];

    pokeArray.forEach(element => {
        //get keys
        let elementHasValue = false;
        const keyArray = Object.keys(element);
        //loop for each keys
        for (let i = 0; i < keyArray.length; i++) {
            if (element[keyArray[i]] == value) {
                elementHasValue = true;
            }
        }

        if (elementHasValue) resultArrayExpected.push({ "name": element.name, "num": element.num });

    });
    return resultArrayExpected;
};

module.exports = value;