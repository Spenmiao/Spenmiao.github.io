// 数字练习 function
function isNumer(x) {
    if (isNaN(x)) {
        return '非数字'
    }else{
        return '数字'
    }
}

function toFixNumer(x, y) {
    return x.toFixed(y)
}

function absNumer(x) {
    return Math.abs(x)
}

function cellNumer(x) {
    return Math.ceil(x)
}

function floorNumer(x) {
    return Math.floor(x)
}

function roundNumer(x) {
    return Math.round(x)
}

function maxNumer(x, y) {
    if(x > y){
        return x
    }else{
        return y
    }
}

function minNumer(x, y) {
    if(x < y) {
        return x
    }else{
        return y
    }
}

// 数字练习 js 
let numerA = document.getElementById('num-a');
let numerB = document.getElementById('num-b');
let numResult = document.getElementById('num-result')
document.querySelectorAll('#num-items button').forEach((el, i) => {
    switch(i) {
        case 0:
            el.onclick = x => numResult.innerHTML = isNumer(numerA.value);
            break;
        case 1:
            el.onclick = x => numResult.innerHTML = toFixNumer(Number(numerA.value), Number(numerB.value));
            break;
        case 2:
            el.onclick = x => numResult.innerHTML = absNumer(Number(numerA.value), Number(numerB.value));
            break;
        case 3:
            el.onclick = x => numResult.innerHTML = cellNumer(Number(numerA.value));
            break;
        case 4:
            el.onclick = x => numResult.innerHTML = floorNumer(Number(numerA.value));
            break;
        case 5:
            el.onclick = x => numResult.innerHTML = roundNumer(Number(numerA.value));
            break;
        case 6:
            el.onclick = x => numResult.innerHTML = maxNumer(Number(numerA.value), Number(numerB.value));
            break;
        case 7:
            el.onclick = x => numResult.innerHTML = minNumer(Number(numerA.value), Number(numerB.value));
    }
})

// 字符串练习function
function curLen(x) {
    return x.length
}

function thirdStr(x) {
    return Array.from(x)[2]
}


function getlineNum(x){
    return x.split('\n').length
}

function subStr(x, y) {
    return x.substr(x, y)
}

// 字符串练习 js 
let strA = document.getElementById('str-a');
let strB = document.getElementById('str-b');
let strNumA = document.getElementById('str-num-a');
let strNumB = document.getElementById('str-num-b');
let strResult = document.getElementById('str-result');
document.querySelectorAll('#str-items button').forEach((el, i) => {
    switch(i) {
        case 0:
            el.onclick = x => strResult.innerHTML = curLen(strA.value);
            break;
        case 1:
            el.onclick = x => strResult.innerHTML = thirdStr(strA.value);
            break;
        case 2:
            el.onclick = x => strResult.innerHTML = strA.value + strB.value;
            break;
        case 3:
            el.onclick = x => strResult.innerHTML = strA.value.indexOf(strB.value);
            break;
        case 4:
            el.onclick = x => strResult.innerHTML = strB.value.lastIndexOf(strA.value);
            break;
        case 5:
            el.onclick = x => strResult.innerHTML = strA.value.slice(strNumA.value, strNumB.value);
            break;
        case 6:
            el.onclick = x => strResult.innerHTML = getlineNum(strA.value);
            break;
        case 7:
            el.onclick = x => strResult.innerHTML = strA.value.substr(strNumA.value, strNumB.value);
            break;
        case 8:
            el.onclick = x => strResult.innerHTML = strA.value.toUpperCase();
            break;
        case 9:
            el.onclick = x => strResult.innerHTML = strA.value.toLowerCase();
            break;
        case 10:
            el.onclick = x => strResult.innerHTML = strA.value.trim();
            break;
        case 11:
            el.onclick = x => strA.value = strB.value;
    }
})

// 队列练习
let queue = ["apple", "pear"];
let queueCont = document.getElementById('queue-cont');
let queueIn = document.getElementById('queue-input');
document.querySelectorAll('#myqueue button').forEach((el, i) => {
    switch(i) {
        case 0:
            el.onclick = x => {
                queue.push(queueIn.value);
                queueCont.innerHTML = queue.join('<-');
            };
            break;
        case 1:
            el.onclick = x => {
                queue.shift();
                queueCont.innerHTML = queue.join('<-');
            };
            break;
        case 2:
            el.onclick = x => {
                queueCont.innerHTML = queue.slice(0, 2).join('<-')
            };
            break;
        case 3:
            el.onclick = x => {
                if(queue.length){
                    queueCont.innerHTML = '不为空'
                }else {
                    queueCont.innerHTML = '空'
                }
            }

    }
})

// 栈练习
let stack = ["apple", "pear"];
let stackCont = document.getElementById('stack-cont');
let stackIn = document.getElementById('stack-input');
document.querySelectorAll('#mystack button').forEach((el, i) => {
    switch(i) {
        case 0:
            el.onclick = x => {
                stack.push(stackIn.value);
                stackCont.innerHTML = stack.join('<-');
            };
            break;
        case 1:
            el.onclick = x => {
                stack.pop();
                stackCont.innerHTML = stack.join('<-');
            };
            break;
        case 2:
            el.onclick = x => {
                stackCont.innerHTML = stack.slice(-2).join('<-')
            };
            break;
        case 3:
            el.onclick = x => {
                if(stack.length){
                    stackCont.innerHTML = '不为空'
                }else {
                    stackCont.innerHTML = '空'
                }
            }

    }
})