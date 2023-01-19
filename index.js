var characters = ["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];

var capital = ["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z"];

var number = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];

var special = ["~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"];


let out1 = document.getElementById("op1")
let out2 = document.getElementById("op2")
let generated = false
let addCapital = false
let addNumber = false
let addSpecial = false


function add_capital() {
    if (document.getElementById("box1").checked) {
        addCapital = true
    }else {
        addCapital = false
    }
    return addCapital
}

function add_number() {
    if (document.getElementById("box2").checked) {
        addNumber = true
    }else {
        addNumber = false
    }
    return addNumber
}

function add_special() {
    if (document.getElementById("box3").checked) {
        addSpecial = true
    }else {
        addSpecial = false
    }
    return addSpecial
}


function size_wanted() {
    let s = Number(document.getElementById("size").value)
    if (s > 0 && s <= 15) {
        document.getElementById("error").textContent = ""
        return s
    }else{
        document.getElementById("error").textContent = "INVALID SIZE!!"
    }
}


function rand() {
    let r = Math.floor(Math.random()*finalSize())
    console.log(r)
    return r
}


function list() {
    let l = characters.slice()
    let cond1 = add_capital()
    let cond2 = add_number()
    let cond3 = add_special()
    
    if (cond1 === true) {
        for (let i = 0; i < capital.length; i++) {
            l.push(capital[i])
        }
    }
    if (cond2 === true) {
        for (let i = 0; i < number.length; i++) {
            l.push(number[i])
        }
    }
    if (cond3 === true) {
        for (let i = 0; i < special.length; i++) {
            l.push(special[i])
        }
    }
    return l
}


function finalSize() {
    let finalList = list()
    return finalList.length
}


function generate() {
    generated = true
    let ans1 = ''
    let ans2 = ''
    let finalList = list()
    let size = size_wanted()
    
    for (let i = 0; i < size; i++) {
        let random1 = rand()
        ans1 += finalList[random1]
        let random2 = rand()
        ans2 += finalList[random2]
    }
    out1.value = ans1
    out2.value = ans2
}
