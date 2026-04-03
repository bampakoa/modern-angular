import { ChangeDetectionStrategy, Component, signal } from '@angular/core';
import { GoogleMap, MapMarker } from '@angular/google-maps';

@Component({
    selector: 'app-map',
    templateUrl: './map.component.html',
    styleUrls: ['./map.component.css'],
    imports: [GoogleMap, MapMarker],
    changeDetection: ChangeDetectionStrategy.OnPush
})
export class MapComponent {
  readonly position = signal<google.maps.LatLngLiteral>({
    lat: 38.480052,
    lng: 22.494062
  });
  readonly options = signal<google.maps.MapOptions>({
    center: { lat: 39.0742, lng: 21.8243 },
    zoom: 6
  });
}
