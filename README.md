## Hooks Básicos:

**useState**: usado para gerenciar estados;

**useEffect**: usado para gerar efeitos colaterais a certas atualizações;

**useContext**: usado para gerenciar contextos entre componentes distintos.

## Hooks Adicionais:

**useReducer**: uma alternativa ao useState quando há lógicas complexas;

**useCallback**: memoriza uma função, que só é atualizada quando os valores recebidos como argumento são atualizados;

**useMemo**: semelhante ao useCallback, mas ao invés de função, armazena um valor;

**useRef**: usado normalmente para acessar propriedades de componentes “filhos”;

**useImperativeHandle**: usado para personalizar o valor da instância que será acessível aos componentes “pais”;

**useLayoutEffect**: semelhante ao useEffect, porém é disparado na mesma fase que componentDidMount e componentDidUpdate. É preferível o uso do useEffect;

**useDebugValue**: usado para definir um "label" em hooks customizados que irá aparecer somente em ferramentas de debug.

## 🔨 Funcionalidades do projeto

Neste projeto iremos juntar a tela Home e Cesta do e-commerce de produtos naturais Orgs, criando ainda a tela de Produtor.

![ezgif com-gif-maker](https://user-images.githubusercontent.com/9091491/140552376-f1c1523d-5c69-42fe-a2fa-4021ed77160a.gif)
