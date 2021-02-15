export default class Performance extends godot.Node {
  static _instance: Performance;
  timers = {};

  _enter_tree() {
    console.log(`JS Performance monitor loaded`);
    Performance._instance = this;
  }

  _exit_tree() {
    this.timers = undefined;
  }

  time(name: string) {
    console.log(`timer starting: ${name}`);
    this.timers[name] = godot.OS.get_ticks_usec();
  }

  endTime(name: string) {
    const timeNow = godot.OS.get_ticks_usec();
    const timeThen = this.timers[name];
    const diff = timeNow - timeThen;
    console.log(`${name}: ${diff * 0.001}ms`);
    delete this.timers[name];
    return diff;
  }
}
