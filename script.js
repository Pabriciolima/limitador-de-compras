// script.js
document.getElementById('calcular').addEventListener('click', function () {
    const meta = parseFloat(document.getElementById('meta').value);
    const realizado = parseFloat(document.getElementById('realizado').value);
  
    if (isNaN(meta) || isNaN(realizado) || meta <= 0) {
      alert('Por favor, insira valores válidos para a meta e o valor realizado.');
      return;
    }
  
    const porcentagemAtingida = (realizado / meta) * 100;
    const disponivelParaCompra = meta - realizado;
  
    document.getElementById('porcentagem').textContent = `${porcentagemAtingida.toFixed(2)}%`;
    document.getElementById('disponivel').textContent = `R$ ${disponivelParaCompra.toFixed(2)}`;
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