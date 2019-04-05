function write() {
  var xhr = new XMLHttpRequest();

  xhr.open('post','http://localhost:3000/text');
  xhr.setRequestHeader(`Content-type`,`application/json`);
  xhr.send();

  xhr.addEventListener('load',function() {
    var result = JSON.parse(xhr.responseText);
    var all = '';
    var i = result.length - 1;
    while(i >= 0) {
      all += `<div class = 'userText'><a class="userName" href="http://localhost:3000/user" onclick = "clickName(innerText)">${result[i].author}</a> <p class ='createdAt'> ${moment(result[i].created , "YYYY-MM-DD hh;mm;s").fromNow()}</p> <p class="userMassText">${result[i].description}</p></div>`
      i--;
    }
    document.querySelector("#text1").innerHTML = all;
  })
}

function generateNewTweet() {
  var tweet = {};
  tweet.user = randomUser[getRandomInt(0, randomUser.length)];
  tweet.message = randomMessage[getRandomInt(0, randomMessage.length)];
  tweet.created_at = new Date(); // 어떻게 하면 보기 좋은 형태로 나타낼 수 있을까요?
  return tweet;
}



write();
