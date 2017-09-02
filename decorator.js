////PART A
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
function ClassDecorator(target) {
    target.prototype.name = "naveen";
    console.log("Function name is " + target.name); // Print the target name
}
var country = (function () {
    function country() {
    }
    country = __decorate([
        ClassDecorator
    ], country);
    return country;
}());
var player = new country(); // instantiate and access the value of proprty
console.log("Property value of name is " + player.name + " ");
