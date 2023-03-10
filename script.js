//Menu
counter1 = 0;
function openMenu() {

    const mainMenu = document.querySelector(".btn-animation-main");
    const menu = document.querySelector(".index-menu");

    if (counter1 == 0) {
        menu.style.right = "0";
        counter1 = 1;
    } else {
        menu.style.right = "-60%";
        counter1 = 0
    }
}

//Read More
counter2 = 0;
function readMore() {

    const seeMore = document.querySelector(".index-main-about-text-seemore");
    const seeMoreDots = document.querySelector(".index-main-about-text-seemore-dots");
    const seeMoreText = document.querySelector(".index-main-about-text");
    const seeMoreDotsClose = document.querySelector(".index-main-about-text-seemore-dots-close");

    if (counter2 == 0) {
        seeMore.style.display = "none";
        seeMoreText.style.maxHeight = "1000rem";
        seeMoreText.style.overflow = "visible";
        seeMoreDots.style.display = "none";
        seeMoreDotsClose.style.display = "block";
        counter2 = 1;
    } else {
        seeMore.style.display = "block";
        seeMoreText.style.maxHeight = "750px";
        seeMoreText.style.overflow = "hidden";
        seeMoreDots.style.display = "block";
        seeMoreDotsClose.style.display = "none";
        counter2 = 0;
    }
}

//index Modal
counter3 = 0
function indexModal(count) {

    const indexAside = document.querySelector(".index-aside");
    const indexAsideTitle = document.querySelector(".indexAsideTitle");
    const indexContentPic1 = document.querySelector(".indexContentPic1");
    const indexContentPara1 = document.querySelector(".indexContentPara1");
    const indexContentPic2 = document.querySelector(".indexContentPic2");
    const indexContentPara2 = document.querySelector(".indexContentPara2");
    const indexModalClose = document.querySelector(".indexModalClose");

    counter3 = count;
    switch (counter3) {
        case 0:
            indexAside.style.display = "none";
            break;

        case 1:
            indexAside.style.display = "block";
            indexAsideTitle.innerText = "Music Genre";
            indexContentPic1.style.backgroundImage = "url(indexPic/piano1.jpg)";
            indexContentPic2.style.backgroundImage = "url(indexPic/eGuitar.jpg)";
            indexContentPara1.innerText = "Classical peborit ko siyempre damang dama mo yung feelings galing sa tunog. Karamihan ng classical walang lyrics diba? Kaya nasayo kung paano mo ieenterpret yung tunog. So in short, depende sa mood mo...";
            indexContentPara2.innerText = "Ayoko sa mga hard rock kase pinapawisan ako pag pinapakinggan ung mga gantong klaseng kanta HAHAHA. Ewan ko kung ako lang pero ako yung napapagod sa tunog lmao.";
            break;
        case 2:
            indexAside.style.display = "block";
            indexAsideTitle.innerText = "Song";
            indexContentPic1.style.backgroundImage = "url(indexPic/cuddleMe.jpg)";
            indexContentPic2.style.backgroundImage = "url(indexPic/sige.jpg)";
            indexContentPara1.innerText = "Una kong napakinggan tong kantang to alam kong di ko na tatantanan to. Hindi malalim yung lyrics obviously pero para saken, siya yung pinaka wholesome na narinig kong kanta XXD...";
            indexContentPara2.innerText = "Kelangan pa ba iexplain. Shuta nakakairita sa tenga pakinggan HAHAHA.";
            break;
        case 3:
            indexAside.style.display = "block";
            indexAsideTitle.innerText = "Food";
            indexContentPic1.style.backgroundImage = "url(indexPic/iceCream.jpg)";
            indexContentPic2.style.backgroundImage = "url(indexPic/kimchi.jpg)";
            indexContentPara1.innerText = "Sino aayaw sa ice cream? Masarap lahat ng ice cream na natikman ko maliban ng nandun sa UDM HAHAHA. Wala na ngang lasa wala pang tigas...";
            indexContentPara2.innerText = "Eew. Yun lang. Para siyang malangsang keps amp. Basta di ko sinasama pag nagsa samgyup. San ba gawa to HAHAHA arte kala mo talga nakatikim na ng keps lmfao.";
            break;
        case 4:
            indexAside.style.display = "block";
            indexAsideTitle.innerText = "Color";
            indexContentPic1.style.backgroundImage = "url(indexPic/brown.jpg)";
            indexContentPic2.style.backgroundImage = "url(indexPic/yellow.jpg)";
            indexContentPara1.innerText = "Brown kase kalmado tingnan. Parang hinahayaan niya magpahinga yung kaluluwa mo HAHAHA daming dama...";
            indexContentPara2.innerText = "Nakakasilaw. Ang tingkad kulay joy. Bidabida kase nangingibabaw palagi HAHAHA.";
            break;
        case 5:
            indexAside.style.display = "block";
            indexAsideTitle.innerText = "Musician";
            indexContentPic1.style.backgroundImage = "url(indexPic/edSheeran.jpg)";
            indexContentPic2.style.backgroundImage = "url(indexPic/sliz.jpg)";
            indexContentPara1.innerText = "Peborit talaga. Legendary matic lagi ba naman tagos hart mga kanta (not actually pero karamihan XXD). May at least isang kanta siya na makakarelate ka ng todo siyempre...";
            indexContentPara2.innerText = "Ayaw ko nga sa kanta niyang sige eh. Sige pilit mo lang XXD.";
            break;
        case 6:
            indexAside.style.display = "block";
            indexAsideTitle.innerText = "Album";
            indexContentPic1.style.backgroundImage = "url(indexPic/divide.png)";
            indexContentPic2.style.backgroundImage = "url(indexPic/equals.png)";
            indexContentPara1.innerText = "Walang di boring na kanta. Kung hindi hype yung tunog, sobrang basagan ng kaluluwa yung lyrics. Kumpleto from broekn-hearted, mourning, masaya, hanggang in-love. Peborit song ko btw siyempre yung Perfect...";
            indexContentPara2.innerText = "Di ko nagustuhan ibang mga kanta HAHAHA. Palibhasa may asawa na siya at shinure thing kaya di ako makarelate XXD. Peborit song ko dito yung Visiting Hours. Forda cry talaga";
            break;
        case 7:
            indexAside.style.display = "block";
            indexAsideTitle.innerText = "Season";
            indexContentPic1.style.backgroundImage = "url(indexPic/spring.jpg)";
            indexContentPic2.style.backgroundImage = "url(indexPic/summer.jpg)";
            indexContentPara1.innerText = "Tagsibol matic umuulan HAHAHA. Siyempre gusto ko maulan tamad ako eh. Forda sleep malala. Tamang kain ng mainit na pagkain, mainit na inumin, makipag hug. AY WALA PALA TAYO NON HAHAHA...";
            indexContentPara2.innerText = "Mainit. Masarap sana kaso dapat nakalilem ka kung ayaw mo masunog HAHAHA. Siguro kung summer sa ibang bansa gora lang. Eh nasa Pilipinas tayo HAHAHA.";
            break;
        case 8:
            indexAside.style.display = "block";
            indexAsideTitle.innerText = "Occasion";
            indexContentPic1.style.backgroundImage = "url(indexPic/valentines.jpg)";
            indexContentPic2.style.backgroundImage = "url(indexPic/newYear.jpg)";
            indexContentPara1.innerText = "Malay ko den. Basta kinikilig ako sa love story ng iba baket ba. At least di tayo bitter kahit ginanon HAHAHA. Writing this note at around first week of February. Sheeesh lapit na...";
            indexContentPara2.innerText = "Masarap nga mga handa maingay naman. Tas new year ka pa gaganunin HAHAHA ano ka jan? Malay ko. Basta eto nlng nilagay ko kahit wala naman akong ayaw na okasyon.";
            break;
        case 9:
            indexAside.style.display = "block";
            indexAsideTitle.innerText = "Movie";
            indexContentPic1.style.backgroundImage = "url(indexPic/theGiver.jpg)";
            indexContentPic2.style.backgroundImage = "url(indexPic/m3gan.jpg)";
            indexContentPara1.innerText = "The plot, score, casting, and everything is a masterpiece. Ganda ng flow ng kwento given na extra pa si Taylor Swift dito sheeesh. Di ko nabasa yung libro pero grabe yung tama ng movie na to...";
            indexContentPara2.innerText = "Ewan ko parang tanga lang. Robot na nawalan ng kontrol tas pumapatay na ng tao HAHAHA. Di siya nakakatakot or kahit nakakagulat man lang. Supposedly horror/thriller to pero di ko nadama XD.";
            break;
        case 10:
            indexAside.style.display = "block";
            indexAsideTitle.innerText = "Series/Anime";
            indexContentPic1.style.backgroundImage = "url(indexPic/attackOnTitan.jpg)";
            indexContentPic2.style.backgroundImage = "url(indexPic/kakegurui.png)";
            indexContentPara1.innerText = "Daming plot twists. Dinaig pa yung mga teleserye HAHAHA. At least plot twists nila may sense XD. Umai sa bida na naging kontrabida amp. Ay sori spoiler HAHAHA...";
            indexContentPara2.innerText = "Forda sugal lahat. Naenjoy ko nman slight pero nawi weirduhan paden ako. Bat nilalabasan sa pagsusugal HAHAHA";
            break;
        default:
            break;
    }
}

