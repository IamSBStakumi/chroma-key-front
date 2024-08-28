"use client";

import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
  html {
    height: 100%;
  }

  body {
  height: 100%;
  padding: 0;
  margin: 0;
  font-family: "Helvetica Neue", Helvetica, Arial, sans-serif;
  font-size: 20px;
  line-height: 1.4286;
  color: #333;
  background-color: #fff;
  }

  /* @Headline
  ------------------------------------- */
  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    padding: 0;
    margin: 0;
  }

  /* @List
  ------------------------------------- */
  ul {
    list-style: none;
  }

  ul,
  ol,
  li,
  dl,
  dt,
  dd {
    padding: 0;
    margin: 0;
  }

  /* @Image
  ------------------------------------- */
  img {
    vertical-align: middle;
    border: 0;
  }

  a img {
    border: 0;
  }

  /* @Anchor
  ------------------------------------- */
  a {
    overflow: hidden;
    color: #337ab7;
    text-decoration: none;
    cursor: pointer;
    background-color: transparent;
  }

  * {
    box-sizing: border-box;
  }

  *::before,
  *::after {
    box-sizing: border-box;
  }

  a:hover,
  a:focus {
    color: #23527c;
    text-decoration: underline;
  }

  a:focus {
    outline: 5px auto -webkit-focus-ring-color;
    outline-offset: -2px;
  }

  .img-responsive,
  hr {
    margin-top: 20px;
    margin-bottom: 20px;
    border: 0;
    border-top: 1px solid #eee;
  }

  [role="button"] {
    cursor: pointer;
  }
`;

export default GlobalStyle;
