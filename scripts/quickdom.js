// forked from GitHub/DonDejvo for loading reasons

const $ = el => document.querySelector(el);
const $$ = el => document.querySelectorAll(el);
const id = arg => document.getElementById(arg);
const cl = arg => document.getElementsByClassName(arg);
const randint = (min, max) => Math.floor(Math.random() * (max - min + 1) + min);
const css = (html_elem, styles) => { for(let attr in styles) html_elem.style[attr] = styles[attr]; }
const hide = html_elem => { html_elem.style.display = "none"; }
const show = (html_elem, value = "block") => { html_elem.style.display = value; }