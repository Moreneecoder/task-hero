import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';
import navComponent from './components/nav';
import homeComponent from './components/home';
import appComponent from './components/appCompontents/app';
import * as domActions from './utils/domActions';
import { createNewTask } from './components/appCompontents/factories/task';

document.addEventListener('DOMContentLoaded', () => {
  document.body.prepend(navComponent());

  const mainContent = document.getElementById('content');
  mainContent.appendChild(homeComponent());
  
    // localStorage.removeItem('projects');

  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'app') {
      domActions.removeChildWithinParent(mainContent, ['home-wrapper', 'contact-wrapper']);
      domActions.addTabContent(mainContent, 'app-wrapper', appComponent());
    }

    if (e.target && e.target.id === 'home') {
      domActions.removeChildWithinParent(mainContent, ['app-wrapper', 'contact-wrapper']);
      domActions.addTabContent(mainContent, 'home-wrapper', homeComponent());
    }

    if(e.target && e.target.classList.contains('projects')){
        domActions.makeActive(e.target)
    }
    // console.log(e.target.classList.contains('projects'));
  });

  const form = document.querySelector('#new-task-form');

  form.addEventListener('submit', (e) => {
    e.preventDefault();

    const title = document.querySelector('#title').value;
    const desc = document.querySelector('#desc').value;
    const dueDate = document.querySelector('#date').value;
    const priority = document.querySelector('#priority').value;
    const project = document.querySelector('#project').value;
    const done = false;

    createNewTask({
      title, desc, dueDate, priority, project, done,
    });
  });
});
