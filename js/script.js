function calcularTotal() {
    const precos = {
        cachorroQuente: 10.00,
        burguerSimples: 12.00,
        XQueijo: 12.00,
        Xegg: 12.00,
        BurguerVeg: 15.00,
        tortaChocolate: 12.00,
        tortaLimao: 12.00,
        pudim: 10.0,
        cocacola: 7.00,
        suco: 9.00,
    };

    let total = 0;
    let resumo = "Itens Pedidos:\n";

    // Cachorro Quente
    if (document.getElementById("cachorroQuenteQtde").value) {
        let quantidade = parseInt(document.getElementById("cachorroQuenteQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.cachorroQuente;
            resumo += `Cachorro Quente: ${quantidade} x R$${precos.cachorroQuente} = R$${(quantidade * precos.cachorroQuente).toFixed(2)}\n`;
        }
    }

    // Burguer Simples
    if (document.getElementById("burguerSimplesQtde").value) {
        let quantidade = parseInt(document.getElementById("burguerSimplesQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.burguerSimples;
            resumo += `Burguer Simples: ${quantidade} x R$${precos.burguerSimples} = R$${(quantidade * precos.burguerSimples).toFixed(2)}\n`;
        }
    }

    // X Queijo
    if (document.getElementById("XQueijoQtde").value) {
        let quantidade = parseInt(document.getElementById("XQueijoQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.XQueijo;
            resumo += `X Queijo: ${quantidade} x R$${precos.XQueijo} = R$${(quantidade * precos.XQueijo).toFixed(2)}\n`;
        }
    }

    // Burguer Onion
    if (document.getElementById("burguerOnionQtde").value) {
        let quantidade = parseInt(document.getElementById("burguerOnionQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.burguerOnion;
            resumo += `burguerOnion: ${quantidade} x R$${precos.burguerOnion} = R$${(quantidade * precos.burguerOnion).toFixed(2)}\n`;
        }
    }

    // X egg
    if (document.getElementById("XeggQtde").value) {
        let quantidade = parseInt(document.getElementById("XeggQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.Xegg;
            resumo += `X egg: ${quantidade} x R$${precos.Xegg} = R$${(quantidade * precos.Xegg).toFixed(2)}\n`;
        }
    }


     // BurguerVeg
     if (document.getElementById("BurguerVegQtde").value) {
        let quantidade = parseInt(document.getElementById("BurguerVegQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.BurguerVeg;
            resumo += `Burguer Vegetariano: ${quantidade} x R$${precos.BurguerVeg} = R$${(quantidade * precos.BurguerVeg).toFixed(2)}\n`;
        }
    }

 // Torta Chocolate
 if (document.getElementById("tortaChocolateQtde").value) {
    let quantidade = parseInt(document.getElementById("tortaChocolateQtde").value) || 0;
    if (quantidade > 0) {
        total += quantidade * precos.tortaChocolate;
        resumo += `tortaChocolate: ${quantidade} x R$${precos.tortaChocolate} = R$${(quantidade * precos.tortaChocolate).toFixed(2)}\n`;
    }
}
 // Torta Limao
 if (document.getElementById("tortaLimaoQtde").value) {
    let quantidade = parseInt(document.getElementById("tortaLimaoQtde").value) || 0;
    if (quantidade > 0) {
        total += quantidade * precos.tortaLimao;
        resumo += `tortaLimao: ${quantidade} x R$${precos.tortaLimao} = R$${(quantidade * precos.tortaLimao).toFixed(2)}\n`;
    }
}

 // Pudim
 if (document.getElementById("pudimQtde").value) {
    let quantidade = parseInt(document.getElementById("pudimQtde").value) || 0;
    if (quantidade > 0) {
        total += quantidade * precos.pudim;
        resumo += `pudim: ${quantidade} x R$${precos.pudim} = R$${(quantidade * precos.pudim).toFixed(2)}\n`;
    }
}

    // coca-cola
    if (document.getElementById("cocacolaQtde").value) {
        let quantidade = parseInt(document.getElementById("cocacolaQtde").value) || 0;
        if (quantidade > 0) {
            total += quantidade * precos.cocacola;
            resumo += `cocacola: ${quantidade} x R$${precos.cocacola} = R$${(quantidade * precos.cocacola).toFixed(2)}\n`;
        }
    }

        // suco
        if (document.getElementById("sucoQtde").value) {
            let quantidade = parseInt(document.getElementById("sucoQtde").value) || 0;
            if (quantidade > 0) {
                total += quantidade * precos.suco;
                resumo += `suco: ${quantidade} x R$${precos.suco} = R$${(quantidade * precos.suco).toFixed(2)}\n`;
            }
        }

    resumo += `\nTotal: R$${total.toFixed(2)}`;
    document.getElementById("resumoPedido").innerText = resumo;
}