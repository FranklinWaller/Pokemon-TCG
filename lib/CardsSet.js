class CardsSet {
    constructor(metadata) {
        this.cards = metadata.Cards;
        this.name = metadata.SetName;
        this.amountOfCards = 0;
    }

    static fromJSON (sets) {
        let result = [];

        for (let i = 0; i < sets.length; i++) {
            let set = new CardsSet(sets[i]);
            result.push(set);
        }

        return result;
    }
}

export default CardsSet;
