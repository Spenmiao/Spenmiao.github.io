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
}
function Cook(name, salary) {
    Staff.call(this, name, salary);
}


let ifeRestaurant = new Restaurant({
    cash: 1000000,
    seats: 20,
    staff: []
})

let newCook = new Cook('Tony', 10000)