
var list = document.querySelector('.list');
var sendData = document.querySelector('.send');
var data = JSON.parse(localStorage.getItem('listData')) || [];

//監聽觸發事件與更新

sendData.addEventListener('click',addData,false);
list.addEventListener('click',toggleDone,false);
updateList(data);


function addData(e){
  e.preventDefault();
var txt = document.querySelector('.text').value;
var todo={
    content:txt
};
data.push(todo);
updateList(data);
localStorage.setItem('listData',JSON.stringfy(data));

}

//介面更新的運作
function updateList(items){ 
var str='';
var len = items.length;
for(var i=0; i<len; i++){
  str += '<li>'+'待辦之'+(i+1)+':'+'<a href="#" data-index='+ i + '>刪除</a>' + items[i].content+'</li>'
}
list.innerHTML=str;
document.querySelector('.text').value='';
}

//刪除的運作
function toggleDone(e){
  e.preventDefault();
  if(e.target.nodeName !== 'A'){return};
  var index = e.target.dataset.index;
  data.splice(index,1);
  updateList(data);
  localStorage.setItem('listData',JSON.stringfy(data));
  
}