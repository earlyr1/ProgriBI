document.addEventListener('DOMContentLoaded', () => {
  /*
  const button = document.querySelector('button');
  const canvas = document.querySelector('canvas');

  button.addEventListener('click', () => {
    button.style.display = 'none';
    canvas.style.display = 'block';
    renderCanvas();
  })

  const renderCanvas = () => {
    const ctx = canvas.getContext('2d');
    const myChart = new Chart(ctx, {
      type: 'line',
      data: {
        labels: ['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
        datasets: [{
          label: '# of Votes',
          data: [12, 19, 3, 5, 2, 3],
          backgroundColor: [
            'rgba(255, 99, 132, 0.2)',
            'rgba(54, 162, 235, 0.2)',
            'rgba(255, 206, 86, 0.2)',
            'rgba(75, 192, 192, 0.2)',
            'rgba(153, 102, 255, 0.2)',
            'rgba(255, 159, 64, 0.2)'
          ],
          borderColor: [
            'rgba(255, 99, 132, 1)',
            'rgba(54, 162, 235, 1)',
            'rgba(255, 206, 86, 1)',
            'rgba(75, 192, 192, 1)',
            'rgba(153, 102, 255, 1)',
            'rgba(255, 159, 64, 1)'
          ],
          borderWidth: 1
        }]
      },
      options: {
        scales: {
          yAxes: [{
            ticks: {
              beginAtZero: true
            }
          }]
        }
      }
    })
  }
  */



  const file = document.getElementById('fileupload');

  file.addEventListener('change', (e) => {
    e.preventDefault();
    dropBox.submit();

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

  function highlight(e) {
    console.log('dragenter');
    dropBox.classList.add('highlight');
    dropArea.classList.add('highlight2');
  }

  function unhighlight(e) {
    dropBox.classList.remove('highlight');
    dropArea.classList.remove('highlight2');
  }


});




