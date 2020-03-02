const employee = require("./employee");
modules.export = class Engineer extends employee {
    constructor(name, id, email, title, github) {
        super(name, id, email)
        this._github 
       
    }

    getName() {
        return this._name;
    }
    getId(){
        return this._id;
    }
    getEmail(){
        return this._email;
    }
    
    getRole(){
        return this.constructor.name;
    }
}