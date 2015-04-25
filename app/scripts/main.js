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
      this.resetSelection();
      $answer.addClass('selected');
      jumpTo(pos+1);
    };

    this.resetSelection = function() {
      $answers.removeClass('selected');
    };
  };

  function jumpTo(pos) {
    document.location.hash = '#q' + pos;
  }

  var quizzes = [];

  $('.quiz-box').each(function(pos, dom) {
    quizzes.push(new QuizBox(pos, dom));
  });

});
