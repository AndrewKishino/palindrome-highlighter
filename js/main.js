var showPalindromes = function() {
  var result = [];
  var temp = '';
  document.getElementById('paragraph-result').innerHTML = '';

  var highlightPalindromes = function(input) {
    var wordArray = [];

    if(input) {
      wordArray = input;
    } else {
      wordArray = document.getElementById('pre-text').value.replace(/\n/g, '<br/>').split(' ');
    }


    wordArray.map(function(word){
      var newline = word.match(/(<br\/>)+/);

      if(word.match(/^(<br\/>)+$/)) {
        //do nothing
      }
      else if(newline) {
        var placeholder = newline[0];
        var wordSplit = newline.input.replace(placeholder, '');
        if(wordSplit.match(/[.!?,;:]+/)) {
          var splitChar = wordSplit.match(/[.!?,;:]+/)[0];
          word = wordSplit.split(splitChar);
          word.splice(1, 0, splitChar, placeholder);
        } else {
          word = newline.input.split(/(<br\/>)/);
        }
      }

      if(Array.isArray(word)) {
        highlightPalindromes(word);
      } else {
        var punctuation = word.match(/[.!?,;:]$/);

        if(word.match(/^[.!?,;:]+$/)) {
          result[result.length-1] = result[result.length-1] + word.match(/[.!?,;:]+/)[0];
        }
        else if(punctuation) {
          word = word.slice(0, word.length-1);
          if(word === word.split('').reverse().join('') && word.length > 1) {
            result.push('<span class="highlighted">' + word + '</span>' + punctuation[0]);
          } else {
            result.push(word + punctuation);
          }
        } else {
          if(word.toLowerCase() === word.split('').reverse().join('').toLowerCase() && word.length > 1) {
            result.push('<span class="highlighted">' + word + '</span>');
          } else {
            result.push(word);
          }
        }
      }
    });

    document.getElementById('paragraph-result').innerHTML = result.join(' ');
  };

  highlightPalindromes();
};