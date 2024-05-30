/**
 * @param {integer} init
 * @return { increment: Function, decrement: Function, reset: Function }
 */
var createCounter = function(init) {
    let tally = 0;
    return {
        increment: (param) => {
            tally = tally + 1;
            return init + tally;
        },
        decrement: (param) => {
            tally = tally - 1;
            return init + tally;
        },
        reset: (param) => {
            tally = 0;
            return init + tally;
        }
    }
};

/**
 * const counter = createCounter(5)
 * counter.increment(); // 6
 * counter.reset(); // 5
 * counter.decrement(); // 4
 */