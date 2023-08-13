function comprar(){
    var arroz = "R$5"
    var feijao = "R$10"
    var macarrao = "R$4"

    
    var nomeProduto = Number(document.querySelector('input#txtNomeProduto').value)
    if(nomeProduto==1){
        img.style.display = 'block'
        bts.style.display = 'block'
        res.innerHTML = arroz
       
       
    }else if (nomeProduto==2){
        img2.style.display = 'block'
        res.innerHTML = feijao
        bts.style.display = 'block'
    }
    else if (nomeProduto==3){
        res.innerHTML = macarrao
        bts.style.display = 'block'
    }else{
        res.innerHTML = "Produto não cadastrado"
    }
   
}