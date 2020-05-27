const weakness = require("../find-by/weakness/index");
const types = require("../find-by/type/index");

const typeStats = (pokeArray, type) => {

    return {
        "typeCount": types(pokeArray, type).length,
        "typeName": type,
        "weaknessCount": weakness(pokeArray, type).length
    };

};

module.exports = typeStats;