function onOpen(event) {
  //show menu
  SlidesApp.getUi().createAddonMenu()
      .addItem('Open Sample Sidebar for usage', 'showSidebar')
      .addToUi();
}

/**
 * Opens a sidebar in the document containing the add-on's user interface.
 */
function showSidebar() {
    //create HTML template
    var ui = HtmlService.createTemplateFromFile('Sidebar');

    //set template variable data
    var templateStatement = "Welcome to the Sample Sidebar World!"
    ui.templateStatement = templateStatement;
    
    //evaluate template
    var html = ui.evaluate();
  
    //run through createHtmlOutput to set the title
    var htmlOutput = HtmlService
    .createHtmlOutput(html)
    .setTitle('Sample Sidebar');

    //show it to the user
    SlidesApp.getUi().showSidebar(htmlOutput);
    
}
