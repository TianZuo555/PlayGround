
export class LinkedListNode {
    data: any;
    nextNode : LinkedListNode;
    constructor(data, next = null) {
        this.data = data;
        this.nextNode = next;
    }
}

