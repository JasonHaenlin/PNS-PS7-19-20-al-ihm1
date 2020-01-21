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
    body: JSON.stringify({ 'code': editor.innerText})
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
let subtitle = document.getElementById('sub-title');
loadFile(file_events);
loader_btn.innerText = 'Load itineraries';
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
    loader_btn.innerText = 'Load events';
    subtitle.innerText = 'Itineraries'
  } else {
    loadFile(file_events);
    loader_btn.innerText = 'Load itineraries';
    subtitle.innerText = 'Events'
  }
});
