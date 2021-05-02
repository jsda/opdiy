const BDUSS = '' //**INPUT YOUR BDUSS HERE**
const STOKEN = '' //**INPUT YOUR STOKEN HERE**
const SVIPBDUSS = '' //**INPUT YOUR SVIP BDUSS HERE**
const SVIPSTOKEN = '' //**INPUT YOUR SVIP STOKEN HERE** (optional, rapid need) 
const INDEX_URL = '' // Input your index url here
const AUTH_USER = '' //**INPUT BASIC AUTH USERNAME (optional)**
const AUTH_PASS = '' //**INPUT BASIC AUTH SUPER SECRET PASSWORD (optional)**

const pwdBody = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/limonte-sweetalert2/8.11.8/sweetalert2.all.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<style>
  body {
    background-image: url("https://pandownload.com/img/baiduwp/bg.png");
  }

  .logo-img {
    width: 1.1em;
    position: relative;
    top: -3px;
  }
</style>
<meta name="referrer" content="never">
<title>请输入提取码</title>
<style>
    .alert {
	  background-color: #FFFFFF;
      position: relative;
      top: 5em;
    }

    .alert-heading {

      height: 0.8em;
    }
  </style>
 <script>
$(function(){
	Swal.fire({
	title: '请输入提取码',
	input: 'text',
	inputAttributes: {
	autocapitalize: 'off'
	},
	allowOutsideClick: false,
	showCancelButton: false,
	confirmButtonText: '提取文件',
	preConfirm: (pwd) => {
  const url = document.URL
  let surl
  if(url.includes('/s/1')){
    surl = url.match(/\\/s\\/(1.+)/)[1]
  }
  else if(url.includes('/share/init?surl=')){
    surl ='1'+ url.match(/init\\?surl=([0-9a-zA-Z_]+)/)[1]

  }
	$(document).ready(function(){
    $('<form action="/" method="POST"><input type="hidden" name="surl" value="' + surl + '"><input type="hidden" name="pwd" value="' + pwd + '"></form>').appendTo('body').submit();
	})
	}
	})
  })
  </script>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="${INDEX_URL}">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">	
<a class="nav-link" href="${INDEX_URL}">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://github.com/TkzcM/baiduwp" target="_blank">GitHub</a>
</li>
</ul>
</div>
</div>
</nav>
</body>
</html>`

const rapidhtml = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/limonte-sweetalert2/8.11.8/sweetalert2.all.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<style>
body {
background-image: url("https://pandownload.com/img/baiduwp/bg.png");
}

.logo-img {
width: 1.1em;
position: relative;
top: -3px;
}
</style>
<title>PanDownload网页版</title>
<style>
.form-inline input {
width: 500px;
}

.input-card {
position: relative;
top: 7.0em;
}

.card-header {
height: 3.2em;
font-size: 20px;
line-height: 2.0em;
}

form input,
form button {
height: 3em;
}
</style>
<link href="https://cdn.staticfile.org/font-awesome/5.8.1/css/all.min.css" rel="stylesheet">
<script>
  function formatBytes(a,b=2){if(0===a)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}
  function atou(str) {
    return decodeURIComponent(escape(window.atob(str)));
  }
  function Trim(str){  
    return str.replace(/(^\\s*)|(\\s*$)/g, "");  
  }
  function dl(md5, slicemd5, flength, name) {
    var form = $('<form method="post" action="/rapiddl" target="_blank"></form>');
    form.append('<input type="hidden" name="md5" value="'+md5+'">');
    form.append('<input type="hidden" name="slicemd5" value="'+slicemd5+'">');
    form.append('<input type="hidden" name="flength" value="'+flength+'">');
    form.append('<input type="hidden" name="name" value="'+name+'">');
    $(document.body).append(form);
    form.submit();
  }
  
  function getFileType(filename){
    var point = filename.lastIndexOf(".");
    var t = filename.substr(point+1);
    if (t == ""){
      return "";
    }
    t = t.toLowerCase();
    return t;
  }
  function getIconClass(filename){
    var filetype = {
      file_video: ["wmv", "rmvb", "mpeg4", "mpeg2", "flv", "avi", "3gp", "mpga", "qt", "rm", "wmz", "wmd", "wvx", "wmx", "wm", "mpg", "mp4", "mkv", "mpeg", "mov", "asf", "m4v", "m3u8", "swf"],
      file_audio: ["wma", "wav", "mp3", "aac", "ra", "ram", "mp2", "ogg", "aif", "mpega", "amr", "mid", "midi", "m4a", "flac"],
      file_image: ["jpg", "jpeg", "gif", "bmp", "png", "jpe", "cur", "svgz", "ico"],
      file_archive: ["rar", "zip", "7z", "iso"],
      windows: ["exe"],
      apple: ["ipa"],
      android: ["apk"],
      file_alt: ["txt", "rtf"],
      file_excel: ["xls", "xlsx"],
      file_word: ["doc", "docx"],
      file_powerpoint: ["ppt", "pptx"],
      file_pdf: ["pdf"],
    };
    var point = filename.lastIndexOf(".");
    var t = filename.substr(point+1);
    if (t == ""){
      return "";
    }
    t = t.toLowerCase();
    for(var icon in filetype) {
      for(var type in filetype[icon]) {
        if (t == filetype[icon][type])
        {
          return "fa-"+icon.replace('_', '-');
        }
      }
    }
    return "";
  }
  function replaceIcon(){
    $(".fa-file").each(function(){
      var icon = getIconClass($(this).next().text());
      var filetype = getFileType($(this).next().text())
      var type = icon.substring(8);
      if (icon != "")
      {
        if (icon == "fa-windows" || icon == "fa-android" || icon == "fa-apple")
        {
          $(this).removeClass("far").addClass("fab");
        }
        $(this).removeClass("fa-file").addClass(icon);
      }
    });
  }
  function getLink(link) {
    const bdpan = link.match(/bdpan:\\/\\/(.+)/);;
    const pcs = link.match('BaiduPCS-Go');
    const mengji = link.match(/.{32}#.{32}/);
    const bdlink = link.match('bdlink(.+)');
    if (bdpan){
      const deb64 = atou(bdpan[1]);
      const md5 = deb64.match(/\\|(.{32})\\|/)[1];
      const slicemd5 = deb64.match(/\\|([^\\|]{32})$/)[1];
      const file_length = deb64.match(/\\|([0-9]+)\\|/)[1];
      const file_name = deb64.match(/^(.+\\.[a-zA-Z]{1,9})\\|/)[1];
      return {'md5':md5,'slicemd5':slicemd5,'flength':file_length,'name':file_name};
    }
    else if (pcs){
      const input = link;
      const length = input.match(/length\\=([0-9]+)/)[1];
      const md5 = input.match(/\\-md5\\=(.{32})/)[1];
      const slicemd5 = input.match(/\\-slicemd5\\=(.{32})/)[1];
      const file_name = input.match(/\\"(.+)\\"/)[1];
      return {'md5':md5,'slicemd5':slicemd5,'flength':length,'name':file_name};
    }
    else if(mengji){
      const input = link;
      const md5 = input.match(/^(.{32})#/)[1];
      const slicemd5 = input.match(/#(.{32})#/)[1];
      const file_length = input.match(/#([0-9]+)#/)[1];
      const file_name = Trim(input.match(/#[0-9]+#(.+)$/)[1]);
      return {'md5':md5,'slicemd5':slicemd5,'flength':file_length,'name':file_name};
    }
    else if(bdlink){
      let files = []
      const bdlink1 = link.match('bdlink\\=([a-zA-Z0-9\\=\\/\\+]+\\={0,2})[\\#\\?\\&]?');
      const bdlink2 = link.match('bdlink\\=([a-zA-Z0-9\\=\\/\\+]+\\={0,2})$');
      let de_b64
      if(bdlink1){
        de_b64 = atou(bdlink1[1]);
        if(de_b64.split('\\n').length > 1){
          for (i=0;i<de_b64.split('\\n').length;i++)
            files.push(getLink(de_b64.split('\\n')[i]))
          return files
        }
        else if(de_b64.split('\\n').length == 1)
          return getLink(de_b64);
      }
      else if(bdlink2){
        de_b64 = atou(bdlink2[1]);
        if(de_b64.split('\\n').length > 1){
          for (i=0;i<de_b64.split('\\n').length;i++){
            files.push(getLink(de_b64.split('\\n')[i]))
          }
          return files
        }
        else if(de_b64.split('\\n').length == 1)
          return getLink(de_b64);
      }
    }
    else{
      return false;
    }
  }
  function genFile() {
    let file = []
    const links = document.getElementById('links').value.split('\\n').filter(function(el){
      return el != "" && el != null
    });
    for(i=0;i<links.length;i++){
      const fileinfo = getLink(links[i])
      if(fileinfo != false){
        file.push(fileinfo);
      }
      else{
        Swal.fire('未检测到有效链接');
        return false;
      }
    }
    let filelist = \`<ol class="breadcrumb my-4">
文件列表&nbsp;&nbsp;<a href="">返回</a> </ol>
<div>
<ul class="list-group ">\`
    function addFile(file){
      const md5 = file['md5']
      const slicemd5 = file['slicemd5']
      const flength = file['flength']
      const name = file['name']
      return \`<li class="list-group-item border-muted rounded text-muted py-2">
<i class="far fa-file mr-2"></i>
<a href="javascript:void(0)" onclick="dl('\${md5}','\${slicemd5}','\${flength}','\${name}')">\${name}</a>
<span class="float-right">\${formatBytes(flength)}</span></li>\`
    }
    for(const f in file){
      if(file[f].length > 1){
        for(const fs in file[f]){
          filelist += addFile(file[f][fs])
        }
      }
      else if(file[f] ){
        filelist += addFile(file[f])
      }
    }
    const orig = document.getElementsByClassName("container")[1]
    orig.innerHTML = ""
    orig.innerHTML += filelist + "</ul></div></div></body></html>";
    replaceIcon();
  }
</script>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="${INDEX_URL}">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="${INDEX_URL}">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://github.com/TkzcM/baiduwp" target="_blank">GitHub</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<div class="col-lg-6 col-md-9 mx-auto mb-5 input-card">
<div class="card">
<div class="card-header bg-dark text-light">秒传链接在线解析</div>
<div class="card-body">
<form name="form1" method="post" action="./rapiddl">
<div class="form-group my-2">
<textarea type="text" class="form-control" id="links" name="surl" placeholder="秒传链接（支持批量解析，每行一条链接）">
</textarea>
</div>
<button type="button" onclick="genFile()" class="mt-4 mb-3 form-control btn btn-success btn-block">打开</button>
</form>
</div>
</div>
</div>
</div>
</body>
</html>`

