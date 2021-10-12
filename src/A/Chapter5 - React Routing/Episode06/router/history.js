const instances = {};

export function register(id, callback) {
  instances[id] = callback;
}

export function unregister(id) {
  delete instances[id];
}

export function historyPushState(to, state = {}, title = "") {
  window.history.pushState(state, title, to);
  Object.keys(instances).forEach((id) => instances[id]());
}
