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