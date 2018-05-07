
window.onload = function () {

    // WORD CHOICES FOR THE GAME
    var avengers = [
        "hulk",
        "thor",
        "hawkeye",
        "loki",
        "antman",
        "spiderman",
        "ironman",
        "blackpanther",
    ];

    var images = {
        hulk: "./assets/images/hulk.jpeg",
        thor: "./assets/images/thor.png",
        hawkeye: "./assets/images/hawkeye.png",
        loki: "./assets/images/loki.png",
        antman: "./assets/images/antman.png",
        spiderman: "./assets/images/spiderman.png",
        ironman: "./assets/images/ironman.png",
        blackpanther: "./assets/images/blackpanther.png",
    };

    var wins = 0;
    var userGuess = 15;
    var letters = [];

    // INITIALIZATION   
    var selection = avengers[Math.floor(Math.random() * avengers.length)];
    console.log(selection);

    // DECLARING VARIABLES
    var winSpan = document.getElementById("wins");
    var userSpan = document.getElementById("userGuess");
    var letterSpan = document.getElementById("letters");
    var startDiv = document.getElementById("startDiv");
    var character = document.getElementById("hero");
    var charcterPic = document.getElementById("headShot");
    var restartGame = document.getElementById("restartButton");
    var validGuess = (event.keyCode < 91 && event.keyCode > 64);

    // ANSWERS ARRAY THAT IS DISPLAYED
    var answers = [];
    for (var i = 0; i < selection.length; i++) {
        answers[i] = "_";
    }
    var remaining = selection.length;
    console.log(remaining)


    // CREATING FUNCTIONS FOR RESTARTING THE GAME AND UPDATING INFORMATION
    function restartGame() {
        selection = avengers[Math.floor(Math.random() * avengers.length)];
        startDiv.innerHTML = (answers.join(" ")).toUpperCase();
        userGuess = 15;
        letters = [];
        character.innerHTML = "GUESS THE HERO!";
        characerPic.src = "./assets/images/thumbnail.png"
        updateHTML();
    }

    function superImage() {
        charcterPic.src = images[selection];
        character.style.fontSize = "6vh";
        character.innerHTML = "AVENGERS ASSEMBLE";
    }

    function updateHTML() {
        winSpan.textContent = wins;
        userSpan.textContent = userGuess;
        letterSpan.textContent = letters;
    }

    function youLose() {
        charcterPic.src = "./assets/images/thanos.jpg";
        character.innerHTML = "YOU HAVE BEEN DISINTEGRATED"

    }

    // GAME LOOP    

    // START GAME FROM BUTTON CLICK
    startDiv.onclick = function (event) {
        startDiv.innerHTML = (answers.join(" ")).toUpperCase();

        document.onkeyup = function (event) {
            var input = event.key;

            // MAKE SURE KEYS PRESSED ARE ONLY A-Z
            if (event.keyCode < 91 && event.keyCode > 64) {
                if (letters.indexOf(input.toUpperCase()) === -1) {
                    userGuess--;
                    letters.push(input.toUpperCase());

                    for (var j = 0; j < selection.length; j++) {
                        if (selection[j] === input) {
                            answers[j] = input;
                            remaining--;
                            // And stop logging [j] input
                            console.log(remaining);
                        }

                        startDiv.innerHTML = (answers.join(" ")).toUpperCase();

                        if (remaining === 0) {
                            wins++;
                            superImage();
                            // Display Button to Restart Game
                            restartGame.id = "restartButtonChange";
                            // if (button on click) {
                            // restartGame()
                            // }
                        }
            
                        else if (userGuess === 0) {
                            youLose();
                            // Display Button to Restart Game
            
                            // if (button on click) {
                            // restartGame()
                            // }
                        }
            
                        else {
                            updateHTML();
                        }
                    }
                }   


            }




        }
    }
    //DISABLE KEYUP AT END GAME
    // userGuess--;
    // letters.push(input);

    // }

    // else {
    //     alert("PLEASE USE ALPHABET ONLY")
    // }
}
