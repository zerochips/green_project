//각각 넣으려면 배열에 넣어야함
//빈 배열 사용        
let words = [];

words[0] = "당신은 지금도 최고고,<br> 이전에도 최고였으면 앞으로도 최고일것이다.";
words[1] = "성공하는 사람은<br> 실패하는데 익숙한 사람이다.";
words[2] = "후회를 최대한 이용하라,<br> 깊이 후회한다는 것은 새로운 삶을 산다는 것이다.";
words[3] = "가짜 친구는 소문을 믿고,<br> 진짜 친구는 나를 믿는다.";
words[4] = "성공이라는 못을 박으려면<br> 끈질김이라는 망치가 필요하다";

let rand = Math.floor(Math.random()*words.length);  //0부터 시작해야되기 때문에 이경우 1을 더하면 안됨 | random을 사용해 랜덤값 출력
document.write(words[rand]);