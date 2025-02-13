// Task 5

let orders = [
    {id: 101, customer: "alice", total: 300},
    {id: 102, customer: "bob", total: 450},
    {id: 103, customer: "alice", total: 200}
]

function findOrder(orders, orderId) {
    return orders.find(order => order.id === orderId)
}

console.log(findOrder(orders, 102))

// Task 6

let inventory = {
    items: [],
    addItem(name,qty) {
        this.items.push({name, qty});
    },
    removeLatestItem() {
        this.items.pop()
    },
    removeFirstItem() {
        this.items.shift()
    }
}

inventory.addItem("Monitor", 5)
inventory.addItem("Keyboard", 10)
console.log(JSON.stringify(inventory.items))
inventory.removeLatestItem()
console.log(JSON.stringify(inventory.items))
inventory.removeFirstItem()
console.log(JSON.stringify(inventory.items))

// Task 7

employees = [
    {name: "Alice", position: "Developer", salary: 70000},
    {name: "Bob", position: "Designer", salary: 60000},
    {name: "Charlie", position: "Manager", salary: 90000}
]
function findEmployee(employees, name) {
    return employees.find(employee => employee.name === name)
}

console.log(findEmployee(employees, "Alice"))

// Task 8 

let orders1 = [
    {id: 1, customer: "alice"}, {id: 2, customer: "bob"}
]
let orders2 = [
    {id: 3, customer: "charlie"}, {id: 4, customer: "david"}
]

function mergeOrders(orders1,orders2) {
    return [...orders1,...orders2]
}

console.log(mergeOrders(orders1, orders2))

// Extra

let employe = { name: "alice", position: "developer", salary: 70000.1273 }

console.log(`${employe.name} is a ${employe.position} and makes $${employe.salary.toFixed(2)}.`)