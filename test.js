function truncate(str, maxlength){
  if (str.lenght > maxlength){
    alert(str.slice(0, maxlength - 1));
  } else {
    alert (str);
  }
}

truncate("Вот, что мне хотелось бы сказать на эту тему:", 20);