import { isTextEditable } from 'lib/dom';

class Disaled {
  name = 'DISABLED';
  onEnter = async (event) => {

  }
  onExit = async (event) => {

  }
  keydown = async (event) => {
    return this.name;
  }
  keypress = async (event) => {
    return this.name;
  }
  keyup = async (event) => {
    return this.name;
  }
  focusin = async (event) => {
    return this.name;
  }
  focusout = async (event) => {
    return this.name;
  }
  click = async (event) => {
    return this.name;
  }
  mousedown = async (event) => {
    return this.name;
  }
  scroll = async (event) => {
    return this.name;
  }
  msg = async (event) => {
    const { detail: { type, arg, src } } = event;
    return await (this.actions[type](arg, src));
  }
  actions = {
    toggleEnabled: ({ enabled }) => {
      if (enabled) {
        if (isTextEditable(event.target)) {
          return 'TEXT';
        }
        return 'COMMAND';
      }
      return this.name;
    }
  }
};
