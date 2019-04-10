function write(result) {
  all = document.querySelector("#text1").innerHTML
  all = `<div class = 'userText'><a class="userName" onclick = "clickName(innerText)">${result.author}</a> <p class ='createdAt'> ${moment(result.created , "YYYY-MM-DD hh;mm;s").fromNow()}</p> <p class="userMassText">${result.description}</p></div>` + all;

  document.querySelector("#text1").innerHTML = all;
}



document.getElementById("twitingBox").onclick = function () {
  if (document.getElementById("namebox").value === "") {
    alert("이름을 입력해주세요");
  } else if (document.getElementById("messageBox").value === "") {
    alert("내용을 입력해주세요");
  } else {
  var twitterInfo = {};
  twitterInfo['author'] = document.getElementById("namebox").value
  twitterInfo['description'] = document.getElementById("messageBox").value
  twitterInfo['created'] = new Date().format();
  DATA.push(twitterInfo);
  xhrSend('http://localhost:3000/write_twit',twitterInfo);

  document.getElementById("namebox").value = '';
  document.getElementById("messageBox").value = '';
}
}
function xhrSend(url,data) {

    data = JSON.stringify(data)
    var xhr = new XMLHttpRequest();

    xhr.open('post',url);
    xhr.setRequestHeader(`Content-type`,`application/json`);
    xhr.send(data);

    xhr.addEventListener('load',function() {
      var result = JSON.parse(xhr.responseText);
      write(result);
  })
}

function clickName(name) {
  filterData = {};
  filterData.author = name;
  data = JSON.stringify(filterData)
  var xhr = new XMLHttpRequest();
  console.log(data);
  xhr.open('get',`http://localhost:3000/twit?author=${name}`);
  xhr.setRequestHeader(`Content-type`,`application/json`);
  xhr.send(data);

  xhr.addEventListener('load',function() {
    var result = JSON.parse(xhr.responseText);
    all = '';
    for(var el of result) {
      all = `<div class = 'userText'><a class="userName" onclick = "clickName(innerText)">${el.author}</a> <p class ='createdAt'> ${moment(el.created , "YYYY-MM-DD hh;mm;s").fromNow()}</p> <p class="userMassText">${el.description}</p></div>` + all;
    }
    document.getElementById("refresh").innerText = "back";
    document.getElementById("text1").innerHTML = all;
  })
}

document.getElementById("refresh").onclick = thottle(refresh,1000)

function refresh() {
  if(document.getElementById("refresh").innerText === "back") {
    writeAllTwit(DATA)
    document.getElementById("refresh").innerText = "refresh"
  } else {
  var randomData = {};
  randomData.author = generateNewTweet().user;
  randomData.description = generateNewTweet().message;
  randomData.created = new Date().format();
  randomData = JSON.stringify(randomData);
  var xhr = new XMLHttpRequest();

  xhr.open('post','http://localhost:3000/write_twit');
  xhr.setRequestHeader('Content-type','application/json');
  xhr.send(randomData);

  xhr.addEventListener('load',function() {
    var result = JSON.parse(xhr.responseText);
    DATA.push(result);
    write(DATA[DATA.length - 1]);
  })}

}

function generateNewTweet() {
  var tweet = {};
  tweet.user = randomUser[getRandomInt(0, randomUser.length)];
  tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
  tweet.created_at = new Date(); // 어떻게 하면 보기 좋은 형태로 나타낼 수 있을까요?
  return tweet;
}
