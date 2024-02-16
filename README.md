<h1>Olá, seja bem vindo ao HelpDesk!!</h1>
<p>O helpDesk é um projeto dedicado ao controle de chamados para suporte técnico,
  contendo uma tela de login com autenticação por jwt token, cruds de clientes, chamados e técnicos completos para melhor flexibilidade e controle melhor dos chamados que você possui.</p>

<h3>Tecnologias utilizadas</h3>
<p>Angular 13.2.0, Java 17, Spring Boot 3.0.0, Spring Security e JWT Token até o momento...</p>

<h1>Tela de login</h1>
<p>A tela de login é composta pelo card, imagem e os campos de entrada que são o (email e senha) contendo a validação dos campos por meio de formulário reativo., O botão de login só é liberado após o preenchimento dos campos.</p>

![tela-login](https://github.com/2002Bruno/HelpDesk/assets/81988790/3f1f5939-8689-400c-9aac-3251fe9cb8a2)

<h3>Mensagens de Login</h3>

<p>Ao informar as credenciais, se estiver tudo correto aparecerá a mensagem de sucesso e o login será efetuato, caso contrário aparecerá a mensagem de erro.</p>

![successful-login](https://github.com/2002Bruno/HelpDesk/assets/81988790/723f77e5-85de-4e63-afd3-fa3658b25b1b) 
![unsuccessful](https://github.com/2002Bruno/HelpDesk/assets/81988790/ca4157ff-333d-4bc8-877e-3afaca472fb8)

<h1>Dashboard</h1>

<p>Ao realizar o login, será diretamente direcionado a tela de dashboard, onde contem algumas informações básicas sobre a finalidade do projeto e as tecnologias que foram utilizadas.</p>

![dashboard](https://github.com/2002Bruno/HelpDesk/assets/81988790/1589c53d-48f5-445e-9196-8950fbe46d8a)

<h3>Sidebar</h3>

<p>Para acessar a sidebar é só clicar no botão esquerdo superior, você terá acesso aos outros CRUDS como o de técnico, cliente, chamado entre outras funcionalidades como o GITHUB que te leva ao meu perfil do github e o logout que volta para a tela de login.</p>

![sidebar](https://github.com/2002Bruno/HelpDesk/assets/81988790/b071c3af-6d0b-4a36-baca-3fcf909536b8)

<h3>Logout</h3>

<p>Ao clicar em logout você será direcionado para a tela de login novamente e será disparado uma mensagem informando que o logout foi feito.</p>

![logout-message](https://github.com/2002Bruno/HelpDesk/assets/81988790/becb2b47-f526-431a-9cdb-fe8f4f7ee698)

<h1>Técnicos</h1>

<p>Dando seguimento pela sidebar, se clicarmos nos técnicos seremos direcionados diretamente para a listagem de técnicos, onde temos um botão para novo cadastro, filtro de pesquisa que funciona ao pesquisar o nome, cpf ou o email do técnico e os botões de editar e deletar.</p>

![lista-tecnicos](https://github.com/2002Bruno/HelpDesk/assets/81988790/f52901ff-3ed2-4026-9428-008244643878)

<h1>Tecnico Create</h1>

<p>Ao clicar no botão de novo técnico, você é direcionado para a tela de cadastro de um técnico, nela contemos os campos de entrada (nome, cpf, email e senha) todos validados e obrigatórios com formulário reativo, tambêm temos os dois botões no final que são o de salvar que só é liberado quando o formulário estiver preenchido corretamente e o de cancelar que pode ser clicado a qualquer momento cancelando assim o cadastro do técnico.</p>

![cadastrar-tecnico](https://github.com/2002Bruno/HelpDesk/assets/81988790/2bc15184-74a9-4afe-a53d-d7b4c8081aba)

<h3>Mensagens do Cadastro de técnico</h3>

<p>Ao salvar o técnico será apresentada a mensagem de sucesso e você será direcionado para a tela de listar os técnicos com ela já atualizada com o novo técnico criado, caso contrário será informada uma mensagem de erro.</p>

![cadastro-tecnico-realizado](https://github.com/2002Bruno/HelpDesk/assets/81988790/60296100-a895-437b-acb2-adc7e24a0390) 
![unsuccessful-cadastro-tecnico](https://github.com/2002Bruno/HelpDesk/assets/81988790/7aa77de3-1d58-4481-9467-e9f90a7d5e03)

<h1>Tecnico Update</h1>

<p>Ao clicar no icone de editar você será direcionado para a tela de edição do técnico, todos os campos de entrada já vem preenchidos com os dados do técnico selecionado, os campos de nome, CPF e senha podem ser alterados já o de email não pois a implementação do refresh token do JWT Token ainda não foi feita, tempos o botão de atualizar que salvará as atualizações nos dados que você alterou e o de cancelar que retorna para a tela de listagem novamente cancelando a alteração do formulário.</p>

![tecnico-update](https://github.com/2002Bruno/HelpDesk/assets/81988790/c6877f5a-7c36-4c62-93b6-02aafff54256)

<h3>Mensagens da Atualização de técnico</h3>

<p>Ao atualizar o técnico será apresentada a mensagem de sucesso e você será direcionado para a tela de listar os técnicos com ela já atualizada com os dados do técnico atualizados, caso contrário será informada uma mensagem de erro.</p>

![successful-tecnico-update](https://github.com/2002Bruno/HelpDesk/assets/81988790/bfca6aa8-343d-4242-bb5a-142535545382)
![unsuccessful-update-tecnico](https://github.com/2002Bruno/HelpDesk/assets/81988790/f2e4f286-5a80-4ea6-a4d4-3c89fcd3ea06)

<h1>Tecnico Delete</h1>

<p>Ao clicar no icone de deletar, você será direcionado para a tela de deletar o técnico que funciona meio que como uma visualização tambem, todos os campos vem preenchidos e bloqueados com as informações do técnico e temos os botões de deletar que só apagará o técnico se ele não tiver chamados vinculados a ele e o cancelar que retorna para a tela de listagem.</p>

![delete-tecnico](https://github.com/2002Bruno/HelpDesk/assets/81988790/0783c395-d36d-4112-9a41-08e32dd3532c)

<h3>Mensagens de Deletar o técnico</h3>

<p>Ao clicar em deletar o técnico ere irá verificar se o técnico tem algum chamado vinculado a ele, se tiver apresentará uma mensagem de erro, caso contrário irá apresentar a mensagem de sucesso e o técnico será removido do banco de dados.</p>

![unsuccessful-delete-tecnico](https://github.com/2002Bruno/HelpDesk/assets/81988790/8fc7cd37-12ca-4660-821a-6b40d9d4c9c0)
![susccessful-delete-tecnico](https://github.com/2002Bruno/HelpDesk/assets/81988790/d7d275f2-50d2-46e4-8e6a-83bce8111a33)

<h1>Clientes</h1>

<p>Passando novamente pela sidebar e acessando o menu de clientes seremos direcionados para a tela de listagem dos clientes onde temos um botão para adicionar novos clientes, filtro de pesquisa por nome, cpf ou email e os botões de editar e deletar.</p>

![list-clientes](https://github.com/2002Bruno/HelpDesk/assets/81988790/30cbb477-15c0-489d-9d52-ae0290ab4192)

<h1>Cliente Create</h1>

<p>Ao clicar no botão de novo cliente, será direcionado para a tela de cadastro de cliente que é bem similar a de técnico, lá temos os campos de entrada de nome, cpf, email, senha e os dois botões que são o de salvar e o de cancelar. O botão de salvar só é liberado quando o formulário estiver totalmente preenchido e com os campos vallidados e o de cancelar pode ser acessado a qualquer momento cancelando o cadastro e retornando para a tela de listagem novamente.</p>

![cliente-create](https://github.com/2002Bruno/HelpDesk/assets/81988790/c777fc6e-d0e4-4c4a-ac79-190a9c178b52)

<h3>Mensagens de Cadastro de Técnico</h3>

<p>Ao preencher todos os campos do formulário corretamente e clicar em salvar você receberá uma mensagem de sucesso, caso contrário receberá uma mensagem de erro informando que algum dos campos está inválido.</p>

![susccessful-cliente-create](https://github.com/2002Bruno/HelpDesk/assets/81988790/fc45311e-7485-4694-895d-c52e31618985)
![unsusccessful-cliente-create](https://github.com/2002Bruno/HelpDesk/assets/81988790/b2f20e29-cbf9-4b75-b6a3-18caeb235528)

<h1>Cliente Update</h1>

<p>Passando pelo icone de editar você será direcionado para a tela de atualização dos dados do cliente, lá temos os campos de entrada de nome, cpf, email e senha, todos são editáveis eceto o de email que está passando por uma atualização para implementação do refresh token, temos os dois botões que são o de atualizar que só é habilitado quando o formulário estiver totalmente preenchido e o de cancelar que pode ser utilizado a qualquer momento retornando para a tela de listagem e cancelando o cadastro do cliente.</p>

![cliente-update](https://github.com/2002Bruno/HelpDesk/assets/81988790/c97a6b42-6be1-4ce8-b784-2a888b3e66f6)

<h2>Mensagens de Atualização do Técnico</h2>

<p>Ao clicar em atualizar será feita a atualização~dos dados e você receberá uma mensagem de sucesso, caso contrário você receberá uma mensagem de erro.</p>

![susccessful-update-cliente](https://github.com/2002Bruno/HelpDesk/assets/81988790/c2e406d2-4adb-4333-9bbf-03fefc1dfd53)
![unsusccessful-update-cliente](https://github.com/2002Bruno/HelpDesk/assets/81988790/5c465f58-205a-4775-9de0-a073e8f0cd10)

<h1>Cliente Delete</h1>

<p>Ao clicar na lixeira você será direcionado para uma tela de deletar que funciona meio que como uma tela de visualização onde você ve os dados do cliente com os campos totalmente bloqueados e os dois botÔes sendo eles o de deletar que fará uma verificação para saber se o cliente tem chamados em seu nome e o botão de cancelar que retorna para a tela de listagem cancelando a exclusão do cliente.</p>

![cliente-delete](https://github.com/2002Bruno/HelpDesk/assets/81988790/24650c3c-a41b-448d-8f4b-bc6b58f7b2c4)

<h2>Mensagens de Deletar Cliente</h2>

<p>Ao clicar no botão de deletar ele irá fazer uma verificação para saber se o cliente tem chamados em seu nome, se ele tiver não será permitido a exclusão e irá apresentar a mensagem de erro, caso seja permitido ele apresentará a mensagem de sucesso.</p>

![unsuccessful-delete-cliente](https://github.com/2002Bruno/HelpDesk/assets/81988790/23237d93-e089-4334-b07b-5026cc4e5d6c)
![suscessful-cliente-delete](https://github.com/2002Bruno/HelpDesk/assets/81988790/5e310599-7227-4ac6-97a9-b107d41cfb28)
