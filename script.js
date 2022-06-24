function calcular(){
    var aalt = document.getElementById('alt')
    var ppeso = document.getElementById('peso')
    var nome = document.getElementById('nome').value
    var alt = Number(aalt.value)
    var peso = Number(ppeso.value)
    var res = document.getElementById('res')
    var imc = ( peso / (alt * alt)).toFixed(1)
    
    if(nome == ''){
        alert('Preencha o campo NOME!')
    } else if (alt == '') {
        alert('Preencha o campo ALTURA!')
    } else if (peso == '') {
        alert('Preencha o campo PESO!')
    } 

       if ( nome == '' || alt == '' || peso == '' ) {
           res.innerHTML = 'Faltou dados, preencha todos os campos!'
       } else {
       
         let resIMC = ''
         
         if (imc < 14) {
            resIMC = 'Com peso de GRILO!'
         } else if (imc < 18.5) {
            resIMC = 'Abaixo do Peso!'
         } else if (imc <= 25) {
            resIMC = 'Com peso ideal!'
         } else if (imc <= 29) {
            resIMC = 'Levemente acima do peso!'
         } else if (imc <= 35) {
            resIMC = 'Com obesidade grau 1!'
         } else if (imc <= 40) {
            resIMC = 'Com obesidade grau 2!'
         } else {
            resIMC = 'Com obesidade grau 3!' 
         }
    
         res.innerHTML = `${nome} seu IMC é ${imc} e você está ${resIMC} `
        }
         


}