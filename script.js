/*Botões da barra de navegação*/
var cadastrar = document.querySelector("#cadastrar");
var listar = document.querySelector("#listar");
var lixeira = document.querySelector("#lixeira");

/*Páginas de cadastro, lista e lixeira, respectivamente*/
var cadastro = document.querySelector("#cadastro");
var listagem = document.querySelector("#listagem");
var div_lixeira = document.querySelector("#div_lixeira");

/*Barra que exibe os valores de cada aluno*/
var collapsiveHeader = document.querySelector(".collapsive-header");
var collapsiveBody = document.querySelector(".collapsive-body");

/*Botão de cadastro*/
var submit = document.querySelector("#submit");

/*valores dos inputs*/
var nome = document.querySelector("#nome");
var idade = document.querySelector("#idade");
var curso = document.querySelector("#curso");
var cep = document.querySelector("#cep");
var manha = document.querySelector("#manha");
var tarde = document.querySelector("#tarde");
var noite = document.querySelector("#noite");
var sim = document.querySelector("#sim");
var nao = document.querySelector("#nao");
var turno = document.querySelector(".turno");
var matriculado = document.querySelector(".mat");

var lista_aluno = document.querySelector("#lista_aluno");

var resultadoTurno;
var resultadoMat;

/*JSON com a lista dos alunos:*/
var alunos = {
    'alunos':[
        {'nome': 'Stephy Blerry', 'idade': 18, 'curso': 'Téc. Informática',
            'logradouro': 'Vila do Nunca',
            'bairro': 'São José',
            'localidade': 'Ali',
            'UF': 'MG',
            'turno': 'Noite', 'matriculado': 'Sim'},
        {'nome': 'Edmano Legável', 'idade': 19, 'curso': 'Téc. Informática',
            'logradouro': 'Vila Inexistente',
            'bairro': 'São Raimundo',
            'localidade': 'Lá',
            'UF': 'MG',
            'turno': 'Noite', 'matriculado': 'Sim'},
        {'nome': 'Paul McCartney', 'idade': 82, 'curso': 'Música',
            'logradouro': 'Liverpool',
            'bairro': 'Boa Morte',
            'localidade': 'Aqui',
            'UF': 'MG',
            'turno': 'Tarde', 'matriculado': 'Não'},
        {'nome': 'Ricardo Melo', 'idade': 20, 'curso': 'TSI',
            'logradouro': 'Praça do Globo',
            'bairro': 'Boa Viagem',
            'localidade': 'N 22',
            'UF': 'MG',
            'turno': 'Tarde', 'matriculado': 'Sim'},

    ]
};

/*JSON com a lixeira*/
var excluidos = {
    'alunos':[
        {'nome': 'Jacinto Edgar', 'idade': 18, 'curso': 'Téc. Informática',
            'logradouro': 'Vila do Nunca',
            'bairro': 'São José',
            'localidade': 'Ali',
            'UF': 'MG',
            'turno': 'Noite', 'matriculado': 'Sim'},
        {'nome': 'Eliézer Massaro', 'idade': 21, 'curso': 'Téc. Informática',
            'logradouro': 'Vila do Chaves',
            'bairro': 'Bairro Quadrado',
            'localidade': 'Acolá',
            'UF': 'RJ',
            'turno': 'Noite', 'matriculado': 'Não'},
    ]
};

/*Define como padrão a div cadastrar e esconde a listagem e a lixeira*/
cadastrar.style.backgroundColor = " rgb(9, 0, 120)";
listagem.style.display = "none";
div_lixeira.style.display = "none";

/*Para ir para a página de cadastro*/
cadastrar.onclick = function(){
    cadastro.style.display = "block";
    listagem.style.display = "none";
    div_lixeira.style.display = "none";

    cadastrar.style.backgroundColor = "rgb(9, 0, 120)";
    listar.style.backgroundColor = " rgb(9, 0, 184)";
    lixeira.style.backgroundColor = " rgb(9, 0, 184)";
}

/*Para ir para a página de listagem*/
listar.onclick = function(){
    cadastro.style.display = "none";
    div_lixeira.style.display = "none";
    listagem.style.display = "block";
    cadastrar.style.backgroundColor = " rgb(9, 0, 184)";
    lixeira.style.backgroundColor = " rgb(9, 0, 184)";
    listar.style.backgroundColor = "rgb(9, 0, 120)";
}

/*Para ir para a lixeira*/
lixeira.onclick = function(){
    cadastro.style.display = "none";
    listagem.style.display = "none";
    div_lixeira.style.display = "block";
    cadastrar.style.backgroundColor = " rgb(9, 0, 184)";
    listar.style.backgroundColor = " rgb(9, 0, 184)";
    lixeira.style.backgroundColor = "rgb(9, 0, 120)";
}

