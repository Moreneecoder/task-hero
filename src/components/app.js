const appComponent = () => {
    const appWrapper = document.createElement('div');
    appWrapper.id = 'app-wrapper';
      
    appWrapper.innerHTML = `This is the app component`;  
    return appWrapper;
}

export default appComponent