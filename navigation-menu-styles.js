import { css, } from 'lit-element';


export default css`:host {
  display: block;
  box-sizing: border-box;
  @apply --navigation-menu; }

:host([hidden]), [hidden] {
  display: none !important; }

*, *:before, *:after {
  box-sizing: inherit; }

.primary {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #333; }

.primary li {
  float: left; }

.primary li a {
  display: block;
  color: white;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer; }

.primary li a:hover:not(.active) {
  background-color: #111; }

.primary .active {
  background-color: #4CAF50; }

.secundary {
  list-style-type: none;
  margin: 0;
  padding: 0;
  overflow: hidden;
  background-color: #E9E9E9; }

.secundary li {
  float: left; }

.secundary li a {
  display: block;
  color: #121212;
  text-align: center;
  padding: 14px 16px;
  text-decoration: none;
  cursor: pointer; }

.secundary li a:hover:not(.active) {
  color: #fff;
  background-color: #1973B8; }

.secundary .active {
  color: #fff;
  background-color: #1973B8; }
`;