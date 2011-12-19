<?php
// $Id: media-youtube-video.tpl.php,v 1.1.2.1 2011/01/05 21:06:57 aaron Exp $

/**
 * @file media_youtube/includes/themes/media-youtube-video.tpl.php
 *
 * Template file for theme('media_youtube_video').
 *
 * Variables available:
 *  $uri - The uri to the YouTube video, such as youtube://v/xsy7x8c9.
 *  $video_id - The unique identifier of the YouTube video.
 *  $width - The width to render.
 *  $height - The height to render.
 *  $autoplay - If TRUE, then start the player automatically when displaying.
 *  $fullscreen - Whether to allow fullscreen playback.
 */
?>
<div class="media-youtube-outer-wrapper" id="media-youtube-<?php print $id; ?>">
  <div class="media-youtube-preview-wrapper" id="<?php print $wrapper_id; ?>">
    <?php print $output; ?>
  </div>
</div>
