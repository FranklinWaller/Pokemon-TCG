class Card {
    constructor(metadata) {
        this.name = metadata.Name;
        this.type = metadata.Type;
        this.description = metadata.Extra.About;
        this.evolutionStage = metadata.EvolutionStage;
        this.hitPoints = metadata.HP;
    }

    static fromJSON(cards) {
        let result = [];

        for (var i = 0; i < cards.length; i++) {
            let card = new Card(cards[i]);
            result.push(card);
        }

        return result;
    }
}

export default Card;
