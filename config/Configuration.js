let ENV = 'DEV';

let config = {
    'DEV': {
        'Sets': ['BaseSet'],
        'SetsBasePath': 'http://localhost:3000/config/sets/',
    }
};

class Configuration {
    static get(key) {
        return config[ENV][key];
    }

    static set(key, val) {
        config[ENV][key] = val;
    }

    static all() {
        return config[ENV];
    }
}

export default Configuration;