const error = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<style>
  body {
    background-image: url("https://pandownload.com/img/baiduwp/bg.png");
  }

  .logo-img {
    width: 1.1em;
    position: relative;
    top: -3px;
  }
</style>
<meta name="referrer" content="never">
<title>提示</title>
<style>
    .alert {
      position: relative;
      top: 5em;
    }

    .alert-heading {
      height: 0.8em;
    }
  </style>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="${INDEX_URL}">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="${INDEX_URL}">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://github.com/TkzcM/baiduwp" target="_blank">GitHub</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<div class="row justify-content-center">
<div class="col-md-7 col-sm-8 col-11">`

const previewHeader = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<script src="https://cdn.staticfile.org/dplayer/1.26.0/DPlayer.min.js"></script>
<style>
  body {
    background-image: url("https://pandownload.com/img/baiduwp/bg.png");
  }

  .logo-img {
    width: 1.1em;
    position: relative;
    top: -3px;
  }
  #video{
	max-width: 100%;
  }
</style>
<meta name="referrer" content="never">
<title>视频预览</title>
<style>
    .alert {
      position: relative;
      top: 3em;
    }
	.dplayer-logo {
		pointer-events: none;
		position: absolute;
		left:auto;
		right: 10px;
		top: 10px;
		max-width: 30px;
		max-height: 30px;
	}
    .alert-heading {
      height: 0.8em;
    }
  </style>
<script>`

const previewFooter = `</script>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="${INDEX_URL}">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">	
<a class="nav-link" href="${INDEX_URL}">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://github.com/TkzcM/baiduwp" target="_blank">GitHub</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container-fluid" id="video">
<div class="row justify-content-center">
<div class="col-md-7 col-sm-8 col-11">
<div class="alert alert-primary" role="alert">
<h5 class="alert-heading">视频预览 with ❤ DPlayer</h5>
<hr>
<p class="card-text"><a href="./help">如无法播放请按照教程修改UA</a><br><div id="dplayer"></div></p>
</div>
</div>
</div>
</div>
</body>
</html>`

const filebody = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<script src="https://cdn.staticfile.org/limonte-sweetalert2/8.11.8/sweetalert2.all.min.js"></script>
<style>
  body {
    background-image: url("https://pandownload.com/img/baiduwp/bg.png");
  }
  .logo-img {
    width: 1.1em;
    position: relative;
    top: -3px;
  }
