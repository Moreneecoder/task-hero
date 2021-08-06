const creditComponent = () => {
  const homeHtml = `<div class="text-center container">
    
    <div class="row my-auto">
          <div class="col-12 col-md-7 col-lg-5 mx-auto">              
              <div class="alert alert-success text-center p-2 mt-1 pb-4"> 
                <p class="emoji-face m-0">&#129492;&#127998</p>
                <h2 class="mb-2">Bello Morenikeji Fuad</h2>
                <div class="d-flex justify-content-around mx-3">
                    <a class="text-success" href="https://github.com/Moreneecoder"><i class="fa fa-github social-icon"></i></a>
                    <a class="text-success" href="https://twitter.com/mo_bello19"><i class="fa fa-twitter social-icon"></i></a>
                    <a class="text-success" href="https://instagram.com/mo_bello19"><i class="fa fa-instagram social-icon"></i></a>
                    <a class="text-success" href="mailto:bellokeji19@gmail.com"><i class="fa fa-envelope social-icon"></i></a>
                </div>
                <br>
                <a class="text-success" href="https://github.com/Moreneecoder/task-hero">
                    <span style="font-size:20px">&#128073;&#127998;</span> Click here to see source code
                </a>
              </div>
          </div>
    </div>   
    </div>`;

  const creditWrapper = document.createElement('div');
  creditWrapper.id = 'credit-wrapper';

  creditWrapper.innerHTML = homeHtml;
  return creditWrapper;
};

export default creditComponent;