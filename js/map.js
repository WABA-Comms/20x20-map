


// initialize the map
mapboxgl.accessToken = 'pk.eyJ1IjoiY29saW53YWJhIiwiYSI6InBNSExzWUEifQ.TClbaHblqfSFgUbfp1gSbg';

var map = new mapboxgl.Map({
    container: 'map',
    style: 'mapbox://styles/mapbox/light-v10', // basemap
    center:[-77.0369, 38.9072],
    zoom: 11
});


// none of this code is executed until the map has loaded
map.on('load', function() {

    // Define the tileset source for the data
    map.addSource('colinwaba.3852l5am', { // pick a name for the source
        type: 'vector',
        url: 'mapbox://colinwaba.3852l5am', // tileset
    });

    // Add data layers to the map
    // PRE-2020 EXISTING PBLs
    map.addLayer({
        'id': 'existing_PBL_network_layer', // pick a name for the layer
        'type': 'line',
        'source': 'colinwaba.3852l5am',
        'source-layer': 'existing_PBL_network', // layer id on the tileset
        'layout': {
            'line-join': 'miter',
            'line-cap': 'butt',
            'visibility': 'visible' // must set visibility property for the toggle function to work
        },
        'paint': {
            'line-color': '#0076A8', // waba dark blue
            // The feature-state dependent expression will render the width when a feature's hover state is set to true
            'line-width':             
            [
                'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    4,
                    2
            ]
        }
    });

    //  2020 PBLs NOT YET BUILT
    map.addLayer({
        'id': '2020_PBL_network_layer_updated', // pick a name for the layer
        'type': 'line',
        'source': 'colinwaba.3852l5am',
        'source-layer': '2020_PBL_network_updated', // layer id on the tileset
        'layout': {
            'line-join': 'miter',
            'line-cap': 'butt',
            'visibility': 'visible' // must set visibility property for the toggle function to work
        },
        'paint': {
            'line-color': '#e87722', // waba orange
            // The feature-state dependent expression will render the width when a feature's hover state is set to true
            'line-width': 
            [
                'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    5,
                    3
            ],
            'line-dasharray': [1,1] // sets the dash, gap pattern of the line
        }
    });

    // PBLs BUILT IN 2020
    map.addLayer({
        'id': '2020_PBL_network_layer_built', // pick a name for the layer
        'type': 'line',
        'source': 'colinwaba.3852l5am',
        'source-layer': '2020_PBL_network_built', // layer id on the tileset
        'layout': {
            'line-join': 'miter',
            'line-cap': 'butt',
            'visibility': 'visible' // must set visibility property for the toggle function to work
        },
        'paint': {
            'line-color': '#e87722', // waba orange
            // The feature-state dependent expression will render the width when a feature's hover state is set to true
            'line-width': 
            [
                'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    5,
                    3
            ]
        }
    });

    // 2025 PBL VISION
    map.addLayer({
        'id': '2025_PBL_network_layer', // pick a name for the layer
        'type': 'line',
        'source': 'colinwaba.3852l5am',
        'source-layer': '2025_PBL_network', // layer id on the tileset
        'layout': {
            'line-join': 'miter',
            'line-cap': 'butt',
            'visibility': 'none' // not visible when map loads
        },
        'paint': {
            'line-color': '#0076A8', // waba dark blue
            'line-opacity': 0.75, // slight transparency to de-emphasize future
            // The feature-state dependent expression will render the width when a feature's hover state is set to true
            'line-width': 
            [
                'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    4,
                    2
            ],
            'line-dasharray': [1,1] // sets the dash, gap pattern of the line
        }
    });

    // 2040 PBL VISION
    map.addLayer({
        'id': '2040_PBL_network_layer', // pick a name for the layer
        'type': 'line',
        'source': 'colinwaba.3852l5am',
        'source-layer': '2040_PBL_network', // layer id on the tileset
        'layout': {
            'line-join': 'miter',
            'line-cap': 'butt',
            'visibility': 'none' // not visible when map loads
        },
        'paint': {
            'line-color': '#0076A8', // waba dark blue
            'line-opacity': 0.75, // slight transparency to de-emphasize future
            // The feature-state dependent expression will render the width when a feature's hover state is set to true
            'line-width': 
            [
                'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    4,
                    2
            ],
            'line-dasharray': [3,2] // sets the dash, gap pattern of the line
        }
    });

    // 2040 TRAIL VISION
    map.addLayer({
        'id': '2040_trail_network_layer', // pick a name for the layer
        'type': 'line',
        'source': 'colinwaba.3852l5am',
        'source-layer': '2040_trail_network', // layer id on the tileset
        'layout': {
            'line-join': 'miter',
            'line-cap': 'butt',
            'visibility': 'none' // not visible when map loads
        },
        'paint': {
            'line-color': '#228b22', // 20x20 green
            'line-opacity': 0.75, // slight transparency to de-emphasize future
            // The feature-state dependent expression will render the width when a feature's hover state is set to true
            'line-width': 
            [
                'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    4,
                    2
            ],
            'line-dasharray': [3,2] // sets the dash, gap pattern of the line
        }
    });

    // PRE-2020 EXISTING TRAILS
    map.addLayer({
        'id': 'existing_trail_network_layer', // pick a name for the layer
        'type': 'line',
        'source': 'colinwaba.3852l5am',
        'source-layer': 'existing_trail_network', // layer id on the tileset
        'layout': {
            'line-join': 'miter',
            'line-cap': 'butt',
            'visibility': 'visible' // must set visibility property for the toggle function to work
        },
        'paint': {
            'line-color': '#228b22', // 20x20 green
            // The feature-state dependent expression will render the width when a feature's hover state is set to true
            'line-width': 
            [
                'case',
                    ['boolean', ['feature-state', 'hover'], false],
                    4,
                    2
            ]
        }
    });



    // Add a geocoder to the map, so users can search for locations
    map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        mapboxgl: mapboxgl
        })
    );

    // FUNCTION highlightFeature: changes the cursor to a pointer and sets the feature state to true when you mouse over a feature. 
    // This allows you to use feature-state dependent styling for data in the map. In this case, the line-width property has a
    // different value depending on the feature state.

    // initialize a variable; this variable will be assigned a unique id that each feature is given when imported to Mapbox from MBTiles
    // Other data formats will not preserve the unique id when they are imported into Mapbox
    var featureID = null;
    var sourceLayerName = null; // initialize a variable to hold the source layer, corresponding to the 'source-layer' property of layers

    function highlightFeature(e) {
        map.getCanvas().style.cursor = 'pointer'; // sets the cursor to pointer when it is over the feature
        if (e.features.length > 0) { // Check whether feature exists
            if (featureID) { // if the featureID variable is null (initialized above)
                // When the mouse moves over the colinwaba.3852l5am source, update the feature state for the feature under the mouse
                map.setFeatureState( 
                    {source: 'colinwaba.3852l5am', sourceLayer: sourceLayerName, id: featureID},
                    {hover: false}
                );
            }
            featureID = e.features[0].id; // assign the feature's unique id to the featureID variable
            sourceLayerName = e.features[0].sourceLayer; // assign the feature's 'source-layer' property to the sourceLayerName variable
            // When the mouse moves over the colinwaba.3852l5am source, update the feature state for the feature under the mouse
            map.setFeatureState(
                {source: 'colinwaba.3852l5am', sourceLayer: sourceLayerName, id: featureID},
                {hover: true}
            );
        }
    };

    // FUNCTION unHighlightFeature: sets the cursor back to default and sets the feature state to false when you mouse away from a feature.
    function unHighlightFeature(_e) {
        if (featureID) { // if the featureID variable is null (initialized above)
            map.setFeatureState(
                // When the mouse moves over the colinwaba.3852l5am source, update the feature state for the feature under the mouse
                {source: 'colinwaba.3852l5am', sourceLayer: sourceLayerName, id: featureID}, 
                {hover: false}
            );
        }
        featureID = null; // re-assign variable to null
        map.getCanvas().style.cursor = ''; // reset the cursor style
    };

    // FUNCTION: flies to a home location on a button click
    document.getElementById('fly').addEventListener('click', function() {
        map.flyTo({
        center: [-77.0369, 38.9072],
        zoom: 11,
        essential: true // this animation is considered essential with respect to prefers-reduced-motion
        });
    });


    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup()

    // FUNCTION showPopup1: for active projects where we want users to do something something specific
    function showPopup1(e) {
        // Show the popup at the coordinates with some data
        popup
            .setLngLat(e.lngLat)
            .setHTML(
                e.features[0].properties.name + 
                "<br><a href='https://waba.org/20x20map/' target='blank'><button class=blue-button2>Take Action</button></a>"
                )
            .addTo(map);
    }

    // FUNCTION showPopup2: for projects that are already complete and we don't need users to do something
    function showPopup2(e) {
        // Show the popup at the coordinates with some data
        popup
            .setLngLat(e.lngLat)
            .setHTML(
                e.features[0].properties.name + 
                "<br><a href='https://waba.org/20x20map/' target='blank'><button class=blue-button2>Get Involved</button></a>"
                )
            .addTo(map);
    }
    

    // enumerate 'id' property of each of the layers in an array for use in the loop below
    // leave out the 20x20 ids so they are not toggleable
    var toggleableLayerIds = [
        'existing_PBL_network_layer',
        '2025_PBL_network_layer',
        'existing_trail_network_layer',
        '2040_trail_network_layer',
        '2040_PBL_network_layer',
    ];
    
    // set up the corresponding toggle button for each layer by iterating through the list of layer ids
    for (var i = 0; i < toggleableLayerIds.length; i++) {
        var id = toggleableLayerIds[i]; // get the id of the current layer
        var link = document.createElement('a'); // create a anchor tag element
        link.href = '#'; // set the anchor tag's href property
        link.id = id; // set the anchor tag's id property to be the same as the layer
        
        // set the current and near future layers to active, so they are visible (toggled on) when the map loads
        if (
            link.id == '2020_PBL_network_layer_updated' ||
            link.id == '2020_PBL_network_layer_built' ||
            link.id == 'existing_PBL_network_layer' ||
            link.id == 'existing_trail_network_layer'
        ) {
            link.className = 'active';
        }

        // when a user clicks the anchor tag, toggle the layer
        link.onclick = function(e) {
            var clickedLayer = this.id; // get the id of the layer that the user clicked on
            e.preventDefault();
            e.stopPropagation();
            var visibility = map.getLayoutProperty(clickedLayer, 'visibility'); // get the value of the layer's visibility property
            // toggle layer visibility by changing the visibility property and class name on the clicked layer
            if (visibility === 'visible') {
                map.setLayoutProperty(clickedLayer, 'visibility', 'none');
                this.className = '';

            } else {
                this.className = 'active';
                map.setLayoutProperty(clickedLayer, 'visibility', 'visible');
            }
        };

        var layers = document.getElementById(id); // get the element with the id of the current layer
        layers.appendChild(link); // append the anchor tag as a child of this element

    
    };

    // Add interaction functions to the various layers, based on what they need.
    map.on('click', '2020_PBL_network_layer_updated', showPopup1);
    map.on('mousemove', '2020_PBL_network_layer_updated', highlightFeature);
    map.on("mouseleave", '2020_PBL_network_layer_updated', unHighlightFeature);

    map.on('click', '2020_PBL_network_layer_built', showPopup2);
    map.on('mousemove', '2020_PBL_network_layer_built', highlightFeature);
    map.on("mouseleave", '2020_PBL_network_layer_built', unHighlightFeature);

    map.on('click', 'existing_PBL_network_layer', showPopup2);
    map.on('mousemove', 'existing_PBL_network_layer', highlightFeature);
    map.on("mouseleave", 'existing_PBL_network_layer', unHighlightFeature);
    
    map.on('click', 'existing_trail_network_layer', showPopup2);
    map.on('mousemove', 'existing_trail_network_layer', highlightFeature);
    map.on("mouseleave", 'existing_trail_network_layer', unHighlightFeature);

    map.on('click', '2025_PBL_network_layer', showPopup1);
    map.on('mousemove', '2025_PBL_network_layer', highlightFeature);
    map.on("mouseleave", '2025_PBL_network_layer', unHighlightFeature);

    map.on('click', '2040_trail_network_layer', showPopup1);
    map.on('mousemove', '2040_trail_network_layer', highlightFeature);
    map.on("mouseleave", '2040_trail_network_layer', unHighlightFeature);

    map.on('click', '2040_PBL_network_layer', showPopup1);
    map.on('mousemove', '2040_PBL_network_layer', highlightFeature);
    map.on("mouseleave", '2040_PBL_network_layer', unHighlightFeature);

});

// Layer IDs
// '2020_PBL_network_layer_updated',
// '2020_PBL_network_layer_built',
// 'existing_PBL_network_layer',
// 'existing_trail_network_layer',
// '2025_PBL_network_layer',
// '2040_trail_network_layer',
// '2040_PBL_network',
// 'ward-boundaries'


// source-layer names
// '2020_PBL_network_updated',
// '2020_PBL_network_built',
// 'existing_PBL_network',
// 'existing_trail_network',
// '2025_PBL_network',
// '2040_trail_network',
// '2040_PBL_network'
