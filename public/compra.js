idatual = 0;

const modal = new bootstrap.Modal(
    document.getElementById('modalAlterar'));

const modalExcluir = new bootstrap.Modal(
    document.getElementById('modalExcluir'));

function novo() {
    idatual = -1;
    const txtnumeronf = document.getElementById("txtnumeronf");
    const txtdata = document.getElementById("txtdata");
    const txtquantidade = document.getElementById("txtquantidade");
    const txtvalor = document.getElementById("txtvalor");
    const txtidfornecedor = document.getElementById("txtidfornecedor");
    const txtidproduto = document.getElementById("txtidproduto");
     

    //limpa os campo
    txtnumeronf.value = "";
    txtdata.value = "";
    txtquantidade.value = "";
    txtvalor.value = "";
    txtidfornecedor.value = "";
    txtidproduto.value = "";

    //abre a dialog
    modal.show();
}
function alterar(id) {
    idatual = id;
    //carregar os dados do id passado por parametro
    fetch("http://127.0.0.1:3333/compra/" + id)
    .then(resp => resp.json())
    .then(dados => {
        //preenche os inputs
        const txtnumeronf = document.getElementById("txtnumeronf");
        const txtdata = document.getElementById("txtdata");
        const txtquantidade = document.getElementById("txtquantidade");
        const txtvalor = document.getElementById("txtvalor");
        const txtidfornecedor = document.getElementById("txtidfornecedor");
        const txtidproduto = document.getElementById("txtidproduto");
         

        txtnumeronf.value = dados.numeronf;
        txtdata.value = dados.data;
        txtquantidade.value = dados.quantidade;
        txtvalor.value = dados.valor;
        txtidfornecedor.value = dados.idfornecedor;
        txtidproduto.value = dados.idproduto;
        

        //mostra a dialog para alterar
        modal.show();
    });
}
function listar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "<tr><td colspan=5>Carregando...</td></tr>";

    const txtpesquisa = document.getElementById("txtpesquisa");


    fetch("http://127.0.0.1:3333/compra?pesquisa=" + txtpesquisa.value)
    .then(resp => resp.json())
    .then(dados => mostrar(dados));
}
function mostrar(dados) {
    const lista = document.getElementById("lista");
    //limpa a lista
    lista.innerHTML = "";
    //percorre os dados
    for (var i in dados) {
        let id = dados[i].idcompra;
        lista.innerHTML += "<tr>"
            + "<td>" + id + "</td>"
            + "<td>" + dados[i].numeronf + "</td>"
            + "<td>" + dados[i].data + "</td>"
            + "<td>" + dados[i].quantidade + "</td>"
            + "<td>" + dados[i].valor + "</td>"
            + "<td>" + dados[i].idfornecedor + "</td>"
            + "<td>" + dados[i].idproduto + "</td>"
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
    fetch("http://127.0.0.1:3333/compra/" + idatual,
        {
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
                },
            method: "DELETE", 
            body: ""
        }
    ).then(() => {
        //fecha a dialog
        modalExcluir.hide();
        //recarrega a lista
        listar();
    })
}
function salvar() {

        const txtnumeronf = document.getElementById("txtnumeronf");
        const txtdata = document.getElementById("txtdata");
        const txtquantidade = document.getElementById("txtquantidade");
        const txtvalor = document.getElementById("txtvalor");
        const txtidfornecedor = document.getElementById("txtidfornecedor");
        const txtidproduto = document.getElementById("txtidproduto");       


    const dados = {
        numeronf: txtnumeronf.value,
        data: txtquantidade.value,
        valor: txtvalor.value, 
        quantidade: txtquantidade.value,
        idfornecedor: txtidfornecedor.value, 
        idproduto: txtidproduto.value
    }

    var url;
    var metodo;
    if (idatual<=0) {
        //inserir
        url = "http://127.0.0.1:3333/compra";
        metodo = "POST";
    } else {
        //alterar
        url = "http://127.0.0.1:3333/compra/" + idatual;
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
        //abre a dialog
        modal.hide();
        //recarrega a lista
        listar();
    })

}

listar();