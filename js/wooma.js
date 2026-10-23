(() => {
  const root = document.documentElement;
  const button = document.getElementById('caseTheme');
  function update() {
    const light = root.dataset.theme === 'light';
    button.textContent = light ? 'Use dark theme' : 'Use light theme';
    button.setAttribute('aria-pressed', String(light));
    document.querySelector('meta[name="theme-color"]').content = light ? '#f7f8fb' : '#0b1220';
  }
  update();
  button.addEventListener('click', () => {
    const mode = root.dataset.theme === 'light' ? 'dark' : 'light';
    if (mode === 'light') root.dataset.theme = mode;
    else root.removeAttribute('data-theme');
    try { localStorage.setItem('theme', mode); } catch (_) { /* Persistence is optional. */ }
    update();
  });
})();
