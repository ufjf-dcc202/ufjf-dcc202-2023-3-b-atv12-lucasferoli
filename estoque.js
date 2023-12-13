let estoque = 
{'joao': [
        {tipo: 'maca', quantidade: 1},
    ],
    'maria': [
        {tipo: 'maca', quantidade: 2},]};

function getEstoque()
{return structuredClone(estoque);}

function transacaoNoEstoque(origem, destino, tipo, quantidade)
{ if (!estoque[origem] && origem !== "pomar") 
    {estoque[origem] = [];}

if (!estoque[destino] && destino !== "pomar") 
    {estoque[destino] = [];}

    if (quantidade < 0 || origem === destino) 
    {return;}

    if (destino === "pomar") 
    {let itemSelecionado = estoque[origem].find(item => item.tipo === tipo);if (itemSelecionado) 
        {
            if (itemSelecionado.quantidade >= quantidade) 
            {itemSelecionado.quantidade = itemSelecionado.quantidade - quantidade;} 
            else 
            {itemSelecionado.quantidade = 0;}
        } 
        else 
        {
            return;
        }
        return;
    }


    if (origem === "pomar") 
    {
        const itemSelecionado = estoque[destino].find(item => item.tipo === tipo);
        if (itemSelecionado) 
        {itemSelecionado.quantidade += quantidade;
        } 
        else 
        {estoque[destino].push({tipo, quantidade});}
        return;
    }

    else 
    {
        let itemInicial = estoque[origem].find(item => item.tipo === tipo);
        let itemFinal = estoque[destino].find(item => item.tipo === tipo);

        if (!itemInicial) 
        {return;}

        else if (itemInicial.quantidade < quantidade) 
        {
            if (itemFinal) 
            {itemFinal.quantidade += itemInicial.quantidade;
            } 
            else 
            {estoque[destino].push({tipo: tipo, quantidade: itemInicial.quantidade});}
            itemInicial.quantidade = 0;
        }

        else 
        {
            if (itemFinal) 
            {itemFinal.quantidade += quantidade;} 
            else 
            {estoque[destino].push({tipo, quantidade});}
            itemInicial.quantidade = itemInicial.quantidade - quantidade;
        }
    }
    return;}

function limpaEstoque(){
    estoque = {};}

export {getEstoque, transacaoNoEstoque, limpaEstoque};