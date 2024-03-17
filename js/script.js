
function GetRundomNumber() {
    return Math.floor(Math.random() * 600) + 1;
}


var topparant;
var size;
var arr = ["العاتولة", "المداح", "لحشاشين", "مسار إجباري", "بيت الرفاعي",
    "صدفة", "لانش بوكس", "سر إلهي", "المعلم", "مصطفى شعبان"];

apeend('parant2', 40);
apeend('parant1', 14);
apeend('parant33', 14);

apeend('parantq', 15);



function apeend(topparant,size) {
    for (let i = 0; i < size; i++) {
        let ElemnetCard = document.createElement('div');
        let ElemnetImage = document.createElement('img');
        let ElemnetCardContent = document.createElement('div');
        let ElemnetH3 = document.createElement('h3');
        let ElemnetP = document.createElement('p');

        var parant = document.getElementById(topparant);
        let TextH3 = document.createTextNode(arr[Math.floor(Math.random() * 10)]);
        let TextP = document.createTextNode('2024');

        ElemnetCard.className = 'card';
        ElemnetImage.className = 'FilmImage';
        var RundomNumber = GetRundomNumber();
        console.log("../images/film ("+RundomNumber+").jpeg");
        ElemnetImage.src = "../images/film ("+RundomNumber+").jpeg";
        ElemnetCardContent.className = 'card-content';   
        
        ElemnetH3.appendChild(TextH3);
        ElemnetP.appendChild(TextP);

        ElemnetCard.appendChild(ElemnetImage);
        ElemnetCard.appendChild(ElemnetCardContent);
        ElemnetCardContent.appendChild(ElemnetH3);
        ElemnetCardContent.appendChild(ElemnetP);

        parant.appendChild(ElemnetCard);
    }
};