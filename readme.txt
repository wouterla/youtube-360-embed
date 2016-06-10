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

Installing "360-YouTube-Embed" can be done either by searching for "YouTube-360-Embed" via the "Plugins > Add New" screen in your WordPress dashboard, or by using the following steps:

1. Download the plugin via WordPress.org
1. Upload the ZIP file through the 'Plugins > Add New > Upload' screen in your WordPress dashboard
1. Activate the plugin through the 'Plugins' menu in WordPress

== Screenshots ==

1. A 360 Video in desktop mode
2. A 360 Video in mobile mode
3. The code to embed the video

== Frequently Asked Questions ==

= How do I embed a video? =

To embed a video, add (in text mode) something like the following html:

<div id="video" youtube_id="mUKHOnN8vQ8"></div>

The thumbnail is automatically retrieved from youtube, but can be overridden by
adding an 'img' attribute to the div tag.

== Changelog ==

= 1.0 =
* 2016-06-10
* Initial release

== Upgrade Notice ==

= 1.0 =
* 2016-06-06
* Initial release
