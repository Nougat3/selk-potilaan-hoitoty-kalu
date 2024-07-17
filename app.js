function evaluate() {
    // Hakee käyttäjän syöttämät arvot
    var painDescription = document.getElementById('painDescription').value;
    var painStart = document.getElementById('painStart').value;
    var painRadiation = document.getElementById('painRadiation').value;
    var previousBackIssues = document.getElementById('previousBackIssues').value;
    var inspection = document.getElementById('inspection').value;
    var palpation = document.getElementById('palpation').value;
    var movementTests = document.getElementById('movementTests').value;
    var neurologicalTests = document.getElementById('neurologicalTests').value;
    var specialTests = document.getElementById('specialTests').value;

    var pain = document.getElementById('pain').value;
    var weakness = document.getElementById('weakness').value;
    var cauda = document.getElementById('cauda').value;
    var fever = document.getElementById('fever').value;
    var abdominalPain = document.getElementById('abdominalPain').value;
    var cancerHistory = document.getElementById('cancerHistory').value;

    var result = `
        <h3>Anamneesi</h3>
        <p><strong>Kivun luonne ja sijainti:</strong> ${painDescription}</p>
        <p><strong>Kivun alkamisajankohta ja mahdollinen vamma:</strong> ${painStart}</p>
        <p><strong>Kivun säteily ja pahentavat/lievittävät tekijät:</strong> ${painRadiation}</p>
        <p><strong>Aiemmat selkävaivat ja hoidot:</strong> ${previousBackIssues}</p>

        <h3>Fyysinen tarkastus</h3>
        <p><strong>Inspektio:</strong> ${inspection}</p>
        <p><strong>Palpaatio:</strong> ${palpation}</p>
        <p><strong>Liikelaajuustestit:</strong> ${movementTests}</p>
        <p><strong>Neurologiset testit:</strong> ${neurologicalTests}</p>
        <p><strong>Erikoistestit:</strong> ${specialTests}</p>
    `;

    // Hoito-ohjeet
    var treatment = '';

    if (cauda === 'yes') {
        treatment = `
            <h3>Päivystyslähete neurokirurgialle: cauda equina -oire epäily.</h3>
        `;
    } else if (pain >= 7 && weakness === 'yes') {
        treatment = `
            <h3>MRI virka-aikana ja konsultoi selkäortopedia: Voimakas kipu ja alaraajaan etenevä heikkous.</h3>
            <h3>Hoito-ohjeet:</h3>
            <p>Usein lyhyt sairauspoissaolo, päiviä–viikko, oireen vaikeudesta ja työtehtävistä riippuen.</p>
            <p>Vuodelevon välttäminen ja tavallisten toimien jatkaminen. Ohjeistetaan suullisesti selkäkivun hälyyttävät oireet: Cauda equina -oireet:Virtsaamisvaikeudet, kuten virtsaumpi tai inkontinenssi, ulosteen pidätyskyvyn menetys, tunnoton alue peräaukon ympärillä (ratsupaikka-anestesia), molemminpuoliset alaraajaoireet</p>
            <p>Kipulääkkeet ensisijaisuusjärjestyksessä: parasetamoli, tulehduskipulääkkeet, näiden ja miedon opioidin (kodeiini) yhdistelmät.</p>
            <p>Lihasrelaksantit vain, jos kipulääkitys ei sovi tai auta riittävästi.</p>
            <p>Lisäksi voidaan aloittaa neuropaattisen kivun lääkkeitä: esim. gabrion/lyrica lääkeohjeiden mukaan.</p>
        `;
    } else if (pain >= 7) {
        treatment = `
            <h3>Kivunhoito ja kliininen kontrolli tarvittaessa, suositellaan säännöllistä fysioterapiaa.</h3>
            <h3>Hoito-ohjeet:</h3>
            <p>Usein lyhyt sairauspoissaolo, päiviä–viikko, oireen vaikeudesta ja työtehtävistä riippuen.</p>
            <p>Vuodelevon välttäminen ja tavallisten toimien jatkaminen.</p>
            <p>Kipulääkkeet ensisijaisuusjärjestyksessä: parasetamoli, tulehduskipulääkkeet, näiden ja miedon opioidin (kodeiini) yhdistelmät.</p>
            <p>Lihasrelaksantit vain, jos kipulääkitys ei sovi tai auta riittävästi.</p>
            <p>Tarvittaessa neuropaattisten kipulääkkeiden aloitus: gabrion/lyrica</p>
        `;
    } else if (fever === 'yes' || abdominalPain === 'yes' || cancerHistory === 'yes') {
        treatment = `
            <h3>Kiireellinen lähete lääkäriin: vakavan sairauden merkkejä.</h3>
        `;
    } else {
        treatment = `
            <h3>Seurantalinja tilanteen suhteen, tarv. on uudelleen yhteydessä</h3>
            <h3>Hoito-ohjeet:</h3>
            <p>Konservatiivinen hoito: fysioterapia ja kipulääkitys. Usein lyhyt sairauspoissaolo, päiviä–viikko, oireen vaikeudesta ja työtehtävistä riippuen.</p>
            <p>Vuodelevon välttäminen ja tavallisten toimien jatkaminen. Ohjeistetaan suullisesti selkäkivun hälyyttävät oireet: Cauda equina -oireet:Virtsaamisvaikeudet, kuten virtsaumpi tai inkontinenssi, ulosteen pidätyskyvyn menetys, tunnoton alue peräaukon ympärillä (ratsupaikka-anestesia), molemminpuoliset alaraajaoireet</p>
            <p>Kipulääkkeet ensisijaisuusjärjestyksessä: parasetamoli, tulehduskipulääkkeet.</p>
            <p>Lihasrelaksantit vain, jos kipulääkitys ei sovi tai auta riittävästi.</p>
        `;
    }

    // Näyttää tuloksen HTML-sivulla
    document.getElementById('result').innerHTML = result + treatment;
    document.getElementById('copyButton').style.display = 'block';
}

function copyToClipboard() {
    var result = document.getElementById('result');
    var range = document.createRange();
    range.selectNode(result);
    window.getSelection().removeAllRanges(); 
    window.getSelection().addRange(range);
    try {
        document.execCommand('copy');
        alert('Hoitosuunnitelma kopioitu leikepöydälle!');
    } catch(err) {
        alert('Kopiointi epäonnistui');
    }
    window.getSelection().removeAllRanges();
}
