module.exports = class Node {
  constructor(id) {
    this.id = id;
    this.adjacents = new Set();
    this.similars = new Set();
  }

  addAdjacent(node) {
    this.adjacents.add(node);
  }

  addSimilar(node) {
    this.similars.add(node);
  }

  removeAdjacent(node) {
    return this.adjacents.delete(node);
  }

  isAdjacent(node) {
    return this.adjacents.has(node);
  }

  removeSimilar(node) {
    return this.similars.delete(node);
  }

  isSimilar(node) {
    return this.similars.has(node);
  }

  getAdjacents() {
    return Array.from(this.adjacents);
  }

  getSimilars() {
    return Array.from(this.similars);
  }
};
