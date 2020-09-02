var card = document.getElementsByClassName('card');
for (var i = 0; i < card.length; i++) {
    card[i].addEventListener('click', flipCard);
}
var imgSrc = [];
var items = [];
var counter = 0;
function flipCard() {
    this.style.transform = "rotateY(180deg)"; //add rotateY to card
    var firstImg = this.getElementsByTagName('img')[0].src;
    imgSrc.push(firstImg);
    if (this.classList.contains('open')) {
        this.style.transform = "rotateY(360deg)";
        this.classList.remove('open');
    }
    else {
        this.classList.add("open");
        console.log(items);

        if (imgSrc.length == 2) {
            if (imgSrc[1] === imgSrc[0]) {
                matchCard();
            } else {
                notMatch()
            }
        } else if (imgSrc.length > 2) {
            items = [];
            imgSrc = []
        }
        items.push(this);
    }
}
var count = 0;
function matchCard() {
    setTimeout(function () {
        items[0].style.visibility = 'hidden';
        items[1].style.visibility = 'hidden';
        items[0].removeEventListener('click', flipCard);
        items[1].removeEventListener('click', flipCard);
        imgSrc = [];
        items = []
        count++;
        document.getElementById('pass').innerHTML = "pass : " + count + "/ 8";
        if (count == 8) {
            alert("you won")
        }
    }, 1000);
    console.log("match");
}

function notMatch() {
    setTimeout(function () {
        items[0].style.transform = "rotateY(0deg)";
        items[1].style.transform = "rotateY(0deg)";
        items[0].classList.remove('open');
        items[1].classList.remove('open');
        imgSrc = [];
        items = []
    }, 500);
    console.log("nomatch");
    console.log(items);
}
var gameStart = document.getElementById('game-start')
gameStart.addEventListener('click', function () {
    setTimeout(function () {
        for (var i = 0; i < card.length; i++) {
            card[i].style.transform = 'rotateY(180deg)'
        }
        setTimeout(function () {
            for (var i = 0; i < card.length; i++) {
                card[i].style.transform = 'rotateY(0deg)'
            }
        }, 2000)
    }, 1000)
})
function shuffle(card) {
    for (var i = 0; i < 13; i++) {
        var randomPos = Math.floor(Math.random() * 12);
        card[i].style.order = randomPos;
    }
};
window.onload = shuffle(card);
