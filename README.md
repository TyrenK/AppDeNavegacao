***APLICATIVO DE NAVEGAÇÃO ENTRE TELAS:***

---

***INSTALAÇÃO***

- Para baixar o repositório, utilize o comando:

      git clone https://github.com/TyrenK/PAM--Ativ-CalculadoraIMC.git
- Entre no diretório do repositório
  
      cd AppDeNavegacao

- Baixe as dependências:

      npm install
  
      npm install -g expo-cli

      npm install @react-navigation/native

      npm install react-native-screens react-native-safe-area-context

- Baixe a biblioteca de Navegação em Pilha e AsyncStorage

      npm install @react-navigation/stack

      npx expo install @react-native-async-storage/async-storage
      
  
- Rodando o expo, aplicativo que permite debugar e buildar para iOS e Android (ainda no diretório do projeto)

      npx expo start --tunnel
- Caso ele peça para instalar ngrok, digite "y" e aperte enter.

 - Escaneie o QR-Code (talvez esteja em cima no terminal) no seu celular usando o aplicativo "Expo Go", e estará rodando!

---

***FEATURES***
- O projeto possui um sistema de Login e Cadastro, utilizando Async Storage para salvar tanto o cadastro quanto se o usuário está logado ou não e também permite a navegação entre telas em forma de pilha (Stack.Navigator).

***Desenvolvedores:***

Luca Miguel Peres Bizinotto ([**TyrenK**](https://github.com/TyrenK)).
