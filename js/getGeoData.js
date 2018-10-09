
$.getJSON( "geographies/data/counties.json", function( data ) {
			<!-- Remove point layers if they exist already
			county_created = map.getLayer("path")
			if (county_created || state_created) {
				map.removeLayer("path")
				map.removeSource("path")
				}
			for (var s in data["all"]) {

				if (data["all"][s]["name"] == full_name)
					{
					coors = data["all"][s]["coors"]
					const allPoints = coors.map(point => ({
					type: 'Feature',
					geometry: {
						type: 'Point',
						coordinates: point
					}
				}));
			
			console.log(allPoints)
			
				map.addLayer({
					id: 'reports',
					type: 'circle',
					paint: {
						'circle-color' : '#f00',
						'circle-radius' : {'base' : 2, 'stops' : [[12, 2]]}
						},
					source: {
						type: 'geojson',
						data: {
							type: 'FeatureCollection',
							features: allPoints
						}
					}
				});

				map.addLayer({
					id: 'path',
					type: 'circle',
					paint: {
									'circle-color' : '#f00',
									'circle-radius' : {'base' : 2, 'stops' : [[12, 2]]}
									},
					source: {
						type: 'geojson',
						data: {
							type: 'FeatureCollection',
							features: allPoints
						}
					}
				});					
				
				map.removeLayer("reports")
				map.removeSource("reports")	
				
				county_created = map.getLayer("path")
				} <!-- End of i0ff statement for state name
				
			} <!-- End of for loop
		
			})
