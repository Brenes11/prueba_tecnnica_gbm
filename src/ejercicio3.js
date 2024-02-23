function minimumJumps(testCases) {

    let negativeNumber = testCases.find((el) => el < 0);

    if (negativeNumber < 0) {
        console.log("El testCase no puede ser negativo");
        return "El testCase no puede ser negativo";
    } else {

        const results = testCases.map(data => {
            let initialPoint = 1;
            while (true) {
                const suma = (initialPoint * (initialPoint + 1)) / 2;
                if (suma >= data && (suma - data) % 2 === 0) {
                    return initialPoint;
                }
                initialPoint++;
            }
        });
        return results;
    }
}


const testCases = [2];
const output = minimumJumps(testCases);
if(output > 0) console.log(output.join('\n'));


module.exports = minimumJumps;