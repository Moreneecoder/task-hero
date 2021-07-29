import './style.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/js/dist/dropdown';
import 'bootstrap/js/dist/collapse';
import navComponent from './components/nav';
import homeComponent from './components/home';
import appComponent from './components/app';
import * as domActions from './utils/domActions';

document.addEventListener('DOMContentLoaded', () => {
    document.body.prepend(navComponent());
  
    const mainContent = document.getElementById('content');
    mainContent.appendChild(homeComponent());
    // document.body.appendChild(footerComponent());
  
    document.addEventListener('click', (e) => {
        if (e.target && e.target.id === 'app'){
            domActions.removeChildWithinParent(mainContent, ['home-wrapper', 'contact-wrapper']);
            domActions.addTabContent(mainContent, 'app-wrapper', appComponent());
        }

        if (e.target && e.target.id === 'home'){
            domActions.removeChildWithinParent(mainContent, ['app-wrapper', 'contact-wrapper']);
            domActions.addTabContent(mainContent, 'home-wrapper', homeComponent());
        }

    //   if (e.target && e.target.id === 'menu') {
    //     domActions.removeChildWithinParent(mainContent, ['home-wrapper', 'contact-wrapper']);
    //     domActions.addTabContent(mainContent, 'menu-wrapper', menuComponent());
    //   }
  
    //   if (e.target && e.target.id === 'home') {
    //     domActions.removeChildWithinParent(mainContent, ['menu-wrapper', 'contact-wrapper']);
    //     domActions.addTabContent(mainContent, 'home-wrapper', homeComponent());
    //   }
  
    //   if (e.target && e.target.id === 'contact') {
    //     domActions.removeChildWithinParent(mainContent, ['menu-wrapper', 'home-wrapper']);
    //     domActions.addTabContent(mainContent, 'contact-wrapper', contactComponent());
    //   }
    });
  });
 
//   document.body.appendChild(component());