import { createGlobalStyle } from 'styled-components';

import teutonic3 from './teutonic3.tff';
import photographSignature from './photographSignature.tff';

export default createGlobalStyle`
    @font-face {
        font-family: 'Teutonic3';
        src: local('Teutonic3'),
        url(${teutonic3}) format('tff');
        font-weight: 300;
        font-style: normal;
    }
    @font-face {
        font-family: 'photographSignature';
        src: local('photographSignature'),
        url(${photographSignature}) format('tff');
        font-weight: 300;
        font-style: normal;
    }
    
    
`;