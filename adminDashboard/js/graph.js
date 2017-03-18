$(function() {

  // Chart JS

    // Sales Reports
      var salesReport = $("#sales-report");
      var myChart = new Chart(salesReport, {
        type: 'line',
        data: {
          labels: ["January", "February", "March", "April", "May", "June", "July"],
            datasets: [
                {
                    label: "Total Sales",
                    fill: true,
                    lineTension: 0.4,
                    backgroundColor: "rgba(75,192,192,0.4)",
                    borderColor: "rgba(75,192,192,1)",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "rgba(75,192,192,1)",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "rgba(75,192,192,1)",
                    pointHoverBorderColor: "rgba(220,220,220,1)",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [5, 6, 4, 2, 3, 8, 5],
                    spanGaps: false,
                },
                {
                    label: "Completed Projects",
                    fill: true,
                    lineTension: 0.4,
                    backgroundColor: "rgba(231,76,60,.8)",
                    borderColor: "#E74C3C",
                    borderCapStyle: 'butt',
                    borderDash: [],
                    borderDashOffset: 0.0,
                    borderJoinStyle: 'miter',
                    pointBorderColor: "#34495e",
                    pointBackgroundColor: "#fff",
                    pointBorderWidth: 1,
                    pointHoverRadius: 5,
                    pointHoverBackgroundColor: "#34495e",
                    pointHoverBorderColor: "#34495e",
                    pointHoverBorderWidth: 2,
                    pointRadius: 1,
                    pointHitRadius: 10,
                    data: [10, 12, 8, 4, 6, 16, 10],
                    spanGaps: false,
                }

            ]

        }
    });

  // Tickets Reports
      var TicketsReport = $("#tickets-report");
      var myTicketChart = new Chart(TicketsReport, {
        type: 'pie',
        data: {
          labels: ["Total tickets", "Answered tickets", "Satisfaction", "Unsatisfaction"],
            datasets: [

                {
                    label: "Points",
                    backgroundColor: ["#34495e","#3498db", "#1abc9c", "#e74c3c"],
                    data: [10, 10, 8, 2]
                }

            ]

        }
    });


    // Expenses Reports
        var ExpensesReport = $("#expenses-report");
        var myExpenseChart = new Chart(ExpensesReport, {
          type: 'bar',
          data: {
            labels: ["January", "February", "March", "April", "May", "June", "July"],
              datasets: [

                  {
                      label: "Employee Salaries",
                      fill: true,
                      lineTension: 0.4,
                      backgroundColor: "#34495e",
                      borderColor: "#34495e",
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: "#34495e",
                      pointBackgroundColor: "#fff",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5,
                      pointHoverBackgroundColor: "#34495e",
                      pointHoverBorderColor: "#34495e",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: [500, 500, 500, 500, 500, 600, 500],
                      spanGaps: false,
                  },
                  {
                      label: "Traveling Expenses",
                      fill: true,
                      lineTension: 0.3,
                      backgroundColor: "#E74C3C",
                      borderColor: "#E74C3C",
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: "#fff",
                      pointBackgroundColor: "#E74C3C",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5.5,
                      pointHoverBackgroundColor: "#E74C3C",
                      pointHoverBorderColor: "#fff",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: [150, 156, 50, 5, 100, 355, 210],
                      spanGaps: false,
                  },
                  {
                      label: "Purchases",
                      fill: true,
                      lineTension: 0.3,
                      backgroundColor: "#1abc9c",
                      borderColor: "#1abc9c",
                      borderCapStyle: 'butt',
                      borderDash: [],
                      borderDashOffset: 0.0,
                      borderJoinStyle: 'miter',
                      pointBorderColor: "#fff",
                      pointBackgroundColor: "#1abc9c",
                      pointBorderWidth: 1,
                      pointHoverRadius: 5.5,
                      pointHoverBackgroundColor: "#1abc9c",
                      pointHoverBorderColor: "#fff",
                      pointHoverBorderWidth: 2,
                      pointRadius: 1,
                      pointHitRadius: 10,
                      data: [300, 365, 100, 85, 110, 405, 200],
                      spanGaps: false,
                  }
              ]

          }
      });

    //==JS for sale reports ends here=========================


    

});
