var NewDie = /** @class */ (function () {
    function NewDie() {
        // adds handleEvents() method to NewDie object upon creation
        this.handleEvents();
        // adds roll() method to NewDie object upon creation, value from 1-6
        this.roll();
        //  adds each NewDie object to dieArray
        NewDie.diceArray.push(this);
        console.log(NewDie.diceArray);
        console.log(this);
        //  inserts '<div class="die">{value from this.roll}</div>'
        this.newDie.appendTo('#dice-container');
    }
    // static property function
    NewDie.rollFunc = function () {
        NewDie.diceArray.forEach(function (pizza) { return pizza.roll(); });
    };
    // 
    NewDie.summingFunc = function () {
        var sum = 0;
        NewDie.diceArray.forEach(function (die) { return sum += die.value; });
        alert(sum);
    };
    // class method: rolls all dice, giving them new value
    NewDie.prototype.roll = function () {
        // random number 1-6
        this.value = Math.floor(Math.random() * 6) + 1;
        this.newDie.text(this.value);
    };
    // class method:  click rerolls die when clicked.   dblclick removes die from DOM and from dieArray
    NewDie.prototype.handleEvents = function () {
        var _this = this;
        this.newDie = $('<div class="die"></div>').click(function () { return _this.roll(); });
        this.newDie.dblclick(function () {
            _this.newDie.remove();
            //  removes only dblclicked die from dieArray
            NewDie.diceArray.splice(NewDie.diceArray.indexOf(_this), 1);
        });
    };
    // static property variable to store created die objects
    // all dice share access to the array
    NewDie.diceArray = [];
    return NewDie;
}());
// creates new die
$('#btn-make-die').click(function () {
    new NewDie();
});
// calls static property function rollFunc, on all dice
$('#btn-roll-dide').click(function () { return NewDie.rollFunc(); });
// calls static property function
$('#btn-sum').click(function () { return NewDie.summingFunc(); });
