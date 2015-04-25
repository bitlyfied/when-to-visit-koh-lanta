/* jshint devel:true */


$(function(){

  var QuizBox = function(pos, el) {
    var quiz = this;
    var $quiz = $(el);
    var $answers = $quiz.find('.answer-box');

    $answers.on('click', function(){
      quiz.select($(this));
    });

    this.select = function($answer) {
      this.dimm();
      $answer.removeClass('dimmed');
      $answer.addClass('selected');

      setTimeout(function() {
        jumpTo(pos+1)
      }, 300);
    };

    this.dimm = function() {
      $answers.addClass('dimmed');
      $answers.removeClass('selected');
    };
  };

  function jumpTo(pos) {
    $.smoothScroll({
      scrollTarget: '#q' + pos
    });
    //document.location.hash = '#q' + pos;
  }

  var quizzes = [];

  $('.quiz-box').each(function(pos, dom) {
    quizzes.push(new QuizBox(pos, dom));
  });

});
