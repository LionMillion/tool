var NumberOfWords = 48
var words = new BuildArray(NumberOfWords)

// Use the following variables to 
// define your random words:
words[1] = "http://gestyy.com/e0w5gX" 
words[2] = "http://gestyy.com/e0qKWT" 
words[3] = "http://gestyy.com/e0qKWG" 
words[4] = "http://gestyy.com/e0qKWN" 
words[5] = "http://gestyy.com/e0qKW4" 
words[6] = "http://gestyy.com/e0qLuK" 
words[7] = "http://gestyy.com/e0qKEr" 
words[8] = "http://gestyy.com/e0qKEo" 
words[9] = "http://gestyy.com/e0qKEf" 
words[10] = "http://gestyy.com/e0qKEl" 
words[11] = "http://gestyy.com/e0qLuK" 
words[12] = "http://gestyy.com/e0qKEI" 
words[13] = "http://gestyy.com/e0qLuK" 
words[14] = "http://gestyy.com/e0qLuK" 
words[15] = "http://gestyy.com/e0qKEV" 
words[16] = "http://gestyy.com/e0qKE2" 
words[17] = "http://gestyy.com/e0qLuK" 
words[18] = "http://gestyy.com/e0qKRw" 
words[19] = "http://gestyy.com/e0qKRu" 
words[20] = "http://gestyy.com/e0qKKl" 
words[21] = "http://gestyy.com/e0qKKb" 
words[22] = "http://gestyy.com/e0qKKE" 
words[23] = "http://gestyy.com/e0qKKI" 
words[24] = "http://gestyy.com/e0w5gH" 
words[25] = "http://gestyy.com/e0qKKD" 
words[26] = "http://gestyy.com/e0qLuK" 
words[27] = "http://gestyy.com/e0qKKV" 
words[28] = "http://gestyy.com/e0qLuK" 
words[29] = "http://gestyy.com/e0qKK7" 
words[30] = "http://gestyy.com/e0qLuK" 
words[31] = "http://gestyy.com/e0qKLu" 
words[32] = "http://gestyy.com/e0qKLs" 
words[33] = "http://gestyy.com/e0qLuK" 
words[34] = "http://gestyy.com/e0qKLc" 
words[35] = "http://gestyy.com/e0qLuK" 
words[36] = "http://gestyy.com/e0qKLY" 
words[37] = "http://gestyy.com/e0qKLY" 
words[38] = "http://gestyy.com/e0qKLw" 
words[39] = "http://gestyy.com/e0w5gj" 
words[40] = "http://gestyy.com/e0qKLw" 
word[41] = "http://gestyy.com/e0qKWm"
word[42] = "http://gestyy.com/e0w5gY"
word[43] = "http://gestyy.com/e0w5gA"
word[44] = "http://gestyy.com/e0w5gX"
word[45] = "http://gestyy.com/e0w5gs"
word[46] = "http://gestyy.com/e0w5gc"
word[47] = "http://gestyy.com/e0qLuK"
word[48] = "http://gestyy.com/e0qKKI"

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
