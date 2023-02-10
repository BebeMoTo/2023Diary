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

//January Links For Contacts
