```javascript
function margeSort(arr) {  //나누기
    if(arr.length === 1) {
        return arr;
    }
    const middle = Math.floor(arr.length/2);
    const left = arr.slice(0,middle);
    const right = arr.slice(middle);
    

return marge(margeSort(left),margeSort(right)); 

}

function marge(left,right) { //합치기
    let leftIndex = 0;
    let rightIndex = 0;
    const result = [];
    

while(leftIndex < left.length && rightIndex < right.length) {
    if(left[leftIndex] < right[rightIndex] ) {
        result.push(right[rightIndex]);
        rightIndex++;
    } else {
        result.push(left[leftIndex]);
        leftIndex++;
    }
}
return [...result,...left.slice(leftIndex),...right.slice(rightIndex)]

}
```

<p><a href="https://commons.wikimedia.org/wiki/File:Merge-sort-example-300px.gif#/media/File:Merge-sort-example-300px.gif"><img src="https://upload.wikimedia.org/wikipedia/commons/c/cc/Merge-sort-example-300px.gif" alt="Merge-sort-example-300px.gif"></a><br>By <a href="//commons.wikimedia.org/w/index.php?title=User:Swfung8&amp;action=edit&amp;redlink=1" class="new" title="User:Swfung8 (page does not exist)">Swfung8</a> - <span class="int-own-work" lang="ko">자작</span>, <a href="https://creativecommons.org/licenses/by-sa/3.0" title="Creative Commons Attribution-Share Alike 3.0">CC BY-SA 3.0</a>, <a href="https://commons.wikimedia.org/w/index.php?curid=14961648">링크</a></p>

