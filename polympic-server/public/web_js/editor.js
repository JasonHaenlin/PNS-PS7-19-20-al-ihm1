/* eslint-disable promise/always-return */
const loadFile = async file => {
  let res = await fetch('/scripts/' + file);
  let code = await res.text();
  editor.innerText = code;
};

const runPreview = async () => {
  fetch('/events/preview',
    {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({ code: editor.innerText })
    })
    .then(data => {
      return data.json();
    })
    .then(res => {
      preview.innerHTML = '';
      for (element of res) {
        preview.innerHTML = preview.innerHTML + showElement(element);
      }
    }).catch(err => console.error(err));
};

const showElement = element => {
  let node = '';
  node = node + '<div class=\'preview-item\'>';
  node = node + ('<span class=\'preview-title\'>' + element.name + '</span>');
  node = node + ('<span class=\'preview-versus\'>' + element.versus + '</span>');
  node = node + ('<span class=\'preview-desc\'>' + element.description + '</span>');
  node = node + '</div>';
  return node;
};

let editor = document.getElementById('editor');
let preview = document.getElementById('preview');
let preview_btn = document.getElementById('btn-preview');
loadFile('example.js');
preview_btn.addEventListener('click', runPreview);
