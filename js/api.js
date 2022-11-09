const reader = require('fs');

module.exports = function loadContactList(){
    return reader.readFileSync('resources/txt/contactList.txt');
}