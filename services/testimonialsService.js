var getTestimonials = function() {
    var testimonials = [{
            id: 1,
            nome: 'José Carlos',
            company: 'Católica-SC',
            title: 'Tecnico em informática',
            testimony: 'Eu gosto muito de Javascript'
        },
        {
            id: 2,
            nome: 'Rafaela Oliveira',
            company: 'Católica-SC',
            title: 'Secretária',
            testimony: 'Eu gosto de desenvolver planilhas no Excel'
        }
    ];
    return testimonials;
}

module.exports = {
    getTestimonials: getTestimonials
}