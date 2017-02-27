//This gets pasted into the Events Custom Code Detail javascript area.

//Stops mobile redirect
Object.defineProperties(window, {
  redirToMobile: {
    value: function() {return false},
    enumerable: true
  }
});

function loadNewStyles() {
if (document.getElementsByTagName('iframe').length > 0) {
 var formIframe = document.getElementsByTagName('iframe')[0];

 formIframe.setAttribute('style', 'position: absolute; top: 0; left: 0; min-height: 100vh; margin-top: 0');

 var favicon = document.createElement("link");
 favicon.setAttribute('rel', 'shortcut icon');
 favicon.setAttribute('href', 'https://franciscan.university/favicon.ico');

 document.head.appendChild(favicon);
 } else if (window.location.href.indexOf('formpage') > 0) {
 // Load styles for forms

 } else {
 var materialIcons = document.createElement("link");
 materialIcons.href = "https://fonts.googleapis.com/icon?family=Material+Icons";
 materialIcons.setAttribute('rel', 'stylesheet');
 materialIcons.setAttribute('type', 'text/css');

 document.head.appendChild(materialIcons);

 var materialCss = document.createElement("link");
 materialCss.href = "https://cdnjs.cloudflare.com/ajax/libs/materialize/0.98.0/css/materialize.min.css";
 materialCss.setAttribute('rel', 'stylesheet');
 materialCss.setAttribute('type', 'text/css');

 document.head.appendChild(materialCss);

  var eventJs = document.createElement("script");
 eventJs.setAttribute('src', 'https://jesserweigel.github.io/fus-admissions-forms/events.js');
 eventJs.setAttribute('type', 'text/javascript');


  var eventCss = document.createElement("link");
 eventCss.href = "https://jesserweigel.github.io/fus-admissions-forms/events.css";
 eventCss.setAttribute('rel', 'stylesheet');
 eventCss.setAttribute('type', 'text/css');

 document.head.appendChild(eventCss);

 var metaViewport = document.createElement("meta");
 metaViewport.setAttribute('content', 'width=device-width,initial-scale=1');
 metaViewport.setAttribute('name', 'viewport');

 document.head.appendChild(metaViewport);
 document.head.appendChild(eventJs);
 }
}
