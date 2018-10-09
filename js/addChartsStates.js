// Line Chart
function getStateLineChartData (name) {
var sorted_reports = []
	$.getJSON( "geographies/data/states.json", function( data ) {

			for (var s in data["all"]) {

				if (data["all"][s]["name"] == name)
					{
					systems= data["all"][s]["reports"]
							
							<!-- This converts obj to array for sorting
						
							systems = Object.values(systems)
							
							systems.sort(function(a, b){return b-a})
							
							for (var val in systems) {
								for (var key in data["all"][s]["reports"]) {
									if (systems[val] == data["all"][s]["reports"][key]) {
										item = [key, systems[val]]
										sorted_reports.push(item)
									}
								}
							}
							
							
				} <!-- End of i0ff statement for state name
				
			} <!-- End of for loop
		
		
		function createLine () {

var quarterly_labels = ['Jan', 'Apr', 'Jul', 'Oct'] 
var jan_data = sorted_reports[2][1] + sorted_reports[8][1] + sorted_reports[5][1]
var apr_data = sorted_reports[6][1] + sorted_reports[0][1] + sorted_reports[3][1]
var jul_data = sorted_reports[1][1] + sorted_reports[7][1] + sorted_reports[4][1]
var oct_data = 700
var data_data = [jan_data, apr_data, jul_data, oct_data]
var ctx = document.getElementById("LineChart").getContext('2d');

var lineChart = new Chart(ctx, {
    type: 'line',
    data: {
        labels: quarterly_labels,
        datasets: [{
            label: '',
            data: data_data,
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
createLine()
				
		})
}

// Bar Chart
function getStateBarChartData(name) {
var sorted_models = []
	$.getJSON( "geographies/data/states.json", function( data ) {

			for (var s in data["all"]) {

				if (data["all"][s]["name"] == name)
					{
					models= data["all"][s]["models"]
							
							<!-- This converts obj to array for sorting
							console.log("this is a model", models)
							models = Object.values(models)
							
							models.sort(function(a, b){return b-a})
							
							for (var val in models) {
								for (var key in data["all"][s]["models"]) {
									if (models[val] == data["all"][s]["models"][key]) {
										item = [key, models[val]]
										sorted_models.push(item)
									}
								}
							}
							
							
				} <!-- End of i0ff statement for state name
				
			} <!-- End of for loop
		
		function createBar () {

var labels_data = [sorted_models[0][0], sorted_models[1][0], sorted_models[2][0], sorted_models[3][0], sorted_models[4][0], sorted_models[5][0], sorted_models[6][0], sorted_models[7][0]]
var data_data = [sorted_models[0][1], sorted_models[1][1], sorted_models[2][1], sorted_models[3][1], sorted_models[4][1], sorted_models[5][1], sorted_models[6][1], sorted_models[7][1]]
var ctx = document.getElementById("BarChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: labels_data,
        datasets: [{
            label: 'Reports',
            data: data_data,
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
createBar()
		
		}) <!-- End of function

}


function getStatePieChartData(name) {
var sorted_systems = []
	$.getJSON( "geographies/data/states.json", function( data ) {

			for (var s in data["all"]) {

				if (data["all"][s]["name"] == name)
					{
					systems= data["all"][s]["systems"]
							
							<!-- This converts obj to array for sorting
						
							systems = Object.values(systems)
							
							systems.sort(function(a, b){return b-a})
							
							for (var val in systems) {
								for (var key in data["all"][s]["systems"]) {
									if (systems[val] == data["all"][s]["systems"][key]) {
										item = [key, systems[val]]
										sorted_systems.push(item)
									}
								}
							}
							
							
				} <!-- End of i0ff statement for state name
				
			} <!-- End of for loop
			
			
			
		function createPie () {

var labels_data = [sorted_systems[0][0], sorted_systems[1][0], sorted_systems[2][0], sorted_systems[3][0], sorted_systems[4][0]]
var data_data = [sorted_systems[0][1], sorted_systems[1][1], sorted_systems[2][1], sorted_systems[3][1], sorted_systems[4][1]]
var ctx = document.getElementById("PieChart").getContext('2d');
var myChart = new Chart(ctx, {
    type: 'pie',
    data: {
        labels: labels_data,
        datasets: [{
            label: labels_data,
            data: data_data,
            backgroundColor: [
                'rgba(255, 99, 132, 0.8)',
                'rgba(54, 162, 235, 0.8)',
                'rgba(75, 192, 192, 0.8)',
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
			
createPie()		
			
		})
} <!-- End