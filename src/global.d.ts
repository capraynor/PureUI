declare namespace JSX {
    interface Element extends HTMLElement { }
    interface IntrinsicElements extends HTMLElement {
        [prop: string]: any
    }
  }