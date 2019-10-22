function flatten (arr) {
    return arr.reduce(
        (flattenArr, item) => flattenArr.concat(
            Array.isArray(item)
                ? flatten(item)
                : item
        ),
        []
    )
}

module.exports = flatten
