/**
 * Autor: oscaralejandroflorez@gmail.com
 * Fecha: 19/01/2024
 * Descripción: Pruebas de automatización para https://wordcounter.net/.
 * Este archivo contiene pruebas automatizadas para verificar el funcionamiento
 * de diversas características de la página web Word Counter.
 */

// Importación de la página de inicio de Word Counter
import homeWordCounterPage from '../../pages/homeWordCounterPage';

// Descripción de las pruebas de automatización para https://wordcounter.net/
describe('Test automation https://wordcounter.net/', () => {
  
  // Antes de cada prueba, visita la página de inicio de Word Counter
  beforeEach(() => {
    homeWordCounterPage.visit('https://wordcounter.net/');
  });
  
  // Prueba para verificar la respuesta HTTP 200 del sitio web
  it('Check the HTTP 200 response of the website', () => {
    homeWordCounterPage.validateResponse();
  });

  // Prueba para validar que el sitio web carga los componentes correctamente
  it('Validate that the website loads the components correctly', () => {
    homeWordCounterPage.validateComponents();
  });

  // Prueba para contar correctamente el número de palabras en un texto
  it('Count the number of words that the text contains correctly', () => {
    homeWordCounterPage.countWords("¿Qué es Lorem Ipsum? \nLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.");
  });

  // Prueba para manejar correctamente un texto vacío
  it('Should correctly handle empty text', () => {
    homeWordCounterPage.sendEmptyText();
  });

  // Prueba para contar correctamente el número de caracteres en un texto
  it('Count the number of characters that the text contains correctly', () => {
    homeWordCounterPage.countCharacters("¿Qué es Lorem Ipsum? \nLorem Ipsum es simplemente el texto de relleno de las imprentas y archivos de texto. Lorem Ipsum ha sido el texto de relleno estándar de las industrias desde el año 1500, cuando un impresor (N. del T. persona que se dedica a la imprenta) desconocido usó una galería de textos y los mezcló de tal manera que logró hacer un libro de textos especimen. No sólo sobrevivió 500 años, sino que tambien ingresó como texto de relleno en documentos electrónicos, quedando esencialmente igual al original. Fue popularizado en los 60s con la creación de las hojas Letraset, las cuales contenian pasajes de Lorem Ipsum, y más recientemente con software de autoedición, como por ejemplo Aldus PageMaker, el cual incluye versiones de Lorem Ipsum.");
  });

  // Prueba para manejar correctamente un texto que contiene solo espacios en blanco
  it('Should correctly handle text with only whitespace', () => {
    homeWordCounterPage.sendOnlyWhitespace('         ');
  });

  // Prueba para manejar correctamente caracteres especiales en un texto
  it('Must handle special characters correctly', () => {
    homeWordCounterPage.sendSpecialCharacters('¡Hola, Lumu! ¿Cómo estás?');
  });

  // Prueba para validar las tres palabras más repetidas y su porcentaje de aparición
  it('Validate the three words that are most repeated, the number of times their percentage', () => {
    homeWordCounterPage.validateRepeatedWords('¡Hola, Lumu! ¿Cómo estás?');
  });

  // Prueba para validar cómo se manejan las palabras con diferentes casos (mayúsculas y minúsculas)
  it('Validate the three words that are most repeated, the number of times their percentage', () => {
    homeWordCounterPage.validateCaseWords('LUMU, LUMu, LUmU, LUmu, LuMU, LuMu, LumU, Lumu, lUMU, lUMu, lUmU, lUmu, luMU, luMu, lumU, lumu');
  });
});
