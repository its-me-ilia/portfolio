/**
 * @param {string} data - String containing various text to be displayed in languages: Georgian, English and Russian in proceeding order, separated by Bitwise or operator (|)
 * @param {string} lang - Currently chosen language
 * @returns {string} Text to be displayed determined by language
 */

const translate = (data,lang) => {
    const texts = data.split('|');
    const langHelper = {
        ka: 0,
        en: 1,
        ru: 2
    };
    const currentTextIndex = langHelper[lang];
    let currentText = texts[currentTextIndex];
    currentText = currentText.trim();
    return currentText;
};

export default translate;