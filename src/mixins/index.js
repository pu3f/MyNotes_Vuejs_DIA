const mixins = {
    methods: {
        capitalizeWords(sentences) {
            const words = sentences.split(' ');
            return words.map((word) => {
                //one line if
                let output = word.length ? word[0].toUpperCase() + word.substring(1) 
                : word;
                return output;
            }).join(' ');
        }
    }
};

export default mixins;