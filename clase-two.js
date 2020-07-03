import { html, LitElement } from 'lit-element';
import style from './clase-two-styles.js';

class ClaseTwo extends LitElement {
  static get properties() {
    return {
      timestamp: { type: String }
    };
  }

  static get styles() {
    return style;
  }

  constructor() {
    super();
    this.timestamp = '09061995';
  }

  render() {
    return html`
        <span>${this.getDate(this.timestamp)}</span>
        <h2>holii</h2>
      `;
    }

    // binding Computado polymer 2/3 seria computadas
    getDate(timestamp) {
      let date = new Date(parseInt(timestamp));
      return `${date.getDate()}/${(date.getMonth() + 1)}/${date.getUTCFullYear()}`
    }
}

window.customElements.define("clase-two", ClaseTwo);
