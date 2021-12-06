String.prototype.piglatin = function () {
    const strArr = this.toLowerCase().split(" ");
    const alteredArr = strArr.map(str => {
        return `${str.slice(1)}${str[0]}ay`;
    })
    return alteredArr.join(" ");
}