
Function.prototype.myBind = function (context) {
    const self = this;
    const args = Array.prototype.slice.call(arguments, 1);

    const fn = function () {
        const fnArgs = Array.prototype.slice.call(arguments);
        context = this instanceof fn ? this : context;
        return self.apply(context, args.concat(fnArgs));
    }

    return fn;
}

