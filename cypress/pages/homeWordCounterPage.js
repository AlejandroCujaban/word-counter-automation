/**
 * Autor: oscaralejandroflorez@gmail.com
 * Fecha: 19/01/2024
 * Clase: homeWordCounterPage
 * Descripción: Esta clase contiene métodos para realizar pruebas de automatización en la página web https://wordcounter.net/.
 * Se utiliza Cypress como herramienta de automatización de pruebas.
 */
class homeWordCounterPage {

    /**
     * elements: Contiene referencias a los elementos de la página web.
     */
    elements = {
        fieldBox: () => cy.get('#box'),
        fieldWord: () => cy.get('#word_count'),
        fieldCharacter: () => cy.get('#character_count'),
        fieldKwd: () => cy.get('#kwd-accordion'),
        listGroupWords: () => cy.get('#kwd-accordion .list-group-item')
    }

    /**
     * visit(url): Visita la URL proporcionada.
     * @param {string} url La URL a visitar.
     */
    visit(url) {
        cy.visit(url)
    }

    /**
     * validateResponse(): Valida que la respuesta HTTP del sitio web sea 200.
     */
    validateResponse(){
        cy.request('https://wordcounter.net/').then((response) => {
            expect(response.status).to.equal(200);
        });
    }

    /**
     * validateComponents(): Valida que los componentes de la página se carguen correctamente.
     */
    validateComponents() {
        cy.contains('0 words 0 characters');
        this.elements.fieldBox().should('exist');
        this.elements.fieldWord().should('exist');
        this.elements.fieldCharacter().should('exist');
        this.elements.fieldKwd().should('exist');
    }

    /**
     * writeText(text): Escribe el texto proporcionado en el campo de entrada.
     * @param {string} text El texto a escribir.
     */
    writeText(text){
        this.elements.fieldBox().type(text)
    }

    /**
     * countWords(text): Cuenta las palabras en el texto proporcionado y verifica el resultado.
     * @param {string} text El texto del que contar las palabras.
     */
    countWords(text){
        this.writeText(text);
        this.elements.fieldWord().should('have.text','127')
    }

    /**
     * countCharacters(text): Cuenta los caracteres en el texto proporcionado y verifica el resultado.
     * @param {string} text El texto del que contar los caracteres.
     */
    countCharacters(text){
        this.writeText(text);
        this.elements.fieldCharacter().should('have.text','752')
    }

    /**
     * sendEmptyText(): Verifica el comportamiento cuando se envía un texto vacío.
     */
    sendEmptyText(){
        this.elements.fieldWord().should('have.text','0')
        this.elements.fieldCharacter().should('have.text','0')
    }

    /**
     * sendOnlyWhitespace(text): Verifica el comportamiento cuando se envía un texto que contiene solo espacios en blanco.
     * @param {string} text El texto que contiene solo espacios en blanco.
     */
    sendOnlyWhitespace(text){
        this.writeText(text)
        this.elements.fieldWord().should('have.text','0')
        this.elements.fieldCharacter().should('have.text','9')
    }

    /**
     * sendSpecialCharacters(text): Verifica el comportamiento cuando se envía un texto que contiene caracteres especiales.
     * @param {string} text El texto que contiene caracteres especiales.
     */
    sendSpecialCharacters(text){
        this.writeText(text)
        this.elements.fieldWord().should('have.text','4')
        this.elements.fieldCharacter().should('have.text','25')
    }

    /**
     * validateRepeatedWords(text): Verifica que las palabras más repetidas en el texto coincidan con las esperadas.
     * @param {string} text El texto del que validar las palabras repetidas.
     */
    validateRepeatedWords(text){
        this.writeText(text)
        cy.wait(3000);
        this.elements.listGroupWords().then($items => {
            expect($items.length).to.be.greaterThan(0);
            const contenidoEsperado = ['1 (25%)hola', '1 (25%)lumu', '1 (25%)cómo'];
            const cantidadElementos = Math.min(contenidoEsperado.length, $items.length);
            for (let i = 0; i < cantidadElementos; i++) {
                expect($items.eq(i).text().trim()).to.equal(contenidoEsperado[i]);
            }
        })
    }

    /**
     * validateCaseWords(text): Verifica que las palabras con diferentes casos coincidan con las esperadas.
     * @param {string} text El texto del que validar las palabras con diferentes casos.
     */
    validateCaseWords(text){
        this.writeText(text)
        cy.wait(3000);
        this.elements.listGroupWords().then($items => {
            expect($items.length).to.be.greaterThan(0);
            const contenidoEsperado = ['16 (100%)lumu'];
            const cantidadElementos = Math.min(contenidoEsperado.length, $items.length);
            for (let i = 0; i < cantidadElementos; i++) {
                expect($items.eq(i).text().trim()).to.equal(contenidoEsperado[i]);
            }
        })
    }
}

// Exporta una instancia de la clase homeWordCounterPage
module.exports = new homeWordCounterPage();
