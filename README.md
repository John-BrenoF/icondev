# icondev — biblioteca de ícones SVG

![logo-icondev](https://github.com/user-attachments/assets/84a63978-d6e6-40f6-a209-8434887b51ad)

Um repositório com uma coleção de ícones em SVG gratuitos — sem cadastro. Basta copiar o SVG que deseja e usar no seu projeto.

Descrição
--------
icondev reúne ícones vetoriais (SVG) prontos para uso em projetos web, apps e protótipos. Os SVGs podem ser copiados diretamente do repositório ou usados como referência para implementações personalizadas.

Funcionalidades
---------------
- Coleção de ícones SVG limpos e de fácil personalização.
- Ícones prontos para alterar cor, tamanho e atributos via CSS ou atributos inline.
- Exemplo de site (demo) hospedado para navegar e visualizar ícones em contexto.

Demo
----
Acesse o site de demonstração:
https://symphonious-melba-0be362.netlify.app/

Captura de tela
---------------
<img width="1920" height="1080" alt="preview" src="https://github.com/user-attachments/assets/a13e013c-aacb-41b7-ade7-0d563ef290ef" />

Instalação e execução local
---------------------------
1. Clone o repositório:
```bash
git clone https://github.com/John-BrenoF/icondev.git
cd icondev
```

2. Instale as dependências:
```bash
npm install
```

3. Execute em modo de desenvolvimento:
```bash
npm run dev
```

Uso
---
- Copie o conteúdo do arquivo `.svg` ou do bloco SVG exibido no site.
- Para alterar a cor do ícone via CSS, remova atributos fill no SVG e use:
```css
svg { fill: currentColor; color: #ff6600; width: 24px; height: 24px; }
```
- Você também pode importar o SVG em frameworks (React, Vue) como componente ou como imagem.

Exemplos rápidos
---------------

Inserir SVG inline:
```html
<!-- Exemplo: copie o conteúdo do arquivo icon.svg aqui -->
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
  <!-- caminho do ícone -->
</svg>
```

Usar como imagem:
```html
<img src="/path/to/icon.svg" alt="Ícone descritivo">
```

Estrutura do projeto
--------------------
- /icons — pasta com arquivos .svg (cada arquivo é um ícone)
- /public — ativos estáticos e imagens de demonstração
- /src — código do site/demo (se houver)
- README.md — este arquivo

Como contribuir
---------------
Contribuições são bem-vindas! Siga estas etapas:
1. Fork deste repositório.
2. Crie uma branch com a sua feature: git checkout -b feature/nome-do-icone
3. Adicione o arquivo SVG (com nome descritivo) em /icons.
4. Abra um Pull Request descrevendo o ícone e a fonte (se aplicável).

Por favor, verifique se:
- Os SVGs estão otimizados (remova metadados desnecessários).
- Usam atributos sem valores fixos de cor, preferencialmente usando fill="currentColor" quando apropriado.

Licença
-------
Sem uma licença definida por enquanto. Se quiser permissões claras de uso, adicione um arquivo LICENSE (por exemplo, MIT) ao repositório. Sem licença, os direitos permanecem com o autor e o uso pode ficar restrito.

Créditos e contato
------------------
Criado por John-BrenoF. Para sugestões, reporte problemas (issues) no repositório ou entre em contato pelo perfil GitHub.

---

Se quiser, eu atualizo o README.md no seu repositório diretamente (com uma licença padrão, badges, ou um sumário com links internos). Diga qual licença prefere e se quer que eu inclua badges (por exemplo: versão, CI ou licença). 
