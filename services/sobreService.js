var getProjects = function() {
    var projects = [
        {
            id: 1,
            name: 'Ézio Alves',
            image: 'Pessoa.png',
            subject: 'Sobre mim…',
            description: 'Sou estudante de Engenharia de Software na universidade católica de Joinville-SC ”.',
			subject2: 'O que eu faço?',
            description2: 'Eu sou um empreendedor que trabalha no mercado de infoprodutos, ou seja, produtos de informação. Hoje, meu negócio é baseado em treinamentos online sobre Marketing Digital, mais especificamente sobre Facebook Marketing.',
        },

    ];

    return projects;
}

module.exports = {
    getProjects: getProjects
}