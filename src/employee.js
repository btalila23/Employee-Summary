modeules.export = class Employee {
    constructor(id, name, title) {
        this._id = id;
        this._name = name;
        this._title = title
    }

    _getId() {
        return this._id;
    }
    _getName(){
        return this._name;
    }
    _getTitle(){
        return this._title;
    }
}