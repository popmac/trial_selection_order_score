function examineesAction(content) {
  let examination = content.find('#examination')
  let submitArea = content.find('#submit-btn')
  let choices = examination.find('.choices')
  let personal = examination.find('.personal')
  let redo = examination.find('.redo')

  function defaultSetting() {
    redo.hide()
    submitArea.hide()
    personal.children().not(':first').hide()
  }
  function changeNextBtn() {
    let question = $(this).parent().parent()
    let nextBtn = question.find('.back-next-button .next')
    // 「やり直す」ボタンが表示されている時、つまり、全ての選択肢が選択されている時
    if (($('.redo').is(':visible'))) {
      nextBtn.removeClass('disabled')
    }
  }
  function nextBtnAction() {
    let question = $(this).parent().parent()
    // 「やり直す」ボタンが表示されていて、かつ、'disabled'クラスが削除されている時、にしかボタンを押せないようにするための条件分岐
    if (!$(this).hasClass('disabled') && ($('.redo').is(':visible'))) {
      question.next().show()
      question.hide()
      redo.hide()
    }
  }
  function showSubmitArea() {
    submitArea.show()
  }
  defaultSetting()
  choices.on('click', '.btn', changeNextBtn)
  examination.on('click', '.next', nextBtnAction)
  examination.on('click', '.diagnosis', showSubmitArea)
}
