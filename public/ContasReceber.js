idatual = 0;

const modal = new bootstrap.Modal(
    document.getElementById('modalAlterar'));

const modalExcluir = new bootstrap.Modal(
    document.getElementById('modalExcluir'));

function novo() {
    idatual = -1;
    const txtdata = document.getElementById("txtdata");
    const txtvalor = document.getElementById("txtvalor");
    const txtvencimento = document.getElementById("txtvencimento");
    const txtpagamento = document.getElementById("txtpagamento");
    const txtvalorpago = document.getElementById("txtvalorpago");

     

    //limpa os campo
    txtdata.value = "";
    txtvalor.value = "";
    txtvencimento.value = "";
    txtpagamento.value = "";
    txtvalorpago.value = "";

    //abre a dialog
    modal.show();
}
function alterar(id) {
    idatual = id;

    fetch("http://127.0.0.1:3333/contasReceber/" + id)
    .then(resp => resp.json())
    .then(dados => {
 

        const txtdata = document.getElementById("txtdata");
        const txtvalor = document.getElementById("txtvalor");
        const txtvencimento = document.getElementById("txtvencimento");
        const txtpagamento = document.getElementById("txtpagamento");
        const txtvalorpago = document.getElementById("txtvalorpago");


        txtdata.value = dados.data;
        txtvalor.value = dados.valor;
        txtvencimento.value = dados.vencimento;
        txtpagamento.value = dados.pagamento;
        txtvalorpago.value = dados.valorpago;

        
        modal.show();
    });
}
function listar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "<tr><td colspan=5>Carregando...</td></tr>";

    const txtpesquisa = document.getElementById("txtpesquisa");


    fetch("http://127.0.0.1:3333/contasReceber?pesquisa=" + txtpesquisa.value)
    .then(resp => resp.json())
    .then(dados => mostrar(dados));
}
function mostrar(dados) {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (var i in dados) {
        let id = dados[i].idcliente;
        lista.innerHTML += "<tr>"
            + "<td>" + id + "</td>"
            + "<td>" + dados[i].data + "</td>"
            + "<td>" + dados[i].valor + "</td>"
            + "<td>" + dados[i].vencimento + "</td>"
            + "<td>" + dados[i].pagamento + "</td>"
            + "<td>" + dados[i].valorpago + "</td>"

            + "<td>"
            + "<button type='button' class='btn btn-primary' "
            + " onclick='alterar("+id+")'>Alterar</button>"
            + "<button type='button' class='btn btn-danger' "
            + " onclick='excluir("+id+")'>Excluir</button>"
            + "</td>"
            + "</tr>";
    }
}
function excluir(id) {
    idatual = id;
    modalExcluir.show();
}
function excluirSim() {
    fetch("http://127.0.0.1:3333/contasReceber/" + idatual,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            method: "DELETE", 
            body: ""
        }
    ).then(() => {
        
        modalExcluir.hide();
        listar();
    })
}
function salvar() {
        const txtdata = document.getElementById("txtdata");
        const txtvalor = document.getElementById("txtvalor");
        const txtvencimento = document.getElementById("txtvencimento");
        const txtpagamento = document.getElementById("txtpagamento");
        const txtvalorpago = document.getElementById("txtvalorpago");



    const dados = {
        data: txtdata.value,
        valor: txtvalor.value,
        vencimento: txtvencimento.value, 
        pagamento: txtpagamento.value,
        valorpago: txtvalorpago.value, 

    }

    var url;
    var metodo;
    if (idatual<=0) {
        url = "http://127.0.0.1:3333/contasReceber";
        metodo = "POST";
    } else {
        url = "http://127.0.0.1:3333/contasReceber/" + idatual;
        metodo = "PUT";
    }
    fetch(url,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            method: metodo, 
            body: JSON.stringify(dados)
        }
    ).then(() => {
        modal.hide();
        listar();
    })

}

listar();