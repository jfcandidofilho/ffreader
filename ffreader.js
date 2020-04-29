// Toggles reader mode
async function toggleReaderMode( tab ){

    // Verify if page supports Reader Mode
    
    if( ! tab.isArticle && ! tab.isInReaderMode ){

        // isArticle identify if a page can enter Reader Mode
        // isInReaderMode identify if a page is already in Reader Mode
        // Pages in reader mode have isArticle = false
        
        // Tells user about the page's lack of support for Reader Mode
        browser.tabs.executeScript( tab.id, { file: "/inject.js" } );

     // Try to toggle a given tab
    } else try {

        // Awaits to toggle
        await browser.tabs.toggleReaderMode( tab.id );
     
     // Informs of error if it can't
    } catch ( error ) {

        // Informs of error
        console.log( "FF Reader - ERROR:", error );
    
    }

}

// Add toggle function to the button
browser.browserAction.onClicked.addListener( toggleReaderMode );