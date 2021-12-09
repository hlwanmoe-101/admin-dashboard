$(".counter-up").counterUp({
  delay: 10,
  time: 1000,
});
var labelArr = ["12 jul", "13 jul", "14 jul", "15 jul", "16 jul", "17 jul"];
const ctx = document.getElementById("myChart").getContext("2d");
const myChart = new Chart(ctx, {
  type: "line",
  data: {
    labels: labelArr,
    datasets: [
      {
        label: "Order",
        data: [12, 19, 3, 5, 2, 3],
        backgroundColor: ["#007bff30"],
        borderColor: ["#007bff"],
        borderWidth: 1,
        tension: 0.01,
      },
      {
        label: "Viewer",
        data: [14, 22, 8, 4, 5, 2],
        backgroundColor: ["#28a74530"],
        borderColor: ["#28a745"],
        borderWidth: 1,
        tension: 0.01,
      },
    ],
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
      },
      xAxes: [
        {
          display: true,
          gridLines: [
            {
              display: false,
            },
          ],
        },
      ],
    },

    legend: {
      display: true,
      position: "top",
      labels: {
        fontColor: "#333",
        usePointStyle: true,
      },
    },
  },
});
