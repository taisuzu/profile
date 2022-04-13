var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
        rotate: 50,
        stretch: 0,
        depth: 100,
        modifier: 1,
        slideShadows: true,
    },
    pagination: {
        el: ".swiper-pagination",
    },
});

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("menuButton").addEventListener("click", function() {
        this.classList.toggle("active");
        document.getElementById("nav").classList.toggle("active");
        document.getElementById("mask").classList.toggle("active");
    })
});


//文字アニメーション
const animationTargetElements = document.querySelectorAll(".mainPicFont");

for (let i = 0; i < animationTargetElements.length; i++) {
    const targetElement = animationTargetElements[i];
    texts = targetElement.textContent;
    textsArray = [];

    targetElement.textContent = "";

    /*一旦テキストを配列に代入して中身を全部消す */
    for (let g = 0; g < texts.split("").length; g++) {
        if (texts.split("")[g] === " ") {
            textsArray.push(" ");
        } else {
            textsArray.push(
                '<span style="animation-delay: ' + (g * 0.04) + 's;">' + texts.split("")[g] + "</span>" /*split("")文字を一個一個配列に入れる */
            );
        }
    }
    /*一個一個の文字を配列にいれる */
    for (let j = 0; j < textsArray.length; j++) {
        targetElement.innerHTML += textsArray[j];
        /*innerHTML: */
    }
}


//送信ボタンアラート

function clickEvent(){
    alert('送信されました。')
}
