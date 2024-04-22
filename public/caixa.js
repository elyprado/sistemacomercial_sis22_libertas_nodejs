idatual = 0;

const modal = new bootstrap.Modal(
    document.getElementById('modalAlterar'));

const modalExcluir = new bootstrap.Modal(
    document.getElementById('modalExcluir'));

function novo() {
    idatual = -1;
    const txtdata = document.getElementById("txtdata");
    const txtdescricao = document.getElementById("txtdescricao");
    const txtvalor = document.getElementById("txtvalor");
    const txtdebitocred = document.getElementById("txtdebitocred");


    //limpa os campo

    txtdata.value = '';
    txtdescricao.value = '';
    txtvalor.value = '';
    txtdebitocred.value = '';
    //abre a dialog
    modal.show();
}
function alterar(id) {
    idatual = id;

    fetch("http://127.0.0.1:3333/cliente/" + id)
        .then(resp => resp.json())
        .then(dados => {


            const txtdata = document.getElementById("txtdata");
            const txtdescricao = document.getElementById("txtdescricao");
            const txtvalor = document.getElementById("txtvalor");
            const txtdebitocred = document.getElementById("txtdebitocred");


            txtdata.value = dados.data;
            txtdescricao.value = dados.descricao;
            txtvalor.value = dados.valor;
            txtdebitocred.value = dados.debitocred;
            modal.show();
        });
}
function listar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "<tr><td colspan=5>Carregando...</td></tr>";

    const txtpesquisa = document.getElementById("txtpesquisa");


    fetch("http://127.0.0.1:3333/caixa?pesquisa=" + txtpesquisa.value)
        .then(resp => resp.json())
        .then(dados => mostrar(dados));
}
function mostrar(dados) {
    const lista = document.getElementById("lista");
    lista.innerHTML = "";

    for (var i in dados) {
        let id = dados[i].idcaixa;
        lista.innerHTML += "<tr>"
            + "<td>" + id + "</td>"
            + "<td>" + dados[i].data + "</td>"
            + "<td>" + dados[i].descricao + "</td>"
            + "<td>" + dados[i].valor + "</td>"
            + "<td>" + dados[i].debitocred + "</td>"

            + "<td>"
            + "<button type='button' class='btn btn-primary' "
            + " onclick='alterar(" + id + ")'>Alterar</button>"
            + "<button type='button' class='btn btn-danger' "
            + " onclick='excluir(" + id + ")'>Excluir</button>"
            + "</td>"
            + "</tr>";
    }
}
function excluir(id) {
    idatual = id;
    modalExcluir.show();
}
function excluirSim() {
    fetch("http://127.0.0.1:3333/caixa/" + idatual,
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
    const txtdescricao = document.getElementById("txtdescricao");
    const txtvalor = document.getElementById("txtvalor");
    const txtdebitocred = document.getElementById("txtdebitocred");


    const dados = {
        data: txtdata.value,
        descricao: txtdescricao.value,
        valor: txtvalor.value,
        debitocred: txtdebitocred.value,

    }
    var url;
    var metodo;
    if (idatual <= 0) {
        url = "http://127.0.0.1:3333/caixa";
        metodo = "POST";
    } else {
        url = "http://127.0.0.1:3333/caixa/" + idatual;
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