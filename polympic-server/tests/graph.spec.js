/* eslint-disable no-undefined */
require('../bin/www');
const assert = require('chai').assert;
const Graph = require('../models/graph/graph');

describe('Graph', () => {
  let graph;
  // const getValues = node => (Array.isArray(node) ? node.map(a => getValues(a)) : node.value);

  beforeEach(() => {
    graph = new Graph();
  });

  describe('#addVertex', () => {
    it('should add vertex to graph', () => {
      const node = graph.addVertex('a');
      assert.equal(node.id, 'a');
      assert.equal(graph.nodes.size, 1);
    });
    it('should not add duplicated values', () => {
      const node1 = graph.addVertex('a');
      const node2 = graph.addVertex('a');
      assert.equal(graph.nodes.size, 1);
      assert.isTrue(node1 === node2);
    });
  });
  describe('#removeVertex', () => {
    beforeEach(() => {
      graph.addVertex('a');
    });

    it('should remove vertex', () => {
      assert.isTrue(graph.removeVertex('a'));
      assert.equal(graph.nodes.size, 0);
      assert.isTrue(!graph.removeVertex('a'));
    });
  });

  describe('#addEdge', () => {
    it('should create node if they dont exist', () => {
      graph.addEdge('a', 'b');
      assert.equal(graph.nodes.size, 2);
    });

    it('should add node a as adjacent of b', () => {
      const [a, b] = graph.addEdge('a', 'b');
      assert.isTrue(a.getAdjacents().includes(b));
      assert.equal(b.getAdjacents().length, 0);
      graph.addEdge('b', 'a');
      assert.isTrue(b.getAdjacents().includes(a));
    });
    it('should add falsy values', () => {
      const [first, second] = graph.addEdge(0, false);
      assert.equal(first.id, 0);
      assert.isTrue(!second.id);
    });
  });
});
