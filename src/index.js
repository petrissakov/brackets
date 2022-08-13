module.exports = function check(str, bracketsConfig) {
let starts = [];
let ends = [];
for(config of bracketsConfig){
  starts.push(config[0]);
  ends.push(config[1]);
}
let pairs = [];
for(char of str){
  // console.log(char);
  if(starts.includes(char)){
    if(starts.indexOf(char)==ends.indexOf(char)){
      console.log('equal')
      if(pairs.length!=0 && pairs[pairs.length-1].indexOf(char)>=0) pairs[pairs.length - 1].push(char);
      else  pairs.push([char]);
    }
    else pairs.push([char]);

  } else if(ends.includes(char)){
    if(pairs.length==0) return false;
     pairs[pairs.length - 1].push(char);
  } else return false;
  for(bracket of bracketsConfig){
    console.log(bracket.toString());
    console.log(pairs);
    if(pairs[pairs.length-1].toString()==bracket.toString()) {pairs.pop();break;}
    
  }
  

 
}
console.log(pairs);
if (pairs.length == 0) return true;
else return false;

}

str = '||';

config = [['|', '|']];;

console.log(module.exports(str, config));
