<template>
  <footer>
    <div>
      <p>
        Follow Us
        <a href="https://www.facebook.com/California.Christ.Community.Church">
          <i class="fa fa-facebook-square"></i>
        </a>
        <a href="https://www.instagram.com/c4ministry">
          <i class="fa fa-instagram"></i>
        </a>
        <a href="https://vimeo.com/c4ministry">
          <i class="fa fa-vimeo-square"></i>
        </a>
        <iframe src="https://www.facebook.com/plugins/like.php?href=https%3A%2F%2Fwww.facebook.com%2Fcalifornia.christ.community.church%2F&width=83&layout=button_count&action=like&show_faces=false&share=false&height=26&appId" width="83" height="26" style="vertical-align:bottom" scrolling="no" frameborder="0" allowTransparency="true"></iframe>
      </p>
      <p>
        <i class="fa fa-clock-o"></i> Sunday Service begins at
        <strong>12:30pm</strong>
      </p>
      <p>
        <i class="fa fa-map-marker"></i> Our church is located at
        <a href="https://www.google.com/maps/place/8381+Katella+Ave,+Stanton,+CA+90680/@33.8033779,-117.9883389,17z/data=!3m1!4b1!4m2!3m1!1s0x80dd291d79475c01:0x6526723d8f95e53c" target="_blank">8381 Katella Ave Suite G, Stanton, CA 90680</a>. Use this form to get directions on Google Maps:</p>
      <div class="form-group">
        <form class="form-inline" role="form" name="directions" action="http://maps.google.com/maps" method="get" target="_blank">
          <input type="hidden" name="daddr" value="8381 Katella Ave, Stanton, CA 90680">
          <input type="hidden" name="hl" value="en">
          <div class="form-group">
            <input type="text" name="saddr" id="saddr" value="" class="form-control" placeholder="Enter your address">
          </div>
          <button type="submit" class="btn btn-primary">Submit</button>
        </form>
      </div>
    </div>
    <div class="col-sm-6 col-xs-12">
      <a href="https://www.google.com/maps/place/8381+Katella+Ave,+Stanton,+CA+90680/@33.8033779,-117.9883389,17z/data=!3m1!4b1!4m2!3m1!1s0x80dd291d79475c01:0x6526723d8f95e53c" target="_blank">
        <img border="0" src="http://maps.googleapis.com/maps/api/staticmap?center=8381+Katella+Ave,+Stanton,+CA+90680&amp;markers=color:red%7C8381+Katella+Ave,+Stanton,+CA+90680&amp;zoom=16&amp;size=1000x200" alt="8381+Katella+Ave,+Stanton,+CA+90680">
      </a>
    </div>
    <div class="col-xs-12 text-center copyright">
      <p>Version 0.0.1 &copy; Copyright 2017. California Christ Community Church. All rights reserved.</p>
    </div>
  </footer>
</template>

<style>
footer {
  background: #eee;
  padding: 50px 0 0;
}

footer a {
  color: #555;
}

footer a:active,
footer a:focus,
footer a:hover {
  color: #222;
}

footer .btn-primary {
  background: #555;
  border-color: #555;
}

footer .btn-primary:active,
footer .btn-primary:focus,
footer .btn-primary:hover {
  background: #222;
  border-color: #222;
}

.copyright {
  border-top: 1px solid #ccc;
  margin-top: 50px;
}

.copyright h4 {
  font-family: 'Pacifico', cursive;
  color: #ae1016;
  font-size: 30px;
  text-align: center;
}

.copyright p {
  color: #999;
  font-family: "Source Sans Pro", sans-serif;
  font-size: 12px;
  padding: 20px 0;
  text-transform: uppercase;
}
</style>
