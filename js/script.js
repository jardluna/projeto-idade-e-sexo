function verificar() {
    var data = new Date()
    var ano = data.getFullYear()
    var fAno = window.document.getElementById('txtano')
    var res = window.document.getElementById('res')

    if (fAno.value.length < 4 || Number(fAno.value) > ano) {
        window.alert('Verifique os dados, e tente novamente')
    } else {
        var fSex = window.document.getElementsByName('radsex')
        var idade = ano - Number(fAno.value)
        var genero = ''
        var img = document.createElement('img')
        img.setAttribute('id', 'foto')
        if (fSex[0].checked) {
            genero = 'homem'
            res.style.color = 'dodgerblue'
            res.style.fontWeight = 'bold'
            document.body.style.backgroundColor = 'dodgerblue'
            if (idade >= 0 && idade < 5) {
                //BEBE
                res.innerHTML = `Detectamos um bebê com ${idade} anos`
                img.setAttribute('src', '../images/bebeH.png')
            } else if (idade < 12) {
                //CRIANÇA
                res.innerHTML = `Detectamos uma criança com ${idade} anos`
                img.setAttribute('src', '../images/criancaH.png')
            } else if (idade < 18) {
                //ADOLESCENTE
                res.innerHTML = `Detectamos um adolescente com ${idade} anos`
                img.setAttribute('src', '../images/adolescenteH.png')
            } else if (idade < 60) {
                //ADULTO
                res.innerHTML = `Detectamos um adulto com ${idade} anos`
                img.setAttribute('src', '../images/adultoH.png')
            } else if (idade < 120) {
                //IDOSO
                res.innerHTML = `Detectamos um idoso com ${idade} anos`
                img.setAttribute('src', '../images/idosoH.png')
            } else {
                //INTERROGAÇÃO
                res.innerHTML = `Você tem ${idade} anos, e ainda está vivo?`
                res.style.color = 'black'
                document.body.style.backgroundColor = 'wheat'
                img.setAttribute('src', '../images/interrogacao.png')
            }
        } else if (fSex[1].checked) {
            genero = 'mulher'
            res.style.color = 'palevioletred'
            res.style.fontWeight = 'bold'
            document.body.style.backgroundColor = 'palevioletred'
            if (idade >= 0 && idade < 5) {
                //BEBE
                res.innerHTML = `Detectamos um bebê com ${idade} anos`
                img.setAttribute('src', '../images/bebeM.png')
            } else if (idade < 12) {
                //CRIANÇA
                res.innerHTML = `Detectamos uma criança com ${idade} anos`
                img.setAttribute('src', '../images/criancaM.png')
            } else if (idade < 18) {
                //ADOLESCENTE
                res.innerHTML = `Detectamos uma adolescente com ${idade} anos`
                img.setAttribute('src', '../images/adolescenteM.png')
            } else if (idade < 60) {
                //ADULTO
                res.innerHTML = `Detectamos um adulto com ${idade} anos`
                img.setAttribute('src', '../images/adultoM.png')
            } else if (idade < 120) {
                //IDOSO
                res.innerHTML = `Detectamos uma idosa com ${idade} anos`
                img.setAttribute('src', '../images/idosoM.png')
            } else {
                //INTERROGAÇÃO
                res.innerHTML = `Você tem ${idade} anos, e ainda está vivo?`
                res.style.color = 'black'
                document.body.style.backgroundColor = 'wheat'
                img.setAttribute('src', '../images/interrogacao.png')
            }
        }
        res.appendChild(img)
    }
}