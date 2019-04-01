export class Todo {

    id: number; //id: unique id number of the todo
    title = ''; // title: todo item title
    complete = false; // complete: boolenan (yes/no), status of completion
    category: number; // category: id of todo list

    constructor(values: Object = {}) {
        Object.assign(this, values);
      }
}