</style>
<meta name="referrer" content="never">
<link href="https://cdn.staticfile.org/font-awesome/5.8.1/css/all.min.css" rel="stylesheet">
<title>文件列表</title>
<script>
  function dl(fs_id, timestamp, sign, randsk, share_id, uk) {
    var form = $('<form method="post" action="/download" target="_blank"></form>');
    form.append('<input type="hidden" name="fs_id" value="'+fs_id+'">');
    form.append('<input type="hidden" name="time" value="'+timestamp+'">');
    form.append('<input type="hidden" name="sign" value="'+sign+'">');
    form.append('<input type="hidden" name="randsk" value="'+randsk+'">');
    form.append('<input type="hidden" name="share_id" value="'+share_id+'">');
    form.append('<input type="hidden" name="uk" value="'+uk+'">');
    $(document.body).append(form);
    form.submit();
  }
  function video(fs_id, timestamp, sign, randsk, share_id, uk, filetype){
    Swal.fire({
      title: '请选择',
      icon: 'info',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#3085d6',
      confirmButtonText: '下载',
      cancelButtonText: '预览'
    }).then((result) => {
      if (result.value) {
        dl(fs_id, timestamp, sign, randsk, share_id, uk);
      }
      else if(result.dismiss === Swal.DismissReason.cancel){
        let form = $('<form method="post" action="/preview" target="_blank"></form>');
        form.append('<input type="hidden" name="fs_id" value="'+fs_id+'">');
        form.append('<input type="hidden" name="time" value="'+timestamp+'">');
        form.append('<input type="hidden" name="sign" value="'+sign+'">');
        form.append('<input type="hidden" name="randsk" value="'+randsk+'">');
        form.append('<input type="hidden" name="share_id" value="'+share_id+'">');
        form.append('<input type="hidden" name="uk" value="'+uk+'">');
        form.append('<input type="hidden" name="filetype" value="'+filetype+'">');
        $(document.body).append(form);
        form.submit();
      }
    })
  }
  function getFileType(filename){
    var point = filename.lastIndexOf(".");
    var t = filename.substr(point+1);
    if (t == ""){
      return "";
    }
    t = t.toLowerCase();
    return t;
  }
  function getIconClass(filename){
    var filetype = {
      file_video: ["wmv", "rmvb", "mpeg4", "mpeg2", "flv", "avi", "3gp", "mpga", "qt", "rm", "wmz", "wmd", "wvx", "wmx", "wm", "mpg", "mp4", "mkv", "mpeg", "mov", "asf", "m4v", "m3u8", "swf"],
      file_audio: ["wma", "wav", "mp3", "aac", "ra", "ram", "mp2", "ogg", "aif", "mpega", "amr", "mid", "midi", "m4a", "flac"],
      file_image: ["jpg", "jpeg", "gif", "bmp", "png", "jpe", "cur", "svgz", "ico"],
      file_archive: ["rar", "zip", "7z", "iso"],
      windows: ["exe"],
      apple: ["ipa"],
      android: ["apk"],
      file_alt: ["txt", "rtf"],
      file_excel: ["xls", "xlsx"],
      file_word: ["doc", "docx"],
      file_powerpoint: ["ppt", "pptx"],
      file_pdf: ["pdf"],
    };
    var point = filename.lastIndexOf(".");
    var t = filename.substr(point+1);
    if (t == ""){
      return "";
    }
    t = t.toLowerCase();
    for(var icon in filetype) {
      for(var type in filetype[icon]) {
        if (t == filetype[icon][type])
        {
          return "fa-"+icon.replace('_', '-');
        }
      }
    }
    return "";
  }
  function goToDir(surl, pwd, randsk, shareid, uk, dir) {
    var $form = $('<form>').attr('method', 'POST');
    var appendFormItem = function(key, value) {
      $form.append($('<input>').attr('type', 'hidden').attr('name', key).attr('value', value));
    };

    appendFormItem('surl', surl);
    appendFormItem('pwd', pwd);
    appendFormItem('randsk', randsk);
    appendFormItem('shareid', shareid);
    appendFormItem('uk', uk);
    appendFormItem('dir', dir);

    $form.appendTo($('body')).submit();
  }
  $(document).ready(function(){
    $(".fa-file").each(function(){
      var icon = getIconClass($(this).next().text());
      var filetype = getFileType($(this).next().text())
      var type = icon.substring(8);
      if(type == 'video'||type == 'audio'){
        const link = $(this).next().attr("onclick")
        const postlink = link.substring(3,link.length-1)
        $(this).next().attr("onclick","video("+postlink+",'"+filetype+"')")
      }
      if (icon != "")
      {
        if (icon == "fa-windows" || icon == "fa-android" || icon == "fa-apple")
        {
          $(this).removeClass("far").addClass("fab");
        }
        $(this).removeClass("fa-file").addClass(icon);
      }
    });
  });
</script>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="${INDEX_URL}">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="${INDEX_URL}">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://github.com/TkzcM/baiduwp" target="_blank">GitHub</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<ol class="breadcrumb my-4">
文件列表 </ol>
<div>
<ul class="list-group ">`

const error_div = `</div>
</div>
</div>
</body>
</html>`

const parseLink = async request => {
  const url = await request.url
  let innerRequest
  if(url.includes('/s/1')){
    const surl = url.match(/\/s\/(1[0-9a-zA-Z_-]+)/)[1]
    const isPwd = await fetch('https://pan.baidu.com/s/'+surl,{
      method:'HEAD',
      redirect:'manual'
    })
    if(isPwd.status == 302){
      return new Response(pwdBody,{ headers: { 'Content-Type': 'text/html;charset=UTF-8' } })
    }
    else if(isPwd.status == 200){
      innerRequest = new Request('https://example.com/',{method:'POST',body:'surl='+surl,headers:{'Content-Type':'application/x-www-form-urlencoded'}})
      return await generate(innerRequest)
    }
    else{
      return new Response(error + `
      <div class="alert alert-danger" role="alert">
<h5 class="alert-heading">提示</h5>
<hr>
<p class="card-text">CheckPwd Failed</p>
</div>` + error_div,{ headers: { 'Content-Type': 'text/html;charset=UTF-8' } })
    }
  }
  else if(url.includes('/init?surl=')){
    const surl = url.match(/init\?surl=([0-9a-zA-Z_-]+)/)[1]
    const surl1 = '1'+ surl
    const isPwd = await fetch('https://pan.baidu.com/s/'+surl1,{
      method:'HEAD',
      redirect:'manual'
    })
    if(isPwd.status == 302){
      return new Response(pwdBody,{ headers: { 'Content-Type': 'text/html;charset=UTF-8' } })
    }
    else if(isPwd.status == 200){
      innerRequest = new Request('https://example.com/',{method:'POST',body:'surl='+surl1,headers:{'Content-Type':'application/x-www-form-urlencoded'}})
      return await generate(innerRequest)
    }
    else{
      return new Response(error + `
      <div class="alert alert-danger" role="alert">
