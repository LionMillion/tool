var NumberOfWords = 71
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "https://shrinkurl.org/DgX2At"
words[2] = "https://shrinkurl.org/jXfgHyQM"
words[3] = "https://shrinkurl.org/JwRj"
words[4] = "https://shrinkurl.org/YR8r"
words[5] = "https://shrinkurl.org/VP1ZEp"
words[6] = "https://shrinkurl.org/TDLItLe3"
words[7] = "https://shrinkurl.org/SpeCrhNW"
words[8] = "https://shrinkurl.org/xtFH"
words[9] = "https://shrinkurl.org/rDSlP"
words[10] = "https://shrinkurl.org/jdfsdd"
words[11] = "https://shrinkurl.org/Adc5"
words[12] = "https://shrinkurl.org/AvVu"
words[13] = "https://shrinkurl.org/bqrHXJ8"
words[14] = "https://shrinkurl.org/6TCD"
words[15] = "https://shrinkurl.org/N47qz"
words[16] = "https://shrinkurl.org/8edVGRfT"
words[17] = "https://shrinkurl.org/aB8R"
words[18] = "https://shrinkurl.org/orC7d"
words[19] = "https://shrinkurl.org/gJ2J"
words[20] = "https://shrinkurl.org/2MDGU"
words[21] = "https://shrinkurl.org/T4bQFVY"
words[22] = "https://shrinkurl.org/Pz61A9MM"
words[23] = "https://shrinkurl.org/ZyG7gnz"
words[24] = "https://shrinkurl.org/wPQED"
words[25] = "https://shrinkurl.org/a1HG"
words[26] = "https://shrinkurl.org/t2DPjd5"
words[27] = "https://shrinkurl.org/aPTg"
words[28] = "https://shrinkurl.org/d9JBZ"
words[29] = "https://shrinkurl.org/l3GuxMQ9"
words[30] = "https://shrinkurl.org/5cepTH"
words[31] = "https://shrinkurl.org/e8v1y"
words[32] = "https://shrinkurl.org/EUok7PKG"
words[33] = "https://shrinkurl.org/bTqp"
words[34] = "https://shrinkurl.org/cBlel"
words[35] = "https://shrinkurl.org/AgAMEd"
words[36] = "https://shrinkurl.org/nJ7GM"
words[37] = "https://shrinkurl.org/1yJlD"
words[38] = "https://shrinkurl.org/nM0SgoLx"
words[39] = "https://shrinkurl.org/fV8U"
words[40] = "https://shrinkurl.org/sZpO"
words[41] = "https://shrinkurl.org/hbIFpNdW"
words[42] = "https://shrinkurl.org/aurIzC"
words[43] = "https://shrinkurl.org/Q8Ru"
words[44] = "https://shrinkurl.org/oghddH"
words[45] = "https://shrinkurl.org/0IUtk"
words[46] = "https://shrinkurl.org/hJPmws"
words[47] = "https://shrinkurl.org/wVtypjBF"
words[48] = "https://shrinkurl.org/DREBD3q"
words[49] = "https://shrinkurl.org/mt6RFG"
words[50] = "https://shrinkurl.org/GjTc"
words[51] = "https://shrinkurl.org/vhn4eD"
words[52] = "https://shrinkurl.org/L8kQUv"
words[52] = "https://todaynewspk.win/ELQRX"
words[53] = "https://todaynewspk.win/GqoiDKk"
words[54] = "https://todaynewspk.win/TBTK"
words[55] = "https://todaynewspk.win/bq6q"
words[56] = "https://todaynewspk.win/Wbsc2u"
words[57] = "https://todaynewspk.win/qT8KUx"
words[58] = "https://todaynewspk.win/fuQ5VmI"
words[59] = "https://todaynewspk.win/H3cKBo"
words[60] = "https://todaynewspk.win/7OEKzhhC"
words[61] = "http://gestyy.com/eqr27b"
words[62] = "http://gestyy.com/eqr27E"
words[63] = "http://gestyy.com/eqr27I"
words[64] = "http://gestyy.com/eqr27D"
words[65] = "http://gestyy.com/eqr27K"
words[66] = "http://gestyy.com/eqr27V"
words[67] = "http://gestyy.com/eqr272"
words[68] = "http://gestyy.com/eqr277"
words[69] = "http://gestyy.com/eqr28w"
words[70] = "http://gestyy.com/eqr28u"
words[71] = "http://gestyy.com/eqr28s"





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
