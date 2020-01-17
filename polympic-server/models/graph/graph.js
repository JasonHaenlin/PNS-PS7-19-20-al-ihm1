/* eslint-disable no-throw-literal */

const Node = require('./node');
module.exports = class Graph {
  constructor() {
    this.nodes = new Map();
  }

  addEdge(source, destination) {
    const sourceNode = this.addVertex(source);
    const destinationNode = this.addVertex(destination);

    sourceNode.addAdjacent(destinationNode);

    return [sourceNode, destinationNode];
  }

  getVertex(id) {
    if (this.nodes.has(id)) {
      return this.nodes.get(id);
    }
  }

  addVertex(id) {
    if (this.nodes.has(id)) {
      return this.nodes.get(id);
    } else {
      const vertex = new Node(id);
      this.nodes.set(id, vertex);
      return vertex;
    }
  }

  removeVertex(id) {
    const current = this.nodes.get(id);
    if (current) {
      for (const node of this.nodes.values()) {
        node.removeAdjacent(current);
      }
    }
    return this.nodes.delete(id);
  }

  removeEdge(source, destination) {
    const sourceNode = this.nodes.get(source);
    const destinationNode = this.nodes.get(destination);

    if (sourceNode && destinationNode) {
      sourceNode.removeAdjacent(destinationNode);
    }
    return [sourceNode, destinationNode];
  }
};
