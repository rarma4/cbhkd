# 🥋 Confederação Brasileira de Hapkido - Site Institucional

[![Next.js](https://img.shields.io/badge/Next.js-13.5.4-black?style=for-the-badge&logo=next.js)](https://nextjs.org/)
[![React](https://img.shields.io/badge/React-18.0.0-blue?style=for-the-badge&logo=react)](https://reactjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-5.0.0-blue?style=for-the-badge&logo=typescript)](https://www.typescriptlang.org/)
[![Sass](https://img.shields.io/badge/Sass-1.69.3-pink?style=for-the-badge&logo=sass)](https://sass-lang.com/)
[![Bootstrap](https://img.shields.io/badge/Bootstrap-5.3.2-purple?style=for-the-badge&logo=bootstrap)](https://getbootstrap.com/)

## 📖 Sobre o Projeto

Site institucional da **Confederação Brasileira de Hapkido (CBHKD)**, desenvolvido para apresentar a arte marcial coreana de defesa pessoal, seus mestres, graduações, galeria de fotos e informações de contato.

### ✨ Características Principais

- **Design Responsivo**: Interface adaptável para todos os dispositivos
- **Performance Otimizada**: Construído com Next.js 13 para máxima eficiência
- **SEO Otimizado**: Metadados configurados para melhor indexação
- **Galeria Interativa**: Visualização de fotos e vídeos com lightbox
- **Navegação Intuitiva**: Menu de navegação com seções organizadas
- **Estilização Moderna**: Utiliza Bootstrap 5 com tema Lux e Sass personalizado

## 🚀 Tecnologias Utilizadas

### Frontend
- **Next.js 13.5.4** - Framework React com renderização híbrida
- **React 18** - Biblioteca para interfaces de usuário
- **TypeScript 5** - Superset JavaScript com tipagem estática
- **Sass** - Pré-processador CSS para estilos avançados

### UI/UX
- **Bootstrap 5.3.2** - Framework CSS responsivo
- **Bootswatch Lux** - Tema personalizado do Bootstrap
- **FontAwesome 6.4.2** - Ícones vetoriais
- **React Slick** - Carrossel de imagens responsivo

### Ferramentas de Desenvolvimento
- **ESLint** - Linter para qualidade do código
- **Next.js ESLint Config** - Configurações específicas do Next.js

## 📁 Estrutura do Projeto

```
src/
├── app/                    # App Router do Next.js 13
│   ├── components/         # Componentes reutilizáveis
│   │   ├── Choi.tsx       # Componente específico Choi
│   │   ├── FaixasPretas.tsx
│   │   ├── Fotos.tsx      # Galeria de fotos
│   │   ├── GaleriaItens.tsx
│   │   ├── Jae.tsx        # Componente específico Jae
│   │   ├── Kim.tsx        # Componente específico Kim
│   │   ├── MenuItens.tsx  # Itens do menu
│   │   ├── MestresHkd.tsx # Mestres de Hapkido
│   │   ├── MestresItens.tsx
│   │   ├── Navigation.tsx # Navegação principal
│   │   ├── OffNavigation.tsx
│   │   └── Videos.tsx     # Galeria de vídeos
│   ├── sections/           # Seções principais da página
│   │   ├── BannerInferior.tsx
│   │   ├── Contato.tsx     # Seção de contato
│   │   ├── Estudo.tsx      # Seção de estudos
│   │   ├── Footer.tsx      # Rodapé
│   │   ├── Galeria.tsx     # Galeria principal
│   │   ├── HeaderHome.tsx  # Cabeçalho da página inicial
│   │   ├── Historia.tsx    # História do Hapkido
│   │   ├── Mestres.tsx     # Seção dos mestres
│   │   ├── QuemPodeTreinar.tsx
│   │   ├── Regras.tsx      # Regras e regulamentos
│   │   ├── Rodape.tsx      # Rodapé adicional
│   │   ├── Skils.tsx       # Habilidades e técnicas
│   │   └── Treine.tsx      # Seção de treinamento
│   ├── contato/            # Página de contato
│   ├── galeria/            # Página da galeria
│   ├── graduacao/          # Página de graduações
│   ├── sobre/              # Página sobre
│   ├── styles/             # Estilos SCSS organizados
│   │   ├── components/     # Estilos dos componentes
│   │   ├── pages/          # Estilos das páginas
│   │   ├── sections/       # Estilos das seções
│   │   └── globals.scss    # Estilos globais
│   └── utils/              # Utilitários e configurações
│       ├── Fonts.tsx       # Configuração de fontes
│       └── Utils.tsx       # Funções utilitárias
├── public/                 # Arquivos estáticos
│   └── assets/            # Recursos (CSS, JS, imagens)
└── package.json           # Dependências e scripts
```

## 🛠️ Pré-requisitos

Antes de começar, certifique-se de ter instalado:

- **Node.js** (versão 18.0.0 ou superior)
- **npm** ou **yarn** (gerenciador de pacotes)
- **Git** (controle de versão)

## 📦 Instalação

1. **Clone o repositório**
   ```bash
   git clone https://github.com/seu-usuario/cbhkd.git
   cd cbhkd
   ```

2. **Instale as dependências**
   ```bash
   npm install
   # ou
   yarn install
   ```

3. **Configure as variáveis de ambiente** (se necessário)
   ```bash
   cp .env.example .env.local
   ```

## 🚀 Como Executar

### Desenvolvimento
```bash
npm run dev
# ou
yarn dev
```
A aplicação estará disponível em `http://localhost:3000`

### Produção
```bash
# Build da aplicação
npm run build
# ou
yarn build

# Iniciar servidor de produção
npm run start
# ou
yarn start
```

### Linting
```bash
npm run lint
# ou
yarn lint
```

## 🌐 Páginas Disponíveis

- **Home** (`/`) - Página inicial com seções principais
- **Sobre** (`/sobre`) - Informações sobre a confederação
- **Galeria** (`/galeria`) - Fotos e vídeos da confederação
- **Graduação** (`/graduacao`) - Sistema de graduações
- **Contato** (`/contato`) - Informações de contato

## 🎨 Personalização

### Temas Bootstrap
A aplicação utiliza o tema **Lux** do Bootswatch. Para alterar:

1. Edite o arquivo `src/app/layout.tsx`
2. Substitua a importação do tema:
   ```tsx
   // Tema atual
   import 'bootswatch/dist/lux/bootstrap.min.css';
   
   // Outros temas disponíveis:
   // import 'bootswatch/dist/minty/bootstrap.min.css';
   // import 'bootswatch/dist/flatly/bootstrap.min.css';
   ```

### Estilos SCSS
Os estilos estão organizados em:
- `globals.scss` - Estilos globais
- `components/` - Estilos específicos dos componentes
- `sections/` - Estilos das seções principais
- `pages/` - Estilos específicos das páginas

## 📱 Responsividade

A aplicação é totalmente responsiva e otimizada para:
- **Desktop** (1200px+)
- **Tablet** (768px - 1199px)
- **Mobile** (até 767px)

## 🔧 Scripts Disponíveis

| Comando | Descrição |
|---------|-----------|
| `npm run dev` | Inicia servidor de desenvolvimento |
| `npm run build` | Cria build de produção |
| `npm run start` | Inicia servidor de produção |
| `npm run lint` | Executa verificação de código |

## 📊 Performance

- **Lighthouse Score**: Otimizado para performance, acessibilidade e SEO
- **Core Web Vitals**: Atende aos padrões de performance do Google
- **SEO**: Metadados configurados para melhor indexação

## 🤝 Contribuição

1. Faça um fork do projeto
2. Crie uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. Commit suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. Push para a branch (`git push origin feature/AmazingFeature`)
5. Abra um Pull Request

## 📝 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 📞 Suporte

Para suporte técnico ou dúvidas sobre o projeto:
- **Email**: [seu-email@exemplo.com]
- **Issues**: [GitHub Issues](https://github.com/seu-usuario/cbhkd/issues)

## 🙏 Agradecimentos

- **Confederação Brasileira de Hapkido** - Pelo projeto e conteúdo
- **Next.js Team** - Pelo framework incrível
- **Bootstrap Team** - Pelo sistema de design responsivo
- **Comunidade Open Source** - Pelas bibliotecas utilizadas

---

**Desenvolvido para a Confederação Brasileira de Hapkido**

*"A arte marcial não é apenas uma técnica de combate, mas um caminho para o desenvolvimento pessoal e espiritual."*
 
