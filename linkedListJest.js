class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    insertAtHead(value) {
        var newNode = new Node(value, this.head);
        this.head = newNode;
        this.length++;
    }

    getByIndex(index) {
        if(index < 0 || index >= this.length) {
            return null;
        }

        let currentElement = this.head;
        for(let i = 0; i < index; i++) {
            currentElement = currentElement.next;
        }

        return currentElement;
    }

    insertAtIndex(index, value) {
        if (index === 0) {
            return this.insertAtHead(value);
        }

        const prev = this.getByIndex(index - 1);
        if (prev === null) {
            return null;
        }

        prev.next = new Node(value, prev.next);
        this.length++;
    }

    removeHead() {
        this.head = this.head.next;
        this.length--;
    }
}

class Node {
    constructor(value, next) {
        this.value = value;
        this.next = next;
    }
}

LinkedList.fromValues = function(...values) {
    var linkedList = new LinkedList();
    for(let i = values.length - 1; i >= 0; i--) {
        linkedList.insertAtHead(values[i]);
    }

    return linkedList;
}

module.exports = LinkedList;