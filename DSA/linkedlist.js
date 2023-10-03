/* in this modelu, i am going to learn about the Linked list in javascript */

class Node {

    constructor(element) {
        this.element = element;
        this.next = null;
    }
}


class LList {

    constructor() {
        this.head = null;
        this.size = 0;
    }

    add(element) {

        let node = new Node(element);

        let current = 0;

        if (this.head === null) {

            this.head = node;
        }

        else {

            current = this.head;

            while (current.next) {

                current = current.next;
            }

            current.next = node;
        }
        
        this.size++;
    }

}


let linkedList = new LList();

(linkedList.add(5));

(linkedList.add(6));
(linkedList.add(7));
(linkedList.add(8));

console.log(linkedList);


