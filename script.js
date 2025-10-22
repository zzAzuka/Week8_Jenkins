document.addEventListener('DOMContentLoaded', () => {
  // Show a deployment timestamp if written to DEPLOY_INFO.txt at deploy
  fetch('DEPLOY_INFO.txt').then(r => {
    if (!r.ok) throw new Error('no deploy info');
    return r.text();
  }).then(txt => {
    document.getElementById('ts').innerText = txt.trim();
    document.getElementById('info').innerText = txt.trim();
  }).catch(_ => {
    const t = new Date().toLocaleString();
    document.getElementById('ts').innerText = t;
    document.getElementById('info').innerText = 'Local dev (no DEPLOY_INFO.txt)';
  });

  document.getElementById('whoami').onclick = () => {
    alert('This page was built by the CI/CD demo pipeline.');
  };
});
