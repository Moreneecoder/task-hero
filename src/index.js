import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';

function component() {
    const element = document.createElement('div');
 
    // Lodash, now imported by this script
    element.innerHTML = 'Hello World';
   element.classList.add('hello', 'alert', 'alert-success');
 
    return element;
  }
 
  document.body.appendChild(component());