//Month Links for buttons
function openMonthLink(monthNumber) {
    switch (monthNumber) {
        case 1:
            window.open("january.html");
            break;
        case 2:
            window.open("february.html");
            break;
        case 3:
            window.open("march.html");
            break;
        case 4:
            window.open("april.html");
            break;
        case 5:
            window.open("may.html");
            break;
        case 6:
            window.open("june.html");
            break;
        case 7:
            window.open("july.html");
            break;
        case 8:
            window.open("august.html");
            break;
        case 9:
            window.open("september.html");
            break;
        case 10:
            window.open("october.html");
            break;
        case 11:
            window.open("november.html");
            break;
        case 12:
            window.open("december.html");
            break;
        default:
            break;
    }
}

//JanuaryLyrics: Butterfly Effect
counter4 = 0;
function showLyrics1() {
    let butterFly = document.querySelector('.lyricsBlock');
    let butterFlyLyrics = document.querySelector('.butterFlyLyrics');
    if (counter4 == 0) {
        butterFly.style.display = "block";
        butterFlyLyrics.style.transform = "scaleY(1)";
        counter4 = 1;

    } else {
        butterFly.style.display = "none";
        butterFlyLyrics.style.transform = "scaleY(0)";
        counter4 = 0;
    }
}

//JanuaryLyrics: Never Love Effect
counter5 = 0;
function showLyrics2() {
    let neverLove = document.querySelector('.lyricsBlock1');
    let neverLoveLyrics = document.querySelector('.neverLoveLyrics');
    if (counter5 == 0) {
        neverLove.style.display = "block";
        neverLoveLyrics.style.transform = "scaleY(1)";
        counter5 = 1;

    } else {
        neverLove.style.display = "none";
        neverLoveLyrics.style.transform = "scaleY(0)";
        counter5 = 0;
    }
}

