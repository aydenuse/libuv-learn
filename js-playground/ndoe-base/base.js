'use strict';
const EventEmitter = require('events');

class Base {

    constructor() {
        this.event = new EventEmitter();
    }

}


module.exports = Base;