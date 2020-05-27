const id = (pokeData, id) => {
    const pokeD = pokeData.find(element => element.id == id);
    if (pokeD) {
        return pokeD;
    } else {
        return null;
    }

}
module.exports = id;