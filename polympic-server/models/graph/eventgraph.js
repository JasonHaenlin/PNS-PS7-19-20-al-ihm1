/* eslint-disable no-throw-literal */
module.exports = class EventGraph {
  constructor() {
    this.listEvents = new Map();
  }


  addEvent(event) {
    if (!this.listEvents.has(event.id)) {
      this.listEvents.set(event.id, { next: [], previous: [] });
    } else {
      throw 'Already exists';
    }
  }

  addEdge(event, nextevent) {
    if (this.listEvents.has(event)) {
      if (this.listEvents.has(nextevent)) {
        if (!this.listEvents.get(event).next.includes(nextevent)) {
          this.listEvents.get(event).next.push(nextevent);
        }
      } else {
        throw `Can't add non-existing event ->'${nextevent}'`;
      }
      if (!this.listEvents.get(nextevent).previous.includes(event)) {
        this.listEvents.get(nextevent).previous.push(event);
      }
    } else {
      throw `You should add '${event}' first`;
    }
  }
  getVertex(eventid) {
    return this.listEvents.get(eventid);
  }

  getNextEvents(eventid) {
    return this.listEvents.get(eventid).next;
  }

  getPreviousEvents(eventid) {
    return this.listEvents.get(eventid).previous;
  }
};
