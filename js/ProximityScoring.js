state_feature = {'all' : {}}
state_selected = {'all' : {}}
function getProximityScore (sample) {
/* sample = {"ID": "10", "Long": "-124.6235769", "Lat": "48.22949408", "State": "Washington", "County": "Clallam", "City": "Clallam Bay", "EnteredDate": "9/9/2018", "Q1": "Yes", "Q2": "Social Media", "Q3": "Peddling & Begging", "Q4": "5", "Q5": "70 - 79", "Q6": "Female", "VictimDescription": "When I was riding the train I saw three men and 1 women get off the train. It looked like the woman didn't want to go and she looked frightened", "Q7": "4", "Q8": "19-Oct", "Q9": "Female", "TraffickerDescription": "", "OtherObservations": ""} */

lon = sample.Long
lat = sample.Lat
var coor = turf.point([lon, lat])

	
	function getStates () {
	$.getJSON( "geographies/stategeojson.json", function( data ) {
			<!-- Remove point layers if they exist already
			
			// Get state coordinates here-----------------------------------------------------------
			
			for (var num in data.features) {
				
					geom_type = data["features"][num].geometry.type
					
					if (geom_type == "MultiPolygon") {
					
						state_coors = turf.multiPolygon(data.features[num].geometry.coordinates)
						var ptsWithin = turf.pointsWithinPolygon(coor, state_coors)
				

						if (ptsWithin.features.length != 0) {

						
						state_feature['all']=data.features[num]
						{break};
							} 
						   }; 
					// --------- for polygons
					
				if (geom_type == "Polygon") {
					
						state_coors = turf.polygon(data.features[num].geometry.coordinates)
						 var ptsWithin = turf.pointsWithinPolygon(coor, state_coors)
					
				

						if (ptsWithin.features.length != 0) {
							
							state_feature['all']=data.features[num]
							{break};
							} 
						   }
						
					}
					
		
			})
			}
		getStates()
		
			// Run buffer on points --------------------------------------------------------------------
		
		var points_in_buffer = []
		records_in_buffer = []
		function runBuffers () {
	
			state_name = state_feature.all.properties.NAME
			path = "geographies/data/all_data_by_state/" + state_name + '.json'
			$.getJSON( path, function( data ) {
				
				var buffered = turf.buffer(coor, 20, {units: 'miles'});
				
				
				state_selected["all"]=data
				
				for (var num in state_selected.all.all.data) {
				
						
						lon = state_selected.all.all.data[num][1]
						lat = state_selected.all.all.data[num][2]
						single_record_coors = turf.point([lon, lat])
						
						ptsWithin = turf.pointsWithinPolygon(single_record_coors, buffered)
						
						if (ptsWithin.features.length != 0) {
							
							records_in_buffer.push(state_selected.all.all.data[num])
							
						}
				
				}
			
				
		})
		} <!-- Enf od run buffers function
		console.log(records_in_buffer)
		setTimeout(runBuffers, 500);
		
			//For each point interesects buffer compare values clculate score
		var high_scoring_features = []
		function createScore () {
	
		
			for (num in records_in_buffer) {
				
				score = 0
				
				if (sample.Q2 == records_in_buffer[num][8]) {
					score++ 
					}
					
				if (sample.Q3 == records_in_buffer[num][9]) {
					score++ 
					}
					
				if (sample.Q4 == records_in_buffer[num][10]) {
					score++ 
					}
				
				if (sample.Q5 == records_in_buffer[num][11]) {
					score++ 
					}
					
				if (sample.Q6 == records_in_buffer[num][12]) {
					score++ 
					}
					
				if (sample.Q7 == records_in_buffer[num][14]) {
					score++ 
					}
					
				if (sample.Q8 == records_in_buffer[num][15]) {
					score++ 
					}
					
				if (sample.Q9 == records_in_buffer[num][16]) {
					score++ 
					}
				
				// For items with score >= threshold
				if (score > 1) {
				
					high_scoring_features.push(records_in_buffer[num])
				
				}
		
			}
			
		} <!----End create score function
		//console.log(high_scoring_features)
		setTimeout(createScore,600)
			

		
		
			// Add points to feature collection and as temporary layer 
	
		function createTin () {
			var points = []	
			for (num in high_scoring_features) {
					
					point = turf.point([high_scoring_features[num][1], high_scoring_features[num][2]], {name : 'Location ' + num.toString()})
					points.push(point)
			}
			
			collection = turf.featureCollection(points)
			poly = turf.convex(collection)
			
			console.log(poly)
			sessionStorage.setItem("alerted", JSON.stringify(poly))
	
		}
			// On return to dashboard zoom in to alert or show on map they submitted the points to? BONUS!!!
		
		setTimeout(createTin, 1000)
		

} 


	  function get_user_input() {
			
	
	  // NEeds to be same order as AllData structure
				survey_input = JSON.parse(sessionStorage.survey_input)
			  var tempID = 4
			  var lon = survey_input.features[0].geometry.coordinates[0]
			  var lat = survey_input.features[0].geometry.coordinates[1]
			  var state = 'california'
			  var county = 'san diego'
			  var city = 'san diego'
			  var enteredData = ''
			  var q1 = ""
			  var systems   = document.getElementById("systems").value;
			  var businessModels   = document.getElementById("business mods").value;
			  var numVictims   = document.getElementById("num victims").value;
			  var ageVictims   = document.getElementById("age victims").value;
			  var genderVictim   = document.getElementById("gender victim").value;
			  var numTrafficker   = document.getElementById("num trafficker").value;
			  var ageTrafficker   = document.getElementById("age trafficker").value;
			  var genderTrafficker   = document.getElementById("gender trafficker").value;
			  //var describeTrafficker  = document.getElementById("describe trafficker").value;
			  //var observations   = document.getElementById("observations").value;
			  var victimAppearance   = document.getElementById("victim appearance").value;
			  
			 var userSurveyInput = {"ID": tempID, "Long": lon, "Lat": lat, "State": state, "County": county,  "City": city, "EnteredDate":enteredData, "Q1": q1, "Q2": systems, "Q3": businessModels, "Q4": numVictims, "Q5": ageVictims, "Q6": genderVictim, "VictimDescription": "", "Q7": numTrafficker, "Q8": ageTrafficker, "Q9": genderTrafficker, "TraffickerDescription": "", "OtherObservations": ""}
			
			// Run proximity scoring here 
			console.log(userSurveyInput);
			
			getProximityScore(userSurveyInput);


			function reset_survey(){
			document.getElementById("survey").disabled = true;
			document.getElementById("form holder").setAttribute('style', "overflow: hidden; width: 40%; height: 100%; background-color: white; float:middle; border: 1px solid gray;")
			document.getElementById("add form button").setAttribute('style', "display: table; width: 5%; height: 100%; background-color: gray; float:middle; cursor: pointer; padding-left: 0% ")
			document.getElementById("add form button").setAttribute('onclick', 'createForm()')
			document.getElementById("add report font").innerHTML = 'Create'
			document.getElementById("map").setAttribute('style', "width: 40%; height: 100%; background-color: white; float:middle; border: 1px solid gray;  pointer-events:none;")
			
			document.getElementById('systems').value = ''
			document.getElementById('yes').value = ''
			document.getElementById('no').value = ''
			document.getElementById('business mods').value = ''
			document.getElementById('num victims').value = ''
			document.getElementById('age victims').value = ''
			document.getElementById('gender victim').value = ''
			document.getElementById('num trafficker').value = ''
			document.getElementById('age trafficker').value = ''
			document.getElementById('gender trafficker').value = ''
			document.getElementById('describe trafficker').value = ''
			document.getElementById('observations').value = ''
			document.getElementById('victim appearance').value = ''
			}
			setTimeout(reset_survey, 1000)
	  }

