(function(){
  xhrSend('http://localhost:3000/text');
}) ()

function write(result) {
  console.log(result);
  all = document.querySelector("#text1").innerHTML
  var i = 0
  while(i < result.length) {
    all = `<div class = 'userText'><a class="userName" onclick = "clickName(innerText)">${result[i].author}</a> <p class ='createdAt'> ${moment(result[i].created , "YYYY-MM-DD hh;mm;s").fromNow()}</p> <p class="userMassText">${result[i].description}</p></div>` + all;
    i++;
  }
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

  xhrSend('http://localhost:3000/text_add',twitterInfo);

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

  xhr.open('post',"http://localhost:3000/filter");
  xhr.setRequestHeader(`Content-type`,`application/json`);
  xhr.send(data);
  location.href=`http://localhost:3000/${name}`

}

document.getElementById("refresh").onclick = thottle(refresh,1000)

function refresh() {
  var randomData = {};
  randomData.author = generateNewTweet().user;
  randomData.description = generateNewTweet().message;
  randomData.created = new Date().format();

  xhrSend("http://localhost:3000/text_add",randomData);

}

function generateNewTweet() {
  var tweet = {};
  tweet.user = randomUser[getRandomInt(0, randomUser.length)];
  tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
  tweet.created_at = new Date(); // 어떻게 하면 보기 좋은 형태로 나타낼 수 있을까요?
  return tweet;
}
