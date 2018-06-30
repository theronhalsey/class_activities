var stuff = [10,34,56,67,93,120,137,168,259,280,311,342,413,514];

var random_value = stuff[ Math.floor( Math.random() * 14 ) ];

/* for (i = 0; i < stuff.length; i++) {
    if (stuff[i] === random_value) {
        alert(`${stuff[i]} = ${random_value}`)
    } else {
        alert("No Match")
    }
} */

const binarySearch = function(array, value) {
    (arrayFirstHalf = () => {
        for (let i = 0; i < array.length / 2; i++) {
            arrayFirstHalf.push(array[i])
            return;
        };
    })();
    (arraySecondHalf = () => {
        for (let i = array.length / 2; i < array.length; i++)  {
            arraySecondHalf.push(array[i])
            return
        };
    })();
}