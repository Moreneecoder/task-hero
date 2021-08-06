import taskImg from '../assets/images/add_task.svg';
import taskImg1 from '../assets/images/completed_tasks.svg';
import taskImg2 from '../assets/images/Push_notifications.png';

const homeComponent = () => {
  const homeHtml = `<div class="text-center">
    <h1>TASK HERO</h1>
    <h4 class="alert alert-success">Your all-in-one task management app</h4>

    <div class="row container mx-auto align-items-end">
          <div class="col-md-6 col-lg-4">
              <img src="${taskImg}" class="img-fluid" alt="">
              <div class="alert alert-success text-center p-2 mt-1">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in eos corrupti ea ducimus vel doloribus 
                voluptatem, ullam officiis animi voluptatibus excepturi molestiae esse aperiam quasi numquam amet, 
                repellendus maxime.
              </div>
          </div>

          <div class="col-md-4 d-none d-lg-block">
              <img src="${taskImg1}" class="img-fluid" alt="">
          </div>

          <div class="col-md-6 col-lg-4">
              <img src="${taskImg2}" class="img-fluid" alt="">
              <div class="alert alert-success text-center p-2">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Facere in eos corrupti ea ducimus vel doloribus 
                voluptatem, ullam officiis animi voluptatibus excepturi molestiae esse aperiam quasi numquam amet, 
                repellendus mblaxime.
              </div>
          </div>
    </div>

    <div class="mt-5 pb-5">
        <button class="btn btn-success btn-lg px-5">Go To App</button>
    </div>

    </div>   
    </div>`;

  const homeWrapper = document.createElement('div');
  homeWrapper.id = 'home-wrapper';

  homeWrapper.innerHTML = homeHtml;
  return homeWrapper;
};

export default homeComponent;