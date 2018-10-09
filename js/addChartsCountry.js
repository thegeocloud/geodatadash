
// Line Chart
function getCountryLineChartData () {
var ctx = document.getElementById("LineChart").getContext('2d');
var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: ['Jan', 'Apr', 'Jul', 'Oct'],
        datasets: [{
            label: 'Reports',
            data: [23922, 21662, 24113, 22964],
            backgroundColor: [
                'rgba(54, 162, 235, 0.8)'

            ],
            borderColor: [
                '#6970d5'
            ],
            borderWidth: 1
        }]
    },
    options: {
		title: {
					display: true,
					text: 'Reports This Year',
					
				},
		responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
};


// Bar Chart
function getCountryBarChartData() {
var ctx = document.getElementById("BarChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Landscaping', 'Agriculture & Animal Husbandry', 'Hospitality', 'Factories & Manufacturing', 'Domestic Work', 'Health & Beauty Services', 'Arts,Sports, & Entertainment', 'Illicit Massage Busines'],
        datasets: [{
            label: 'Business Models',
            data: [9022, 8913, 8887, 8862, 8845, 8825, 8813, 8800],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 99, 132, 0.8)',
                'rgba(255, 99, 132, 0.8)', 
				'rgba(255, 99, 132, 0.8)', 
				'rgba(255, 99, 132, 0.8)', 
				'rgba(255, 99, 132, 0.8)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
                'rgba(255,99,132,1)',
				'rgba(255,99,132,1)',
				'rgba(255,99,132,1)'
				
            ],
            borderWidth: 1
        }]
    },
    options: {
	legend: {
			display: false
			},
		title: {
				display: true,
				text: 'Top Business Models'
			},
		responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }],
			xAxes: [{
                ticks: {
                    display: false //this will remove only the label
                }
            }]
        }
    }
});
}


function getCountryPieChartData(name) {
var ctx = document.getElementById("PieChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: ['Hotels & Motels', 'Business Regulatory Systems', 'Temporary Work Visas', 'Social Media', 'Health Care'],
        datasets: [{
            label: ['Hotels & Motels', 'Business Regulatory Systems', 'Temporary Work Visas', 'Social Media', 'Health Care'],
            data: [26471, 26450, 26395, 26372, 26276],
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(75, 192, 192, 0.)',
                'rgba(153, 102, 255, 0.8)',
                'rgba(255, 159, 64, 0.8)'
            ],
            borderColor: [
                'rgba(255,99,132,1)',
                'rgba(54, 162, 235, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
		title: {
					display: true,
					text: 'Top 5 Systems'
				},
		responsive:true,
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero:true
                }
            }]
        }
    }
});
};	

