class Linkedlist {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(value) {
        const newNode = new Node(value, this.head, null);
        this.head = newNode;
        this.length++;
    }
}

class Node {
    constructor(value, next, prev) {
        this.value = value;
        this.next = next;
        this.prev = prev;
    }
}

const ll = new Linkedlist();
ll.addToHead(304);
ll.addToHead(109);
ll.addToHead(405);
ll.addToHead(900);
console.log(ll);