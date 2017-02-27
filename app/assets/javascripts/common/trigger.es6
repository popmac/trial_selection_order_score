// ビューの @javascript で指定された関数を呼び出す
function Trigger() {
  let content = $("#page-content-wrapper");
  let func_name = content.data("javascript");
  if (func_name) {
    if (typeof func_name === "string") {
      if (window[func_name]) window[func_name](content);
    }
    else if($.isArray(func_name)) {
      func_name.forEach(f => {
        if (window[f]) window[f](content);
      });
    }
  }
}
