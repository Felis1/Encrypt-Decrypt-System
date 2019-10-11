$(document).ready(() => {
  function encrypt(){
    $('#encrypt').on('input', () => {
      const offset = 5; //встановлюємо кількість відступів
      let out = ''; //створуємо пусту строку
          enc_val = $('#encrypt').val(); //беремо DOM елемент та записуємо в змінну
      for( let i = 0; i < enc_val.length; i++ ){
          var enc_code = enc_val.charCodeAt(i) + offset; //перебераємо елементи в циклі та дізнаємося код елементу після чого додаємо наші відпступи
          out += String.fromCharCode(enc_code); //дальше перетворюємо массив в строку
      }
      $('#res-encrypt').text( out ).css({'color' : '#000', 'font-size' : '20px'});
    }); //виводимо текст
  }
  function decrypt(){ //майже все те саме ==> function ecnrypt();
    $('#decrypt').on('input', () => {
      const offset2 = 5;
      let out2 = '';
      var dec_val = $('#decrypt').val();
      for( let i = 0; i < dec_val.length; i++ ){
        var dec_code = dec_val.charCodeAt(i) - offset2;
        out2 += String.fromCharCode(dec_code);
      }
      $('#res-decrypt').text( out2 ).css({'color' : '#000', 'font-size' : '20px'});
    })

  }
  function undefined() {

  }
  encrypt();
  decrypt();
});
