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

const weeklyChart = new Chart(myChart, {
  type: 'line',
  data: {
    labels: ['12 AM', '4 AM', '8 AM', '12 PM', '4 PM', '8 PM'],
    datasets: [
      {
        label: 'Temperature',
        data: [3, 13, 5, 1, -4, -7, -10],
        fill: true,
        tension: 0.4,
        pointRadius: 0,
        borderColor: '#7285ff',
        backgroundColor: '#7285ff38',
        responsive: true,
      },
    //   {
    //     label: 'Precipitation',
    //     data: [16, 4, 8, 3, -1, -8, 0],
    //     fill: true,
    //     tension: 0.4,
    //     pointRadius: 0,
    //     borderColor: '#9B5DE5',
    //     backgroundColor: '#ffffff00',
    //     responsive: true,
    //   },
    //   {
    //     label: 'Wind',
    //     data: [1, 5, 2, 7, 13, 10, 17],
    //     fill: true,
    //     tension: 0.4,
    //     pointRadius: 0,
    //     borderColor: '#F15BB5',
    //     backgroundColor: '#ffffff00',
    //     responsive: true,
    //   },
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
          display: false,
        },
      },
      y: {
        grid: {
          display: false,
        },
        legend: {
          display: false,
        },
        min: -15,
        max: 15,
      },
    },
  },
})
