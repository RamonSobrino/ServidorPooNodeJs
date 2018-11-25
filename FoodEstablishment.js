
const LocalBusiness = require('./LocalBusiness.js');

class FoodEstablishment extends LocalBusiness {

    constructor(object) {
        super(object);
        this["@type"] = "FoodEstablishment";
        this.servesCuisine = object.servesCuisine;
        this.acceptsReservations = object.acceptsReservations;
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
        if (object.servesCuisine != undefined)
            this.servesCuisine = object.servesCuisine;
        if (object.acceptsReservations != undefined)
            this.acceptsReservations = object.acceptsReservations;
    }

    toHTML() {
        return '<section> <h3> Tipo' + this["@type"] + ' </h3> ' +
            '<p> ' + 'Id: ' + this.id + '</p>' +
            '<p> ' + '@Context: ' + this["@context"] + '</p>' +
            '<p> ' + '@Type: ' + this["@type"] + '</p>' +
            '<p> ' + 'Name: ' + this.name + '</p>' +
            '<p> ' + 'Adress: ' + this.address + '</p>' +
            '<p> ' + 'Description: ' + this.description + '</p>' +
            '<p> ' + 'Telephone: ' + this.telephone + '</p>' +
            '<p> ' + 'Url: ' + this.adress + '</p>' +
            '<p> ' + 'OpenningHours: ' + this.adress + '</p>' +
            '<p> ' + 'ServesCuisine: ' + this.servesCuisine + '</p>' +
            '<p> ' + 'AcceptsReservations: ' + this.acceptsReservations + '</p>' +
            '</section>';
    };


    toText() {
        return 'FoodEstablishment: \n' +
            '\t- ' + 'Id: ' + this.id + '\n ' +
            '\t- ' + '@Context: ' + this["@context"] + '\n ' +
            '\t- ' + '@Type: ' + this["@type"] + ' \n' +
            '\t- ' + 'Name: ' + this.name + '\n' +
            '\t- ' + 'Adress: ' + this.address + '\n' +
            '\t- ' + 'Description: ' + this.description + '\n' +
            '\t- ' + 'Telephone: ' + this.telephone + '\n' +
            '\t- ' + 'Url: ' + this.url + '\n' +
            '\t- ' + 'OpenningHours: ' + this.openingHours + '\n' +
            '\t- ' + 'ServesCuisine: ' + this.servesCuisine + '\n' +
            '\t- ' + 'AcceptsReservations: ' + this.acceptsReservations + '\n' +
            '\n';
    };

    toJson() {
        var stringify = require('json-stable-stringify')
        return stringify(this);
    };

    toXML() {
        return '<FoodEstablishment> ' +
            '<Id>' + this.id + '</Id>' +
            '<@Context>' + this["@context"] + '</@Context>' +
            '<@Type> ' + this["@type"] + '</@Type>' +
            '<Name>' + this.name + '</Name>' +
            '<Adress> ' + this.address + '</Adress>' +
            '<Description> ' + this.description + '</Description>' +
            '<Telephone> ' + this.telephone + '</Telephone>' +
            '<Url> ' + this.url + '</Url>' +
            '<OpenningHours> ' + this.openingHours + '</OpenningHours>' +
            '<ServesCuisine> ' + this.servesCuisine + '</ServesCuisine>' +
            '<AcceptsReservations> ' + this.acceptsReservations + '</AcceptsReservations>' +
            '</FoodEstablishment>';
    };
};

module.exports = FoodEstablishment;