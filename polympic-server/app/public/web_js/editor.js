/* eslint-disable no-unused-vars */
/* eslint-disable promise/always-return */
const loadFile = async filename => {
  let res = await fetch('/scripts/preview_' + filename);
  let code = await res.text();
  editor.innerText = code;
  file = filename;
};

const compile = async () => {
  fetch('/editor/compile', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ 'code': editor.innerText })
  }).then(res => {
    if (res.status == 200) {
      canSave = true;
      fetch('/editor/preview', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ 'code': editor.innerText, file: file })
      })
    } else {
      alert('It looks like your code is not correct');
    }
  })
};


let file = '';
let canSave = false;
let file_events = 'events.script';
let file_itineraries = 'itineraries.script';
let editor = document.getElementById('editor');
let preview_btn = document.getElementById('btn-preview');
let save_btn = document.getElementById('btn-save');
let loader_btn = document.getElementById('loader');
let config_btn = document.getElementById('btn-config');
let subtitle = document.getElementById('sub-title');
let textValidation = document.getElementById('textValidation');
let submit_btn = document.getElementById('submit');

fetch('/itinerary/accessibilities').then(res => res.json()).then(json => {
  document.getElementById('acs1').value = json.value[0];
  document.getElementById('acs2').value = json.value[1];
  document.getElementById('acs3').value = json.value[2];
  document.getElementById('meal').value = json.value[3];
});

loadFile(file_events);
loader_btn.innerText = 'Itineraries';
subtitle.innerText = 'Events';

editor.addEventListener('keypress', () => { canSave = false; });

preview_btn.addEventListener('click', compile);

save_btn.addEventListener('click', () => {
  if (canSave) {
    fetch('/editor/save', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ file: file, code: editor.innerText })
    });
  } else {
    alert('Please run the preview before saving');
  }
});
loader_btn.addEventListener('click', () => {
  if (file === file_events) {
    loadFile(file_itineraries);
    loader_btn.innerText = 'Events';
    subtitle.innerText = 'Itineraries'
  } else {
    loadFile(file_events);
    loader_btn.innerText = 'Itineraries';
    subtitle.innerText = 'Events'
  }
});

submit_btn.addEventListener('click', () => {
  fetch('/itinerary/accessibilities', {
    method: 'PUT',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      value: [
        document.getElementById('acs1').value,
        document.getElementById('acs2').value,
        document.getElementById('acs3').value,
        document.getElementById('meal').value
      ]
    })
  }).then(res=>console.log(res.status));
  let textValidation = document.getElementById("textValidation");
  textValidation.innerHTML = 'Sauvegardé';
  setTimeout(() => {
    textValidation.innerHTML = '';
  }, 1000);
});
