class Modal2 extends HTMLElement {
    constructor() {
      super();
      this.attachShadow({ mode: 'open' });
      console.log('on',this.isOpen)
      this.isOpen = false;
      this.shadowRoot.innerHTML = `
          <style>
              #custom-backdrop {
                  position: fixed;
                  top: 0;
                  left: 0;
                  width: 100%;
                  height: 100vh;
                  background: rgba(0,0,0,0.75);
                  z-index: 10;
                  opacity: 0;
                  pointer-events: none;
              }
  
              :host([opened]) #custom-backdrop,
              :host([opened]) #custom-modal {
                  opacity: 1;
                  pointer-events: all;
              }
  
              :host([opened]) #custom-modal {
                  top: 15vh;
              }
  
              #custom-modal {
                  position: fixed;
                  top: 10vh;
                  left: 25%;
                  width: 50%;
                  z-index: 100;
                  background: white;
                  border-radius: 3px;
                  box-shadow: 0 2px 8px rgba(0,0,0,0.26);
                  display: flex;
                  flex-direction: column;
                  justify-content: space-between;
                  opacity: 0;
                  pointer-events: none;
                  transition: all 0.3s ease-out;
              }
  
              header {
                  padding: 1rem;
                  border-bottom: 1px solid #ccc;
              }
  
              ::slotted(h1) {
                  font-size: 1.25rem;
                  margin: 0;
              }
  
              #custom-main {
                  padding: 1rem;
              }
  
              #actions {
                  border-top: 1px solid #ccc;
                  padding: 1rem;
                  display: flex;
                  justify-content: flex-end;
              }
  
              #actions button {
                  margin: 0 0.25rem;
              }
          </style>
          <div id="custom-backdrop"></div>
          <div id="custom-modal">
              <header>
                  <slot name="custom-title">Please Confirm Payment</slot>
              </header>
              <section id="custom-main">
                  <slot></slot>
              </section>
              <section id="custom-actions">
                  <button id="custom-cancel-btn">Cancel</button>
                  <button id="custom-confirm-btn">Okay</button>
              </section>
          </div>
      `;
      const slots = this.shadowRoot.querySelectorAll('slot');
        slots[1].addEventListener('slotchange', event => {
            console.dir(slots[1].assignedNodes());
        });

        const backdrop = this.shadowRoot.querySelector('#custom-backdrop');
        const cancelButton = this.shadowRoot.querySelector('#custom-cancel-btn');
        const confirmButton = this.shadowRoot.querySelector('#custom-confirm-btn');

        backdrop.addEventListener('click', this._cancel.bind(this));
        cancelButton.addEventListener('click', this._cancel.bind(this));
        confirmButton.addEventListener('click', this._confirm.bind(this));
    }

    attributeChangedCallback(name, oldValue, newValue) {
        console.log(this.isOpen)
        if (this.hasAttribute('opened')) {
            this.isOpen = true;
        } else {
            this.isOpen = false;
        }
    }

    static get observedAttributes() {
        console.log(this.isOpen)
        return ['opened'];
    }

    open() {
        console.log(this.isOpen)
        this.setAttribute('opened', '');
        this.isOpen = true;
    }

    hide() {
        console.log(this.isOpen)
        if (this.hasAttribute('opened')) {
            this.removeAttribute('opened');
        }
        this.isOpen = false;
    }

    _cancel(event) {
        console.log(this.isOpen)
        this.hide();
        const cancelEvent = new Event('cancel', { bubbles: true, composed: true });
        event.target.dispatchEvent(cancelEvent);
    }

    _confirm() {
        console.log(this.isOpen)
        this.hide();
        const confirmEvent = new Event('confirm');
        this.dispatchEvent(confirmEvent);
    }
}

customElements.define('uc-custom-modal', Modal2);