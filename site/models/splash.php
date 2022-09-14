<?
class SplashPage extends DefaultPage
{
  public function jsonSite()
  {
    return [
      'title' => (string)$this->site()->title(),
      'description' => (string)$this->site()->description(),
      'social' => [
        'facebook' => (string)$this->site()->facebook(),
        'twitter' => (string)$this->site()->twitter(),
        'instagram' => (string)$this->site()->instagram()
      ]
    ];
  }

  public function jsonPage($data)
  {
    return json_encode([
      'site' => $this->jsonSite(),
      'page' => $data
    ]);
  }

  public function jsonImage($field)
  {
    return $field ? [
      'original' => (string)$field->mediaUrl(),
      'caption' => (string)$field->caption()
    ] : null;
  }

  public function json()
  {
    return $this->jsonPage([
      'masthead' => (string)$this->masthead(),
      'marquee' => (string)$this->marquee(),
      'access' => (string)$this->access(),
      'image' => $this->jsonImage($this->image())
    ]);
  }
}
