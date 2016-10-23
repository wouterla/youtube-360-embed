window.isMobileOrTablet = function() {
  var check = false;
  (function(a){if(/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino|android|ipad|playbook|silk/i.test(a)||/1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0,4)))check = true})(navigator.userAgent||navigator.vendor||window.opera);
  return check;
}

window.addVideos = function() {
  // If ID is set, just do the one video
  if (document.getElementById("video")) {
    addVideo(document.getElementById("video"));
  }
  // if not, let's find all video's by classname
  var containers = document.getElementsByClassName("360video");
  for (var i = 0; i < containers.length; i++) {
      addVideo(containers[i]);
  }
}

window.addVideo = function(container) {
  var youtube_id = container.getAttribute("youtube_id");
  var image_url;

  // Fallback to default youtube thumbnail if none is given
  if (container.getAttribute("img")) {
   image_url = container.getAttribute("img");
 } else {
   image_url = "http://img.youtube.com/vi/" + youtube_id + "/hqdefault.jpg"
 }

  var video;
  if(window.isMobileOrTablet()) {
    video = window.createVideoLink(youtube_id, image_url);
  } else {
    video = window.createEmbeddedVideo(youtube_id);
  }

  container.setAttribute("style", "display: block;");

  container.appendChild(video);
}

window.createEmbeddedVideo = function(youtube_id) {
  var youtube_iframe = document.createElement("iframe");
  youtube_iframe.setAttribute("src", "https://www.youtube.com/embed/" + youtube_id);
  youtube_iframe.setAttribute("width", "100%");
  youtube_iframe.setAttribute("height", "568");
  youtube_iframe.setAttribute("frameborder", "0");
  youtube_iframe.setAttribute("allowfullscreen", "allowfullscreen");

  return youtube_iframe;
}

window.createVideoLink = function(youtube_id, imgUrl) {

  var youtubeLink = document.createElement("a");
  youtubeLink.setAttribute("href", "https://www.youtube.com/watch?v=" + youtube_id);
  youtubeLink.setAttribute("rel", "attachment");

  var imgTag = document.createElement("img");
  imgTag.setAttribute("id", "link-image");
  imgTag.setAttribute("src", imgUrl);
  imgTag.setAttribute("width", "100%");
  imgTag.setAttribute("height", "568");
  imgTag.setAttribute("class", "alignnone size-full");

  var playButton = document.createElement("div");
  playButton.setAttribute("id", "play-button");

  youtubeLink.appendChild(imgTag);
  youtubeLink.appendChild(playButton);

  return youtubeLink;
}

window.onload = function() {
  window.addVideos();
}
