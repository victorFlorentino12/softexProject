function comprar(){
    var arroz = "R$5"
    var feijao = "R$10"
    var macarrao = "R$4"

    
    var nomeProduto = Number(document.querySelector('input#txtNomeProduto').value)
    if(nomeProduto==1){
        img.style.display = 'block'
        img2.style.display = 'none'
        img3.style.display = 'none'
        bts.style.display = 'block'
        res.innerHTML = arroz
        
       
    }else if (nomeProduto==2){
        img.style.display = 'none'
        img2.style.display = 'block'
        img3.style.display = 'none'
        res.innerHTML = feijao
        bts.style.display = 'block'
       
    }
    else if (nomeProduto==3){
        img.style.display = 'none'
        img2.style.display = 'none'
        img3.style.display = 'block'
        res.innerHTML = macarrao
        bts.style.display = 'block'
    }else{
        res.innerHTML = "Produto não cadastrado"
    }
   
}
function pagar(){
    opcoesPagamento.style.display = 'block'
    
}
function voltar(){
    bts.style.display = 'none'
    opcoesPagamento.style.display = 'none'
    pix1.style.display = 'none'
    boleto1.style.display = 'none'
    cartao1.style.display = 'none'
}
function pix(){
    pix1.style.display = 'block';
    boleto1.style.display = 'none'
    cartao1.style.display = 'none'
    
}
function boleto(){
    boleto1.style.display = 'block'
    pix1.style.display = 'none';
    cartao1.style.display = 'none'
}
function cartao(){
    cartao1.style.display = 'block'
    pix1.style.display = 'none';
     boleto1.style.display = 'none'
}