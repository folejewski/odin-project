class Node {
    constructor(value = null) {
        this.value = value;
        this.nextNode = null;
    }
}

class LinkedList {
    constructor() {
        this.headNode = null;
    }

    append(value) {
        const node = new Node(value);
        if (!this.headNode) {
            this.headNode = node;
            return;
        }
        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        current.nextNode = node;
    }

    prepend(value) {
        const node = new Node(value);
        node.nextNode = this.headNode;
        this.headNode = node;
    }

    size() {
        let count = 0;
        let current = this.headNode;
        while (current) {
            count++;
            current = current.nextNode;
        }
        return count;
    }

    head() {
        return this.headNode ? this.headNode.value : undefined;
    }

    tail() {
        if (!this.headNode) return undefined;
        let current = this.headNode;
        while (current.nextNode) {
            current = current.nextNode;
        }
        return current.value;
    }

    at(index) {
        let current = this.headNode;
        let i = 0;
        while (current) {
            if (i === index) return current.value;
            current = current.nextNode;
            i++;
        }
        return undefined;
    }

    pop() {
        if (!this.headNode) return undefined;
        const value = this.headNode.value;
        this.headNode = this.headNode.nextNode;
        return value;
    }

    contains(value) {
        let current = this.headNode;
        while (current) {
            if (current.value === value) return true;
            current = current.nextNode;
        }
        return false;
    }

    findIndex(value) {
        let current = this.headNode;
        let index = 0;
        while (current) {
            if (current.value === value) return index;
            current = current.nextNode;
            index++;
        }
        return -1;
    }

    toString() {
        let result = '';
        let current = this.headNode;
        while (current) {
            result += `( ${current.value} ) -> `;
            current = current.nextNode;
        }
        return result + 'null';
    }

    insertAt(index, ...values) {
        if (index < 0 || index > this.size()) throw new RangeError('Index out of bounds');
        if (index === 0) {
            values.reverse().forEach(v => this.prepend(v));
            return;
        }
        let current = this.headNode;
        for (let i = 0; i < index - 1; i++) {
            current = current.nextNode;
        }
        const rest = current.nextNode;
        values.forEach(v => {
            const node = new Node(v);
            current.nextNode = node;
            current = node;
        });
        current.nextNode = rest;
    }

    removeAt(index) {
        if (index < 0 || index >= this.size()) throw new RangeError('Index out of bounds');
        if (index === 0) {
            this.headNode = this.headNode.nextNode;
            return;
        }
        let current = this.headNode;
        for (let i = 0; i < index - 1; i++) {
            current = current.nextNode;
        }
        current.nextNode = current.nextNode.nextNode;
    }
}

export { LinkedList };