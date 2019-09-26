
function Restaurant(info) {
    this.cash = info.cash;
    this.seats = info.seats;
    this.staff = info.staff;
}
Restaurant.prototype.fire = function(staff){
    this.staff = this.staff.filter(x => x!=staff.name);
}
Restaurant.prototype.hire = function(staff){
    this.staff.push(staff.name);
}

function Staff(name, salary){
    this.id = ''
    this.name = name;
    this.salary = salary;
}

Staff.prototype.do = function() {
    console.log('完成一次工作  ')
}

function Server(name, salary) {
    Staff.call(this, name, salary);
    this.menu = [];
}
Server.prototype.getMenu = function (menu) {
    this.menu = menu;
}
Server.prototype.dishUp= function () {
    this.menu = [];
}


function Cook(name, salary) {
    Staff.call(this, name, salary);
    this.menu = [];
}
Cook.prototype.getMenu = function (menu) {
    this.menu = menu;
}
Cook.prototype.dishUp= function () {
    this.menu = [];
}

function getInstance(fn) {
    let result;
    return function(name, salary){
        return result || (result = new fn(name, salary)); 
    }
}


let ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
})

let singleCook = getInstance(Cook);
let singleServer = getInstance(Server);
cook1 = singleCook('Tony', 10000);
server1 = singleServer('Tom', 5000);



function randomMenu() {
    let menu = '手撕包 菜香辣烤鱼 木耳炒鸡蛋 南瓜派 蒸蛋 盐焗鹌鹑蛋 西瓜吐司 胡萝卜炒肉 红枣发糕 自制椒盐木耳炒白菜 西红柿鸡蛋饼 花朵馒头 猪肉白菜包子 酸菜肉片'.split(' ')
    let rnum = Math.round((Math.random() * menu.length));
    return menu.slice(0, rnum)
}
function order(menu) {
    server1.getMenu(menu);
    cook1.getMenu(menu);
}
function dishUp() {
    cook1.dishUp();
    server1.dishUp();
}

let customerMenu = randomMenu()
order(customerMenu);
console.log(cook1.menu, server1.menu)