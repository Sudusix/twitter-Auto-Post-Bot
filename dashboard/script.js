function postNow(){
  fetch('/api/cron').then(()=>alert('Posted!'));
}