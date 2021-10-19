<?
function css_asset($path) {
  if(!file_exists($path)) return;

  $digest = sha1_file($path);
  return css($path.'?v='.$digest);
}

function js_asset($path) {
  if(!file_exists($path)) return;

  $digest = sha1_file($path);
  return js($path.'?v='.$digest);
}
?>