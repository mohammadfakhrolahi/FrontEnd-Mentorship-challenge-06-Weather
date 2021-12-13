// const myChart = new Chart(
//     document.getElementById('#myChart'),
//     config
//   );

// const ctx = document.getElementById('myChart');
// const ctx = document.getElementById('myChart').getContext('2d');
// const ctx = $('#myChart');
// const ctx = 'myChart';

// const config = {
//     type: 'line',
//     data: data,
//     options: {}
//   };

//   const labels = ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM'];
//   const data = {
//     labels: labels,
//     datasets: [{
//       label: 'My First dataset',
//       backgroundColor: 'rgb(255, 99, 132)',
//       borderColor: 'rgb(255, 99, 132)',
//       data: [4, 10, 5, 2, -1, -3, 3],
//       tension: 0.4,
//     }]
//   };
  
//   const myChart = new Chart(
//     document.getElementById('myChart'),
//     config
//     );


// // let myChart = document.querySelector('#myChart').getContext('2d')
// // window.addEventListener('beforeprint', () => {
// //   myChart.resize(600, 200)
// // })
// // window.addEventListener('afterprint', () => {
// //   myChart.resize()
// // })

const weeklyChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM'],
    datasets: [
      {
        label: 'Temperature',
        data: [13, 8, 5, 3, -4, 5, 2],
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderColor: '#9B5DE5',
        backgroundColor: '#ffffff00',
        responsive: true,
      },
      {
        label: 'Precipitation',
        data: [16, 4, 8, 3, -1, -8, 0],
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderColor: '#7285ff',
        backgroundColor: '#ffffff00',
        responsive: true,
      },
      {
        label: 'Wind',
        data: [1, 5, 2, 7, 13, 10, 17],
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderColor: '#F15BB5',
        backgroundColor: '#ffffff00',
        responsive: true,
      },
    ],
  },

  options: {
    maintainAspectRatio: false,
    plugins: {
      datalabels: {
        display: false,
      },
    },

    animations: {
        tension: {
          duration: 500,
          easing: 'linear',
          from: 0.4,
          to: 0.6,
          loop: true
    },},

    scales: {
      x: {
        grid: {
          display: true,
        },
      },
      y: {
        grid: {
          display: true,
        },
        legend: {
          display: false,
        },
        min: -10,
        max: 20,
      },
    },
  },
})
