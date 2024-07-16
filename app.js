function evaluate() {
    // Hakee käyttäjän syöttämät arvot
    var pain = document.getElementById('pain').value;
    var weakness = document.getElementById('weakness').value;
    var cauda = document.getElementById('cauda').value;

    var result = '';
    var medication = '';

    // Tarkistaa, onko cauda-oireita
    if (cauda === 'yes') {
        result = 'Päivystyslähete neurokirurgialle: cauda equina -oire epäily.';
        medication = 'Ei lääkityssuosituksia ennen päivystyskäyntiä.';
    } 
    // Tarkistaa, onko kipu VAS-asteikolla 7 tai enemmän ja alaraajassa heikkoutta
    else if (pain >= 7 && weakness === 'yes') {
        result = 'MRI virka-aikana ja konsultoi selkäortopedia: Voimakas kipu ja alaraajaan etenevä heikkous.';
        medication = 'Suositeltu lääkitys: Parasetamoli, NSAID-lääkkeet, lihasrelaksantit tarvittaessa.';
    } 
    // Tarkistaa, onko kipu VAS-asteikolla 7 tai enemmän
    else if (pain >= 7) {
        result = 'Kivunhoito ja kliininen kontrolli tarvittaessa.';
        medication = 'Suositeltu lääkitys: Parasetamoli, NSAID-lääkkeet.';
    } 
    // Muut tapaukset
    else {
        result = 'Seuranta perusterveydenhuollossa.';
        medication = 'Suositeltu lääkitys: Parasetamoli tarvittaessa.';
    }

    // Näyttää tuloksen HTML-sivulla
    document.getElementById('result').innerHTML = '<h3>Suositus:</h3><p>' + result + '</p><h3>Lääkitysvaihtoehdot:</h3><p>' + medication + '</p>';
}

