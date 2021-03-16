let map;

function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    //center: { lat: -34.397, lng: 150.644 },
    center: { lat: 52.15, lng: 0.53 },
    zoom: 8,
  });
  const image = "UONLogo.png";
   const uonMarker = new google.maps.Marker({
    position: { lat: 52.2312, lng: -0.8854 },
    map,
    icon: image,
  });
}