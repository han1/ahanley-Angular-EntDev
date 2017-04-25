// File Explorer Configuration
var explorer = window.Kloudless.explorer({
    // Chooser and Saver Options
    app_id: "XXXXXXXXXXXXXXXXXXXXXXXXXXX",
    computer: true,
    //
    services: ['all'],
    // display_backdrop: true,
    // create_folder: true,
    // retrieve_token: true,
    // tokens: [],
    // Chooser options
    multiselect: true,
    link: true,
    direct_link: true,
    copy_to_upload_location: true,
    types: ['all'],
});

// Initializing Chooser
explorer.choosify(document.getElementById('chooser'));

// Initializing Saver
// var files = [{
//     url: "https://s3-us-west-2.amazonaws.com/static-assets.kloudless.com/static/logo_white.png",
//     name: "kloudless-logo.png"
// }];
 explorer.savify(document.getElementById('saver'), files);


