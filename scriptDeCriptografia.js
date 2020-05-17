let resCodi = document.getElementById("resCodi");
let msgParaCodi = document.getElementById("msgParaCodificar");
let resdeCodi = document.getElementById("resdeCodi");
let msgParaDecodi = document.getElementById("msgParaDecodificar");
let chaveS = document.getElementById("chave");
let alfabeto = [97, 98, 99, 100, 101, 102, 103, 104, 105, 106, 107, 108,
    // a=0  b=1 c=2 d=3  e=4  f=5  g=6  h=7  i=8  j=9  k=10 l=11
    109, 110, 111, 112, 113, 114, 115, 116, 117, 118, 119, 120, 121, 122,
];// m=12 n=13 o=14 p=15 q=16 r=17 s=18 t=19 u=20 v=21 w=22 x=23 y=24 z=25

function codiA() {
    return resCodi.innerHTML += String.fromCharCode(alfabeto[0])
}
function codiB() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[1]));
}
function codiC() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[2]));
}
function codiD() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[3]));
}
function codiE() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[4]));
}
function codiF() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[5]));
}
function codiG() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[6]));
}
function codiH() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[7]));
}
function codiI() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[8]));
}
function codiJ() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[9]));
}
function codiK() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[10]));
}
function codiL() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[11]));
}
function codiM() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[12]));
}
function codiN() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[13]));
}
function codiO() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[14]));
}
function codiP() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[15]));
}
function codiQ() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[16]));
}
function codiR() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[17]));
}
function codiS() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[18]));
}
function codiT() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[19]));
}
function codiU() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[20]));
}
function codiV() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[21]));
}
function codiW() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[22]));
}
function codiX() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[23]));
}
function codiY() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[24]));
}
function codiZ() {
    return (resCodi.innerHTML += String.fromCharCode(alfabeto[25]));
}


function deCodiA() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[0]))
}
function deCodiB() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[1]))
}
function deCodiC() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[2]))
}
function deCodiD() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[3]))
}
function deCodiE() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[4]))
}
function deCodiF() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[5]))
}
function deCodiG() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[6]))
}
function deCodiH() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[7]))
}
function deCodiI() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[8]))
}
function deCodiJ() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[9]))
}
function deCodiK() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[10]))
}
function deCodiL() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[11]))
}
function deCodiM() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[12]))
}
function deCodiN() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[13]))
}
function deCodiO() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[14]))
}
function deCodiP() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[15]))
}
function deCodiQ() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[16]))
}
function deCodiR() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[17]))
}
function deCodiS() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[18]))
}
function deCodiT() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[19]))
}
function deCodiU() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[20]))
}
function deCodiV() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[21]))
}
function deCodiW() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[22]))
}
function deCodiX() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[23]));
}
function deCodiY() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[24]))
}
function deCodiZ() {
    return (resdeCodi.innerHTML += String.fromCharCode(alfabeto[25]))
}

function codificar() {
    if (chaveS.value < 1 || chaveS.value > 25 || chaveS.value.length == 0) {
        window.alert("Verifique o valor posto na chave!");
    } else {
        resCodi.innerHTML = '';
        let msgLength = msgParaCodi.value.length;
        let chave = Number(Math.floor(chaveS.value))
        for (let pos = 0; pos < 26; pos++) {
            alfabeto[pos] += chave;
            if (alfabeto[pos] > 122) {
                alfabeto[pos] -= 26;
            }
        }
        for (let pos = 0; pos < msgLength; pos++) {
            if (msgParaCodi.value.toLowerCase().charAt(pos) == "a") {
                codiA();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "b") {
                codiB();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "c") {
                codiC();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "d") {
                codiD();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "e") {
                codiE();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "f") {
                codiF();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "g") {
                codiG();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "h") {
                codiH();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "i") {
                codiI();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "j") {
                codiJ();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "k") {
                codiK();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "l") {
                codiL();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "m") {
                codiM();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "n") {
                codiN();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "o") {
                codiO();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "p") {
                codiP();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "q") {
                codiQ();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "r") {
                codiR();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "s") {
                codiS();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "t") {
                codiT();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "u") {
                codiU();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "v") {
                codiV();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "w") {
                codiW();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "x") {
                codiX();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "y") {
                codiY();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == "z") {
                codiZ();
            } else if (msgParaCodi.value.toLowerCase().charAt(pos) == " ") {
                resCodi.innerHTML += " ";
            }
        }
        for (let pos = 0; pos < 26; pos++) {
            alfabeto[pos] -= chave;
            if (alfabeto[pos] < 97) {
                alfabeto[pos] += 26;
            }
        }
    }
}
function decodificar() {
    if (chaveS.value < 1 || chaveS.value > 25 || chaveS.value.length == 0) {
        window.alert("Verifique o valor posto na chave!");
    } else {
        resdeCodi.innerHTML = "";
        let msgLength = msgParaDecodi.value.length;
        let chave = Number(Math.floor(chaveS.value))
        for (let pos = 0; pos < 26; pos++) {
            alfabeto[pos] -= chave;
            if (alfabeto[pos] < 97) {
                alfabeto[pos] += 26;
            }
        }
        for (let pos = 0; pos < msgLength; pos++) {
            if (msgParaDecodi.value.toLowerCase().charAt(pos) == "a") {
                deCodiA();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "b") {
                deCodiB();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "c") {
                deCodiC();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "d") {
                deCodiD();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "e") {
                deCodiE();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "f") {
                deCodiF();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "g") {
                deCodiG();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "h") {
                deCodiH();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "i") {
                deCodiI();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "j") {
                deCodiJ();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "k") {
                deCodiK();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "l") {
                deCodiL();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "m") {
                deCodiM();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "n") {
                deCodiN();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "o") {
                deCodiO();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "p") {
                deCodiP();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "q") {
                deCodiQ();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "r") {
                deCodiR();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "s") {
                deCodiS();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "t") {
                deCodiT();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "u") {
                deCodiU();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "v") {
                deCodiV();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "w") {
                deCodiW();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "x") {
                deCodiX();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "y") {
                deCodiY();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == "z") {
                deCodiZ();
            } else if (msgParaDecodi.value.toLowerCase().charAt(pos) == " ") {
                resdeCodi.innerHTML += " ";
            }
        }
        for (let pos = 0; pos < 26; pos++) {
            alfabeto[pos] += chave;
            if (alfabeto[pos] > 122) {
                alfabeto[pos] -= 26;
            }
        }
    }
}
