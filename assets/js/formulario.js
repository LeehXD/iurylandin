function getValue(id) {
    var value = $(`#${id}`).val();
    if (!value || value == '')
        value = "<i style='color: orange;'>Não informado</i>"
    return "<br> <b>" + value + "</b> <hr>";
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
    var array = []
    var checkboxes = document.querySelectorAll('input[type=checkbox]:checked')

    for (let i = 0; i < checkboxes.length; i++) {
        array.push(checkboxes[i].value)
    }

    return array.toString()
}

function getMsg() {
    var dataAtual = dataAtualFormatada();

    var msg = `<h3>Novo Lead - Site Landin.</h3> <strong>Respostas do Formulário:</strong> <br><br>
Nome: ${getValue('name')}<br>
E-mail: ${getValue('email')}<br>
Celular/WhatsAppp: ${getValue('whatsapp')}<br>
<h4>Serviços Escolhidos</h4>
${getServicos()}

<p>Formulário preenchido em: ${dataAtual}</p>
<hr>
`

    return msg;
}


function sendEmail() {
    $.LoadingOverlay("show");
    var to = "iurylandin@gmail.com";
    var subject = "Novo Lead - Site Landin - " + dataAtualFormatada();
    var msg = getMsg();
    $.ajax({
        url: "https://agenciapremiere.com.br/sendcontact.php",
        type: "post",
        data: `to=${to}&msg=${msg}&subject=${subject}`,
        success: function(response) {
            $.LoadingOverlay("hide");
            swal("Sucesso!", "O Formulário foi enviado com sucesso! Em breve entraremos em contato com você", "success");
            return false;
        },
        error: function(jqXHR, textStatus, errorThrown) {
            $.LoadingOverlay("hide");
            swal("Erro!", "Ocorreu um erro ao enviar seu formulário! Tente novamente", "error");
            console.log(textStatus, errorThrown);
        }
    });


    return false;
}