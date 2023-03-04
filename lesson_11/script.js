function insert(num) {
   const spisok = ['+', '-', '*', '/'];
   document.form.textview.value = document.form.textview.value + num;
   if (spisok.includes(num) && (document.form.textview.value.match(/\(/g) || []).length === (document.form.textview.value.match(/\)/g) || []).length){
      document.form.result.value = eval(document.form.textview.value.substr(0, document.form.textview.value.length-1));
   }else if (num === ')' && (document.form.textview.value.match(/\(/g) || []).length === (document.form.textview.value.match(/\)/g) || []).length){
      document.form.result.value = eval(document.form.textview.value);
   }
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
   if(exp && (document.form.textview.value.match(/\(/g) || []).length === (document.form.textview.value.match(/\)/g) || []).length) {
      document.form.textview.value = eval(exp);
      document.form.result.value = document.form.textview.value;
   }
}

