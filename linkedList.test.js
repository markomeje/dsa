
const LinkedList = require('./linkedListJest');

describe('#insertAtHead', () => {
    test('It adds the element to the beginning of the list', () => {
        const linkedList = new LinkedList();
        linkedList.insertAtHead(10);
        const oldHead = linkedList.head;
        linkedList.insertAtHead(20);

        expect(linkedList.head.value).toBe(20);
        expect(linkedList.head.next).toBe(oldHead);
        expect(linkedList.length).toBe(2);
    });
});

describe('#getByIndex', () => {
    describe('With index less than zero', () => {
        test('It returns null', () => {
            const linkedList = LinkedList.fromValues(10, 20);
            expect(linkedList.getByIndex(-1)).toBeNull()
        });
    });

    describe('With index is greated than linked list length', () => {
        test('It returns null', () => {
            const linkedList = LinkedList.fromValues(10, 20);
            expect(linkedList.getByIndex(5)).toBeNull()
        });
    });

    describe('With index of zero', () => {
        test('It returns the head', () => {
            const linkedList = LinkedList.fromValues(10, 20);
            expect(linkedList.getByIndex(0).value).toBe(10)
        });
    });

    describe('With index of at the middle', () => {
        test('It returns the element at that index.', () => {
            const linkedList = LinkedList.fromValues(10, 20, 50, 60, 80);
            expect(linkedList.getByIndex(2).value).toBe(50)
        });
    });
});

describe('#insertAtIndex', () => {
    describe('With index less than zero', () => {
        test('It does not insert anything', () => {
            const linkedList = LinkedList.fromValues(10, 20);
            linkedList.insertAtIndex(-1, 30);
            expect(linkedList.length).toBe(2);
        });
    });

    describe('With index is greated than linked list length', () => {
        test('It does not insert anything', () => {
            const linkedList = LinkedList.fromValues(10, 20);
            linkedList.insertAtIndex(5, 30);
            expect(linkedList.length).toBe(2);
        });
    });

    describe('At index of zero', () => {
        test('Insert at the head', () => {
            const linkedList = LinkedList.fromValues(10, 20);
            linkedList.insertAtIndex(0, 30);

            expect(linkedList.head.value).toBe(30);
            expect(linkedList.head.next.value).toBe(10);
            expect(linkedList.length).toBe(3);
        });
    });

    describe('With index of at the middle', () => {
        test('Insert at the middle', () => {
            const linkedList = LinkedList.fromValues(10, 20, 64, 70);
            linkedList.insertAtIndex(2, 45);
            const node = linkedList.getByIndex(2);
            
            expect(node.value).toBe(45);
            expect(node.next.value).toBe(64);
            expect(linkedList.length).toBe(5);
        });
    });
});

describe('#removeHead', () => {
    test('Removes the head', () => {
        const linkedList = LinkedList.fromValues(10, 20, 30);
        linkedList.removeHead();

        expect(linkedList.head.value).toBe(20);
        expect(linkedList.length).toBe(2);
    });
});