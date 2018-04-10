var dogs = {
        raining: true,
        noise: "Woof!",
        makeNoise: function() {
            if (this.raining === true) {
                console.log(this.noise)
            }
        }
}

var cats = {
    raining: false,
    noise: "Meow!",
    makeNoise: function() {
        if (this.raining === true) {
            console.log(this.noise)
        }
    }
}

cats.raining = true
dogs.makeNoise();
cats.makeNoise();