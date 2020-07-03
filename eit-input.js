import { LitElement, html, css } from 'lit-element';

export class EitInput extends LitElement {
    static get properties() {
        return {
            label: { type: String },
            placeholder: { type: String },
            disbale: { type: Boolean },
            value: { type: String }
        };
    }
    
    static get styles() {
        return css`
            :host {
                display: flex;
                margin-botton: 12px;
            }
            input {
                box-sizing: border-box;
                border-radius: 5px;
                border: 1px solid #888;
                font-size: 1em;
                padding: 5px;
            }
        `;
    }

    constructor() {
        super();
        this.disbale = false;
    }

    render() {
        return html`
            <input type="text" placeholder="${this.placeholder}" ?disabled="${this.disbale}">
        `;
    }
}
customElements.define('eit-input', EitInput);