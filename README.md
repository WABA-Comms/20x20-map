<h1>20x20 Campaign Map</h1>

<a href="https://waba.org/42830-2/" target="blank">Demo</a>

![Image of the app](https://github.com/WABA-Comms/20x20-map/blob/main/img/app.png)

<h2>Summary</h2>
This map was initially created as part of the 20x20: Connected, Protected, Equitable advocacy campaign. It shows the current protected bike lane and trail networks, WABA's proposal for the infrastructure to be built in 2020, and the vision for the future network. This map was never released publicly in 20x20, but may be used in the future.

<h2>Updating Features</h2>
1. Use <a href="http://geojson.io/#map=2/20.0/0.0" target="blank">geojson.io</a> to draw features that need updating.
2. Use the table view in <a href="http://geojson.io/#map=2/20.0/0.0" target="blank">geojson.io</a> to add attributes.
3. Export as a JSON file.
4. Create a new mbtiles file with the new JSON file using the mbtiles_script.txt.
  * This requires Tippecanoe (see <a href="https://github.com/mapbox/tippecanoe" target="blank">documentation</a>.
  * **Don't change names in the script.** The names are used as IDs in the application; changing them will make bad things happen.
5. Replace the mbtiles file currently hosted in Mapbox with the new one.
6. Refresh the application to double check that the changes were made.