/*Enviar o cadastro para o JSON*/
submit.onclick = function submit(){

    /*Verificar se cadastro é válido*/
    if(nome.value == "" || idade.value == "" || curso.value == "" || cep.value == ""){
        alert("Todos os campos devem ser preenchidos");
    }
    else if(nome.value.length < 3){
        alert("O nome deve possuir mais de 3 caractéries");
    }
    else if(parseInt(idade.value) < 0 || parseInt(idade.value) > 150){
        alert("Idade deve ser maior que 0 anos e menor que 150");
    }
    else if(curso.value.length < 3){
        alert("'Curso' deve ter mais que 3 caractéries");
    }
    else if(cep.value.length != 8){
        alert("Cep inválido");
    }
    else if(!manha.checked && !tarde.checked && !noite.checked){
        alert("Deve marcar ao menos uma opção do turno!");
    }
    else if(!sim.checked && !nao.checked){
        alert("Deve marcar ao menos uma opção da matricula!");
    }
    else{
        alert("cadastrado!!!")

        if(manha.checked && sim.checked){
            resultadoTurno = "Manhã";
            resultadoMat = "Sim";
        }
        else if(manha.checked && nao.checked){
            resultadoTurno = "Manhã";
            resultadoMat == "Não";
        }
        else if(tarde.checked && sim.checked){
            resultadoTurno = "Tarde";
            resultadoMat = "Sim";
        }
        else if(tarde.checked && nao.checked){
            resultadoTurno = "Tarde";
            resultadoMat = "Não";
        }
        else if(noite.checked && sim.checked){
            resultadoTurno = "Noite";
            resultadoMat = "Sim";
        }
        else if(noite.checked && nao.checked){
            resultadoTurno = "Noite";
            resultadoMat = "Não";
        }

        /*API para pegar o CEP*/
        var text = cep.value;

        var req = new XMLHttpRequest();
        req.onloadend = function(){
            resp = req.responseText;
            resp_obj = JSON.parse(resp);
            alert('O CEP ' + resp_obj.cep + ' pertence à rua ' +
            resp_obj.logradouro + ' do bairro ' + resp_obj.bairro + ', ' +
            resp_obj.localidade + '/' + resp_obj.uf);

            alunos['alunos'].push({'nome': nome.value, 'idade': idade.value, 'curso': curso.value,
                'logradouro': resp_obj.logradouro, 'bairro': resp_obj.bairro, 'localidade': resp_obj.localidade, 'UF': resp_obj.uf,  'turno':  resultadoTurno,  'matriculado': resultadoMat,
            });


            nome.value = '';
            idade.value = '';
            curso.value = '';
            cep.value = '';
            !turno.checked;
            !matriculado.checked;
        }
        req.open('GET', 'https://viacep.com.br/ws/' + text + '/json');
        req.send(null);
    }
}
var aux; //*Variável auxiliar para coletar atributos e mandar para o innerHTML

/* Para exibir todos os alunos na listagem */
var lista_aluno = document.getElementById("lista_aluno");
var Mostrar1 = document.getElementById("Mostrar1");
var Ocultar1 = document.getElementById("Ocultar1");

Mostrar1.onclick = function(){
    lista_aluno.style.display = "block";
    Ocultar1.style.display = "block";
    Mostrar1.style.display = "none";

    lista_aluno.innerHTML = '';
    for (var i = 0; i < alunos['alunos'].length; i++){
        aux =
        '<ul class="collapsible">' +
        '<li>' +
        '<div class="collapsible-header"><i class="material-icons">account_circle</i>' +
        '<p style="color: black">' + alunos['alunos'][i]['nome'] + '</p>' + '</div>' +
        '<div class="collapsible-body"><p>' +
        '<p style="color: black">' + "IDADE:  " + alunos['alunos'][i]['idade'] + " Anos" +  '</p>' +
        '<p style="color: black">' + "CURSO:  " + alunos['alunos'][i]['curso'] + '<br>' + '</p>' +
        '<p style="color: black">' + "LOGRADOURO:  " + alunos['alunos'][i]['logradouro'] + '<br>' + '</p>' +
        '<p style="color: black">' + "BAIRRO:  " + alunos['alunos'][i]['bairro'] + '<br>' + '</p>' +
        '<p style="color: black">' + "LOCALIDADE:  " + alunos['alunos'][i]['localidade'] + '<br>' + '</p>' +
        '<p style="color: black">' + "UF:  " + alunos['alunos'][i]['UF'] + '<br>' + '</p>' +
        '<p style="color: black">' + "TURNO:  " + alunos['alunos'][i]['turno'] + '<br>' + '</p>' +
        '<p style="color: black">' + "MATRICULADO:  " + alunos['alunos'][i]['matriculado'] + '<br>' + '</p>' +
        '<button onclick="editar(' + i + ')">Editar</button>' + '<button onclick="exclusao(' + i + ')">Excluir</button>' +
        '</p></div>' +
        '</li>'
        lista_aluno.innerHTML = lista_aluno.innerHTML + aux;
        //Percorre cada posição do valor "alunos" do JSON e mostra dentro dos collapsives.
    }
    $(document).ready(function(){
        $('.collapsible').collapsible();
      });
}

Ocultar1.style.display = "none";
Ocultar1.onclick = function(){
    Mostrar1.style.display = "block";
    Ocultar1.style.display = "none";
    lista_aluno.style.display = "none";
}