<h5 class="alert-heading">提示</h5>
<hr>
<p class="card-text">CheckPwd Failed</p>
</div>` + error_div,{ headers: { 'Content-Type': 'text/html;charset=UTF-8' } })
    }
  }
}

const generate = async request => {
  const text = await request.formData()
  const surl = text.get('surl')
  const pwd = text.get('pwd')
  const dir = text.get('dir')
  const uk = text.get('uk') || ''
  const shareid = text.get('shareid') || ''
  let randsk = text.get('randsk')
  const headers = { 'Content-Type': 'text/html;charset=UTF-8' }
  const surl_1 = surl.substring(1)
  async function verifyPwd(surl,pwd){
    if(pwd){
      let formData1 = new FormData()
      formData1.append('pwd',pwd)
      const res = await fetch(`https://pan.baidu.com/share/verify?channel=chunlei&clienttype=0&web=1&app_id=250528&${surl_1 ? `surl=${surl_1}` : `uk=${uk}&shareid=${shareid}`}`,
      {
        body: formData1,
        method: 'POST',
        headers:{
          'user-agent':'netdisk',
          'Referer':'https://pan.baidu.com/disk/home'
        }
        }
        )
        const json1 = await res.json()
        if(json1.errno == 0){
          return json1.randsk
        }
        else {
          return 1
        }
    }
    else{
      const res = await fetch(surl ? 'https://pan.baidu.com/s/1' + surl : `https://pan.baidu.com/share/link?uk=${uk}&shareid=${shareid}`,{
        redirect:"manual"
      })
      if(res.status == 302){
        return 1
      }else{
        const cookie = res.headers.get('set-cookie')
        if(cookie.includes('BDCLND=')){
          return cookie.match(/BDCLND\=(.+?)\;/)[1]
        }
        else{
          return false
        }
      }
    }
  }
  async function getSign(surl,randsk){
    if(randsk == 1){
      return 1
    }
    const res1 = await fetch(surl ? 'https://pan.baidu.com/s/1' + surl : `https://pan.baidu.com/share/link?uk=${uk}&shareid=${shareid}`,
    {
      method:'GET',
      headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.514.1919.810 Safari/537.36',
        'Cookie':'BDUSS=' + BDUSS + '; '
            +  'STOKEN=' + STOKEN + '; BDCLND=' + randsk
      }
    })
    const body = await res1.text()
    var re = /yunData.setData\(({.+)\);/
    var re2 = /locals.mset\(({.+)\);/
    if(body.match(re)){
      const json2 = JSON.parse(body.match(re)[1])
      return json2
    }
    else if(body.match(re2)){
      const json2 = JSON.parse(body.match(re2)[1])
      return json2
    }else{
      return 1
    }
  }
  async function getFileList(shareid,uk,randsk,dir){
    const res2 = await fetch('https://pan.baidu.com/share/list?app_id=250528&channel='
    + 'chunlei&clienttype=0&desc=0&num=100&order=name&page=1&root=' + (+!dir) + '&shareid=' + shareid + '&showempty=0&uk='
    + uk + (dir ? '&dir=' + encodeURIComponent(dir) : '') + '&web=1',{
      method:'GET',
      headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.514.1919.810 Safari/537.36',
        'Cookie':'BDUSS=' + BDUSS + ';'
            +  'STOKEN=' + STOKEN + '; BDCLND=' + randsk
      }
    })
    const body = await res2.text()
    return JSON.parse(body)
  }
  async function checkPwd(pwd){
  if(pwd != ""){
     return await verifyPwd(surl_1,pwd)
  }
  else{
    return await verifyPwd(surl_1)
  }
  }
  if (!randsk) {
    randsk = await checkPwd(pwd)
  }
  const json2 = await getSign(surl_1,randsk)
  let filecontent = ``
  if(json2 != 1){
    const fetchSign = await fetch('https://pan.baidu.com/share/tplconfig?surl=1'+surl_1+'&fields=sign,timestamp&channel=chunlei&web=1&app_id=250528&clienttype=0',{
    headers:{        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.514.1919.810 Safari/537.36',
        'Cookie':'BDUSS=' + BDUSS + '; '
            +  'STOKEN=' + STOKEN + '; BDCLND=' + randsk}
    })
    const signjson = JSON.parse(await fetchSign.text())
    const sign = signjson.data.sign
    const timestamp = signjson.data.timestamp
    const shareid = json2.shareid
    const uk = (json2.visitor_uk == undefined)? json2.share_uk : json2.uk 
    const filejson = await getFileList(shareid,uk,randsk,dir)
    if (filejson.errno) {
      return new Response(error + `
          <div class="alert alert-danger" role="alert">
      <h5 class="alert-heading">提示</h5>
      <hr>
      <p class="card-text">${filejson.show_msg || '提取码错误或文件失效'}</p>
      </div>` + error_div, { headers })
    }
    if (dir) {
      const dirParts = dir.split('/')
      filecontent += `<li class="list-group-item border-muted rounded text-muted py-2" style="margin-bottom: 10px">
        <i class="far fa-folder-open mr-2"></i>
        ${dirParts.map((e, i) => `<a href="javascript:void(0)" onclick="goToDir('${surl}', '${pwd}', '${randsk}', '${shareid}', '${uk}', '${dirParts.slice(0, i + 1).join('/')}')">${e}/</a>`).join('')}
        <span class="float-right"></span>
      </li>`
    }
    for(var i=0;i<filejson.list.length;i++){
      const file = filejson.list[i]
      if(file.isdir == 0){
filecontent += `<li class="list-group-item border-muted rounded text-muted py-2">
<i class="far fa-file mr-2"></i>
<a href="javascript:void(0)" onclick="dl('`+ file.fs_id + `',`+ timestamp +`,'`+ sign +`','` + randsk + `','`+shareid+`','`+ uk +`')">`+file.server_filename+`</a>
<span class="float-right">`+ formatBytes(file.size) +`</span>
</li>`
      }
      else {
filecontent += `<li class="list-group-item border-muted rounded text-muted py-2">
<i class="far fa-folder mr-2"></i>
<a href="javascript:void(0)" onclick="goToDir('${surl}', '${pwd}', '${randsk}', '${shareid}', '${uk}', '${file.path}')">`+file.server_filename+`</a>
<span class="float-right"></span>
</li>`
      }
      
    }
    let filefoot = `</ul>
</div>
</div>
</body>
</html>`
    return new Response(filebody+filecontent+filefoot, { headers })
  }
  else{
    return new Response(error + `
      <div class="alert alert-danger" role="alert">
<h5 class="alert-heading">提示</h5>
<hr>
<p class="card-text">提取码错误或文件失效</p>
</div>` + error_div, { headers })
    
  }

}
const landing = `
<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<style>
body {
background-image: url("https://pandownload.com/img/baiduwp/bg.png");
}

.logo-img {
width: 1.1em;
position: relative;
top: -3px;
}
</style>
<title>PanDownload网页版</title>
<style>
.form-inline input {
width: 500px;
}

.input-card {
position: relative;
top: 7.0em;
}

.card-header {
height: 3.2em;
font-size: 20px;
line-height: 2.0em;
}

form input,
form button {
height: 3em;
}
</style>
<script>
function validateForm() {
var link = document.forms["form1"]["surl"].value;
if (link == null || link == "") {
document.forms["form1"]["surl"].focus();
return false;
}
var uk = link.match(/uk=(\\d+)/);
var shareid = link.match(/shareid=(\\d+)/);
if (uk != null && shareid != null) {
document.forms["form1"]["surl"].value = "";
$("form").append('<input type="hidden" name="uk" value="' + uk[1] + '">');
$("form").append('<input type="hidden" name="shareid" value="' + shareid[1] + '">');
return true;
}
var surl = link.match(/surl=([A-Za-z0-9-_]+)/);
if (surl == null) {
surl = link.match(/1[A-Za-z0-9-_]+/);
if (surl == null) {
document.forms["form1"]["surl"].focus();
return false;
}
else {
surl = surl[0];
}
}
else {
surl = "1" + surl[1];
}
document.forms["form1"]["surl"].value = surl;
return true;
}
</script>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="${INDEX_URL}">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="${INDEX_URL}">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://github.com/TkzcM/baiduwp" target="_blank">GitHub</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<div class="col-lg-6 col-md-9 mx-auto mb-5 input-card">
<div class="card">
<div class="card-header bg-dark text-light">分享链接在线解析</div>
<div class="card-body">
<form name="form1" method="post" action="./" onsubmit="return validateForm()">
<div class="form-group my-2">
<input type="text" class="form-control" name="surl" placeholder="分享链接">
</div>
<div class="form-group my-4">
<input type="text" class="form-control" name="pwd" placeholder="提取码">
</div>
<button type="submit" class="mt-4 mb-3 form-control btn btn-success btn-block">打开</button>
</form>
<div class="text-center">
<a href="./rapid">秒传链接解析 (Beta)</a>
</div>
</div>
</div>
</div>
</div>
</body>
</html>
`
const helpbody = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<style>
  body {
    background-image: url("https://pandownload.com/img/baiduwp/bg.png");
  }

  .logo-img {
    width: 1.1em;
    position: relative;
    top: -3px;
  }
