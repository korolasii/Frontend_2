function insert(num) {
   document.form.textview.value = document.form.textview.value + num;
   document.form.result.value = document.form.result.value + num;
   document.form.result.value = eval(document.form.result.value);
}
function clean() {
   document.form.textview.value = "";
   document.form.result.value = "";
}
function back() {
   var exp = document.form.textview.value;
   document.form.textview.value = exp.substring(0,exp.length-1);
}
function equal() {
   var exp = document.form.textview.value;
   if(exp) {
      document.form.textview.value = eval(exp);
   }
}