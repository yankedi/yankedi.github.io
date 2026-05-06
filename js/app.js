(function () {
  'use strict';

  var form = document.getElementById('config-form');
  if (!form) return;

  var nameInput = document.getElementById('inst-name');
  var versionInput = document.getElementById('version');
  var loaderSelect = document.getElementById('loader');
  var xmsInput = document.getElementById('jvm-xms');
  var xmxInput = document.getElementById('jvm-xmx');
  var preview = document.getElementById('preview');
  var previewCode = document.getElementById('preview-code');

  form.addEventListener('submit', function (e) {
    e.preventDefault();

    var name = nameInput.value.trim() || '我的实例';
    var version = versionInput.value.trim() || '1.20.4';
    var loader = loaderSelect.value;
    var xms = xmsInput.value.trim() || '2G';
    var xmx = xmxInput.value.trim() || '4G';

    var lines = [];
    lines.push('[game]');
    lines.push('name = "' + name + '"');
    lines.push('version = "' + version + '"');
    lines.push('');
    lines.push('[launch]');
    lines.push('jvm_xms = "' + xms + '"');
    lines.push('jvm_xmx = "' + xmx + '"');
    lines.push('');
    lines.push('[dependencies]');

    if (loader === 'forge') {
      lines.push('forge = "47.3.0"');
    } else if (loader === 'neoforge') {
      lines.push('neoforge = "20.4.251"');
    } else if (loader === 'fabric') {
      lines.push('fabric-loader = "0.15.11"');
    }

    previewCode.textContent = lines.join('\n');
    preview.style.display = 'block';
  });
})();
