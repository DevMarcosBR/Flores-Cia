(function(){
  const header = document.querySelector('header');
  if (header){
    window.addEventListener('scroll', () => {
      header.classList.toggle('scrolled', window.scrollY > 20);
    }, {passive:true});
  }

  const toggle = document.getElementById('menu-toggle');
  const backdrop = document.getElementById('backdrop');
  if (toggle){
    const fechar = () => {
      document.body.classList.remove('menu-open');
      toggle.textContent = '☰';
    };
    toggle.addEventListener('click', () => {
      const aberto = document.body.classList.toggle('menu-open');
      toggle.textContent = aberto ? '✕' : '☰';
    });
    if (backdrop) backdrop.addEventListener('click', fechar);
    document.querySelectorAll('.menu-mobile a').forEach(a => a.addEventListener('click', fechar));
  }

  const filtros = document.querySelectorAll('.filtro');
  const produtos = document.querySelectorAll('.produto');
  if (filtros.length && produtos.length){
    filtros.forEach(btn => {
      btn.addEventListener('click', () => {
        filtros.forEach(f => f.classList.remove('ativo'));
        btn.classList.add('ativo');
        const cat = btn.dataset.cat;
        produtos.forEach(p => {
          if (cat === 'todos' || p.dataset.cat === cat){
            p.classList.remove('oculto');
          } else {
            p.classList.add('oculto');
          }
        });
      });
    });
  }

  const form = document.getElementById('form-encomenda');
  if (form){
    form.addEventListener('submit', e => {
      e.preventDefault();
      const nome = document.getElementById('nome').value;
      const tel = document.getElementById('telefone').value;
      const prod = document.getElementById('produto').value;
      const msg = document.getElementById('mensagem').value;
      const texto = `Olá! Quero fazer uma encomenda 🌿%0A%0A*Nome:* ${nome}%0A*Telefone:* ${tel}%0A*Produto:* ${prod}%0A%0A*Observações:*%0A${msg}`;
      window.open(`https://wa.me/5514999999999?text=${texto}`, '_blank');
    });
  }
})();