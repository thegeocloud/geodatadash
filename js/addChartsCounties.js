// Line Chart
var state_codes = [
  {
    "STATE": 23,
    "NAME": "Maine"
  },
  {
    "STATE": 25,
    "NAME": "Massachusetts"
  },
  {
    "STATE": 26,
    "NAME": "Michigan"
  },
  {
    "STATE": 30,
    "NAME": "Montana"
  },
  {
    "STATE": 32,
    "NAME": "Nevada"
  },
  {
    "STATE": 34,
    "NAME": "New Jersey"
  },
  {
    "STATE": 36,
    "NAME": "New York"
  },
  {
    "STATE": 37,
    "NAME": "North Carolina"
  },
  {
    "STATE": 39,
    "NAME": "Ohio"
  },
  {
    "STATE": 42,
    "NAME": "Pennsylvania"
  },
  {
    "STATE": 44,
    "NAME": "Rhode Island"
  },
  {
    "STATE": 47,
    "NAME": "Tennessee"
  },
  {
    "STATE": 48,
    "NAME": "Texas"
  },
  {
    "STATE": 49,
    "NAME": "Utah"
  },
  {
    "STATE": 53,
    "NAME": "Washington"
  },
  {
    "STATE": 55,
    "NAME": "Wisconsin"
  },
  {
    "STATE": 72,
    "NAME": "Puerto Rico"
  },
  {
    "STATE": 24,
    "NAME": "Maryland"
  },
  {
    "STATE": 1,
    "NAME": "Alabama"
  },
  {
    "STATE": 2,
    "NAME": "Alaska"
  },
  {
    "STATE": 4,
    "NAME": "Arizona"
  },
  {
    "STATE": 5,
    "NAME": "Arkansas"
  },
  {
    "STATE": 6,
    "NAME": "California"
  },
  {
    "STATE": 8,
    "NAME": "Colorado"
  },
  {
    "STATE": 9,
    "NAME": "Connecticut"
  },
  {
    "STATE": 10,
    "NAME": "Delaware"
  },
  {
    "STATE": 11,
    "NAME": "District of Columbia"
  },
  {
    "STATE": 12,
    "NAME": "Florida"
  },
  {
    "STATE": 13,
    "NAME": "Georgia"
  },
  {
    "STATE": 15,
    "NAME": "Hawaii"
  },
  {
    "STATE": 16,
    "NAME": "Idaho"
  },
  {
    "STATE": 17,
    "NAME": "Illinois"
  },
  {
    "STATE": 18,
    "NAME": "Indiana"
  },
  {
    "STATE": 19,
    "NAME": "Iowa"
  },
  {
    "STATE": 20,
    "NAME": "Kansas"
  },
  {
    "STATE": 21,
    "NAME": "Kentucky"
  },
  {
    "STATE": 22,
    "NAME": "Louisiana"
  },
  {
    "STATE": 27,
    "NAME": "Minnesota"
  },
  {
    "STATE": 28,
    "NAME": "Mississippi"
  },
  {
    "STATE": 29,
    "NAME": "Missouri"
  },
  {
    "STATE": 31,
    "NAME": "Nebraska"
  },
  {
    "STATE": 33,
    "NAME": "New Hampshire"
  },
  {
    "STATE": 35,
    "NAME": "New Mexico"
  },
  {
    "STATE": 38,
    "NAME": "North Dakota"
  },
  {
    "STATE": 40,
    "NAME": "Oklahoma"
  },
  {
    "STATE": 41,
    "NAME": "Oregon"
  },
  {
    "STATE": 45,
    "NAME": "South Carolina"
  },
  {
    "STATE": 46,
    "NAME": "South Dakota"
  },
  {
    "STATE": 50,
    "NAME": "Vermont"
  },
  {
    "STATE": 51,
    "NAME": "Virginia"
  },
  {
    "STATE": 54,
    "NAME": "West Virginia"
  },
  {
    "STATE": 56,
    "NAME": "Wyoming"
  }
]


// Line Chart
function getCountyLineChartData (name) {
var sorted_reports = []
	$.getJSON( "geographies/data/counties.json", function( data ) {
			
			county_name = full[1]
			county_code = full[0]
			state_name = ''
			
			for (var num in state_codes) {
				
				if (state_codes[num]["STATE"] == county_code) {
					
					state_name = state_codes[num]["NAME"]
			
				}
			};
				
			full_name = state_name + '-' + county_name
			
			for (var s in data["all"]) {

				if (data["all"][s]["name"] == full_name)
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
var oct_data = 400
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
function getCountyBarChartData(name) {
var sorted_models = []
	$.getJSON( "geographies/data/counties.json", function( data ) {

			county_name = full[1]
			county_code = full[0]
			state_name = ''
			
			for (var num in state_codes) {
				
				if (state_codes[num]["STATE"] == county_code) {
					
					state_name = state_codes[num]["NAME"]
			
				}
			};
				
			full_name = state_name + '-' + county_name
			for (var s in data["all"]) {

				if (data["all"][s]["name"] == full_name) 
					{
					models= data["all"][s]["models"]
							
							<!-- This converts obj to array for sorting
							
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
            label: '# of Votes',
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


function getCountyPieChartData(name) {
var sorted_systems = []
	$.getJSON( "geographies/data/counties.json", function( data ) {

				county_name = full[1]
			county_code = full[0]
			state_name = ''
			
			for (var num in state_codes) {
				
				if (state_codes[num]["STATE"] == county_code) {
					
					state_name = state_codes[num]["NAME"]
			
				}
			};
				
			full_name = state_name + '-' + county_name
			for (var s in data["all"]) {

				if (data["all"][s]["name"] == full_name) 
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
}
