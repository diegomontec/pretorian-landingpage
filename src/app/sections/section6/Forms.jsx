'use client';

import { useEffect } from 'react';

export function Forms() {
  const CONTAINER_ID = 'bitrix-form-container';
  const SCRIPT_ID = 'bitrix-form-loader-66';

  useEffect(() => {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    // limpa conteúdo anterior (HMR / navegação)
    container.innerHTML = '';

    // remove script antigo se existir
    const old = document.getElementById(SCRIPT_ID);
    if (old?.parentNode) old.parentNode.removeChild(old);

    const s = document.createElement('script');
    s.id = SCRIPT_ID;
    s.src = 'https://cdn.bitrix24.com.br/b27474801/crm/form/loader_66.js'; // ajuste se o seu loader mudar
    s.async = true;
    s.setAttribute('data-b24-form', 'inline/66/trwug7'); // ajuste se o ID/slug mudar
    s.setAttribute('data-skip-moving', 'true');

    container.appendChild(s);

    return () => {
      container.innerHTML = '';
      const script = document.getElementById(SCRIPT_ID);
      if (script?.parentNode) script.parentNode.removeChild(script);
    };
  }, []);

  // container flexível e responsivo (altura mínima por breakpoint)
  return (
    <div
      id={CONTAINER_ID}
      className="
        w-full
      "
    />
  );
}
