// src/utils/markdownToHtml.js
import { marked } from 'marked';

// Función para reemplazar palabras clave con enlaces
function replaceKeywordsWithLinks(content, keywords) {
  let updatedContent = content;

  keywords.forEach(keyword => {
    const regex = new RegExp(`\\b${keyword.word}\\b`, 'gi'); // Crear una expresión regular para buscar la palabra clave
    updatedContent = updatedContent.replace(regex, `<a href="${keyword.url}" class="custom-link text-blue-300 hover:text-blue-600">${keyword.word}</a>`);
  });

  return updatedContent;
}

export function markdownToHtml(markdown, keywords = []) {
  const html = marked(markdown);
  const updatedHtml = replaceKeywordsWithLinks(html, keywords);
  return updatedHtml;
}
