////PART A

function ClassDecorator(target) {
    target.prototype.name = "naveen";
    console.log(`Function name is ${target.name}`); // Print the target name
}

@ClassDecorator
class country {
    name: string; // define a param with value
}

var player = new country(); // instantiate and access the value of proprty
console.log(`Property value of name is ${player.name} `)