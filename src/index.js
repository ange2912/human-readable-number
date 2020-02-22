module.exports = function toReadable (number) {
  let list = {
    0:'zero',
    1:'one',
    2:'two',
    3:'three',
    4:'four',
    5:'five',
    6:'six',
    7:'seven',
    8:'eight',
    9:'nine',
    10:'ten',
    11:'eleven',
    12:'twelve',
    13:'thirteen',
    14:'fourteen',
    15:'fifteen',
    16:'sixteen',
    17:'seventeen',
    18:'eighteen',
    19:'nineteen',
    20:'twenty',
    30:'thirty',
    40:'forty',
    50:'fifty',
    60:'sixty',
    70:'seventy',
    80:'eighty',
    90:'ninety',
    100:'hundred'
  }

  let result = '';
  numberStr = String(number);
  numbers = numberStr.split('');
  if (number < 21) {
    result += list[number]
  } else if (number<100){
    numbers[1] !=0 ? result += (list[numbers[0] * 10] + ' ' + list[numbers[1]]) : result+=list[numbers[0] * 10]
  } else if (number > 99 && numbers[1] > 1 && numbers[2] > 0) {
    result += (list[numbers[0]] + ' hundred ' + list[numbers[1] * 10] + ' ' + list[numbers[2]])
  } else if (numbers[1]==0){
    numbers[2]==0 ? result+= list[numbers[0]] + ' hundred' : result+= list[numbers[0]] + ' hundred ' + list[numbers[2]] 
  } else {
    result += (list[numbers[0]] + ' hundred ' + list[number - 100 * numbers[0]])
  }
return result;
}
