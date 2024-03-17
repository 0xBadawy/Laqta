
function GetRundomNumber() {
    return Math.floor(Math.random() * 600) + 1;
}


var topparant;
var size;
var arr = ["العاتولة", "المداح", "الحشاشين", "مسار إجباري", "بيت الرفاعي",
    "صدفة", "لانش بوكس", "سر إلهي", "المعلم", "مصطفى شعبان"];

// apeend('parantq', 15);


var map =
    [
    "&#1632;","&#1633;","&#1634;","&#1635;","&#1636;",
    "&#1637;","&#1638;","&#1639;","&#1640;","&#1641;"
    ];

    function getArabicNumbers(str)
    {
        var newStr = "";

        str = String(str);

        for(i=0; i<str.length; i++)
        {
            newStr += map[parseInt(str.charAt(i))];
        }

        return newStr;
}


function toArabicNumeral(en) {
    return ("" + en).replace(/[0-9]/g, function(t) {
        return "٠١٢٣٤٥٦٧٨٩".slice(+t, +t+1);
    });
}


function apeend(topparant,size) {
    for (let i = 0; i < size; i++) {
        let ElemnetCard = document.createElement('div');
        let ElemnetImage = document.createElement('img');
        let ElemnetCardContent = document.createElement('div');
        let ElemnetH3 = document.createElement('h3');
        let ElemnetP = document.createElement('p');
        let ElemnetA = document.createElement('h1');

        var parant = document.getElementById(topparant);
        let TextH3 = document.createTextNode("");
        let TextP = document.createTextNode('');
        let TextA = document.createTextNode(toArabicNumeral(i+1));





        ElemnetCard.className = 'card';
        ElemnetImage.className = 'FilmImage';
        var RundomNumber = GetRundomNumber();
        console.log("../images/film ("+RundomNumber+").jpeg");
        ElemnetImage.src = "../images/film ("+8+").jpeg";
        ElemnetCardContent.className = 'card-content';   
        
        ElemnetH3.appendChild(TextH3);
        ElemnetP.appendChild(TextP);
        ElemnetA.appendChild(TextA);

        ElemnetA.style.fontSize = "170px";
        ElemnetA.style.color = "black";
        ElemnetA.style.position = "absolute";
        ElemnetA.style.top = "40%";
        ElemnetA.style.right = "5%";
        ElemnetCard.style.direction = "rtl";
        ElemnetA.style.fontFamily = "Rubik"; 
        ElemnetA.style.zIndex = "100";
        ElemnetA.style.fontWeight = "900";
        ElemnetA.style.backgroundColor = "transparent";
        ElemnetA.style.textShadow = "5px 5px 17px #000000";

        ElemnetA.style.webkitTextStroke = "2px #07dd63";

        ElemnetCard.appendChild(ElemnetImage);
        ElemnetCard.appendChild(ElemnetCardContent);
        ElemnetCardContent.appendChild(ElemnetH3);
        ElemnetCardContent.appendChild(ElemnetP);
        ElemnetCardContent.appendChild(ElemnetA);

        parant.appendChild(ElemnetCard);
    }

}







