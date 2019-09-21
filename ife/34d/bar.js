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
function maxDate(datelist){
    return datelist.sort((x,y) => {
        if (x > y) {return -1}
        else if (x < y) {return 1}
        else {return 0}
    })[0]
}

function createTag(tag, tagAttr){
    let svgNS = "http://www.w3.org/2000/svg";
    let oTag =document.createElementNS(svgNS, tag);
    if(tagAttr) {
        for (let i in tagAttr){
            oTag.setAttribute(i, tagAttr[i])
        }
    }
    return oTag
}


function createRect(rectDate){
  
    sharedAttr = {
        fill:'black',
        stroke:'black',
        'stroke-width': 2
    }

    let rectdate = rectDate;
    let yMax = maxDate([...rectdate]);
    let width = 20;
    let dist = 10;
    let xMax = (width + dist) * rectdate.length

    // 创建坐标系
    let x_axis = {x1:0, y1:yMax, x2:xMax, y2:yMax}
    let y_axis = {x1:0, y1:0, x2:0, y2:yMax}
    let oParent = document.getElementById('div1');
    let oSvg = createTag('svg');
    let oG_axis = createTag('g', sharedAttr);
    oG_axis.setAttribute('id', 'axix')
    oG_axis.setAttribute('transform', 'translate(30,20)')
    let oX_axis = createTag('line', x_axis);
    let oY_axis = createTag('line', y_axis);
    // 创建矩形
    rectdate.forEach((el, i) => {
        let rectAttr = {width:width, height:el, x:(i+1)*dist+i*width, y:yMax-el};
        let oRect = createTag('rect', rectAttr)
        oG_axis.appendChild(oRect)
        })

    oG_axis.appendChild(oX_axis);
    oG_axis.appendChild(oY_axis);
    oSvg.appendChild(oG_axis);
    oParent.appendChild(oSvg);


}

window.onload = function() {
    let rectdate = [120, 100, 140, 160, 180, 185, 190, 210, 230, 245, 255, 270];
    createRect(rectdate)

}