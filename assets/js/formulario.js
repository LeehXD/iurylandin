function getValue(id) {
    let value = $(`#${id}`).val();
    if (!value || value == '')
        value = "~Não informado~"
    return value;
}

function dataAtualFormatada() {
    var data = new Date(),
        dia = data.getDate().toString(),
        diaF = (dia.length == 1) ? '0' + dia : dia,
        mes = (data.getMonth() + 1).toString(),
        mesF = (mes.length == 1) ? '0' + mes : mes,
        anoF = data.getFullYear();
    return diaF + "/" + mesF + "/" + anoF;
}

function getServicos() {
    const array = []
    const checkboxes = document.querySelectorAll('input[type=checkbox]:checked')
    for (let i = 0; i < checkboxes.length; i++) {
        array.push(checkboxes[i].value)
    }

    return array.join();
}


// Atualizado para enviar msg no zap!
function sendEmail() {
    const text = `Olá, me chamo _${getValue('name')}_\n Esse é meu contato ${getValue('whatsapp')} e meu e-mail ${getValue('email')}, eu gostaria de saber mais sobre os serviços: ${getServicos()}`
    window.open(`https://wa.me/556381202287/?text=${text}`, '_blank')
    return;
}