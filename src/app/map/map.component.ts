import { Component } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    imports: [GoogleMap, MapMarker]
})
export class MapComponent {
  position: google.maps.LatLngLiteral =  {
    lat: 38.480052,
    lng: 22.494062
  };
  options: google.maps.MapOptions = {
    center: { lat: 39.0742, lng: 21.8243 },
    zoom: 6
  };
}
