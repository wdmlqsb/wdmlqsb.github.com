//let myHeading = document.querySelector('h1');//querySelector获取标题的引用，存在myHeading里
//myHeading.textContent = 'Hello world!';
/*function multiply(num1, num2) {
    let result = num1 * num2;
    return result;
}
multiply(4, 7);
multiply(20, 20);
multiply(0.5, 3);

let myHTML = document.querySelector('html');
myHTML.onclick = function() {alert('别戳我，我怕疼。');};

document.querySelector('html').onclick = function() {
    alert('别戳我，我怕疼。');
}
 */
let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/firefox.jpg') {
        myImage.setAttribute('src', 'images/firefox2.jpg');
    } else {
        myImage.setAttribute('src', 'images/firefox.jpg');
    }
}
let myButton = document.querySelector('button');
let myHeading = document.querySelector('h1');
//设置个性化欢迎信息，调用myHeading
function setUserName(){
    let myName = prompt('请输入你的名字。');
    //检查用户输入的名字为空或是null
    if(!myName || myName === null){
        setUserName();
    }
    else{
        localStorage.setItem('name', myName);
        myHeading.textContent = 'hello.' + myName;
    }
}
//初始化，调用setUserName
if(!localStorage.getItem('name')) {
    setUserName();//设置textContent属性
} else {
    let storedName = localStorage.getItem('name');//如果存在name数据，调用getItem()获取保存的名字
    myHeading.textContent = 'Hello，' + storedName;
}
//为按钮设置onclick事件处理器，调用myButton，click按钮时运行setUserName()函数
myButton.onclick = function(){
    setUserName();
}
/*
const list = document.createElement('ul');
const info = document.createElement('p');
const html = document.querySelector('html');

info.textContent = '以下是一个动态列表。点击列表外任意位置可添加新的列表项。点击已有的列表项可修改内容。';

document.body.appendChild(info);
document.body.appendChild(list);

html.onclick = function() {
    const listItem = document.createElement('li');
    const listContent = prompt('希望列表中显示什么内容？');
    listItem.textContent = listContent;
    list.appendChild(listItem);

    listItem.onclick = function(e) {
        e.stopPropagation();
        const listContent = prompt('为列表项输入新的内容');
        this.textContent = listContent;
    };
};
 */