/*Para exibir os alunos excluídos */
var lista_lixeira = document.getElementById("lista_lixeira");

Mostrar2.onclick = function(){
    lista_lixeira.style.display = "block";
    Ocultar2.style.display = "flex";
    Mostrar2.style.display = "none";

    lista_lixeira.innerHTML = "";

    for (var i = 0; i < excluidos['alunos'].length; i++){
        aux =
        '<ul class="collapsible">' +
        '<li>' +
        '<div class="collapsible-header"><i class="material-icons">account_circle</i>' +
        '<p style="color: black">' + excluidos['alunos'][i]['nome'] + '</p>' + '</div>' +
        '<div class="collapsible-body"><p>' +
        '<p style="color: black">' + "IDADE:  " + excluidos['alunos'][i]['idade'] + " Anos" +  '</p>' +
        '<p style="color: black">' + "CURSO:  " + excluidos['alunos'][i]['curso'] + '<br>' + '</p>' +
        '<p style="color: black">' + "LOGRADOURO:  " + excluidos['alunos'][i]['logradouro'] + '<br>' + '</p>' +
        '<p style="color: black">' + "BAIRRO:  " + excluidos['alunos'][i]['bairro'] + '<br>' + '</p>' +
        '<p style="color: black">' + "LOCALIDADE:  " + excluidos['alunos'][i]['localidade'] + '<br>' + '</p>' +
        '<p style="color: black">' + "UF:  " + excluidos['alunos'][i]['UF'] + '<br>' + '</p>' +
        '<p style="color: black">' + "TURNO:  " + excluidos['alunos'][i]['turno'] + '<br>' + '</p>' +
        '<p style="color: black">' + "MATRICULADO:  " + excluidos['alunos'][i]['matriculado'] + '<br>' + '</p>' +
        '<button onclick="restaurar(' + i + ')">Restaurar</button>'  +
        '</p></div>' +
        '</li>'
        lista_lixeira.innerHTML = lista_lixeira.innerHTML + aux;
        //Percorre cada posição do valor "excluidos" do JSON e mostra dentro dos collapsives.
    }
    $(document).ready(function(){
        $('.collapsible').collapsible();
      });
}

Ocultar2.style.display = "none";
Ocultar2.onclick = function(){
    Mostrar2.style.display = "flex";
    Ocultar2.style.display = "none";
    lista_lixeira.style.display = "none";
}

function exclusao (index){
    if (confirm("Realmente deseja excluir esse aluno?") == true){
        excluidos['alunos'].push({'nome': alunos['alunos'][index]['nome'], 'idade': alunos['alunos'][index]['idade'],
            'curso': alunos['alunos'][index]['curso'], 'logradouro': alunos['alunos'][index]['logradouro'],
            'bairro': alunos['alunos'][index]['bairro'], 'localidade': alunos['alunos'][index]['localidade'],
            'UF': alunos['alunos'][index]['UF'],  'turno':alunos['alunos'][index]['turno'],
            'matriculado': alunos['alunos'][index]['matriculado'],
        });
        alunos.alunos.splice(index, 1);
    }
}

function editar(index){
    if(confirm("Deseja editar esse aluno?") == true){

        cadastro.style.display = "block";
        listagem.style.display = "none";
        div_lixeira.style.display = "none";

        cadastrar.style.backgroundColor = "rgb(9, 0, 120)";
        listar.style.backgroundColor = " rgb(9, 0, 184)";
        lixeira.style.backgroundColor = " rgb(9, 0, 184)";

        nome.value = alunos['alunos'][index].nome;
        idade.value = alunos['alunos'][index].idade;
        curso.value = alunos['alunos'][index].curso;
        cep.value = "00000000";
        if(alunos['alunos'][index].matriculado == "Sim"){
            sim.checked = true;
        }
        else{
            nao.checked = true;
        }

        if(alunos['alunos'][index].turno == "Manhã"){
            manha.checked = true;
        }
        else if(alunos['alunos'][index].turno == "Tarde"){
            tarde.checked = true;
        }
        else{
            noite.checked = true;
        }
        alunos.alunos.splice(index, 1);
    }
}

function restaurar(index){
    if (confirm("Realmente deseja restaurar esse aluno?") == true){
        alunos['alunos'].push({'nome': excluidos['alunos'][index]['nome'], 'idade': excluidos['alunos'][index]['idade'],
            'curso': excluidos['alunos'][index]['curso'], 'logradouro': excluidos['alunos'][index]['logradouro'],
            'bairro': excluidos['alunos'][index]['bairro'], 'localidade': excluidos['alunos'][index]['localidade'],
            'UF': excluidos['alunos'][index]['UF'],  'turno': excluidos['alunos'][index]['turno'],
            'matriculado': excluidos['alunos'][index]['matriculado'],
        });
        excluidos.alunos.splice(index, 1);
    }

}
esvaziar.onclick = function(){
    if (confirm("Realmente deseja esvaziar a lixeira?") == true){
        for(var i=0; i<excluidos['alunos'].length; i++){
            excluidos['alunos'].splice(i);
        }
    }
}
