const gameContainer = document.querySelector('.container');
const userResult = document.querySelector('.result__user img');
const cpuResult = document.querySelector(".result__cpu img");
const result = document.querySelector('.result__text');
const optionImages = document.querySelectorAll(".result__options-image");

optionImages.forEach((image, index) => {
    image.addEventListener('click', (e) => {
        image.classList.add('active');
    optionImages.forEach((imageTwo,indexTwo)=>{
        index !== indexTwo && imageTwo.classList.remove("active");
    });
    let imgSrc = e.target.querySelector('img').src;
        userResult.src = imgSrc;
    
        let randomNumber = Math.floor(Math.random() * 3);
        console.log(randomNumber);
        let cpuImages = ["img/rock.png", "img/paper.png", "img/scissors.png"];
        cpuResult.src = cpuImages[randomNumber];

        let cpuValue = ['R','P','S'][randomNumber];
        let userValue = ["R", "P", "S"][index];
        let outComes = {
            RR: 'Draw',
            RP: 'Cpu',
            RS: 'User',
            PP: 'Draw',
            PS: 'Cpu',
            PR:'User',
            SS: 'Draw',
            SR:'Cpu',
            SP:'User'
        };
        let outComeValue = outComes[userValue + cpuValue];
        result.textContent = userValue === cpuValue ? 'Match Draw' : `${outComeValue} Won!!!`;
        console.log(outComeValue);
    })

})