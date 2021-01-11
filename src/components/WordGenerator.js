export default class WordGenerator {

    static generate(vocabulary) {
        let word;
        switch (vocabulary) {
            case "English":
                word = require('random-words')();
                break;
            case "German":
                word = require('random-noun-generator-german')();
                break;
            default:
                word = "apple";
                break;
        }
        return word;
    }
}