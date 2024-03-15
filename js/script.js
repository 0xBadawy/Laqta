
function GetRundomNumber() {
    var N1= Math.floor(Math.random() * 10);
    var N2= Math.floor(Math.random() * 10);
    console.log(N1+N2);
    return N1 + N2;    
}
var topparant;
var size;
var arr = ["العاتولة", "المداح", "لحشاشين", "مسار إجباري", "بيت الرفاعي",
    "صدفة", "لانش بوكس", "سر إلهي", "المعلم", "مصطفى شعبان"];

apeend('parant2', 28);
apeend('parant1', 14);

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
        ElemnetImage.src = "../images/film ("+RundomNumber+").webp";
        ElemnetCardContent.className = 'card-content';   
        
        ElemnetH3.appendChild(TextH3);
        ElemnetP.appendChild(TextP);

        ElemnetCard.appendChild(ElemnetImage);
        ElemnetCard.appendChild(ElemnetCardContent);
        ElemnetCardContent.appendChild(ElemnetH3);
        ElemnetCardContent.appendChild(ElemnetP);

        parant.appendChild(ElemnetCard);
    }
}
