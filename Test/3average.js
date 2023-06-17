class Avg {
    constructor() {}

    static average(array) {
        var total = 0;
        var count = 0;

        jQuery.each(array, function(index, value) {
            total += value;
            count++;
        });

        return total / count;
    }
}

var arry = [1, 2, 3, 4, 5];
console.log(Avg.average(arry));