Your mission is to implement a function that converts the following potentially harmful characters:

< --> &lt;
> --> &gt;
" --> &quot;
& --> &amp;

function htmlspecialchars(formData){
  return formData.split('').map(e=>e== '<' ? '&lt;' : e == '>' ? '&gt;' : e == '"' ? '&quot;' : e == '&' ? '&amp;' : e).join('')
}
