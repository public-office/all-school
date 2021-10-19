<? snippet('header') ?>

<div class="marquee">
  All School is a platform by NextWave exploring new artist-led learning experiences; hosting a mix of content including talks, livestreams, videos and downloable resources. Subscribe here.
</div>

<div class="hero">
  <p><a style="text-decoration: none" href="<?= url() ?>">All School</a> is a platform by <a href="https://nextwave.org.au" target="_blank">NextWave</a> exploring new artist-led learning experiences; hosting a mix of content including talks, livestreams, videos and downloable resources.</p>

  <p><a href="#">Subscribe here</a>.</p>
</div>

<div class="disc">
  <?= file_get_contents('assets/images/disc.svg') ?>
</div>

<div class="pane">
  <div class="pane__content">
    <p><iframe width="560" height="315" src="https://www.youtube-nocookie.com/embed/XyXqOlhtENk?controls=0" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe></p>
    <p>All School is a values-driven organisation and industry leader, advocating for cultural inclusion, broad accessibility and best practice in environmental sustainability, with deep respect for the traditional custodians of the lands and waters that sustain us, Aboriginal and Torres Strait Islander people.</p>
    <p>For All School updates, follow us on our socials (<a href="#">FB</a>, <a href="#">IG</a> or <a href="#">TW</a>) and/or subscribe to our newsletter <a href="#">here</a></p>

    <p>All School<br />Brunswick Mechanics Institute<br />270 Sydney Road<br />Brunswick VIC 3056</p>
    <p>hi@allschool.org.au</p>
  </div>
</div>

<? if ($heroImg = $page->images()->first()) : ?>
  <figure class="hero-img">
    <?= $heroImg ?>
  </figure>
<? endif ?>

<footer>
  <div>
    <figcaption>Vivamus quis tincidunt dolor, ac tincidunt ipsum. Quisque ornare varius sem. Suspendisse hendrerit sapien risus, nec tempus massa aliquet at. Integer non hendrerit justo. Morbi feugiat ac orci ut tincidunt. Maecenas ac volutpat dolor, pharetra vulputate justo. Mauris venenatis ipsum quam</figcaption>
    <nav class="caps">
      <a href="/">Access</a>
      <a href="/">Auslan</a>
      <a href="/">Screen options</a>
    </nav>
  </div>
  <div>
    <nav class="caps">
      <a href="/">FB</a>
      <a href="/">IG</a>
      <a href="/">TW</a>
    </nav>
  </div>
  <div>
    <nav class="caps">
      <a href="/">Chatbot</a>
    </nav>
  </div>
</footer>

<? snippet('footer') ?>