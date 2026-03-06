const commandDiv = document.querySelector('.command');

window['run_command'] = (name, data) => {
  commandDiv.textContent = `name=${name}, data=${data}`;
};
