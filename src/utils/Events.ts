// eslint-disable-next-line @typescript-eslint/no-explicit-any
type Callback = (payload: any) => void;

class Events {
  events: { [eventName: string]: Array<Callback> };

  constructor() {
    this.events = {};
  }

  on(eventName: string, cb: Callback) {
    if (!this.events[eventName]) this.events[eventName] = [];

    this.events[eventName].push(cb);
  }

  off(eventName: string, cb: Callback) {
    if (!this.events[eventName]) return;

    const callbackIndex = this.events[eventName].findIndex(
      (eventCallback) => eventCallback === cb
    );

    if (callbackIndex > -1) {
      if (this.events[eventName].length === 1) {
        delete this.events[eventName];
      } else {
        this.events[eventName].splice(callbackIndex, 1);
      }
    }
  }

  emit(eventName: string, payload: any) {
    if (!this.events[eventName]) return;

    this.events[eventName].forEach((cb) => cb(payload));
  }
}

const events = new Events();

export default events;
