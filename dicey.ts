class NewDie {
    //interfaces
    value: number;
    sum: number;
    NewDie: object;
    newDie: JQuery<HTMLElement> //????????

   
    

    // static property variable to store created die objects
    // all dice share access to the array
    static diceArray: NewDie[] = [];
    // static property function
    static rollFunc() {
        NewDie.diceArray.forEach(pizza => pizza.roll());
    }
    // 
    static summingFunc() {
        let sum = 0
        NewDie.diceArray.forEach(die => sum += die.value);
        alert(sum);
    }
    constructor() {
        // adds handleEvents() method to NewDie object upon creation
        this.handleEvents();
        // adds roll() method to NewDie object upon creation, value from 1-6
        this.roll();
        //  adds each NewDie object to dieArray
        NewDie.diceArray.push(this);
        console.log(NewDie.diceArray)
        console.log(this)
        //  inserts '<div class="die">{value from this.roll}</div>'
        this.newDie.appendTo('#dice-container');
    }
    // class method: rolls all dice, giving them new value
    roll() {
        // random number 1-6
        this.value = Math.floor(Math.random() * 6) + 1;
        this.newDie.text(this.value);
    }
    // class method:  click rerolls die when clicked.   dblclick removes die from DOM and from dieArray
    handleEvents() {
        this.newDie = $('<div class="die"></div>').click(() => this.roll());
        this.newDie.dblclick(() => {
            this.newDie.remove();
            //  removes only dblclicked die from dieArray
            NewDie.diceArray.splice(NewDie.diceArray.indexOf(this), 1);
        })
    }
}

// creates new die
$('#btn-make-die').click(() => {
    new NewDie();
});

// calls static property function rollFunc, on all dice
$('#btn-roll-dide').click(() => NewDie.rollFunc());

// calls static property function
$('#btn-sum').click(() => NewDie.summingFunc());