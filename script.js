// script.js

// Função para formatar o valor como moeda brasileira (R$)
function formatCurrency(input) {
    
    // Substitui vírgulas por pontos para facilitar o cálculo
    value = value.replace(',', '.');
  
    // Converte para número e formata como moeda brasileira
    const numericValue = parseFloat(value);
    if (!isNaN(numericValue)) {
      input.value = numericValue.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
    } else {
      input.value = ''; // Limpa o campo se o valor for inválido
    }
  }
  
  document.getElementById('calcular').addEventListener('click', function () {
    // Obter os valores inseridos pelo usuário
    const metaInput = document.getElementById('meta').value.replace('R$', '').trim().replace(/\./g, '').replace(',', '.');
    const realizadoInput = document.getElementById('realizado').value.replace('R$', '').trim().replace(/\./g, '').replace(',', '.');
  
    // Converter os valores para números
    const meta = parseFloat(metaInput);
    const realizado = parseFloat(realizadoInput);
  
    // Verificar se os valores são válidos
    if (isNaN(meta) || isNaN(realizado) || meta <= 0) {
      alert('Por favor, insira valores válidos para a meta e o valor realizado.');
      return;
    }
  
    // Calcular a porcentagem atingida
    const porcentagemAtingida = (realizado / meta) * 100;
  
    // Calcular o valor disponível para compra
    const disponivelParaCompra = meta - realizado;
  
    // Atualizar o resultado na página
    document.getElementById('porcentagem').textContent = `${porcentagemAtingida.toFixed(2)}%`;
    document.getElementById('disponivel').textContent = `R$ ${disponivelParaCompra.toLocaleString('pt-BR', { minimumFractionDigits: 2 })}`;
  
    // Exibir mensagem de parabéns se a meta for atingida
    const parabensDiv = document.getElementById('parabens');
    if (porcentagemAtingida >= 100) {
      parabensDiv.classList.remove('hidden'); // Mostra a mensagem
      parabensDiv.style.display = 'block'; // Garante que está visível
    } else {
      parabensDiv.classList.add('hidden'); // Oculta a mensagem
      parabensDiv.style.display = 'none';
    }
  });
  
  // Alternância de Modo
  const toggleModeButton = document.getElementById('toggle-mode');
  const moonIcon = document.getElementById('moon-icon');
  const sunIcon = document.getElementById('sun-icon');
  let isDarkMode = true;
  
  toggleModeButton.addEventListener('click', () => {
    const root = document.documentElement;
  
    if (isDarkMode) {
      // Altera para o modo claro
      root.style.setProperty('--bg-color', 'var(--light-bg-color)');
      root.style.setProperty('--container-bg', 'var(--light-container-bg)');
      root.style.setProperty('--text-color', 'var(--light-text-color)');
      root.style.setProperty('--input-bg', 'var(--light-input-bg)');
      root.style.setProperty('--button-bg', 'var(--light-button-bg)');
      root.style.setProperty('--button-hover', 'var(--light-button-hover)');
      moonIcon.classList.add('hidden');
      sunIcon.classList.remove('hidden');
    } else {
      // Altera para o modo escuro
      root.style.setProperty('--bg-color', 'linear-gradient(135deg, #6a11cb, #2575fc)');
      root.style.setProperty('--container-bg', 'rgba(255, 255, 255, 0.1)');
      root.style.setProperty('--text-color', '#fff');
      root.style.setProperty('--input-bg', 'rgba(255, 255, 255, 0.2)');
      root.style.setProperty('--button-bg', '#ff6f61');
      root.style.setProperty('--button-hover', '#ff4d4d');
      sunIcon.classList.add('hidden');
      moonIcon.classList.remove('hidden');
    }
  
    isDarkMode = !isDarkMode; // Alterna o estado
  });