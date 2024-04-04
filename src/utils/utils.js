export function getAliasByName(name, id) {
    return name.replace(/ /g, "-").toLowerCase() + "-" + id.slice(0, 5);
}