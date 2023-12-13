let estoque = 
{'joao': [
        {tipo: 'maca', quantidade: 1},
    ],
    'maria': [
        {tipo: 'maca', quantidade: 2},]};

function getEstoque()
{return structuredClone(estoque);}

