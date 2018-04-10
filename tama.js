var Tama = function() {
    this.hungry = false;
    this.sleepy = false;
    this.bored = true;
    this.age = 0;
    this.feed = function() {
        if (this.hungry === true) {
            console.log("NOM NOM NOM NOM NOM!!... BUUURRRRrrrrrrrrrppp...")
            this.hungry = false;
        } else {
            console.log("I'm not hugnry! YOU EAT IT!")
        }
    }
    this.sleep = function() {
        if (this.sleepy === true) {
            console.log("ZZzzzzzzzzz....")
            this.sleepy = false;
            this.increaseAge();
        } else {
            console.log("I'M NOT TIRED!!!")
        }
    }
    this.play = function() {
        if (this.bored === true) {
            console.log("LET'S PLAY MONSTER!!  GRAWWWRRRRRRRRRrrrrrr!!!")
            this.bored = false;
        } else {
            console.log("I'm trying to read a book! GO AWAY!!!")
        }
    }
    this.increaseAge = function() {
        this.age++;
        console.log("I'M ONE DAY OLDER!! HAPPY BIRTHDAY EVERYDAY!!!!")
    }
}

var dog = new Tama(); {
    dog.outside = false;
    dog.bark = function() {
        console.log("B0rk b0rk b0rk!!")
    };
    dog.goOutside = function() {
        if (this.outside === false) {
            console.log("SO MANY SMELLS!!! SO MANY POOPS TO EAT!!!")
            this.outside = true;
            this.bark();
        } else {
            console.log("I'VE ALREADY BEEN EATING POOP OUT HERE AND YOU DIDN'T NOTICE!")
        }
    };
    dog.goInside = function() {
        if (this.outside === true) {
            console.log("BUT THERE'S STILL SO MANY POOPS TO EAT!!!... ok... (sad face)");
            this.outside === false;
        } else {
            console.log("We're already inside you dumb dumb stupid head!")
        }
    }
}

var cat = new Tama(); {
    peasentsCondition = 100;
    cat.meow = function () {
        console.log("Mao! Mao! Seize the means of production!")
    };
    cat.greatLeapForward = function () {
        if (peasentsCondition > 0) {
            peasentsCondition = peasentsCondition - 10;
            console.log("Give us woks so we can make steel!")
        } else {
            console.log("All the peasents are starving")
        }
    }
    cat.embraceCapitalism = function() {
        this.peasentsCondition = this.peasentsCondition + 25;
        console.log("iPhones for EVERYONE!!")
    }
}

var Grover = dog;
var Chairman = cat;

while (peasentsCondition > 0) {
    Chairman.greatLeapForward();
}