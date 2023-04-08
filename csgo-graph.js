<script src="https://cdn.jsdelivr.net/npm/chart.js"></script>
<script>
var ctx = document.getElementById('marketChart').getContext('2d');
var chart = new Chart(ctx, {
  type: 'line',
  data: {
    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
    datasets: [{
      label: 'Market Price',
      data: [10.50, 10.75, 10.25, 10.10, 9.90, 9.75, 10.00, 10.50, 11.00, 10.75, 11.20, 11.50],
      backgroundColor: 'rgba(0, 0, 255, 0.1)',
      borderColor: 'rgba(0, 0, 255, 1)',
      borderWidth: 2,
      pointRadius: 3,
      pointBackgroundColor: 'rgba(0, 0, 255, 1)',
      pointBorderColor: 'rgba(0, 0, 255, 1)',
      pointHoverRadius: 5,
      pointHoverBackgroundColor: 'rgba(0, 0, 255, 1)',
      pointHoverBorderColor: 'rgba(0, 0, 255, 1)',
    }]
  },
  options: {
    responsive: true,
    maintainAspectRatio: false,
    scales: {
      xAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Month'
        }
      }],
      yAxes: [{
        display: true,
        scaleLabel: {
          display: true,
          labelString: 'Price ($)'
        },
        ticks: {
          beginAtZero: false
        }
      }]
    },
    legend: {
      display: false
    }
  }
});
</script>