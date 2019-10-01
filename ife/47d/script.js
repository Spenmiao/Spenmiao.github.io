
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
    this.num = 1
  
}

function Cook(name, salary) {
    Staff.call(this, name, salary);
    this.ordered_list = [];
    this.cooked_list = [];
    this.num = 1
}

function Customer() {
    this.ordered_list = [];
    this.dish = [];
    this.pay = false;
    this.num = 1
}

function getInstance(fn) {
    let result;
    return function(name, salary){
        return result || (result = new fn(name, salary)); 
    }
}

cook = getInstance(Cook)('Tom', 10000);
server = getInstance(Server)('Aime', 5000);
customer = getInstance(Customer)();

// 客户点餐

// 服务员作用 给厨师菜单 传菜
server.customer_to_cook = function(customer, cook){
    console.log('好的，请稍等')
    cook.ordered_list = [...customer.ordered_list];
}
server.cook_to_customer = function(customer, cook){
    // this.num = Number(this.num)
    // console.log(`server ${this.num}`);
    // this.num ++;
    new Promise(resolve => {
        if(cook.cooked_list.length){
            console.log('上菜');
            customer.dish = [...customer.dish, ...cook.cooked_list];
            cook.cooked_list = [];
            resolve();
        }else if(customer.pay){
            console.log('好的，用餐愉快')
        }else{
            setTimeout(resolve, 1000)
        }
    }).then(() => {server.cook_to_customer(customer, cook);})
}
// 厨师看菜单做饭
cook.to_cook = function(){
    // this.num = Number(this.num)
    // console.log(`cook ${this.num}`);
    // this.num  = this.num + 1;
    new Promise(resolve => {
        if(cook.ordered_list.length){
            let dish = cook.ordered_list.shift();
            console.log(dish + '准备做')
            setTimeout(() => {
                console.log(dish + '做完')
                cook.cooked_list.push(dish);
                resolve()
            }, 2000);
        }
    }).then(cook.to_cook)
}
//客人吃饭
customer.eat = function(){
    // this.num = Number(this.num)
    // console.log(`customer ${this.num}`);
    // this.num ++;
    new Promise(resolve => {
        if(customer.dish.length){
            let dish = customer.dish.shift();
            customer.ordered_list = customer.ordered_list.filter(x => x != dish);
            console.log(dish + '我要吃了');
            setTimeout(() => {
                console.log(dish + '吃完了')
                resolve()
            }, 3000);
        }else if(!customer.ordered_list.length){
            console.log('服务员， 结账')
            customer.pay = true;
        }else{
            setTimeout(resolve, 2000)
        }
    }).then(customer.eat)
}


let ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
})


let unit_time = 1000;
let menu = [{name:'月亮饼', price:3, time:3*unit_time},
{name:'鸡蛋饼', price:4, time:2*unit_time},
{name:'葱油饼', price:2.5, time:3*unit_time},
{name:'豆浆', price:2, time:1*unit_time},
{name:'玉米粥', price:2, time:1*unit_time}]




function order(customer_order){
    customer.ordered_list = customer_order;
    server.customer_to_cook(customer, cook);
    cook.to_cook();
    server.cook_to_customer(customer, cook)
    customer.eat();
}

let customer_order = ["月亮饼", "鸡蛋饼", "葱油饼", "豆浆", "玉米粥"]
// customer.ordered_list = customer_order;
// server.customer_to_cook(customer, cook);
// cook.to_cook()
order()