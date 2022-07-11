//const ducks = require('./db.json')
//let globalId = 0;

module.exports = {
 // do not change this code
    getCompliment: (req, res) => {
        const compliments = ["Gee, you're a smart cookie!", "Cool shirt!", "Your Javascript skills are stellar."];

      
        // choose random compliment
        let randomIndex = Math.floor(Math.random() * compliments.length);
        let randomCompliment = compliments[randomIndex];
        res.status(200).send(randomCompliment);

    },
    getFortune :(req,res) =>{
        const fortunes = ["A beautiful, smart, and loving person will be coming into your life.!", " good friendship is often more important than a passionate romance!", "A lifetime friend shall soon be made.","A small donation is call for. It’s the right thing to do.", "An acquaintance of the past will affect you in the near future."];
          //choose a random fortune
          let randomIndexTwo = Math.floor(Math.random() * fortunes.length);
          let randomFortunes = fortunes[randomIndexTwo];
          res.status(200).send(randomFortunes);
    },
    getCoinFlip :(req,res) =>{
        const sides = ["heads", "tails", "edge"];
          //choose a random coin side
          let randomIndexThree = Math.floor(Math.random() * sides.length);
          let randomSides = sides[randomIndexThree];
          res.status(200).send(randomSides);
    },
    getColor :(req,res) =>{

          res.status(200).send("yellow");
    },
    //  changeBackgroundColor:(req,res) =>{
    //     const colors = ["green", "yellow","black","white","blue"];
    //     //choose a random fortune
    //     let randomIndexFour = Math.floor(Math.random() * colors.length);
    //     let randomBackgroundColor = sides[randomIndex];
    //     res.status(200).send(randomBackgroundColor);
    //  }
//      placeDuck :(req,res) =>{

//         res.status(200).send("yellow");
//   },

//      deleteDuck :(req,res) =>{
//      
//}

}