var _velicinaFonta="velicinaFonta";
var _vrstaFonta="vrstaFonta";
var _prilagodbaPristupacnosti="prilagodbaPristupacnosti";
var greska="greska";

function mojonkeyup(event) {
    if (event.keyCode === 13) {
        event.preventDefault();
        event.currentTarget.click();
    }
}

function postaviVrstuFonta(v) {
    const fontFamilyHelvetica="Helvetica";
    const fontFamilyArial="Arial";
    const fontFamilyVerdana="Verdana";
    var unosId=document.getElementById("unos");
    var number1Id=document.getElementById("number1");
    var number2Id=document.getElementById("number2");
    var chznSingleId=document.getElementsByClassName("chzn-single");
    var chznDropID=document.getElementsByClassName("chzn-drop");
    var captchaCodeName=document.getElementsByName("captcha_code");

    if(v==fontFamilyHelvetica) {
        document.body.style.fontFamily=fontFamilyHelvetica;
        createCookie(_vrstaFonta, fontFamilyHelvetica);

        if(unosId != null && number1Id != null && number2Id != null) {
            unosId.style.fontFamily=fontFamilyHelvetica;
            number1Id.style.fontFamily=fontFamilyHelvetica;
            number2Id.style.fontFamily=fontFamilyHelvetica;

            if(chznSingleId[0]!=null) chznSingleId[0].style.fontFamily=fontFamilyHelvetica;
            if(chznDropID[0]!=null) chznDropID[0].style.fontFamily=fontFamilyHelvetica;
            if(captchaCodeName[0]!=null) captchaCodeName[0].style.fontFamily=fontFamilyHelvetica;
        }
    } else if(v==fontFamilyArial) {
        document.body.style.fontFamily=fontFamilyArial;
        createCookie(_vrstaFonta, fontFamilyArial);

        if(unosId != null && number1Id != null && number2Id != null) {
            unosId.style.fontFamily=fontFamilyArial;
            number1Id.style.fontFamily=fontFamilyArial;
            number2Id.style.fontFamily=fontFamilyArial;

            if(chznSingleId[0]!=null) chznSingleId[0].style.fontFamily=fontFamilyArial;
            if(chznDropID[0]!=null) chznDropID[0].style.fontFamily=fontFamilyArial;
            if(captchaCodeName[0]!=null) captchaCodeName[0].style.fontFamily=fontFamilyArial;
        }
    } else {
        document.body.style.fontFamily=fontFamilyVerdana;
        createCookie(_vrstaFonta, fontFamilyVerdana);

        if(unosId != null && number1Id != null && number2Id != null) {
            unosId.style.fontFamily=fontFamilyVerdana;
            number1Id.style.fontFamily=fontFamilyVerdana;
            number2Id.style.fontFamily=fontFamilyVerdana;

            if(chznSingleId[0]!=null) chznSingleId[0].style.fontFamily=fontFamilyVerdana;
            if(chznDropID[0]!=null) chznDropID[0].style.fontFamily=fontFamilyVerdana;
            if(captchaCodeName[0]!=null) captchaCodeName[0].style.fontFamily=fontFamilyVerdana;
        }
    }
}

function prilagodbaPristupacnosti() {
    var pp = readCookie(_prilagodbaPristupacnosti);

    if(pp == null) {
        createCookie(_prilagodbaPristupacnosti, 0);
        pp = readCookie(_prilagodbaPristupacnosti);
    }

    if(pp==0) {
        createCookie(_prilagodbaPristupacnosti, 1);
        prilagodbaPristupacnosti_1();
    } else {
        createCookie(_prilagodbaPristupacnosti, 0);
        prilagodbaPristupacnosti_0();
    }
}

function prilagodbaPristupacnosti_1() {
    document.body.classList.toggle("accessibility");
}

function prilagodbaPristupacnosti_0() {
    document.body.classList.toggle('accessibility');
}

function prikaziGresku() {
    var greskaElements = document.getElementsByName(greska);

    // IE11 ne podržava arrow funkcije
    // greskaElements.forEach((i) => {   
    //     i.style['display'] = 'block';
    // });
    greskaElements.forEach(function(i) {   
        i.style['display'] = 'block';
    });
}

function odznaci() {
    sud_=document.getElementsByName("sud")[0];

    if(sud_ != null) {
        div1_=sud_.nextElementSibling;

        if(div1_ != null) {
            a1_=div1_.children[0];

            if(a1_ != null) {
                myBluer(a1_);
            }
        }
    }
}

function myFocus(x) {
    x.style.borderColor = "blue";
    
    odznaci();
}

function myBluer(x) {
    x.style.borderColor = ""; 
}

function myFocusButton(x) {
    x.style.borderStyle="solid";
    x.style.borderColor = "blue";
    
    odznaci();
}

function myBluerButton(x) {
    x.style.borderStyle="";
    x.style.borderColor = ""; 
}

