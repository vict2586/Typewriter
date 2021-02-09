"use strict";

document.addEventListener("DOMContentLoaded", startOne);

/* ------------------------------------------------------------------------------- */

//makes one for each so that all my sentences can work
let textOne;
let textTwo;
let textThree;
let textFour;
let textFive;
let textSix;

//makes one for each so that all my sentences can work
let showtextOne;
let showtextTwo;
let showtextThree;
let showtextFour;
let showtextFive;
let showtextSix;

//makes one for each so that all my sentences can work
let sentenceOne = document.querySelector("#typewriterOne");
let sentenceTwo = document.querySelector("#typewriterToo");
let sentenceThree = document.querySelector("#typewriterThree");
let sentenceFour = document.querySelector("#typewriterFour");
let sentenceFive = document.querySelector("#typewriterFive");
let sentenceSix = document.querySelector("#typewriterSix");

//makes one for each so that all my sentences can work
let One = 1;
let Two = 1;
let Three = 1;
let Four = 1;
let Five = 1;
let Six = 1;


/* ------------------------------------------------------------------------------- */


//starts function one and tells when function two shall start 
    function startOne() {

    console.log("Done");
  
    //get text
    textOne = sentenceOne.textContent;
    textTwo = sentenceToo.textContent;
    textThree = sentenceThree.textContent;
    textFour = sentenceFour.textContent;
    textFive = sentenceFive.textContent;
    textSix = sentenceSix.textContent;
  
    //remove text
    sentenceOne.innerHTML = "";
    sentenceTwo.innerHTML = "";
    sentenceThree.innerHTML = "";
    sentenceFour.innerHTML = "";
    sentenceFive.innerHTML = "";
    sentenceSix.innerHTML = "";

    //tell first function to start
    writeTextOne();

    //telles second function to start 20 sek later
    setTimeout(startTwo, 20000);

    };
  
//tells what shall happen to the sentence
    function writeTextOne() {
  
      console.log("Working on it 1");
    
      //Set time and check for more letters
      showtextOne = textOne.substring(0, One);
      
      sentenceOne.textContent = showtextOne;
      if (One < textOne.length) {
        One++;
        setTimeout(writeTextOne, 300);
      };
      
    };


/* ------------------------------------------------------------------------------- */


//starts function two and tells when function three shall start
    function startTwo() {
        //tell second function to start
        writeTextTwo();

        //telles third function to start 10 sek later
        setTimeout(startThree, 10000);
    };

//tells what shall happen to the sentence
    function writeTextTwo() {
  
        console.log("Working on it 2");
      
        //Set time and check for more letters
        showtextTwo = textTwo.substring(0, Two);
        
        sentenceTwo.textContent = showtextTwo;
        if (Two < textTwo.length) {
          Two++;
          setTimeout(writeTextTwo, 300);
        };
  
    };


/* ------------------------------------------------------------------------------- */    


//starts function three and tells when function four shall start
    function startThree() {
        //tell third function to start
        writeTextThree();

        //telles fourth function to start 8 sek later
        setTimeout(startFour, 8000);
    };

//tells what shall happen to the sentence    
    function writeTextThree() {
  
        console.log("Working on it 3");
      
        //Set time and check for more letters
        showtextThree = textThree.substring(0, Three);
        
        sentenceThree.textContent = showtextThree;
        if (Three < textThree.length) {
          Three++;
          setTimeout(writeTextThree, 300);
        };
  
    };


/* ------------------------------------------------------------------------------- */


//starts function four and tells when function five shall start
    function startFour() {
        //tell fourth function to start
        writeTextFour();

        //telles fifth function to start 8 sek later
        setTimeout(startFive, 8000);
    };

//tells what shall happen to the sentence    
    function writeTextFour() {
  
        console.log("Working on it 4");
      
        //Set time and check for more letters
        showtextFour = textFour.substring(0, Four);
        
        sentenceFour.textContent = showtextFour;
        if (Four < textFour.length) {
          Four++;
          setTimeout(writeTextFour, 300);
        };
  
    };


/* ------------------------------------------------------------------------------- */


//starts function five and tells when function six shall start
    function startFive() {
        //tell fifth function to start
        writeTextFive();

        //telles sixth function to start 10 sek later
        setTimeout(startSix, 10000);
    };

//tells what shall happen to the sentence
    function writeTextFive() {
  
        console.log("Working on it 5");
      
        //Set time and check for more letters
        showtextFive = textFive.substring(0, Five);
        
        sentenceFive.textContent = showtextFive;
        if (Five < textFive.length) {
          Five++;
          setTimeout(writeTextFive, 300);
        };
  
    };

    
/* ------------------------------------------------------------------------------- */


//starts function six
    function startSix() {
        writeTextSix();
    };

//tells what shall happen to the sentence
    function writeTextSix() {
  
        console.log("Working on it 6");
      
        //Set time and check for more letters
        showtextSix = textSix.substring(0, Six);
        
        sentenceSix.textContent = showtextSix;
        if (Six < textSix.length) {
          Six++;
          setTimeout(writeTextSix, 300);
        };
  
    };