</style>
<meta name="referrer" content="never">
<title>下载链接使用方法</title>
<style>
    .alert {
      position: relative;
      top: 5em;
    }

    .alert-heading {
      height: 0.8em;
    }
  </style>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="${INDEX_URL}">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="${INDEX_URL}">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://github.com/TkzcM/baiduwp" target="_blank">GitHub</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<div class="row justify-content-center">
<div class="col-md-7 col-sm-8 col-11">`

const helptext = `
<div class="alert alert-primary" role="alert">
<h5 class="alert-heading">提示</h5>
<hr>
<p class="card-text">因百度限制，需修改浏览器UA后下载。<br>
<div class="page-inner">
<section class="normal" id="section-">
<h4>Motrix（PC推荐）</h4>
<ol>
<li>启动 Motrix</li>
<li>下载页面 推送到aria2 –&gt; 地址填入 http://127.0.0.1:16800/jsonrpc –&gt; 点击 Send</li>
</ol>
<h4>ADM Pro（Android推荐）</h4>
<ol>
<li>设置 –&gt; 下载中 –&gt; 浏览器标识 –&gt; 自定义 浏览器标识</li>
<li>填入： netdisk;11.4.5.14</li>
<li>切换到浏览器，长按“下载链接”，选择复制链接地址</li>
<li>在ADM中添加任务并开始</li>
</ol>
<h4>IDM</h4>
<ol>
<li>选项 -> 下载 -> 手动添加任务时使用的用户代理（UA）-> 填入 <b>netdisk;11.4.5.14</b></li>
<li>右键复制下载链接，在 IDM 新建任务，粘贴链接即可下载。</li>
</ol>
<h4>Chrome浏览器</h4>
<ol>
<li>安装浏览器扩展程序 <a href="https://chrome.google.com/webstore/detail/user-agent-switcher-for-c/djflhoibgkdhkhhcedjiklpkjnoahfmg" target="_blank">User-Agent Switcher for Chrome</a></li>
<li>右键点击扩展图标 -> 选项</li>
<li>New User-agent name 填入 百度网盘分享下载</li>
<li>New User-Agent String 填入 netdisk;11.4.5.14</li>
<li>Group 填入 百度网盘</li>
<li>Append? 选择 Replace</li>
<li>Indicator Flag 填入 Log，点击 Add 保存</li>
<li>保存后点击扩展图标，出现"百度网盘"，进入并选择"百度网盘分享下载"。</li>
</ol>
<blockquote>
<p>Chrome应用商店打不开或者其他Chromium内核的浏览器，<a href="http://pandownload.com/static/user_agent_switcher_1_0_43_0.crx" target="_blank">请点此下载</a></p>
<p><a href="https://appcenter.browser.qq.com/search/detail?key=User-Agent%20Switcher%20for%20Chrome&amp;id=djflhoibgkdhkhhcedjiklpkjnoahfmg%20&amp;title=User-Agent%20Switcher%20for%20Chrome" target="_blank">QQ浏览器插件下载</a></p>
</blockquote>
<h4>Pure浏览器（Android）</h4>
<ol>
<li>设置 –&gt; 浏览设置 -&gt; 浏览器标识(UA)</li>
<li>添加自定义UA：netdisk;11.4.5.14</li>
</ol>
<h4>Alook浏览器（IOS）</h4>
<ol>
<li>设置 -&gt; 通用设置 -&gt; 浏览器标识 -&gt; 移动版浏览器标识 -&gt; 自定义 -><br> 填入 <b>netdisk;11.4.5.14</b></li>
</ol>
</section>
</div>
</p>
</div>
`

const dbody = `<!DOCTYPE html>
<html lang="zh-CN">
<head>
<meta charset="utf-8">
<meta http-equiv="X-UA-Compatible" content="IE=edge,chrome=1"/>
<meta name="viewport" content="width=device-width, initial-scale=1">
<meta name="author" content="Ling Macker"/>
<meta name="description" content="PanDownload网页版,百度网盘分享链接在线解析工具"/>
<meta name="keywords" content="PanDownload,百度网盘,分享链接,下载,不限速"/>
<link rel="icon" href="https://pandownload.com/favicon.ico" type="image/x-icon"/>
<link rel="stylesheet" href="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/css/bootstrap.min.css">
<script src="https://cdn.staticfile.org/jquery/3.2.1/jquery.min.js"></script>
<script src="https://cdn.staticfile.org/popper.js/1.12.5/umd/popper.min.js"></script>
<script src="https://cdn.staticfile.org/limonte-sweetalert2/8.11.8/sweetalert2.all.min.js"></script>
<script src="https://cdn.staticfile.org/twitter-bootstrap/4.1.2/js/bootstrap.min.js"></script>
<script>
function utoa(str) {
  return window.btoa(unescape(encodeURIComponent(str)));
}
// base64 encoded ascii to ucs-2 string
function atou(str) {
  return decodeURIComponent(escape(window.atob(str)));
}
  function getCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for(var i=0;i < ca.length;i++) {
        var c = ca[i];
        while (c.charAt(0)==' ') c = c.substring(1,c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length,c.length);
    }
    return null;
}
$(function(){
  if(getCookie('aria2url') != null){
    $('#url').attr('value',atou(getCookie('aria2url')))
    if(getCookie('aria2token')!= null){
      $('#token').attr('value',atou(getCookie('aria2token')))
    }
  }
})
async function checkVer(){
let token = $('#token').val()
let aria2url = $('#url').val()
if(token != ""){
postVer = JSON.stringify({	
		  jsonrpc: '2.0',
		  method: 'aria2.getVersion',
		  id: 'baiduwp',
		  params: ['token:'+token]
		})}else{
postVer = JSON.stringify({	
		  jsonrpc: '2.0',
		  method: 'aria2.getVersion',
		  id: 'baiduwp',
		  params: []
		})}
const getVer = await fetch(aria2url, {
body: postVer,
method: 'POST',
headers:{'content-type':'text/json'}
}).catch((error) => {
  Swal.fire('Sorry~','Connect to aria2 failed','error')
});
if(await getVer != null)
	if(await getVer.status === 200)
	{
	Swal.fire('detected aria2 version '+JSON.parse(await getVer.text()).result.version,'Please click send','success')
}
else{
	Swal.fire('Sorry~','Connect to aria2 failed','error')}
	}
