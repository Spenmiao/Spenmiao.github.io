let sourceData = [{
    product: "手机",
    region: "华东",
    sale: [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270]
}, {
    product: "手机",
    region: "华北",
    sale: [80, 70, 90, 110, 130, 145, 150, 160, 170, 185, 190, 200]
}, {
    product: "手机",
    region: "华南",
    sale: [220, 200, 240, 250, 260, 270, 280, 295, 310, 335, 355, 380]
}, {
    product: "笔记本",
    region: "华东",
    sale: [50, 60, 80, 110, 30, 20, 70, 30, 420, 30, 20, 20]
}, {
    product: "笔记本",
    region: "华北",
    sale: [30, 35, 50, 70, 20, 15, 30, 50, 710, 130, 20, 20]
}, {
    product: "笔记本",
    region: "华南",
    sale: [80, 120, 130, 140, 70, 75, 120, 90, 550, 120, 110, 100]
}, {
    product: "智能音响",
    region: "华东",
    sale: [10, 30, 4, 5, 6, 5, 4, 5, 6, 5, 5, 25]
}, {
    product: "智能音响",
    region: "华北",
    sale: [15, 50, 15, 15, 12, 11, 11, 12, 12, 14, 12, 40]
}, {
    product: "智能音响",
    region: "华南",
    sale: [10, 40, 10, 6, 5, 6, 8, 6, 6, 6, 7, 26]
}]


// 生成checkbox
function genCheckBox(id, list, select) {
    let contain = document.getElementById(id);
    let all = document.createElement('input');
    all.setAttribute('type', 'checkbox');
    all.setAttribute('checkbox-type', 'all');
    all.setAttribute('id', select);
    all.setAttribute('value', select);
    let labelAll = document.createElement('label');
    labelAll.setAttribute('for', select);
    labelAll.appendChild(document.createTextNode('全选'))
    contain.appendChild(all);
    contain.appendChild(labelAll);
    list.forEach((el, i) => {
        let child = document.createElement('input');
        child.setAttribute('type', 'checkbox'); 
        child.setAttribute('id', el);
        child.setAttribute('value', el);
        child.checked = (i == 0) ? true : false;
        let label = document.createElement('label');
        label.setAttribute('for', el);
        label.appendChild(document.createTextNode(el));
        contain.appendChild(child);
        contain.appendChild(label);
    })
}

// 复选框逻辑
function checked(targetnode, id) {
    document.querySelector(targetnode).onchange  = (event) =>{
        if (event.target.nodeName == 'INPUT'){
            let nodes = document.querySelectorAll(targetnode + ' ' + 'input');
            nodes = Array.from(nodes);
            numer = nodes.filter(ev => ev.checked);
          if (event.target.getAttribute('checkbox-type') == 'all'){
              
              if (event.target.checked) {
                  nodes.forEach(x => x.checked = true)
                  }else {
                        event.target.checked = true;
                        }
            }else{if (event.target.checked){ 
                
            if(nodes.length-1 == numer.length ){
            nodes[0].checked = 'true'
            }}else {
                // console.log('ada')
                nodes[0].checked = false;
                if (numer.length == 0){
                    event.target.checked = 'true'
                }
        }
            }
        }

        // 处理数据
        let filtereddate = getfilterDate(sourceData);
        // 生成表格
        createTable(filtereddate)

}}

// 根据复选框处理数据
function getfilterDate(date){
    let regionchecked = document.querySelectorAll('#region-radio-wrapper input[type="checkbox"]:checked');
    let productchecked = document.querySelectorAll('#product-radio-wrapper input[type="checkbox"]:checked');
    let regioncheckedList = Array.from(regionchecked).map(x=>x.value);
    let productcheckedList = Array.from(productchecked).map(x=>x.value);
    let filterDate = date.filter(x => { return regioncheckedList.indexOf(x['region']) != -1});
    filterDate = filterDate.filter(x => { return productcheckedList.indexOf(x['product']) != -1})
    // console.log(filterDate);
    let title = [];
    let text = ['1月', '2月', '3月', '4月', '5月', '6月', '7月', '8月', '9月', '10月', '11月', '12月'];
    // 进一步整理，调整前后顺序
    let regionCount =regioncheckedList.length;
    let productCount =productcheckedList.length;
    if (regionCount == 1 && productCount > 1){
        console.log(`region${regionCount}, product${productCount}`)
        title = ['地区', '商品'];
        filterDate = filterDate.map(x => {
            return [x.region, x.product, ...x.sale]
        })
    }else{
        console.log(`product${productCount}, region${regionCount}`)
        title = ['商品', '地区'];
        filterDate = filterDate.map(x => {
            return [x.product, x.region, ...x.sale]
        })
    }
    let head = [...title, ...text];
    filterDate.unshift(head);
    console.log(filterDate);
    return(filterDate)
}

// 生成tabel
function createTable(date){
    document.getElementById('mytable').innerHTML = '';
    let tr = date.map((x) => {
        let td = x.map((y) =>{
           return `<td>${y}</td>`
        }).join('')
        return `<tr>${td}</tr>`
    }).join('')
    document.getElementById('mytable').innerHTML = `<tbody>${tr}</tbody>`
}
// function createTable(date){
//     document.getElementById('mytable').innerHTML = '';
//     let rowcount = 1;
//     let indextext = -1;
//     let tr = date.map((x, i) => {
//         let td = x.map((y, j) =>{u
//            return `<td>${y}</td>`
//         }).join('')
//         return `<tr>${td}</tr>`
//     }).join('')
//     document.getElementById('mytable').innerHTML = `<tbody>${tr}</tbody>`
// }


let region = ["华东", "华北", "华南"];
let product = ["手机", "笔记本", "智能音响"];
window.onload = function() {
    genCheckBox('region-radio-wrapper', region, 'region');
    genCheckBox('product-radio-wrapper', product, 'product');
    checked('#product-radio-wrapper', 'product');
    checked('#region-radio-wrapper', 'region');
    document.querySelector('input').click()
}

