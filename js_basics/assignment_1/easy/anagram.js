/*
  Write a function `isAnagram` which takes 2 parameters and returns true/false if those are anagrams or not.
  What's Anagram?
  - A word, phrase, or name formed by rearranging the letters of another, such as spar, formed from rasp.
*/

function isAnagram(str1, str2) {
  if(str1.length==str2.length){
    let char1=[];
    let char2=[];
    for(let i=0;i<str1.length;i++){
        char1[i]=str1[i];
        char2[i]=str2[i];       
    }
      
    let length1=char1.length;
    let length2=char2.length;
    for(let i=0;i<=length1;i++){
      for(let j=0;j<=length2;j++){
        if(char1[i]==char2[j]){
          console.log("matched",char1[i],char2[j]);
          console.log(i,j);
          if(char1.length==1 && char2.length==1){
            char1=[];
            char2=[];
          }else{
            char1.splice(i,1);
            char2.splice(j,1);
          }
          i=0;
          j=0;
        }
      }
    }
    console.log(char1,char2);
    if(char1.length==0 && char2.length==0){
      return true;
    }
  }

  return false;
}

console.log("String is anagram : "+isAnagram("rajr","jarj"));