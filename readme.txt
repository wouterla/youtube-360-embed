=== 360-YouTube-Embed ===
Contributors: wouterla
Tags: wordpress, youtube, 360, vr
Requires at least: 3.9
Tested up to: 4.5.2
Stable tag: 1.0
License: GPLv2 or later
License URI: http://www.gnu.org/licenses/gpl-2.0.html

Embed YouTube 360 Video's easily, replacing embedded video with thumbnail and link for mobile devices.

== Description ==

YouTube 260 video's work well embedded in wordpress on the desktop, but on mobile
show the 'flat' equirectangular view instead of the 360/VR view. This plugin checks
if the visitor is on a mobile device, and if so will replace the embedded video with
a thumbnail image, overlayed with a youtube play button, that links to the youtube video.
This will start the youtube app on mobile devices, which shows the 360 video as it was
intended.

== Installation ==

This plugin is not available on WordPress.org, so you'll have to manually install.
Simply create a zip of the entire content of the repository (including the
containing directory: zip -r youtube-360-embed.zip youtube-360-embed), and upload
that to your wordpress installation via the install new plugin functionality.

== Screenshots ==

1. A 360 Video in desktop mode
2. A 360 Video in mobile mode
3. The code to embed the video

== Frequently Asked Questions ==

= How do I embed a video? =

To embed a video, add (in text mode) something like the following html:

<div id="video" youtube_id="mUKHOnN8vQ8"></div>

The thumbnail is automatically retrieved from youtube, but can be overridden by
adding an 'img' attribute to the div tag pointing to the url of the image you
want to use.

== Changelog ==

= 1.0 =
* 2016-06-10
* Initial release

== Upgrade Notice ==

= 1.0 =
* 2016-06-06
* Initial release
