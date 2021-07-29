const homeComponent = () => {
    const homeHtml = `<div class="text-center">
    <h1>WELCOME TO TASK HERO</h1>
    <h4 class="alert alert-success">Your all-in-one task management app</h4>
    </div>   
    </div>`
      
        
    const homeWrapper = document.createElement('div');
    homeWrapper.id = 'home-wrapper';
      
        homeWrapper.innerHTML = homeHtml;
      
        return homeWrapper; 
    };
      
    export default homeComponent;