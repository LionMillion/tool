var NumberOfWords = 80
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://tii.ai/Xx71UQG"
words[2] = "https://tii.ai/72mVgs"
words[3] = "https://tii.ai/0cJO5yw1"
words[4] = "https://tii.ai/gWnSSwf"
words[5] = "https://tii.ai/BTXIr"
words[6] = "https://tii.ai/G5VszS"
words[7] = "https://tii.ai/HCswL"
words[8] = "https://tii.ai/FRIdkj4J"
words[9] = "https://tii.ai/4BDuxFN"
words[10] = "https://tii.ai/fY9V"
words[11] = "https://tii.ai/HyW9GZT"
words[12] = "https://tii.ai/E99ggsr"
words[13] = "https://tii.ai/eWuOPZ"
words[14] = "https://tii.ai/C8fjz9G"
words[15] = "https://tii.ai/uG1uJicW"
words[16] = "https://tii.ai/m1PMafd"
words[17] = "https://tii.ai/n9mXoj5B"
words[18] = "https://tii.ai/QUfjT6wq"
words[19] = "https://tii.ai/V6BOc"
words[20] = "https://tii.ai/eYaER"
words[21] = "https://tii.ai/WY5UqsAA"
words[22] = "https://tii.ai/Kn2NO"
words[23] = "https://tii.ai/EEBlewT"
words[24] = "https://tii.ai/Oy3QnH"
words[25] = "https://tii.ai/5x9Ny"
words[26] = "https://tii.ai/OszRK"
words[27] = "https://tii.ai/2TXX1afh"
words[28] = "https://tii.ai/zO11I"
words[29] = "https://tii.ai/NK9iS"
words[30] = "https://tii.ai/g9E3N"
words[31] = "https://tii.ai/wnlxt"
words[32] = "https://tii.ai/93NQn"
words[33] = "https://tii.ai/PGsnal"
words[34] = "https://tii.ai/tn27aW"
words[35] = "https://tii.ai/tko68fDW"
words[36] = "https://tii.ai/w4Z0ofWT"
words[37] = "https://tii.ai/EK01wR"
words[38] = "https://tii.ai/iYsb"
words[39] = "https://tii.ai/4JoFGJJw"
words[40] = "https://tii.ai/utTQ"
words[41] = "https://tii.ai/WY5UqsAA"
words[42] = "https://tii.ai/Kn2NO"
words[43] = "https://tii.ai/EEBlewT"
words[44] = "https://tii.ai/Oy3QnH"
words[45] = "https://tii.ai/5x9Ny"
words[46] = "https://tii.ai/OszRK"
words[47] = "https://tii.ai/2TXX1afh"
words[48] = "https://tii.ai/zO11I"
words[49] = "https://tii.ai/NK9iS"
words[50] = "https://tii.ai/g9E3N"
words[51] = "https://tii.ai/wnlxt"
words[52] = "https://tii.ai/93NQn"
words[53] = "https://tii.ai/PGsnal"
words[54] = "https://tii.ai/tn27aW"
words[55] = "https://tii.ai/tko68fDW"
words[56] = "https://tii.ai/w4Z0ofWT"
words[57] = "https://tii.ai/EK01wR"
words[58] = "https://tii.ai/iYsb"
words[59] = "https://tii.ai/4JoFGJJw"
words[60] = "https://tii.ai/utTQ"
words[61] = "https://tii.ai/bji1"
words[62] = "https://tii.ai/FQ5k0i"
words[63] = "https://tii.ai/sKP0zUOd"
words[64] = "https://tii.ai/W3bR"
words[65] = "https://tii.ai/1w2dVTb"
words[66] = "https://tii.ai/wgy0s"
words[67] = "https://tii.ai/E9TUUp"
words[68] = "https://tii.ai/vlG7Nd"
words[69] = "https://tii.ai/CfZJT"
words[70] = "https://tii.ai/czmwz"
words[71] = "https://tii.ai/1raugmL"
words[72] = "https://tii.ai/miHu1C"
words[73] = "https://tii.ai/of3Ff"
words[74] = "https://tii.ai/p6vPl"
words[75] = "https://tii.ai/eWUccd7"
words[76] = "https://tii.ai/VUNr"
words[77] = "https://tii.ai/eDzpM"
words[78] = "https://tii.ai/9hzIqsZ"
words[79] = "https://tii.ai/TDVPSQ"
words[80] = "https://tii.ai/kIwzjoZy"



function BuildArray(size){
this.length = size
for (var i = 1; i <= size; i++){
this[i] = null}
return this
}

function PickRandomWord(frm) {
// Generate a random number between 1 and NumberOfWords
var rnd = Math.ceil(Math.random() * NumberOfWords)

// Display the word inside the text box
frm.WordBox.value = words[rnd]
}


function usersOnline() {
  var rndUser;
  rndUser = Math.floor(Math.random() * 50) + 100;
  document.getElementsByClassName("wtf")[0].innerHTML ="Users online: " + rndUser;
  setInterval(function(){
    rndUser = Math.floor(Math.random() * 50) + 100;
    document.getElementsByClassName("wtf")[0].innerHTML ="Users online: " + rndUser;
  }, 5020);
}
