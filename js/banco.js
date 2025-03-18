//Obtem o elemento do forms pelo ID

const Form = document.getElementById('cadastroForm');

//Pegando as propriedades dos botões
const btnAlterar = document.getElementById('btnAlterar');
const btnConsultar = document.getElementById('btnConsultar');
const btnCadastrar = document.getElementById('btnCadastrar');
const btnExcluir = document.getElementById('btnExcluir');
const btnVoltar = document.getElementById('btnVoltar');

//Criando uma váriavel global para armazenar os dados
//dos formularios

let cadastroEmEdicao = null;

function inicializarPagina(){
    LimparEposicionarCursor (); // Limpa o Form e posiciona o cursor no primeiro input
    DesabilitaBotoes(); // Desabilita todos os botoes
}
//Função para limpar o formulario 

function LimparEposicionarCursor(){
 if(Form){      //Verifica se o formulario existe

    Form.reset() //Limpa todos os campos no forms
    const primeiroInput = Form.querySelector('input')

    if(primeiroInput){   //verifica se existe o input

    primeiroInput.focus; //Define o foco (curso) no primeiro input

    }
 }
}

//Função para voltar para a página de lOGIN

function voltarParaIndex(){

    LimparEposicionarCursor();

    //Redirecionar para a página index.html

    window.location.href- 'index.html'
};

//Funções para desabilitar os botões de Excluir e Alterar

function desabilitarBotoes(){
    btnAlterar.disable = false;
    btnExcluir.disable = false;

};

//-----------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------
//CRUD(crate, Read, Update, Deleted)

//cria um novo cadastro
function salvarDadosFormulario(event){
    const preventDeFault(); 
    const dadosFormulario = ();  //

    //Verifica os elementos do formulario

    for(let i = 0; i < Form.elements.length; i ++) {
        const elements = form.elements(i);

        //Vereficar se objetos tem todos os dados para ser inicializado 
        //Verefica qual tipo do elemento

        //Verifica qual tipo de elements inicializando 
        if(elements.type =='submit' && elements.type !=='button' && elements.type !=='reset') {

            //Usa um 'switch'  Para usar com diferentes tipos de elementos do form

            switch(elements.type){
                case'checkbox':
                dadosFormulario[elements.name] = elements.checked; //armazena true/false
                break;
                

                case  'radio':
                    if(elements.checked()){ //Armazena o valor apenas se estiver selecinado
                        dadosFormulario[elements.name] = elements.value;

                    }
                    break;
                    case'select-one':
                    dadosFormulario[elements.name] = elements.value; //Armazena os valores adicionados
                    break;
                    case ' password':
                        dadosFormulario[elements.name] = elements.value // armazena a senha 

                        break;

                        default;

                        dadosFormulario[elements.name] = value //armazena o valor

            }
    

        }
    }

    //obtem os cadastros existentes do localStorage(ou uma array vazio se não houver)
 let cadastros = localStorage.getItem('todosOsCadastros');

 //if ternario
 cadastros = cadastros ? JSON.parse(cadastros) : []; //converte JSON para array ou null
   // depois do ? é se for verdadeiro e depois do : se for falso

   //adiciona o novo objeto 'dadosFormulario' ao array 'cadastro'
cadastroEmEdicao.push(dadosFormulario); //push fica no final da matriz

//Salva o array 'cadastros' de volta no localStorage (convertido para JSON)
localStorage.setItem('todosOsCadastros', JSON.stringify(cadastros)); // pegar no formato matriz e converter para Json

alert('Dados salvos co sucesso !!SPFC campeão do brasileirão 💓🤍🖤') //exibe uma linha de texto
LimparEposicionarCursor(); //Limpa todos os campos e posiciona o curso no primeiro input
desabilitarBotoes(); //Desabilita os botões 
cadastroEmEdicao = null;
}


//consulta cadastro pelo nome


