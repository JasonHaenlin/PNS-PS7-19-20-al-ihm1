/* eslint-disable no-unused-vars */
/* eslint-disable promise/always-return */
const loadFile = async filename => {
  let res = await fetch('/scripts/' + filename);
  let code = await res.text();
  editor.innerText = code;
  file = filename;
};

// const runPreview = async () => {
//   let url = '';
//   if (file === file_events) {
//     url = '/events/preview';
//   } else {
//     url = '/itineraries/preview?prefs=Football,Rugby,Handball';
//   }
//   fetch(url, {
//     method: 'POST',
//     headers: {
//       'Content-Type': 'application/json'
//     },
//     body: JSON.stringify({ code: editor.innerText })
//   })
//     .then(data => {
//       return data.json();
//     })
//     .then(res => {
//       preview.innerHTML = '';
//       if (file === file_events) {
//         for (element of res) {
//           preview.innerHTML = preview.innerHTML + showElement(element);
//         }
//       } else {
//         preview.innerHTML = preview.innerHTML + showElement(res);
//       }
//     }).catch(err => console.error(err));
// };

// const showElement = element => {
//   if (file === file_events) {
//     let node = '';
//     node = node + '<div class=\'preview-item\'>';
//     node = node + ('<span class=\'preview-title\'>' + element.name + ' (' + element.distance + 'm)' + '</span>');
//     node = node + ('<span class=\'preview-versus\'>' + element.versus + '</span>');
//     node = node + ('<span class=\'preview-desc\'>' + element.description + '</span>');
//     node = node + '</div>';
//     return node;
//   } else {
//     let node = '';
//     node = node + '<div class=\'preview-item\'>';
//     node = node + ('<span class=\'preview-title\'>' + element.label + ' (' + element.events.length + ' events)' + '</span>');
//     node = node + ('<span class=\'preview-desc\'>' + element.description.concat('-') + '</span>');
//     node = node + '</div>';
//     return node;
//   }
// };
let file = '';
let file_events = 'example.js';
let file_itineraries = 'example_2.js';
let editor = document.getElementById('editor');
// let preview = document.getElementById('preview');
let preview_btn = document.getElementById('btn-preview');
let save_btn = document.getElementById('btn-save');
let loader_btn = document.getElementById('loader');
loadFile(file_events);
loader_btn.innerText = 'Load ' + file_events;

save_btn.addEventListener('click', () => {
  fetch('/editor/save', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ file: file, code: editor.innerText })
  });
});
loader_btn.addEventListener('click', () => {
  if (file === file_events) {
    loadFile(file_itineraries);
  } else {
    loadFile(file_events);
  }
  loader_btn.innerText = 'Load ' + file;
});
