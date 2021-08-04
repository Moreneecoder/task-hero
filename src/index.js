import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import 'bootstrap/js/dist/modal';
import navComponent from './components/nav';
import homeComponent from './components/home';
import appComponent from './components/appCompontents/app';
import * as domActions from './utils/domActions';
import {
  createNewTask, displayTasks, updateHeader, deleteTask, editTask, loadTaskOnEditForm,
} from './components/appCompontents/factories/task';

document.addEventListener('DOMContentLoaded', () => {
  document.body.prepend(navComponent());

  const mainContent = document.getElementById('content');
  mainContent.appendChild(homeComponent());

  document.addEventListener('click', (e) => {
    if (e.target && e.target.id === 'app') {
      domActions.removeChildWithinParent(mainContent, ['home-wrapper', 'contact-wrapper']);
      domActions.addTabContent(mainContent, 'app-wrapper', appComponent());
    }

    if (e.target && e.target.id === 'home') {
      domActions.removeChildWithinParent(mainContent, ['app-wrapper', 'contact-wrapper']);
      domActions.addTabContent(mainContent, 'home-wrapper', homeComponent());
    }

    if (e.target && e.target.classList.contains('projects')) {
      domActions.makeActive(e.target);

      const projectName = e.target.getAttribute('data-id');

      displayTasks(projectName);
      updateHeader(projectName);
    }

    if (e.target && e.target.id === 'new-proj-btn') {
      const newProject = document.querySelector('#new-proj');
      if (newProject.value) {
        const newOption = document.createElement('option');
        newOption.value = newProject.value;
        newOption.textContent = newProject.value;

        const projectSelect = document.querySelector('#project');
        projectSelect.appendChild(newOption);
        newProject.value = '';
      }
    }

    if (e.target && e.target.classList.contains('delete-btn')) {
      const task = e.target.closest('.task');
      const project = document.querySelector('#project-title').textContent;

      deleteTask({ task, project });
    }

    if (e.target && e.target.classList.contains('edit-btn')) {
      const task = e.target.closest('.task');
      const project = document.querySelector('#project-title').textContent;

      loadTaskOnEditForm({ task, project });
    }
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

    form.reset();
  });

  const editForm = document.querySelector('#edit-task-form');

  editForm.addEventListener('submit', (e) => {
    e.preventDefault();

    const id = document.querySelector('#task-id').value;
    const title = document.querySelector('#edit-title').value;
    const desc = document.querySelector('#edit-desc').value;
    const dueDate = document.querySelector('#edit-date').value;
    const priority = document.querySelector('#edit-priority').value;
    const project = document.querySelector('#edit-project').value;

    editTask({
      id, title, desc, dueDate, priority, project,
    });
  });
});
