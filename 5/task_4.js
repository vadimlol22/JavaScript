const fn = (string) => {
    return metting = string.reduce((result, current) => {
        if (!result[current]) {
            result[current] = 0
            }

            result[current] += 1;
            return result
    }, {})
}








fn(["red", "green", "red", "blue", "blue"])
fn(["red", "red", "red", "red", "red", "red"]) 