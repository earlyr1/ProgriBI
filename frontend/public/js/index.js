document.addEventListener('DOMContentLoaded', () => {


  const file = document.getElementById('fileupload');

  file.addEventListener('change', (e) => {
    e.preventDefault();
    handleFile();
  })


  const dropArea = document.querySelector('.box_dragndrop');
  const dropBox = document.querySelector('.box');

  const preventDefaults = (e) => {
    e.preventDefault();
    e.stopPropagation();
  }

  ['dragenter', 'dragover', 'dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, preventDefaults, false)
  });

  ['dragenter', 'dragover'].forEach(eventName => {
    dropArea.addEventListener(eventName, highlight, false)
  });

  ['dragleave', 'drop'].forEach(eventName => {
    dropArea.addEventListener(eventName, unhighlight, false)
  });

  dropArea.addEventListener('drop', (e) => {
    handleFile(e.dataTransfer.files);
  });


  function highlight(e) {
    dropBox.classList.add('highlight');
    dropArea.classList.add('highlight2');
  }

  function unhighlight(e) {
    dropBox.classList.remove('highlight');
    dropArea.classList.remove('highlight2');
  }

  const showLoading = () => {
    file.disabled = true;
    highlight();
    document.querySelector('.loader').style.display = 'block';
    document.querySelector('.box_dragndrop > svg').style.display = 'none';
    document.querySelector('.dragndrop_text').style.display = 'none';
  }

  const handleFile = (file) => {
    let formData = new FormData();
    if (file) {
      formData.append('file', file[0]);
    } else {
      const fileupload = document.getElementById('fileupload');
      formData.append('file', fileupload.files[0]);
    }

    showLoading();

    fetch('/api/tables', {
      method: 'POST',
      body: formData
    })
      .then(res => res.json()).then(res => console.log(res))
      .catch(err => console.log(err))

    //if (res.redirected) { window.location.href = response.url }
  }

});




