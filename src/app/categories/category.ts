export class Category {
    id: number; //id: unique id number of the category
    name = ''; // name: category item name

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}