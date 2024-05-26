import Node from "./Node";

class Pila {
    constructor() {
        this.top = null;
        this.size = 0;
    }

    push(consultor) {
        const newNode = new Node(consultor);
        newNode.next = this.top;
        this.top = newNode;
        this.size++;
    }

    pop() {
        if (!this.isEmpty()) {
            const poppedNode = this.top;
            this.top = poppedNode.next;
            this.size--;
            return poppedNode.consultor;
        }
        return null;
    }

    isEmpty() {
        return this.size === 0;
    }
}

export default Pila;
