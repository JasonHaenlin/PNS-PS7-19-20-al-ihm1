module.exports = class Node {
    constructor(id) {
        this.id = id;
        this.adjacents = new Set();
    }

    addAdjacent(node) {
        this.adjacents.add(node);
    }
    removeAdjacent(node) {
        return this.adjacents.delete(node);
    }

    isAdjacent(node) {
        return this.adjacents.has(node);
    }

    getAdjacents() {
        return Array.from(this.adjacents);
    }
}