function myFocusMenu(x) {
    x.style.border = "1px solid blue";

    odznaci();
}

function myBluerMenu(x) {
    x.style.border = "";
}

function myFocusMojSpan(x) {
    x.children[0].style.borderColor = "blue";
}

function myBluerMojSpan(x) {
    x.style.borderColor = "#e3e3e3";
}

function myFocusSpanPredmet(x) {
    x.parentElement.style.borderColor = "blue";
}

function myBluerSpanPredmet(x) {
    x.parentElement.style.borderColor = "";
}

function myFocusOutNNP(x) {
    var menuPretragaId=document.getElementById("menuPretraga");
    
    menuPretragaId.focus();
}

function initVFPP() {
    var rcVf = readCookie(_velicinaFonta);
        
    if (rcVf == null) {
        createCookie(_velicinaFonta, 10);
        rcVf = readCookie(_velicinaFonta);
    } 
    
    if(rcVf==20) {
        postaviVelicinuFonta(20);
    } else if(rcVf==30) {
        postaviVelicinuFonta(30);
    } else {
        postaviVelicinuFonta(10);
    }

    var pp = readCookie(_prilagodbaPristupacnosti);

    if(pp == null) {
        createCookie(_prilagodbaPristupacnosti, 0);
        pp = readCookie(_prilagodbaPristupacnosti);
    } else if(pp == 1) {
        prilagodbaPristupacnosti_1();
    }

    var vf = readCookie(_vrstaFonta);

    if(vf == null) {
        createCookie(_vrstaFonta, "Verdana");
        vf = readCookie(_vrstaFonta);
    } 

    postaviVrstuFonta(vf);

    var vfId=document.getElementById(_vrstaFonta);
    vfId.value=vf;
}

function postaviVelicinuFonta(x) {
    const fontSize12="12pt";
    const fontSize14="14pt";
    const fontSize16="16pt";
    var unosId=document.getElementById("unos");
    var number1Id=document.getElementById("number1");
    var number2Id=document.getElementById("number2");
    var gumbTraziId=document.getElementById("gumbTrazi");
    var chznSingleId=document.getElementsByClassName("chzn-single");
    var chznDropID=document.getElementsByClassName("chzn-drop");
    var captchaCodeName=document.getElementsByName("captcha_code");
    
    if (x == 20) {
        document.body.style.fontSize = fontSize14;
        createCookie(_velicinaFonta, 20);
       
        if(unosId != null && number1Id != null && number2Id != null && gumbTraziId != null) {
            unosId.style.fontSize = fontSize14;
            number1Id.style.fontSize = fontSize14;
            number2Id.style.fontSize = fontSize14;
            gumbTraziId.style.fontSize = fontSize14;

            if(chznSingleId[0]!=null) chznSingleId[0].style.fontSize=fontSize14;
            if(chznDropID[0]!=null) chznDropID[0].style.fontSize=fontSize14;
            if(captchaCodeName[0]!=null) captchaCodeName[0].style.fontSize=fontSize14;
        }
    } else if (x == 30) {
        document.body.style.fontSize = fontSize16;
        createCookie(_velicinaFonta, 30);

        if(unosId != null  && number1Id != null && number2Id != null  && gumbTraziId != null) {
            unosId.style.fontSize = fontSize16;
            number1Id.style.fontSize = fontSize16;
            number2Id.style.fontSize = fontSize16;
            gumbTraziId.style.fontSize = fontSize16;

            if(chznSingleId[0]!=null) chznSingleId[0].style.fontSize=fontSize16;
            if(chznDropID[0]!=null) chznDropID[0].style.fontSize=fontSize16;
            if(captchaCodeName[0]!=null) captchaCodeName[0].style.fontSize=fontSize16;
        }
    } else {
        document.body.style.fontSize = fontSize12;
        createCookie(_velicinaFonta, 10);

        if(unosId != null && number1Id != null && number2Id != null && gumbTraziId != null) {
            unosId.style.fontSize = fontSize12;
            number1Id.style.fontSize = fontSize12;
            number2Id.style.fontSize = fontSize12;
            gumbTraziId.style.fontSize = fontSize12;

            if(chznSingleId[0]!=null) chznSingleId[0].style.fontSize=fontSize12;
            if(chznDropID[0]!=null) chznDropID[0].style.fontSize=fontSize12;
            if(captchaCodeName[0]!=null) captchaCodeName[0].style.fontSize=fontSize12;
        }
    }
}

function readCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');

    for(var i=0; i<ca.length; i++) {
        var c = ca[i];

        while(c.charAt(0) == ' ') {
            c = c.substring(1, c.length);
        }

        if(c.indexOf(nameEQ) == 0) {
            return c.substring(nameEQ.length, c.length);
        }
    }

    return null;
}

function createCookie(name, value) {
    var date = new Date();
    date.setFullYear(9999);
    var expires = "; expires=" + date.toGMTString();

    document.cookie = name + "=" + value + expires + "; path=/";
}