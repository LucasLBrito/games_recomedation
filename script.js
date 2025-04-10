/**
 * Script para controlar a funcionalidade de expansão dos cards
 * Este código adiciona eventos de clique aos botões "Ler mais"
 * para alternar entre as versões curta e completa dos textos
 */
document.addEventListener('DOMContentLoaded', function() {
    // Seleciona todos os botões "Ler mais"
    const readMoreButtons = document.querySelectorAll('.read-more-btn');
    
    // Adiciona evento de clique para cada botão
    readMoreButtons.forEach(button => {
        button.addEventListener('click', function() {
            // Encontra os elementos relevantes dentro do card
            const cardBody = this.closest('.card-body');
            const shortText = cardBody.querySelector('.card-text-short');
            const fullText = cardBody.querySelector('.card-text-full');
            
            // Alterna entre as versões curta e completa
            if (shortText.style.display !== 'none') {
                // Mostra o texto completo
                shortText.style.display = 'none';
                fullText.style.display = 'block';
                this.textContent = 'Ler menos';
            } else {
                // Mostra o texto resumido
                shortText.style.display = 'block';
                fullText.style.display = 'none';
                this.textContent = 'Ler mais';
            }
        });
    });
    
    // Adiciona animação suave ao passar o mouse sobre os cards
    const cards = document.querySelectorAll('.card');
    cards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-5px)';
            this.style.boxShadow = '0 10px 20px rgba(0,0,0,0.2)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
            this.style.boxShadow = 'none';
        });
    });
});