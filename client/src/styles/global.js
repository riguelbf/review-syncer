import { injectGlobal } from 'styled-components';

import 'rc-slider/assets/index.css';

injectGlobal`
 *{
     margin: 0;
     padding: 0;
     box-sizing : border-box;
     outline: 0;
 }

 html, body, #root{
    height : 100%;
 }

 body{
   text-rendering: optimizeLegibility !important;
   -webkig-font-smooting:antialiazed !important;
   background:#181818;
   font-family: 'Montserrat' , sans-serif;
   color: #fff;
 }
`;
