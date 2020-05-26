

    // UI Variables
    const password = document.querySelector('#password'),
      icon = document.querySelector('#visibility'),
      alertMsz = document.querySelector('.error');
    // Event Listener
    icon.addEventListener('click', togglePassword);
    // Function
    function togglePassword() {
      if (password.value !== '') {
        // hiding Alert Message
        alertMsz.style.display = 'none';
        // Toggle Input Type
        if (password.type === 'password') {
          password.type = 'text';
          icon.innerHTML = '<i class="fa fa-eye-slash"></i>';
          icon.style.color = '#FB2162';
        } else {
          password.type = 'password';
          icon.innerHTML = '<i class="fa fa-eye"></i>';
          icon.style.color = '#232323';
        }
      } else {
        // Show Error Message
        alertMsz.style.display = 'block';
      }
    }