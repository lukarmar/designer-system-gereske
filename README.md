# Call UI Design System 🎨

Um Design System completo e modular construído com React, TypeScript e Storybook, desenvolvido para fornecer componentes reutilizáveis e consistentes para aplicações web.

## 📋 Sobre o Projeto

O Call UI Design System é uma biblioteca de componentes que oferece:

- **Componentes React** reutilizáveis e acessíveis
- **Design Tokens** padronizados (cores, tipografia, espaçamentos)
- **Documentação interativa** com Storybook
- **TypeScript** para type safety
- **Arquitetura monorepo** com Turborepo

## 🏗️ Arquitetura

O projeto utiliza uma arquitetura de monorepo com os seguintes pacotes:

```
packages/
├── tokens/          # Design tokens (cores, fontes, espaçamentos)
├── react/           # Componentes React
├── docs/            # Documentação com Storybook
├── eslint-config/   # Configurações ESLint compartilhadas
└── ts-config/       # Configurações TypeScript compartilhadas
```

### 📦 Pacotes

#### `@call-ui/tokens`

Design tokens padronizados incluindo:

- **Cores**: Paleta de cores completa (gray, ignite)
- **Tipografia**: Fontes, tamanhos e pesos
- **Espaçamentos**: Sistema de espaçamento consistente
- **Bordas**: Valores de border-radius padronizados

#### `@call-ui/react`

Biblioteca de componentes React com:

- **Button**: Botões com variantes e estados
- **Box**: Container flexível com sistema de layout
- **Text & Heading**: Componentes de tipografia
- **Avatar**: Componente de avatar com fallbacks
- **TextInput & TextArea**: Inputs de formulário
- **CheckBox**: Checkbox acessível
- **MultiStep**: Indicador de progresso em etapas

#### `@call-ui/docs`

Documentação interativa com:

- **Storybook**: Showcases interativos dos componentes
- **Design Tokens**: Visualização de tokens de design
- **Testes visuais**: Testes de regressão visual
- **Documentação**: Guias de uso e exemplos

## 🚀 Primeiros Passos

### Pré-requisitos

- Node.js 18+
- npm 10+

### Instalação

1. **Clone o repositório**

   ```bash
   git clone https://github.com/lukarmar/designer-system.git
   cd designer-system
   ```

2. **Instale as dependências**

   ```bash
   npm install
   ```

3. **Execute em modo desenvolvimento**
   ```bash
   npm run dev
   ```

### Scripts Disponíveis

```bash
# Executar todos os pacotes em modo desenvolvimento
npm run dev

# Build de todos os pacotes
npm run build

# Executar apenas o Storybook
cd packages/docs && npm run dev

# Build do Storybook
cd packages/docs && npm run build
```

## 📖 Como Usar

### Instalação dos Pacotes

```bash
# Instalar os tokens de design
npm install @call-ui/tokens

# Instalar os componentes React
npm install @call-ui/react
```

### Exemplo de Uso

```tsx
import { Button, Box, Text, Heading } from "@call-ui/react";
import { colors, space, fontSizes } from "@call-ui/tokens";

function App() {
  return (
    <Box css={{ padding: space[4] }}>
      <Heading size="lg">Bem-vindo ao Call UI</Heading>
      <Text css={{ color: colors.gray600, marginTop: space[2] }}>
        Este é um exemplo de uso dos componentes
      </Text>
      <Button variant="primary" css={{ marginTop: space[4] }}>
        Começar
      </Button>
    </Box>
  );
}
```

### Usando Design Tokens

```tsx
import { colors, space, fonts, fontSizes } from "@call-ui/tokens";

const styles = {
  container: {
    backgroundColor: colors.gray100,
    padding: space[4],
    fontFamily: fonts.default,
    fontSize: fontSizes.md,
  },
};
```

## 🎨 Design Tokens

### Cores

```tsx
colors: {
  // Neutros
  white: '#FFF',
  black: '#000',

  // Escalas de cinza
  gray100: '#E1E1E6',
  gray200: '#A9A9B2',
  gray400: '#7C7C8A',
  gray500: '#505059',
  gray600: '#323238',
  gray700: '#29292E',
  gray800: '#202024',
  gray900: '#121214',

  // Cores principais
  ignite300: '#00B37E',
  ignite500: '#00875F',
  ignite700: '#015F43',
  ignite900: '#00291D'
}
```

### Tipografia

- **Fontes**: Roboto (default), Roboto Mono (code)
- **Tamanhos**: xs, sm, md, lg, xl, 2xl, 4xl, 5xl, 6xl, 7xl, 8xl, 9xl
- **Pesos**: regular, medium, bold
- **Line Heights**: shorter, short, base, tall

### Espaçamento

Sistema baseado em múltiplos de 4px para consistência visual.

## 📚 Documentação

A documentação completa está disponível no Storybook:

```bash
cd packages/docs
npm run dev
```

Acesse: `http://localhost:6006`

### O que você encontrará:

- **Componentes**: Exemplos interativos de todos os componentes
- **Design Tokens**: Visualização de cores, tipografia e espaçamentos
- **Guidelines**: Diretrizes de uso e boas práticas
- **Testes**: Casos de teste visuais

## 🛠️ Tecnologias

- **React 19** - Biblioteca UI
- **TypeScript** - Type safety
- **Stitches** - CSS-in-JS com performance
- **Radix UI** - Primitivos acessíveis
- **Storybook 9** - Documentação interativa
- **Turborepo** - Build system para monorepo
- **Vite** - Build tool
- **Vitest** - Framework de testes
- **Phosphor React** - Ícones

## 🤝 Contribuindo

1. **Fork** o projeto
2. **Crie** uma branch para sua feature (`git checkout -b feature/AmazingFeature`)
3. **Commit** suas mudanças (`git commit -m 'Add some AmazingFeature'`)
4. **Push** para a branch (`git push origin feature/AmazingFeature`)
5. **Abra** um Pull Request

### Diretrizes para Contribuição

- Siga os padrões de código existentes
- Adicione testes para novos componentes
- Atualize a documentação no Storybook
- Use commits convencionais
- Certifique-se que os testes passem

## 📋 Roadmap

- [ ] Mais componentes de formulário
- [ ] Sistema de temas (dark/light)
- [ ] Componentes de layout avançados
- [ ] Animações e transições
- [ ] Documentação de acessibilidade
- [ ] Testes automatizados
- [ ] Publicação no NPM

## 📄 Licença

Este projeto está sob a licença MIT. Veja o arquivo [LICENSE](LICENSE) para mais detalhes.

## 👥 Autor

**Lukar Martins** - [luka-martins](https://www.linkedin.com/in/luka-martins)
