class Nodo {
    constructor(valor) {
      this.valor = valor;
      this.siguiente = null;
      this.anterior = null;
    }
  }
  
export default class DoubleLinkedList {
    constructor() {
      this.cabeza = null;
      this.cola = null;
    }
  
    addEnd(valor) {
      const nuevoNodo = new Nodo(valor);
  
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
        this.cola = nuevoNodo;
      } else {
        nuevoNodo.anterior = this.cola;
        this.cola.siguiente = nuevoNodo;
        this.cola = nuevoNodo;
      }
    }
  
    addFirst(valor) {
      const nuevoNodo = new Nodo(valor);
  
      if (!this.cabeza) {
        this.cabeza = nuevoNodo;
        this.cola = nuevoNodo;
      } else {
        nuevoNodo.siguiente = this.cabeza;
        this.cabeza.anterior = nuevoNodo;
        this.cabeza = nuevoNodo;
      }
    }
  
    getFirstToEnd() {
        let actual = this.cabeza;
    const valores = [];

    while (actual) {
      valores.push(actual.valor);
      actual = actual.siguiente;
    }

    return valores;
  }

  getHead() {
    return this.cabeza;
  }


  getSize() {
    let actual = this.cabeza;
    let size = 0;

    while (actual) {
      size++;
      actual = actual.siguiente;
    }

    return size;
  }
  getAt(index) {
    if (index < 0 || index >= this.getSize()) {
      return null;
    }

    let actual = this.cabeza;
    let contador = 0;

    while (contador < index) {
      actual = actual.siguiente;
      contador++;
    }

    return actual.valor;
  }
} 