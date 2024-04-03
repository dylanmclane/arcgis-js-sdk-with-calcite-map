# ArcGIS JavaScript SDK with Calcite Design System 72 hour NOAA NWS precipitation map
UI project utilizing ArcGIS Maps SDK for JavaScript and Calcite Design System

Hosted on Netlify: https://arcgiscalcitemap.netlify.app/

Data source: https://www.arcgis.com/home/item.html?id=b3ae384875284b8891196a2f132deb81

Built using Esri ArcGIS Maps SDK for JavaScript and Calcite Design System "Create a mapping app" documentation: https://developers.arcgis.com/calcite-design-system/tutorials/create-a-mapping-app/

Next steps:
- Time slider widget time extent does not update automatically/as the data updates. Find and fix this parameter. 
  - Time slider issue when using map: Web Map stores Time Slider widget data start/end based on when the map was saved. Layer needs to be used, but other widgets and dark mode switch are built off of using map. Possible to make this transition?
  - Documentation of Time Slider built off of Layer: https://developers.arcgis.com/javascript/latest/sample-code/widgets-timeslider/
- Time slider and other ui needs work to become mobile friendly/responsive.
- Experiment with/customize UI: https://developers.arcgis.com/javascript/latest/view-ui/

Completed changes: <br>
✅ Add dark-mode switch: https://developers.arcgis.com/calcite-design-system/tutorials/build-a-dark-mode-switch/ <br>
✅ Changed Map to time enabled map (72 hour NWS precipitation prediction data) <br>
✅ Add time slider widget (found documentation: https://developers.arcgis.com/javascript/latest/api-reference/esri-widgets-TimeSlider.html) <br>