async function addUri(){
let token = $('#token').val()
let aria2url = $('#url').val()
let filename = $('#filename').text()
// Thanks to acgotaku/BaiduExporter
const httpurl = $('#http')[0].href
const httpsurl = $('#https')[0].href
const headerOption = ['User-Agent: netdisk;11.4.5.14']
let post
let postVer
if(token != ""){
postVer = JSON.stringify({	
		  jsonrpc: '2.0',
		  method: 'aria2.getVersion',
		  id: 'baiduwp',
		  params: ['token:'+token]
		})
post = JSON.stringify({jsonrpc:'2.0',id:'baiduwp',method:'aria2.addUri',params:["token:"+token,[httpurl,httpsurl],{header:headerOption,out:filename}]})
}
else{
postVer = JSON.stringify({	
		  jsonrpc: '2.0',
		  method: 'aria2.getVersion',
		  id: 'baiduwp',
		  params: []
		})
post = JSON.stringify({jsonrpc:'2.0',id:'baiduwp',method:'aria2.addUri',params:[[httpurl,httpsurl],{header:headerOption,out:filename}]})
}


const getVer = await fetch(aria2url, {
body: postVer,
method: 'POST',
headers:{'content-type':'text/json'}
}).catch((error) => {
  Swal.fire('Sorry~','Connect to aria2 failed','error')
});
if(await getVer != null)
	if(await getVer.status === 200)
	{
	Swal.fire('detected aria2 version '+JSON.parse(await getVer.text()).result.version,'sending request...','success')
	const sendLink = await fetch(aria2url, { body: post, method: 'POST',headers:{'content-type':'text/json'}}).catch((e)=>{Swal.fire('Sorry~',e,'error')})
	if(await sendLink != null)
		if(await sendLink.status === 200){
      Swal.fire('Sent successfully','Good Luck','success')
      document.cookie = 'aria2url='+utoa(aria2url) // add aria2 config to cookie
      if(token != "" && token != null){
        document.cookie = 'aria2token='+utoa(token)
      }
    }
		else{
	Swal.fire('Sorry~','Connect to aria2 failed','error')}
	}else{
	Swal.fire('Sorry~','Connect to aria2 failed','error')}
}
</script>
<style>
  body {
    background-image: url("https://pandownload.com/img/baiduwp/bg.png");
  }

  .logo-img {
    width: 1.1em;
    position: relative;
    top: -3px;
  }
</style>
<meta name="referrer" content="never">
<title>提示</title>
<style>
    .alert {
      position: relative;
      top: 5em;
    }

    .alert-heading {
      height: 0.8em;
    }
  </style>
</head>
<body>
<nav class="navbar navbar-expand-sm bg-dark navbar-dark">
<div class="container">
<a class="navbar-brand" href="${INDEX_URL}">
<img src="https://pandownload.com/img/baiduwp/logo.png" class="img-fluid rounded logo-img mr-2" alt="LOGO">PanDownload
</a>
<button class="navbar-toggler border-0" type="button" data-toggle="collapse" data-target="#collpase-bar">
<span class="navbar-toggler-icon"></span>
</button>
<div class="collapse navbar-collapse" id="collpase-bar">
<ul class="navbar-nav">
<li class="nav-item">
<a class="nav-link" href="${INDEX_URL}">主页</a>
</li>
<li class="nav-item">
<a class="nav-link" href="https://github.com/TkzcM/baiduwp" target="_blank">GitHub</a>
</li>
</ul>
</div>
</div>
</nav>
<div class="container">
<div class="row justify-content-center">
<div class="col-md-7 col-sm-8 col-11">`

const dfooter = `
<div class="modal fade" id="exampleModal" tabindex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog" role="document">
    <div class="modal-content">
      <div class="modal-header">
        <h5 class="modal-title" id="exampleModalLabel">Send to aria2</h5>
        <button type="button" class="close" data-dismiss="modal" aria-label="Close">
          <span aria-hidden="true">&times;</span>
        </button>
      </div>
      <div class="modal-body">
	  <div class="form-group">
	  <p><label class="control-label">Json-RPC Url</label>
        <input name="url" id="url" class="form-control" placeholder="http://127.0.0.1:6800/jsonrpc"></p>
      </div>
	  <div class="form-group">
	  	  <p><label class="control-label">Token</label>
        <input name="token" id="token" class="form-control" placeholder="If none keep empty"></p>
	  </div>
	  </div>
      <div class="modal-footer">
	  <button type="button" class="btn btn-primary" onclick="addUri()" data-dismiss="modal">Send</button>
	  <button type="button" class="btn btn-success" onclick="checkVer()">Check Version</button>
        <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
      </div>
    </div>
  </div>
