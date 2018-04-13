var callBack1 = function (str, func) {
    console.log(str);
}

var func1 = function () {
    console.log("Colla back girl!");
}

var func2 = function () {
    console.log("Ain't no calla back girl!")
}

callBack1("Does this work?", func1());

var bool = true;

var callBack2 = function (boo, func) {
    if (boo = true)
    func;
}

callBack2(bool, func2());