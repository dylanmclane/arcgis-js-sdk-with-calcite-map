// Import Modules   
    require([
      "esri/WebMap",
      "esri/views/MapView",
      "esri/widgets/Bookmarks",
      "esri/widgets/BasemapGallery",
      "esri/widgets/LayerList",
      "esri/widgets/Legend",
      "esri/widgets/Print",
      "esri/config"
    ], function(WebMap, MapView, Bookmarks, BasemapGallery, LayerList, Legend, Print, esriConfig){
    //   esriConfig.apikey = "api key here if needed";
      
      const webmapId = new URLSearchParams(window.location.search).get("webmap")
        ?? "210c5b77056846808c7a5ce93920be81";
      
// Display a map
      
      const map = new WebMap({
        portalItem: {
          id: webmapId
        }
      });
      
      const view = new MapView({
        map,
        container: "viewDiv",
        padding: {
          left: 49
        }
      });

// Initialize ArcGIS Maps SDK for JavaScript widgets
      
      view.ui.move("zoom", "bottom-right");
      const basemaps = new BasemapGallery({
        view,
        container: "basemaps-container"
      });
      const bookmarks = new Bookmarks({
        view,
        container: "bookmarks-container"
      });
      const layerList = new LayerList({
        view,
        selectionEnabled: true,
        container: "layers-container"
      });
      const legend = new Legend({
        view,
        container: "legend-container"
      });
      const print = new Print({
        view,
        container: "print-container"
      });
      
// Populate the content
      
      map.when(() => {
        const { title, description, thumbnailUrl, avgRating } = map.portalItem;
        document.querySelector("#header-title").textContent = title;
        document.querySelector("#item-description").innerHTML = description;
        document.querySelector("#item-thumbnail").src = thumbnailUrl;
        document.querySelector("#item-rating").value = avgRating;
        
// Code to make components interactive

        let activeWidget;
        
        const handleActionBarClick = ({ target }) => {
          if (target.tagName !== "CALCITE-ACTION") {
            return;
          }
         
        if (activeWidget) {
          document.querySelector(`[data-action-id=${activeWidget}]`).active = false;
          document.querySelector(`[data-panel-id=${activeWidget}]`).hidden = true;
        }
          
        const nextWidget = target.dataset.actionId;
        if (nextWidget !== activeWidget) {
          document.querySelector(`[data-action-id=${nextWidget}]`).active = true;
          document.querySelector(`[data-panel-id=${nextWidget}]`).hidden = false;
          activeWidget = nextWidget;
        } else {
          activeWidget = null;
        }
       };
        
       document.querySelector("calcite-action-bar").addEventListener("click", handleActionBarClick);
       
// Dynamically resize the view     

       let actionBarExpended = false;
        
       document.addEventListener("calciteActionBarToggle", event => {
         actionBarExpanded = !actionBarExpanded;
          view.padding = {
            left: actionBarExpanded ? 135 : 45
          };
       });
       
       document.querySelector("calcite-shell").hidden = false;
       document.querySelector("calcite-loader").hidden = true;
      });
    });