</div>
</div>
</div>
</div>
</body>
</html>`

const dlRapid = async request => {
  const form = await request.formData()
  const md5 = form.get('md5')
  const slicemd5 = form.get('slicemd5')
  const flength = form.get('flength')
  const filename = form.get('name')
  let dresult
  const header = {
    'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.514.1919.810 Safari/537.36',
    'Cookie':'BDUSS=' + SVIPBDUSS + '; '
    +  'STOKEN=' + SVIPSTOKEN + ';'
  }
  const getbdstoken = await fetch('http://pan.baidu.com/api/gettemplatevariable?fields=[%22bdstoken%22]',{
    headers:header
  })
  const re = /\"([A-Za-z0-9]{32})/
  let bdstoken
  try{
    bdstoken = (await getbdstoken.text()).match(re)[1]
  }
  catch{
    dresult = `<div class="alert alert-danger" role="alert">
    <h5 class="alert-heading">获取下载链接失败</h5>
    <hr>
    <p class="card-text">Get bdstoken Failed</p>
    </div>`
    return new Response(dbody+dresult+dfooter,{headers:{'Content-Type':'text/html;charset=UTF-8'}})
  }
  const formData = new FormData()
  formData.append('content-md5',md5)
  formData.append('slice-md5',slicemd5)
  formData.append('path','/baiduwp/'+new Date().getTime()+'/'+filename)
  formData.append('content-length',flength)

  const saveFile = await fetch('http://pan.baidu.com/api/rapidupload?app_id=250528&bdstoken='+bdstoken+'&channel=chunlei&clienttype=0&rtype=1&web=1',{
    headers:header,
    method:'POST',
    body:formData
  })
  const fjson = JSON.parse(await saveFile.text())
  if(fjson['errno'] === 0){
    const path = fjson['info']['path']
    const timestamp = Math.round(new Date().getTime() / 1000)
    const getRealLink = await fetch('http://d.pcs.baidu.com/rest/2.0/pcs/file?method=locatedownload&app_id=250528&path='+encodeURIComponent(path),{
      headers:{
        'user-agent': 'netdisk;11.4.5.14',
        'Cookie': 'BDUSS=' + SVIPBDUSS + ';'
      },
      method: 'GET'
    })
    const dldata = JSON.parse(await getRealLink.text())
    if(getRealLink.status == 200){
      const realLink = 'qdall01.baidupcs.com' + dldata['path']
        const getTrueLink = await fetch('http://'+realLink,{
          headers:{
            'user-agent': 'netdisk;11.4.5.14'
          },
          redirect:"manual" 
        })
        if(getTrueLink.status == 302){
        const trueLink = getTrueLink.headers.get('Location').substring(7)
    dresult = `<div class="alert alert-primary" role="alert">
      <h5 class="alert-heading" id="alert">获取下载链接成功</h5>
      <hr>
      文件名：<b id="filename">${filename}</b>
      <p class="card-text" id="text">推荐使用aria2c/Motrix<br>
      <a id="http" href="https://`+trueLink+`" target=_blank>下载链接(推荐)</a>
      <a id="https" href="https://`+realLink+`" target=_blank>下载链接(备用)</a>
      <br><br>
      <a href=javascript:void(0) id="aria2" data-toggle="modal" data-target="#exampleModal">推送到Aria2</a>
      <br><br>
      <a href="./help" id="help">下载链接使用方法（必读）</a></p>
      </div>`
    }
    else{
      dresult = `<div class="alert alert-danger" role="alert">
      <h5 class="alert-heading">获取下载链接失败</h5>
      <hr>
      <p class="card-text">Get Real link Failed</p>
      </div>`
    }
  }
    else{
      dresult = `<div class="alert alert-danger" role="alert">
      <h5 class="alert-heading">获取下载链接失败</h5>
      <hr>
      <p class="card-text">Get Direct Link Failed</p>
      </div>`
    }
    return new Response(dbody+dresult+dfooter, { headers: {'Content-Type': 'text/html;charset=UTF-8'} })
  }
  else {
    dresult = `<div class="alert alert-danger" role="alert">
    <h5 class="alert-heading">获取下载链接失败</h5>
    <hr>
    <p class="card-text">Save File Failed</p>
    </div>`
    return new Response(dbody+dresult+dfooter,{headers:{'Content-Type':'text/html;charset=UTF-8'}})
  }
}

const getVideo = async request => {
  const ua = request.headers.get('User-Agent')
  let previewScript
  const form2 = await request.formData()
  const fs_id = form2.get('fs_id')
  const timestamp = form2.get('time')
  const sign = form2.get('sign')
  const randsk = form2.get('randsk')
  const share_id = form2.get('share_id')
  const uk = form2.get('uk')
  const filetype = form2.get('filetype')
  async function getDlink(fs_id,timestamp,sign,randsk,share_id,uk){
    var formData2 = new FormData()
    formData2.append('encrypt',0)
    formData2.append('extra','{"sekey":"'+decodeURIComponent(randsk)+'"}')
    formData2.append('fid_list','['+fs_id+']')
    formData2.append('primaryid',share_id)
    formData2.append('uk',uk)
    formData2.append('product','share')
    formData2.append('type','nolimit')
    const res3 = await fetch('https://pan.baidu.com/api/sharedownload?app_id=250528&channel=chunlei&clienttype=12&sign='+sign+'&timestamp='+timestamp+'&web=1',{
      body:formData2,
      headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.514.1919.810 Safari/537.36',
        'Cookie':'BDUSS=' + BDUSS + ';'
            +  'STOKEN=' + STOKEN + '; BDCLND=' + randsk
      },
      method:'POST'
      }
    )
    return JSON.parse(await res3.text())
  }
  const json3 = await getDlink(fs_id,timestamp,sign,randsk,share_id,uk)
  if(json3.errno == 0){
  const dlink = json3.list[0].dlink
  const getRealLink = await fetch(dlink,{
    headers:{
      'user-agent': ua,
      'Cookie': 'BDUSS=' + SVIPBDUSS + ';'
    },
    redirect:"manual"
  })
  const dldata = JSON.parse(await getRealLink.text())
  if(dldata.error_code == 302){
    const realLink = getRealLink.headers.get('Location').substring(7)
    previewScript = `$(function(){
      const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
            url: 'https://`+realLink+`',
       },
    logo: 'https://pandownload.com/img/baiduwp/logo.png',
    })
    })`
  }
  else{
    previewScript = `$(function(){
      const dp = new DPlayer({
        container: document.getElementById('dplayer'),
        video: {
            url: 'failed',
       },
    logo: 'https://pandownload.com/img/baiduwp/logo.png',
    })
    })`
  }
}
else{
  previewScript = `$(function(){
    const dp = new DPlayer({
      container: document.getElementById('dplayer'),
      video: {
          url: 'failed',
     },
  logo: 'https://pandownload.com/img/baiduwp/logo.png',
  })
  })`
}
  return new Response(previewHeader+previewScript+previewFooter, { headers: {'Content-Type': 'text/html;charset=UTF-8'} })
}

const download = async request => {
  const form2 = await request.formData()
  const fs_id = form2.get('fs_id')
  const timestamp = form2.get('time')
  const sign = form2.get('sign')
  const randsk = form2.get('randsk')
  const share_id = form2.get('share_id')
  const uk = form2.get('uk')
  async function getDlink(fs_id,timestamp,sign,randsk,share_id,uk){
    var formData2 = new FormData()
    formData2.append('encrypt',0)
    formData2.append('extra','{"sekey":"'+decodeURIComponent(randsk)+'"}')
    formData2.append('fid_list','['+fs_id+']')
    formData2.append('primaryid',share_id)
    formData2.append('uk',uk)
    formData2.append('product','share')
    formData2.append('type','nolimit')
    const res3 = await fetch('https://pan.baidu.com/api/sharedownload?app_id=250528&channel=chunlei&clienttype=12&sign='+sign+'&timestamp='+timestamp+'&web=1',{
      body:formData2,
      headers:{
        'User-Agent':'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/114.514.1919.810 Safari/537.36',
        'Cookie':'BDUSS=' + BDUSS + ';'
            +  'STOKEN=' + STOKEN + '; BDCLND=' + randsk
      },
      method:'POST'
      }
    )
    return JSON.parse(await res3.text())
  }
  const json3 = await getDlink(fs_id,timestamp,sign,randsk,share_id,uk)
  let dresult
  if(json3.errno == 0){
  const dlink = json3.list[0].dlink
  const filename = json3.list[0]['server_filename']
  const getRealLink = await fetch(dlink,{
    headers:{
      'user-agent': 'netdisk;11.4.5.14',
      'Cookie': 'BDUSS=' + SVIPBDUSS + ';'
    },
    redirect:"manual"
  })
  const dldata = JSON.parse(await getRealLink.text())
  if(dldata.error_code == 302){
  const realLink = getRealLink.headers.get('Location').substring(7)
  dresult = `<div class="alert alert-primary" role="alert">
    <h5 class="alert-heading">获取下载链接成功</h5>
    <hr>
    文件名：<b id="filename">${filename}</b>
    <p class="card-text"><a id="http" href="http://`+realLink+`" target=_blank>下载链接(http)</a>
    <a id="https" href="https://`+realLink+`" target=_blank>下载链接(https)</a>
    <br><br>
    <a href=javascript:void(0) data-toggle="modal" data-target="#exampleModal">推送到Aria2</a>
    <br><br>
    <a href="./help">下载链接使用方法（必读）</a></p>
    </div>`
  }
  else{
    dresult = `<div class="alert alert-danger" role="alert">
    <h5 class="alert-heading">获取下载链接失败</h5>
    <hr>
    <p class="card-text">未知错误</p>
    </div>`
  }
  }
  else{
      dresult = `<div class="alert alert-danger" role="alert">
    <h5 class="alert-heading">获取下载链接失败</h5>
    <hr>
    <p class="card-text">未知错误</p>
    </div>`
  }

  return new Response(dbody+dresult+dfooter, { headers: {'Content-Type': 'text/html;charset=UTF-8'} })
}
// https://stackoverflow.com/questions/15900485/correct-way-to-convert-size-in-bytes-to-kb-mb-gb-in-javascript
function formatBytes(a,b=2){if(0===a)return"0 Bytes";const c=0>b?0:b,d=Math.floor(Math.log(a)/Math.log(1024));return parseFloat((a/Math.pow(1024,d)).toFixed(c))+" "+["Bytes","KB","MB","GB","TB","PB","EB","ZB","YB"][d]}
function parseAuthHeader(str) {
  if (!str) {
    return null
  }

  try {
    const token = (str.match(/^\s*BASIC\s+(.+)\s*$/i) || [])[1]
    const [, user, pass] = atob(token).match(/^([^:]*):(.*)$/)
    return { user, pass }
  } catch (error) {
    return null
  }
}
async function handleRequest(request) {
  let response
  const { url, headers } = request
  if (AUTH_USER || AUTH_PASS) {
    const credentials = parseAuthHeader(headers.get('Authorization'))
    if (!credentials || credentials.user !== AUTH_USER || credentials.pass !== AUTH_PASS) {
      return new Response('Unauthorized', {
        status: 401,
        headers: {
          'WWW-Authenticate': 'Basic realm="Not Authorized", charset="UTF-8"'
        }
      })
    }
  }
  if (request.method === 'POST') {
    if(url.includes('download')){
      response = await download(request)
    }
    else if(url.includes('preview')){
      response = await getVideo(request)
    }
    else if(url.includes('rapiddl')){
      response = await dlRapid(request)
    }
    else{
      response = await generate(request)
    }
    
  } else {
    if(url.includes('help')){
      response = new Response(helpbody+helptext+dfooter, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } })
    }
    else if(url.includes('/s/1') || url.includes('/init?surl=')){
      response = await parseLink(request)
    }
    else if(url.includes('rapid')){
      response = new Response(rapidhtml, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } })
    }
    else{
    response = new Response(landing, { headers: { 'Content-Type': 'text/html;charset=UTF-8' } })
    }
  }
  return response
}

addEventListener('fetch', event => {
  event.respondWith(handleRequest(event.request))
})
