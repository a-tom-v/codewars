function squareDigits(num){
    //may the code be with you
    let strNum = String(num);
    let result = '';
    for(let i = 0; i < strNum.length; i++){
        let squared = parseInt(strNum[i]) * parseInt(strNum[i]);
        result = result + String(squared);
    }
    return parseInt(result);
  }