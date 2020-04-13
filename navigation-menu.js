import { LitElement, html, } from 'lit-element';
import { getComponentSharedStyles, } from '@cells-components/cells-lit-helpers/cells-lit-helpers.js';
import styles from './navigation-menu-styles.js';
/**
This component ...

Example:

```html
<navigation-menu></navigation-menu>
```

##styling-doc

@customElement navigation-menu
@polymer
@LitElement
@demo demo/index.html
*/
export class NavigationMenu extends LitElement {
  static get is() {
    return 'navigation-menu';
  }

  // Declare properties
  static get properties() {
    return {
      cls: {
        type: String
      },
      options: {
        type: Array
      }
    };
  }

  // Initialize properties
  constructor() {
    super();
    this.cls = 'primary';
    this.options = [];
  }

  static get shadyStyles() {
    return `
      ${styles.cssText}
      ${getComponentSharedStyles('navigation-menu-shared-styles').cssText}
    `;
  }

  selectedItem(e, item, id) {
      let activos = this.shadowRoot.querySelectorAll('.active');
      activos.forEach((element)=>{
        element.classList.remove('active');
      });
      this.shadowRoot.querySelector(`#${id}`).classList.add('active');
      const event = new CustomEvent('selected-option-menu', {
        detail: item,
        bubbles: true,
        composed: true
      });
      this.dispatchEvent(event);
  }

  // Define a template
  render() {
    return html`
      <style>${this.constructor.shadyStyles}</style>
      <slot></slot>
            <ul class = "${this.cls}">
              ${this.options.map(
                (item, index) =>
                  html`
                    <li><a id = "item-${index}" @click = ${(e)=>this.selectedItem(e,item,'item-'+index)} class="${index === 0 ? 'active' : ''}" >${item.name}</a></li>
                  `
              )}
            </ul>
    `;
  }
}

// Register the element with the browser
customElements.define(NavigationMenu.is, NavigationMenu);
