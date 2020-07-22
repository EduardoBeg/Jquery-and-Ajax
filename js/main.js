function ConsultaCep(){
    var cep = document.getElementById("cep").value;
    var url = "https://viacep.com.br/ws/" + cep +"/json/"
    console.log(cep);
    console.log(url);
    $.ajax({
        url: url,
        type: "GET",
        success: function(responce){     
            $("#localidade").html(responce.localidade);
            $("#uf").html(responce.uf);
            $("#ibge").html(responce.ibge);
            $(".cep").show();
            $(".progress").hide();
            //document.getElementById("localidade").innerHTML = response.localidade +"-"+ response.uf;
           // alert(response.uf);
        }
    })
}
$(function(){
    $(".cep").hide();
});