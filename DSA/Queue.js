class Queue {

    constructor() {
        this.items = {};
        this.frontIndex = 0;
        this.backIndex = 0;
    }


    enqueue(item) {
        this.items[this.backIndex] = item;
        this.backIndex++;
    }

    dequeue() {
        const item = this.items[this.frontIndex];
        delete this.items[this.frontIndex];
        this.frontIndex++;
        return item;
    }

}


const q = new Queue();

q.enqueue(4);
q.enqueue(5);
q.enqueue(6);
q.dequeue();

console.log(q);
