"use strict";
class Base {
    static getGreeting() {
        return "Hello world";
    }
}
class Derived extends Base {
    myGreeting = Derived.getGreeting();
}
//# sourceMappingURL=script.js.map