//February Menu
counter6 = 0;
function openMenuFebruary() {
    const februaryNav = document.querySelector('.februaryNav');
    const barsOpen = document.querySelector('.fa-bars-february');
    const barsClose = document.querySelector('.fa-staggered-february');

    if (counter6 == 0) {
        februaryNav.style.left = "0px";
        barsOpen.style.opacity = "0";
        setTimeout(() => {
            barsOpen.style.display = "none";
        }, 600);
        counter6 = 1;
    } else {
        februaryNav.style.left = "-75px";
        setTimeout(() => {
            barsOpen.style.display = "inline-block";
        }, 100);
        setTimeout(() => {
            barsOpen.style.opacity = "1";
        }, 200);
        counter6 = 0;
    }
}

//Valentines Letters
function _0x36c5(_0x25078f,_0x5e2444){const _0x3daa54=_0x3daa();return _0x36c5=function(_0x36c596,_0x359219){_0x36c596=_0x36c596-0x192;let _0x4aebda=_0x3daa54[_0x36c596];return _0x4aebda;},_0x36c5(_0x25078f,_0x5e2444);}(function(_0x2f4f85,_0xaabdba){const _0x217a5d=_0x36c5,_0xbacb92=_0x2f4f85();while(!![]){try{const _0x45e44b=-parseInt(_0x217a5d(0x1c1))/0x1+parseInt(_0x217a5d(0x19e))/0x2*(parseInt(_0x217a5d(0x19a))/0x3)+parseInt(_0x217a5d(0x1b8))/0x4+parseInt(_0x217a5d(0x1b5))/0x5*(parseInt(_0x217a5d(0x1a4))/0x6)+parseInt(_0x217a5d(0x1b3))/0x7+parseInt(_0x217a5d(0x1b4))/0x8*(parseInt(_0x217a5d(0x1b0))/0x9)+-parseInt(_0x217a5d(0x194))/0xa;if(_0x45e44b===_0xaabdba)break;else _0xbacb92['push'](_0xbacb92['shift']());}catch(_0x1260d2){_0xbacb92['push'](_0xbacb92['shift']());}}}(_0x3daa,0xb36be));function _0x3daa(){const _0xc435d6=['Sam','Ang\x20weird\x20pala\x20Carl\x20itawag\x20sayo.\x20O\x20kahit\x20Lawrence\x20HAHAHA.\x20Buong\x20buhay\x20ko\x20Sia\x20tawag\x20ko\x20sayo\x20sorna\x20XXD.\x20Anyways,\x20ikaw\x20pinaka-una\x20kong\x20naging\x20kaclose\x20alam\x20mo\x20yan.\x20Unang\x20nagkausap\x20pa\x20nga\x20tayo\x20sa\x20webinar\x20ba\x20yon\x20sa\x20may\x20zoom\x20HAHAHA.\x20Tangena\x20mo\x20di\x20nakikinig\x20napachika\x20naden\x20tuloy\x20ako\x20shutacca\x20XD.\x20Pero\x20no\x20cap,\x20dami\x20ko\x20natutunan\x20sayo.\x20Mostly\x20kabastusan\x20HAHAHA\x20I\x20mean\x20wala\x20naman\x20kase\x20nagkekwento\x20ng\x20ganon\x20eh\x20mga\x20wala\x20rin\x20naman\x20kame\x20experience\x20siyempre\x20iba\x20parin\x20kung\x20yung\x20source\x20kaibigan\x20mo\x20tas\x20graphic\x20magkwento\x20HAHAHA\x20magsama\x20kayo\x20ni\x20Jamaica\x20XD.\x20So\x20ayun,\x20di\x20na\x20tayo\x20magkaklasmeyt\x20pero\x20at\x20least\x20kasama\x20mo\x20Jamaica\x20forda\x20solid\x20yan.\x20Thank\x20you\x20sa\x20mga\x20advice\x20mo\x20dahil\x20ambobo\x20ko\x20pumili\x20ng\x20lalandiin\x20na\x20para\x20akong\x20nakatira\x20sa\x20ilalim\x20ng\x20bato.\x20Di\x20ko\x20makakalimutan\x20mga\x20sinabi\x20mo.\x20Malapit\x20na\x20rin\x20pala\x20birthday\x20mo\x20dapat\x20may\x20painom\x20yan\x20ah\x20HAHAHA.\x20Di\x20na\x20ako\x20palainom\x20wala\x20ka\x20na\x20eh.\x20Ikaw\x20madalas\x20manlibre\x20ng\x20alak\x20HAHAHA\x20dami\x20ba\x20namang\x20stock\x20sa\x20bahay.\x20Mamimiss\x20ko\x20yung\x20dalawa\x20niyong\x20bahay\x20pati\x20yung\x20kuya\x20mo\x20HAHAHAHA.\x20So\x20ayun,\x20ingat\x20ka\x20palagi\x20chat\x20mo\x20lang\x20ako\x20kung\x20may\x20kailangan\x20ka\x20lagi\x20naman\x20akong\x20active.\x20Taray\x20no\x20active\x20kahit\x20walang\x20kalandian.\x20I\x20just\x20wanna\x20say,\x20wag\x20kang\x20magbabago\x20in\x20terms\x20of\x20confidence\x20at\x20pagiging\x20palaban.\x20Jan\x20ka\x20nagshashine.\x20I\x20love\x20you\x20po.','4966TNJbsO','borderColor','src','opacity','innerHTML','display','18wdzNjb','imagesFeb/jamaica.mp3','Dear\x20Samantha,','.happyValentinesContainer','imagesFeb/camille.mp3','valentinesInputTitle','valentinesInputContainer','100px','-50%','valentinesInputButton','.valentinesLeft','Happy\x20Valentine\x27s\x20Day!!!\x20Naaalala\x20mo\x20pa\x20naman\x20unang\x20meet\x20naten\x20diba?\x20Sa\x20Art\x20App\x20XD.\x20Kamiss\x20yung\x20mga\x20panahong\x20yon.\x20Mga\x20panahong\x20di\x20pa\x20nagkakaissue\x20mga\x20panig\x20HAHAHA.\x20Siyempre\x20balik\x20ko\x20na\x20topic\x20sayo,\x20letter\x20sayo\x20to\x20eh\x20XD.\x20First\x20impression\x20ko\x20nga\x20sayo\x20masungit.\x20Iniisip\x20ko\x20pa\x20nga\x20non\x20siguro\x20kaya\x20magkaibigan\x20kayo\x20ni\x20sam\x20kase\x20masungit\x20kayo\x20pareho\x20HAHAHA.\x20Turns\x20out\x20mali\x20ako.\x20Naaalala\x20ko\x20pa\x20non\x20tayong\x20apat\x20nila\x20niña\x20tsaka\x20sam\x20yung\x20orginal\x20na\x20marites\x20tas\x20unang\x20topic\x20naten\x20sa\x20gc\x20non\x20mga\x20buhay\x20naten.\x20Kinwento\x20mo\x20pagiging\x20working\x20student\x20mo\x20na\x20nakaka\x20amaze\x20ng\x20sobra.\x20Like\x20dude,\x20I\x20can\x27t\x20XD.\x20Swerte\x20ng\x20pamilya\x20mo\x20sayo\x20at\x20siyempre\x20lalo\x20na\x20ng\x20lalaki\x20na\x20makakasama\x20mo\x20forda\x20rest\x20of\x20your\x20life.\x20Mag\x20iingat\x20ka\x20palagi,\x20hindi\x20na\x20tayo\x20klasmeyts\x20pero\x20lagi\x20mo\x20tandaan\x20available\x20ako\x20lagi\x20para\x20tumulong\x20basta\x20ikaw\x20(⁠｡⁠♡⁠‿⁠♡⁠｡⁠).\x20Love\x20song\x20para\x20sayo.\x20I\x20love\x20you\x20po','2030148xqQGsY','Jam','right','4190886StWbtI','8lJPYow','1604045yXhjwB','.happyValentines','innerText','2343404LlhirB','#contentHeaderFebruary','block','marginTop','Dear\x20Camille,','Dear\x20Andrey,','valentinesInput','red','var(--white)','1009182tyJKoc','none','#valentineSong','Nakakalumbay\x20na\x20di\x20na\x20tayo\x20magkaklasmeyt\x20HAHAHA.\x20Happy\x20Valentine\x27s\x20Day!!!\x20Siyempre\x20di\x20ako\x20magbibida\x20ng\x20sobra\x20baka\x20kuyugin\x20ako\x20ng\x20mga\x20nakapila\x20sayo\x20eh\x20HAHAHA.\x20Since\x20di\x20na\x20tayo\x20klasmeyt,\x20sabihin\x20ko\x20na\x20messages\x20ko\x20sayo\x20since\x20bihira\x20nalang\x20den\x20tayo\x20makakapag-usap\x20eh\x20XXD.\x20Una\x20sa\x20lahat,\x20thankful\x20ako\x20kay\x20God\x20kase\x20sinama\x20niya\x20ako\x20sa\x20grupo\x20niyo\x20nung\x20Art\x20App\x20HAHAHA.\x20Naaalala\x20ko\x20pa\x20non\x20takot\x20pa\x20ko\x20sayo\x20kase\x20muka\x20kang\x20masungit\x20tapos\x20aral\x20na\x20aral\x20lmfao.\x20Hindi\x20ko\x20pinagsisisihang\x20tinuruan\x20mo\x20ko\x20uminom\x20ng\x20sobra\x20HAHAHA.\x20Masaya\x20pala\x20talaga\x20uminom\x20lalo\x20na\x20kapag\x20yung\x20mga\x20kasama\x20mo\x20open\x20makinig\x20sa\x20mga\x20kinekwento\x20mo.\x20Pangalawa,\x20maraming\x20maraming\x20salamat\x20sa\x20mga\x20energy\x20na\x20binubuhos\x20mo\x20para\x20gabayan\x20ako\x20pag\x20nabangag\x20kakainom\x20HAHAHA.\x20Number\x201\x20mama\x20kita\x20eh.\x20Anyways,\x20nalungkot\x20ako\x20sa\x20binalita\x20mo\x20na\x20daming\x20pinagbawal\x20sayo.\x20Like\x20dude,\x20bakit\x20sayo\x20pa\x20no.\x20Still,\x20para\x20sa\x20ikabubuti\x20mo\x20naman\x20yun\x20eh.\x20Di\x20ka\x20na\x20iinom,\x20di\x20na\x20rin\x20ako\x20iinom\x20HAHAHA.\x20Tapos\x20na\x20lasingggera/o\x20era\x20naten\x20XD.\x20So\x20ayun,\x20ingatan\x20mo\x20palagi\x20sarili\x20mo\x20ng\x20sobra\x20sobra.\x20Sinasabi\x20ko\x20na\x20di\x20ka\x20pa\x20mamili\x20sa\x20sobrang\x20daming\x20nakapila\x20sayo\x20pero\x20keme\x20lang\x20yon.\x20Anytime\x20na\x20handa\x20ka\x20na\x20at\x20buong\x20buo\x20na\x20loob\x20mo.\x20Wag\x20magpapa-uto\x20di\x20mo\x20ko\x20idol\x20ha\x20HAHAHA.\x20I\x20love\x20you\x20po\x20sobra\x20sobra\x20sana\x20klasmeyt\x20na\x20kita\x20pag\x20nagreblock\x20ulet\x20XXD.\x20Uhm\x20i\x20guess\x20iwan\x20ko\x20na\x20tong\x20kantang\x20to\x20para\x20sayo.\x20Sweet\x20kagaya\x20mo\x20(sweet\x20parang\x20gsm\x20na\x20may\x20timplang\x20mixed\x20berries)','imagesFeb/sia.mp3','left','style','imagesFeb/andrey.mp3','getElementById','var(--purple1)','#contentParaFebruary','Dear\x20Carl,','.enterPasswordFebruary','8941370YkjOwW','color','querySelector','#valentinesRightName','scale','linear-gradient(-250deg,\x20rgb(0,\x200,\x200,.8),\x20rgb(0,\x200,\x200,.5),\x20rgb(0,\x200,\x200,.8)),\x20url(\x27imagesFeb/februaryBG.gif\x27)','321gFrLvB','HAHAHA\x20tawa\x20agad\x20bungad\x20lmao.\x20Happy\x20Valentines!!!\x20Alam\x20ko\x20namang\x20wala\x20kang\x20matatanggap\x20na\x20letter\x20eh\x20kaya\x20ako\x20na\x20lang\x20HAHAHA\x20(mejo\x20bastos\x20ba\x20HAHAHA).\x20Alam\x20mo\x20naman\x20na\x20minsan\x20lang\x20ako\x20mag\x20hart\x20to\x20hart\x20na\x20chat\x20kaya\x20sasampolin\x20ko\x20na\x20ngayon\x20kase\x20ako\x20lang\x20makakapagsalita\x20eh\x20di\x20naman\x20to\x20chat\x20XD.\x20Una\x20sa\x20lahat,\x20thank\x20you\x20sa\x20time\x20na\x20nagastos\x20naten\x20magkasama\x20thru\x20chat\x20man\x20o\x20personal.\x20Di\x20mo\x20alam\x20gano\x20kalaki\x20impact\x20ng\x20mga\x20yon\x20saken.\x20Alam\x20mo\x20den\x20na\x20mahina\x20ako\x20sa\x20pakikipag\x20interact\x20dati\x20sa\x20mga\x20tao\x20diba.\x20Sobrang\x20mahiyain\x20ko\x20pa\x20non\x20yak!\x20HAHAHA.\x20Nagbago\x20ako\x20siyempre\x20dahil\x20sa\x20inyo\x20nila\x20Kian\x20(JHS\x20prends)\x20pero\x20nung\x20start\x20na\x20nag\x20Senior\x20High,\x20ikaw\x20na\x20lang\x20nakakausap\x20ko\x20sa\x20kanila\x20XD.\x20Dati\x20nung\x20Grade\x208\x20naaalala\x20ko\x20pa\x20puro\x20away\x20lang\x20tayo\x20bat\x20kase\x20ang\x20bida-bida\x20niyo\x20eh\x20lmao.\x20So\x20ayun\x20nga\x20dahil\x20ikaw\x20na\x20lang\x20nakakausap\x20ko\x20nung\x20Senior\x20High,\x20nalaman\x20ko\x20mga\x20perspective\x20mo\x20sa\x20mga\x20bagay\x20tas\x20inadapt\x20ko\x20yung\x20iba\x20don.\x20Iba\x20ka\x20kase\x20talaga\x20mag-isip.\x20Sanaol\x20biniyayaan\x20ng\x20maturity\x20kagaya\x20ng\x20sayo\x20edi\x20nagkakaintindihan\x20sana\x20lahat\x20HAHAHA.\x20Sorry\x20pala\x20kung\x20para\x20akong\x20timang\x20na\x20iyakin\x20na\x20puro\x20problema\x20lang\x20sa\x20buhay\x20(or\x20di\x20naman\x20chika\x20lang)\x20yung\x20laging\x20shinesher.\x20Ganon\x20den\x20naman\x20gusto\x20mo\x20diba\x20HAHAHA.\x20Anyways\x20alam\x20ko\x20naparinig\x20ko\x20na\x20sayo\x20tong\x20kantang\x20to\x20pakinggan\x20mo\x20na\x20lang\x20ulet.\x20Sabi\x20nga\x20jan\x20sa\x20kanta,\x20lagi\x20lang\x20akong\x20nandito.\x20One\x20chat\x20away\x20lang\x20ako\x20alam\x20mo\x20yan.\x20Late\x20nga\x20lang\x20magreply\x20HAHAHA.\x20Again,\x20thank\x20you\x20ulet\x20sa\x20lahat\x20lahat\x20(shet\x20bat\x20tunog\x20mamamaalam\x20ako\x20sa\x20letter\x20na\x20to\x20HAHAHA).\x20Siyempre\x20di\x20ka\x20na\x20magtataka\x20bat\x20sa\x20website\x20ko\x20nilagay\x20hindi\x20sa\x20papel.\x20Baka\x20mahilo\x20ka\x20lang\x20kakabasa\x20pag\x20sa\x20papel\x20HAHAHA'];_0x3daa=function(){return _0xc435d6;};return _0x3daa();}function showLetter(){const _0x25556a=_0x36c5,_0x20483c=document['getElementById'](_0x25556a(0x1be))['value'],_0x4e7e56=document[_0x25556a(0x1c9)](_0x25556a(0x1ad)),_0x19ce35=document[_0x25556a(0x1c9)](_0x25556a(0x1aa)),_0x3d181f=document[_0x25556a(0x1c9)](_0x25556a(0x1a9)),_0x2169da=document[_0x25556a(0x196)](_0x25556a(0x193)),_0x4d1d81=document[_0x25556a(0x196)](_0x25556a(0x1ae)),_0x55e074=document[_0x25556a(0x196)]('.valentinesRight'),_0x2f9488=document[_0x25556a(0x196)](_0x25556a(0x1b6)),_0x5932c0=document['querySelector'](_0x25556a(0x1a7)),_0x7875bf=document[_0x25556a(0x196)](_0x25556a(0x1c3)),_0x25ea0d=document[_0x25556a(0x196)](_0x25556a(0x197)),_0x4a583d=document[_0x25556a(0x196)](_0x25556a(0x1b9)),_0x35bf23=document[_0x25556a(0x196)](_0x25556a(0x1cb)),_0x18af88=['a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'],_0x4e7b70=['A','B','C','D','E','F','G','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z'],_0x4d41c8=['-','_','@'];function _0x437007(){setTimeout(()=>{const _0x6a1e6c=_0x36c5;_0x3d181f['style']['color']=_0x6a1e6c(0x1bf),_0x4e7e56['style'][_0x6a1e6c(0x19f)]=_0x6a1e6c(0x1bf);},0x0),setTimeout(()=>{const _0x3714be=_0x36c5;_0x3d181f[_0x3714be(0x1c7)][_0x3714be(0x195)]=_0x3714be(0x1ca),_0x4e7e56[_0x3714be(0x1c7)][_0x3714be(0x19f)]=_0x3714be(0x1ca);},0x258);}function _0x27d2a2(){setTimeout(()=>{const _0x48297d=_0x36c5;_0x4e7e56[_0x48297d(0x1c7)]['scale']='0';},0x0),setTimeout(()=>{const _0x28beca=_0x36c5;_0x19ce35[_0x28beca(0x1c7)][_0x28beca(0x198)]='0';},0x12c),setTimeout(()=>{const _0x36ef9b=_0x36c5;_0x3d181f[_0x36ef9b(0x1c7)][_0x36ef9b(0x1bb)]=_0x36ef9b(0x1ab);},0x258),setTimeout(()=>{const _0x446d72=_0x36c5;_0x3d181f[_0x446d72(0x1c7)][_0x446d72(0x198)]='1.2';},0x3e8),setTimeout(()=>{const _0x3d58b1=_0x36c5;_0x3d181f[_0x3d58b1(0x1c7)]['scale']='0';},0x5dc),setTimeout(()=>{const _0x378da5=_0x36c5;_0x4d1d81[_0x378da5(0x1c7)][_0x378da5(0x1c6)]='0',_0x55e074['style']['right']='0';},0x708),setTimeout(()=>{const _0x190033=_0x36c5;_0x2169da['style'][_0x190033(0x1a3)]=_0x190033(0x1c2),_0x2f9488[_0x190033(0x1c7)][_0x190033(0x1a3)]='none',_0x4e7e56[_0x190033(0x1c7)]['display']=_0x190033(0x1c2),_0x19ce35['style'][_0x190033(0x1a3)]='none',_0x3d181f[_0x190033(0x1c7)][_0x190033(0x1a3)]=_0x190033(0x1c2),_0x5932c0['style']['backgroundImage']=_0x190033(0x199),_0x4a583d[_0x190033(0x1c7)][_0x190033(0x1a1)]='1',_0x4a583d[_0x190033(0x1c7)]['color']=_0x190033(0x1c0),_0x35bf23[_0x190033(0x1c7)][_0x190033(0x1a1)]='1',_0x4a583d[_0x190033(0x1c7)]['display']=_0x190033(0x1ba),_0x35bf23[_0x190033(0x1c7)][_0x190033(0x1a3)]=_0x190033(0x1ba),_0x7875bf[_0x190033(0x1c7)][_0x190033(0x1a3)]=_0x190033(0x1ba);},0x8fc),setTimeout(()=>{const _0x48fc3b=_0x36c5;_0x4d1d81[_0x48fc3b(0x1c7)][_0x48fc3b(0x1c6)]=_0x48fc3b(0x1ac),_0x55e074[_0x48fc3b(0x1c7)][_0x48fc3b(0x1b2)]=_0x48fc3b(0x1ac);},0xbb8);}switch(_0x20483c){case _0x18af88[0x2]+_0x4e7b70[0x0]+_0x18af88[0xc]+_0x18af88[0x8]+_0x4e7b70[0xb]+_0x4e7b70[0xb]+_0x18af88[0x4]+_0x4d41c8[0x1]+_0x4e7b70[0x1]+_0x4e7b70[0x8]+_0x4e7b70[0x11]+_0x18af88[0x3]+_0x18af88[0x8]+_0x18af88[0x4]:_0x27d2a2(),setTimeout(()=>{const _0x1eaac6=_0x25556a;_0x4a583d[_0x1eaac6(0x1b7)]=_0x1eaac6(0x1bc);},0x7d0),_0x25ea0d['innerText']='Camille',_0x35bf23['innerHTML']=_0x25556a(0x19b),_0x7875bf[_0x25556a(0x1a0)]=_0x25556a(0x1a8);break;case _0x18af88[0x12]+_0x4e7b70[0x0]+_0x18af88[0xc]+_0x18af88[0x0]+_0x18af88[0xd]+_0x4e7b70[0x13]+_0x4e7b70[0x7]+_0x18af88[0x0]+_0x4d41c8[0x0]+_0x4e7b70[0x4]+_0x18af88[0x12]+_0x18af88[0x6]:_0x27d2a2(),setTimeout(()=>{const _0x3b0191=_0x25556a;_0x4a583d[_0x3b0191(0x1b7)]=_0x3b0191(0x1a6);},0x7d0),_0x25ea0d[_0x25556a(0x1b7)]=_0x25556a(0x19c),_0x35bf23[_0x25556a(0x1a2)]=_0x25556a(0x1c4),_0x7875bf[_0x25556a(0x1a0)]='imagesFeb/sam.mp3';break;case _0x18af88[0xd]+_0x18af88[0x8]+_0x4e7b70[0xd]+_0x18af88[0x18]+_0x18af88[0x0]+_0x4e7b70[0x2]+_0x4e7b70[0x0]+_0x4e7b70[0xb]+_0x4e7b70[0xb]+'69':_0x27d2a2(),setTimeout(()=>{const _0x211fd1=_0x25556a;_0x4a583d[_0x211fd1(0x1b7)]='Dear\x20Niña,';},0x7d0),_0x25ea0d[_0x25556a(0x1b7)]='Niña',_0x35bf23['innerHTML']='Mamimiss\x20ko\x20ng\x20sobra\x20yung\x20bahay\x20nio.\x20Siyempre\x20lalo\x20ka\x20na\x20HAHAHA.\x20Mamaya\x20isipin\x20mo\x20bahay\x20lang\x20namiss\x20ko\x20XD.\x20Anyways,\x20Happy\x20Valentine\x27s\x20Day!!!\x20Kung\x20natatandaan\x20mo\x20pa\x20unang\x20meet\x20naten\x20personally,\x20yung\x20Art\x20App\x20yon\x20no?\x20Tas\x20spill\x20ko\x20agad\x20na\x20barbie\x20ako\x20HAHAHA.\x20Actually\x20first\x20impression\x20ko\x20sayo\x20tama.\x20Unang\x20kita\x20ko\x20palang\x20sayo\x20alam\x20ko\x20na\x20na\x20may\x20respeto\x20ka\x20sa\x20iba.\x20Like\x20hindi\x20yung\x20normal\x20na\x20respeto,\x20yung\x20above\x20pa\x20don.\x20So\x20yun\x20nga\x20tumagal\x20tas\x20nakilala\x20pa\x20kita\x20ng\x20nakilala.\x20Kung\x20idedescribe\x20kita\x20ngayon,\x20para\x20kang\x20Vic\x20na\x20di\x20nagshesher\x20ng\x20mga\x20secrets\x20na\x20sinasabi\x20sayo\x20HAHAHA\x20shhh\x20ka\x20lang\x20kay\x20vic\x20XD.\x20Eh\x20di\x20na\x20tayo\x20magkaklasmeyt\x20ngayong\x20sem.\x20Or\x20siguro\x20hanggang\x20next\x20S.Y.\x20and\x20so\x20on.\x20Pero\x20kahit\x20na\x20ganon\x20alam\x20mo\x20naman\x20na\x20love\x20kita\x20diba\x20XD.\x20Hindi\x20ako\x20nakakalimot\x20ng\x20tao\x20lalo\x20na\x20kung\x20malaki\x20naambag\x20niya\x20sa\x20buhay\x20ko\x20unless\x20mabagok\x20ako\x20XD.\x20Thankful\x20ako\x20na\x20nakilala\x20kita\x20basta\x20lagi\x20akong\x20available\x20at\x20tutulong\x20ako\x20hanggat\x20makakaya\x20ko.\x20I\x20love\x20you\x20po\x20ulet\x20and\x20wag\x20mo\x20po\x20baguhin\x20yung\x20pagiging\x20good\x20listener\x20mo.\x20Shinunoga\x20E-Wa\x20slaps\x20XD.\x20Love\x20song\x20para\x20sayo\x20(⁠◍⁠•⁠ᴗ⁠•⁠◍⁠)⁠❤',_0x7875bf[_0x25556a(0x1a0)]='imagesFeb/nina.mp3';break;case _0x18af88[0x9]+_0x18af88[0x0]+_0x18af88[0xc]+_0x18af88[0x0]+_0x4e7b70[0x3]+_0x4e7b70[0x0]+_0x4e7b70[0x12]+_0x4e7b70[0x0]+_0x4e7b70[0xb]+_0x18af88[0x8]+_0x18af88[0xd]+'96':_0x27d2a2(),setTimeout(()=>{_0x4a583d['innerText']='Dear\x20Jamaica,';},0x7d0),_0x25ea0d['innerText']=_0x25556a(0x1b1),_0x35bf23[_0x25556a(0x1a2)]='Kamusta\x20na\x20yung\x20pinakauna\x20kong\x20nakausap\x20sa\x20personal\x20na\x20klasmeyt\x20HAHAHA.\x20First\x20meet\x20naten\x20yung\x20groupings\x20sa\x20PE\x20non\x20no?\x20Yung\x20kasama\x20pa\x20sila\x20JL.\x20Late\x20na\x20nga\x20kayo\x20non\x20eh\x20pero\x20ikaw\x20pinakauna\x20sa\x20kanila\x20XD.\x20Tapang\x20pa\x20nga\x20naten\x20non\x20gusto\x20pa\x20magpahuli\x20sa\x20guard\x20bago\x20umalis\x20XD.\x20Anyways,\x20Happy\x20Valentine\x27s\x20Day!!!\x20Hindi\x20ko\x20na\x20hahabaan\x20to\x20ng\x20sobra\x20baka\x20bigla\x20mangagat\x20jowa\x20mo\x20muka\x20pa\x20namam\x20akong\x20lalaki\x20HAHAHA.\x20So\x20ayun,\x20di\x20na\x20tayo\x20klasmeyt\x20nakakalungkot\x20lang.\x20Sobrang\x20gaan\x20na\x20ng\x20feelings\x20ko\x20senyo\x20tas\x20ganto\x20lang.\x20Mamimiss\x20ko\x20yung\x20mga\x20chinichika\x20mo\x20(alam\x20mo\x20na\x20kung\x20ano\x20yon\x20HAHAHA).\x20Lagi\x20kayo\x20mag\x20iingat\x20ng\x20bebeluvs\x20mo\x20\x20lagi\x20pa\x20naman\x20kayo\x20nasa\x20galaan\x20sa\x20stories\x20mo\x20HAHAHA.\x20Sana\x20hanggang\x20dulo\x20graphic\x20ka\x20pa\x20den\x20magkwento\x20HAHAHA.\x20Kung\x20may\x20kailangan\x20ka\x20kahit\x20di\x20na\x20tayo\x20klasmeyt\x201\x20chat\x20away\x20lang\x20ako\x20alam\x20mo\x20yan.\x20Late\x20nga\x20lang\x20magreply\x20minsan\x20lmao.\x20Kanta\x20para\x20sayo.\x20Isa\x20sa\x20peborits\x20ko\x20sana\x20magustuhan\x20mo\x20(⁠＾⁠∇⁠＾⁠)⁠ﾉ⁠♪',_0x7875bf[_0x25556a(0x1a0)]=_0x25556a(0x1a5);break;case _0x4e7b70[0x3]+_0x18af88[0x11]+_0x18af88[0x4]+_0x18af88[0x18]+_0x4e7b70[0xd]+_0x18af88[0x8]+_0x18af88[0xa]+_0x18af88[0x12]+_0x18af88[0x18]+_0x18af88[0x6]+_0x18af88[0x6]+_0x18af88[0x8]+_0x18af88[0xc]:_0x27d2a2(),setTimeout(()=>{const _0x538917=_0x25556a;_0x4a583d[_0x538917(0x1b7)]=_0x538917(0x1bd);},0x7d0),_0x25ea0d[_0x25556a(0x1b7)]='Drey',_0x35bf23[_0x25556a(0x1a2)]=_0x25556a(0x1af),_0x7875bf[_0x25556a(0x1a0)]=_0x25556a(0x1c8);break;case _0x18af88[0x2]+_0x18af88[0x0]+_0x18af88[0x11]+_0x18af88[0xb]+_0x4e7b70[0xd]+_0x18af88[0x13]+_0x18af88[0xe]+_0x18af88[0x13]+_0x18af88[0x0]+_0x18af88[0xd]+_0x4e7b70[0x7]+_0x4e7b70[0x0]+_0x4e7b70[0x7]+_0x4e7b70[0x0]:_0x27d2a2(),setTimeout(()=>{const _0x28c1bf=_0x25556a;_0x4a583d[_0x28c1bf(0x1b7)]=_0x28c1bf(0x192);},0x7d0),_0x25ea0d['innerText']='Carl',_0x35bf23[_0x25556a(0x1a2)]=_0x25556a(0x19d),_0x7875bf[_0x25556a(0x1a0)]=_0x25556a(0x1c5);break;default:_0x437007();break;}}


//MARCHHHHHHHHHHHHHHHHHHHHHHHHHHH
//Ticking time
function marchTime() {
    let time = new Date();
    let oras = time.toLocaleTimeString();
    const showTime = document.querySelector('#time');
    showTime.innerText = oras;
}
setInterval(() => {
    marchTime();
}, 1000);

//menuMarch
const menuMarch = document.querySelector('#marchMenu');
const marchFaBars = document.querySelector('#marchBars');
const marchFaX = document.querySelector('#marchX');

marchFaBars.addEventListener('click', function() {
    menuMarch.style.right = '0';
});
marchFaX.addEventListener('click', function() {
    menuMarch.style.right = '-300px';
});