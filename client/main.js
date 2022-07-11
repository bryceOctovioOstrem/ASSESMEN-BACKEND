const complimentBtn = document.getElementById("complimentButton")
const fortuneButton= document.getElementById("fortuneButton")
const coinButton= document.getElementById("coinButton")
const colorButton = document.getElementById("colorButton")


const getCompliment = () => {
    axios.get("http://localhost:4000/api/compliment/")
        .then(res => {
            const data = res.data;
            alert(data);
    });
};
 const getFortune = () => {
     axios.get("http://localhost:4000/api/fortune/")
         .then(res => {
            const data = res.data;
             alert(data);
     });
 };
 const getCoinFlip = () => {
    axios.get("http://localhost:4000/api/coinFlip/")
        .then(res => {
           const data = res.data;
            alert(data);
    });
};
const getColor = () => {
    axios.get("http://localhost:4000/api/color/")
        .then(res => {
           const data = res.data;
            alert(data);
    });
};


colorButton.addEventListener('click', getColor)
complimentBtn.addEventListener('click', getCompliment)
fortuneButton.addEventListener('click', getFortune)
coinButton.addEventListener('click', getCoinFlip)