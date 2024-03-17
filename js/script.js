
function GetRundomNumber() {
    return Math.floor(Math.random() * 600) + 1;
}


var topparant;
var size;
var arr = ["العتاولة", "المداح", "لحشاشين", "مسار إجباري", "بيت الرفاعي",
    "صدفة", "لانش بوكس", "سر إلهي", "المعلم", "مصطفى شعبان"];

apeend('parant2', 40);
apeend('parant1', 14);
apeend('parant33', 14);

apeend('parantq', 15);

var film = [
    {
        id: 3,
        name: "الكبير",
        year: 2024,
        image: 2,
        description:"في هذا الجزء من المسلسل، يتعرض (الكبير أوي) عمدة قرية (المزاريطة) لضغوط عديدة، حيث يجد نفسه مضطرًا للاهتمام بقضايا ومشاكل من حوله، ويتعرض لمواقف كوميدية"
    
    },
    {
        id: 1,
        name: "العتاولة",
        year: 2024,
        image: 6,
        description:"في إطار من التشويق والإثارة، يتبع العمل قصة الشقيقان (خضر) و(نصار)، واللذان يعملا في مجال النصب والجريمة، مما يضعهما في العديد من العقبات والمخاطر"
    },
    {
        id: 2,
        name: "المداح",
        year: 2024,
        image: 11,
        description:"صابر شاب متدين ولكن الجميع يخشاه بسبب تعامله مع الجن. صابر يريد الزواج من رحاب ولكن والدها غالب يرفض. الحكومة طلبت من صابر أن يذهب معهم في فتح مقبرة آثار، ولكن باب المقبرة انغلق عليه وهو بداخلها."
    },
    {
        id: 0,
        name: "الحشاشين",
        year: 2024,
        image: 3,
        description:"ينتحر أحد جنود حسن الصباح فداء للدعوة أمام رسول فرنسا الذي طلب ولائه. في فلاش باك، يساعد زيد بن سيحون - حسن على مقابلة بن عطاش ويتعهد حسن للأخير بأن يكون داعي للباطنية، ويحذر أبو علي الطوسي - الملك من الباطنيين. يحث حسن - زيد على قتل المؤذن بسبب رفضه الانضمام لهم"


    },
    {
        id: 4,
        name: "مسار إجباري",
        year: 2024,
        image: 7,
        description:"يعمل حسين على سيارة طعام، ويدرس علي بكلية الحقوق ولا يريد التخرج حتى لا يدخل الجيش ويخسر منحة دراسية في فرنسا، وعندما يمر عمر بأزمة قلبية وتتصل المستشفى بأولاده، يكتشف علي وحسين أنهما أخوان من الأب"
    },
    {
        id: 5,
        name: "بيت الرفاعي",
        year: 2024,
        image: 1,
        description:"يزداد المرض على محمود فيقرر اختيار من سيحل محله، وعلى رغم من وجود ابنيه ياسين ويحيى إلا أنه يختار فاروق في النهاية"
    },
    {
        id: 6,
        name: "صدفة",
        year: 2024,
        image: 5,
        description:"تنقلب حياة رجل أعمال ناجح رأسًا على عقب حين تُسرق حقيبته من قبل مراهق، ويقرر اللحاق به حتى يصل إلى واحدة من اﻷحياء الفقيرة، وهو اﻷمر الذي يؤدي به إلى انعطافة حادة في مسار حياته"
    } 

]



function interval() {
    var number = 0;
    setInterval(function () {     
        var CoverImage = document.getElementById('CoverID');
        var titel = document.getElementById('H1_titel');
        var description = document.getElementById('P_description');

        titel.innerHTML = film[number].name;
        description.innerHTML = film[number].description;
        let image2 = film[number].image; 
        console.log(image2);

      
        

        CoverImage.style.backgroundImage = "url('../images/Covers/Cover (" +image2+ ").jpeg')";
        number++;

        if (number == 6) {
            number = 0;
        }

    }, 3000);
}

interval();



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
        // console.log("../images/film ("+RundomNumber+").jpeg");
        ElemnetImage.src = "../images/film ("+RundomNumber+").jpeg";
        ElemnetCardContent.className = 'card-content';   
        
        ElemnetH3.appendChild(TextH3);
        ElemnetP.appendChild(TextP);

        ElemnetCard.setAttribute('onclick', `window.location.href = "watch.html?id=${RundomNumber}"`);
        // alert(ElemnetCard.getAttribute('onclick'));


        ElemnetCard.appendChild(ElemnetImage);
        ElemnetCard.appendChild(ElemnetCardContent);
        ElemnetCardContent.appendChild(ElemnetH3);
        ElemnetCardContent.appendChild(ElemnetP);

        parant.appendChild(ElemnetCard);
    }
};