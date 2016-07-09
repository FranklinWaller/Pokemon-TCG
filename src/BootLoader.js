import Configuration from '../config/Configuration';
import CardsSet from '../lib/CardsSet';
import Card from '../lib/Card';

let loaders = [];
let storage = {
    'Sets': [],
};

class BootLoader {
    static getStorage() {

    }

    static load() {
        return new Promise(function(resolve, reject) {
            // Load all sets available.
            loaders.push(BootLoader.loadSets());

            Promise.all(loaders).then(function () {
                console.log('DONE', storage);
            })
        });
    }

    static loadSets() {
        let availableSets = Configuration.get('Sets');
        let promises = [];

        for (let i = 0; i < availableSets.length; i++) {
            promises.push(fetch(Configuration.get('SetsBasePath') + availableSets[i] + '.json'));
        }

        // Fetch all the Card data from the json files.
        return Promise.all(promises).then(function (bodys) {
            let toJSONConversions = [];

            for (let i = 0; i < bodys.length; i++) {
                toJSONConversions.push(bodys[i].json())
            }

            // JSON Conversion is also async..
            return Promise.all(toJSONConversions);
        }).then(function (sets) {
            storage.Sets = sets;
            return sets;
        }).then(function (sets) {
            // Loop through all sets and create cards from them.
            for (let i = 0; i < sets.length; i++) {
                sets[i].Cards = Card.fromJSON(sets[i].Cards);
            }

            // Lastly convert it all to a real set.
            storage.Sets = CardsSet.fromJSON(sets);
        });
    }

    static isLoaded() {

    }
}

export default BootLoader;
