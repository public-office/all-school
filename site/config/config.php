<?
return [
  'debug' => true,
  'markdown' => [
    'extra' => true
  ],
  'panel.install' => true,
  'panel' => [
    'css' => 'public/css/custom-panel.css'
  ],
  'url' => function () {
    if (isset($_SERVER['HTTP_X_FORWARDED_HOST'])) :
      return $_SERVER['HTTP_X_FORWARDED_PROTO'] . '://' . $_SERVER['HTTP_X_FORWARDED_HOST'] . '/content';
    else :
      $scheme = isset($_SERVER['HTTPS']) ? 'https' : 'http';
      return $scheme . '://' . $_SERVER['HTTP_HOST'];
    endif;
  }
];