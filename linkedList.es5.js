function LinkedList() {
    this.head = null;
    this.tail = null;
}

function Node(value, prev, next) {
    this.value = value;
    this.prev = prev;
    this.next = next;
}

const ll = new LinkedList();
LinkedList.prototype.addHead = function(value) {
    var newNode = new Node(value, this.head, null);
}
console.log(ll);