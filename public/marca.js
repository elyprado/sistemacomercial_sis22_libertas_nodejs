idatual = 0;

const modal = new bootstrap.Modal(document.getElementById('modalAlterar'));

const modalExcluir = new bootstrap.Modal(document.getElementById('modalExcluir'));

function novo() {
    idatual = -1;
    const txtnomemarca = document.getElementById("txtnomemarca");
    const txtlogo = document.getElementById("txtlogo");
    const txtpais = document.getElementById("txtpais");
    const txttelefone = document.getElementById("txttelefone");

    //limpa os campo
    txtnomemarca.value = "";
    txtlogo.value = "";
    txtpais.value = "";
    txttelefone.value = "";
 
    //abre a dialog
    modal.show();
}
function alterar(id) {
    idatual = id;
    //carregar os dados do id passado por parametro
    fetch("http://127.0.0.1:3333/marca/" + id)
    .then(resp => resp.json())
    .then(dados => {
        //preenche os inputs
        const txtnomemarca = document.getElementById("txtnomemarca");
        const txtlogo = document.getElementById("txtlogo");
        const txtpais = document.getElementById("txtpais");
        const txttelefone = document.getElementById("txttelefone");


        txtnomemarca.value = dados.txtnomemarca;
        txtlogo.value = dados.logo;
        txtpais.value = dados.pais;
        txttelefone.value = dados.telefone;       

        //mostra a dialog para alterar
        modal.show();
    });
}
function listar() {
    const lista = document.getElementById("lista");
    lista.innerHTML = "<tr><td colspan=5>Carregando...</td></tr>";

    const txtpesquisa = document.getElementById("txtpesquisa");


    fetch("http://127.0.0.1:3333/marca?pesquisa=" + txtpesquisa.value)
    .then(resp => resp.json())
    .then(dados => mostrar(dados));
}
function mostrar(dados) {
    const lista = document.getElementById("lista");
    //limpa a lista
    lista.innerHTML = "";
    //percorre os dados
    for (var i in dados) {
        let id = dados[i].idmarca;
        lista.innerHTML += "<tr>"
            + "<td>" + id + "</td>"
            + "<td>" + dados[i].nomemarca + "</td>"
            + "<td>" + dados[i].logo + "</td>"
            + "<td>" + dados[i].pais + "</td>"
            + "<td>" + dados[i].telefone + "</td>"
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
    fetch("http://127.0.0.1:3333/marca/" + idatual,
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
        const txtnomemarca = document.getElementById("txtnomemarca");
        const txtlogo = document.getElementById("txtlogo");
        const txtpais = document.getElementById("txtpais");
        const txttelefone = document.getElementById("txttelefone");

    const dados = {
        nomemarca: txtnomemarca.value,
        logo: txtlogo.value,
        pais: txtpais.value, 
        telefone: txttelefone.value,
    }

    var url;
    var metodo;
    if (idatual<=0) {
        //inserir
        url = "http://127.0.0.1:3333/marca";
        metodo = "POST";
    } else {
        //alterar
        url = "http://127.0.0.1:3333/marca/" + idatual;
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