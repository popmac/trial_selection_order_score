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
    nextBtn.removeClass('disabled')
  }
  function nextBtnAction() {
    let question = $(this).parent().parent()
    question.next().show()
    question.hide()
    redo.hide()
  }
  function showSubmitArea() {
    submitArea.show()
  }
  defaultSetting()
  choices.on('click', '.btn', changeNextBtn)
  examination.on('click', '.next', nextBtnAction)
  examination.on('click', '.diagnosis', showSubmitArea)
}
