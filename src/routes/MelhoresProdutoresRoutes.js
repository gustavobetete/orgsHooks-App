import React from 'react';
import ProdutorRoutes from './ProdutorRoutes';
import melhoresProdutores from '../telas/MelhoresProdutores';

export default function MelhoresProdutoresRoutes(){
    return <ProdutorRoutes ComponentePrincipal={melhoresProdutores}/>
}