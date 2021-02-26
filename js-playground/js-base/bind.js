var test = function (b) {
    this.habit = b;
}
// var bindTest1 = test.bind({a: 20});
// bindTest1(10);

Function.prototype.mockBind = function (context) {
    const self = this;
    console.log(context)

    const args = Array.prototype.slice.call(arguments, 1);
    console.log(args)
    const fn = function () {
        const thisArgs = Array.prototype.slice.call(arguments);
        context = this instanceof fn ? this : context;
        return self.apply(context, thisArgs.concat(args))
    }
    fn.prototype = this.prototype;
    return fn;
}

const A = test.mockBind({ habit: 1 }, 2);

const a = new A();

console.log(a.habit)

