import { createGlobalStyle } from 'styled-components';

import 'react-toastify/dist/ReactToastify.css';

export default createGlobalStyle`
   @import url('https://fonts.googleapis.com/css?family=Roboto:400,700&display=swap');

   * {
    margin: 0;
    padding: 0;
    outline: 0;
    box-sizing: border-box;
  }

  *:focus {
    outline: 0;
  }

  html, body {
    height: 100%;
  }
  #root {
    min-height: 100%;
  }

  body {
    -webkit-font-smoothing: antialiased;
  }

  body, input, button, textarea {
    font: 14px 'Roboto', sans-serif;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  button {
    cursor: pointer;
  }

  .react-datepicker-wrapper, .react-datepicker__input-container, .react-datepicker-ignore-onclickoutside {
    width: 100%;
  }
`;
