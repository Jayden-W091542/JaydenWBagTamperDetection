//HAN comment - what does this code do?
function updateStatus(n) {
    const checkbox = document.getElementById('toggleControl' + n);
    const status = document.getElementById('toggleStatus' + n);
    if (checkbox.checked) {
      status.textContent = 'On';
      status.classList.add('on');
    } else {
      status.textContent = 'Off';
      status.classList.remove('on');
    }
  }

//HAN comment - I would also note that our example code has about 
//30 lines of code that will help with being a web server that I was expecting to see?
