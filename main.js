if (window.location.href.indexOf("www.youtube.com/watch?v=") > -1) {
  var findVideo = document.getElementsByClassName('style-scope ytd-watch-metadata');
  var channel = document.getElementsByClassName("yt-simple-endpoint style-scope yt-formatted-string")[0].textContent.trim();
  for (let i = 0; i < findVideo.length; i++) if (findVideo[i].parentElement.nodeName == 'H1') var ripTitle = findVideo[i].innerHTML.trim();

  var url = "https://siivagunner.wiki/wiki/" + ripTitle;

  if (channel == "SiIvaGunner") {
    window.open(url);
  }
}
else if (window.location.href.indexOf("www.youtube.com/playlist?list=") > -1) {
  var findInPage = document.getElementsByClassName('yt-core-attributed-string yt-core-attributed-string--white-space-pre-wrap');

  for (let i = 0; i < findInPage.length; i++) if (findInPage[i].parentElement.nodeName == 'H1') var playlistTitle = findInPage[i].innerHTML.trim();
  for (let i = 0; i < findInPage.length; i++) if (findInPage[i].parentElement.nodeName == 'YT-AVATAR-STACK-VIEW-MODEL') var channel = findInPage[i].textContent.replace('by ', '')
    
  var url = "https://siivagunner.wiki/wiki/Category:" + playlistTitle;

  if (channel == "SiIvaGunner") {
    window.open(url);
  }
}
else if (window.location.href.indexOf("siivagunner.fandom.com") > -1) {
  var url = window.location.href.replace('siivagunner.fandom.com', 'siivagunner.wiki');
  window.open(url);
}