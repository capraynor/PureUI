function dom (tag: any, attrs: any, children: any): Element {
  var element = document.createElement(tag);

  for (let name in attrs) {
      if (name && attrs.hasOwnProperty(name)) {
          let value = attrs[name];
          if (value === true) {
              element.setAttribute(name, name);
          } else if (value !== false && value != null) {
              element.setAttribute(name, value.toString());
          }
      }
  }
  for (let i = 2; i < arguments.length; i++) {
      let child = arguments[i];

      if (!child){
        continue;
      }

      element.appendChild(
          child.nodeType == null ?
              document.createTextNode(child.toString()) : child);
  }
  return element;
}
//hhh
export {dom}