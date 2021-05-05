function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = document.getElementById('txtano')
    var res = document.querySelector('div#res')
    if(fAno.value.length == 0 || fAno.value > ano) {
        window.alert('[ERRO] Verifique os dados e tente novamente')
    } else {
        var fsex = document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        //res.innerHTML = `Indade calculada: ${idade}`
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fsex[0].checked) {
            genero = 'homem'
            if(idade >= 0 && idade < 4) {
                //Bêbe
                img.setAttribute('src', 'img/baby-boy.png')
            } else if (idade >= 5 && idade < 11) {
                //Criança
                img.setAttribute('src', 'img/child-boy.png')
            } else if (idade >= 11 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/young-boy.png')
            } else if (idade >= 21 && idade < 40) {
                //Adulto
                img.setAttribute('src', 'img/homem-adulto.png')
            } else if (idade >= 40 && idade < 60) {
                //Maduro
                img.setAttribute('src', 'img/homem-maduro.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/elder-man.png')
            }
        } else if (fsex[1].checked) {
            genero = 'mulher'
            if(idade >= 0 && idade < 4) {
                //Bêbe
                img.setAttribute('src', 'img/baby-girl.png')
            } else if (idade >= 5 && idade < 11) {
                //Criança
                img.setAttribute('src', 'img/child-girl.png')
            } else if (idade >= 11 && idade < 21) {
                //Jovem
                img.setAttribute('src', 'img/young-girl.png')
            } else if (idade >= 21 && idade < 40) {
                //Adulto
                img.setAttribute('src', 'img/mulher-adulta.png')
            } else if (idade >= 40 && idade < 60) {
                //Maduro
                img.setAttribute('src', 'img/mulher-madura.png')
            } else {
                //Idoso
                img.setAttribute('src', 'img/elder-woman.png')
            }
        }
        res.style.textAlign = 'center'
        res.innerHTML = ` Detectamos ${genero} com ${idade} anos`
        res.appendChild(img)
    }
}