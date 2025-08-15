'use client';

import { useEffect } from 'react';

export function Forms() {
  const CONTAINER_ID = 'bitrix-form-container';

  useEffect(() => {
    const container = document.getElementById(CONTAINER_ID);
    if (!container) return;

    // Limpa conteúdo anterior
    container.innerHTML = '';

    // Cria o script inline que Bitrix fornece
    const inlineScript = document.createElement('script');
    inlineScript.setAttribute('data-b24-form', 'inline/66/trwug7');
    inlineScript.setAttribute('data-skip-moving', 'true');

    // Define o conteúdo JS igual ao snippet original
    inlineScript.innerHTML = `
      (function(w,d,u){
        var s=d.createElement('script');s.async=true;s.src=u+'?'+(Date.now()/180000|0);
        var h=d.getElementsByTagName('script')[0];h.parentNode.insertBefore(s,h);
      })(window,document,'https://cdn.bitrix24.com.br/b27474801/crm/form/loader_66.js');
    `;

    // Adiciona no container
    container.appendChild(inlineScript);

    return () => {
      container.innerHTML = '';
    };
  }, []);

  // Container responsivo, já com alinhamento e borda
  return (
    <div
      id={CONTAINER_ID}
      className="
        w-full
        text-left
        p-4
        sm:p-6
        md:p-8
      "
    />
  );
}
