class LocalBusiness {

    constructor(object) {
        this["@context"] = "http://schema.org";
        this["@type"] = "LocalBusiness";
        this.address = object.address;
        this.description = object.description;
        this.name = object.name;
        this.telephone = object.telephone;
        this.url = object.url;
        this.openingHours = object.openingHours;
        this.id = null;
    }

    actualizar(object) {
        if (object.address != undefined)
            this.address = object.address;
        if (object.description != undefined)
            this.description = object.description;
        if (object.name != undefined)
            this.name = object.name;
        if (object.telephone != undefined)
            this.telephone = object.telephone;
        if (object.url != undefined)
            this.url = object.url;
        if (object.openingHours != undefined)
            this.openingHours = object.openingHours;
    }


    toHTML() {
        return '<section> <h3> Tipo LocalBussines: </h3> ' +
            '<p> ' + 'Id: ' + this.id + '</p>' +
            '<p> ' + '@Context: ' + this["@context"] + '</p>' +
            '<p> ' + '@Context: ' + this["@type"] + '</p>' +
            '<p> ' + 'Name: ' + this.name + '</p>' +
            '<p> ' + 'Adress: ' + this.address + '</p>' +
            '<p> ' + 'Description: ' + this.description + '</p>' +
            '<p> ' + 'Telephone: ' + this.telephone + '</p>' +
            '<p> ' + 'Url: ' + this.url + '</p>' +
            '<p> ' + 'OpenningHours: ' + this.openingHours + '</p>' +
            '</section>';
    };


    toText() {
        return 'LocalBusiness: \n' +
            '\t- ' + 'Id: ' + this.id + '\n ' +
            '\t- ' + '@Context: ' + this["@context"] + '\n ' +
            '\t- ' + '@Type: ' + this["@type"] + ' \n' +
            '\t- ' + 'Name: ' + this.name + '\n' +
            '\t- ' + 'Adress: ' + this.address + '\n' +
            '\t- ' + 'Description: ' + this.description + '\n' +
            '\t- ' + 'Telephone: ' + this.telephone + '\n' +
            '\t- ' + 'Url: ' + this.url + '\n' +
            '\t- ' + 'OpenningHours: ' + this.openingHours + '\n' +
            '\n';
    };

    toJson() {
        var stringify = require('json-stable-stringify')
        return stringify(this);
    };

    toXML() {
        return '<LocalBusiness> ' +
            '<Id>' + this.id + '</Id>' +
            '<@Context>' + this["@context"] + '</@Context>' +
            '<@Type> ' + this["@type"] + '</@Type>' +
            '<Name>' + this.name + '</Name>' +
            '<Adress> ' + this.address + '</Adress>' +
            '<Description> ' + this.description + '</Description>' +
            '<Telephone> ' + this.telephone + '</Telephone>' +
            '<Url> ' + this.url + '</Url>' +
            '<OpenningHours> ' + this.openingHours + '</OpenningHours>' +
            '</LocalBusiness>';
    };

};

module.exports = LocalBusiness;