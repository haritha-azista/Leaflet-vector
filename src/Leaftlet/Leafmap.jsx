
import React from 'react'
import { MapContainer, Marker, Polyline, Polygon, Popup, Circle, CircleMarker, TileLayer, Rectangle, useMapEvents, Tooltip } from "react-leaflet";
import { useState } from 'react';
import 'leaflet-geometryutil';
const Leafmap = () => {

  const [lat, setLat] = useState(0)
  const [lng, setLng] = useState(0)
  const [mark, showMark] = useState(false);

  const position = [17.3860, 78.1026];
  const zoomLevel = 9;

  const polyline = [
    [17.505, 78.12309],
    [17.505, 99.1234],
    [17.505, 78.4652],
  ];

  const polygon = [
    [19.0760, 72.8777],
    [28.6139, 77.2090],
    [17.505, 78.4652],
  ];
  const rectangle = [
    [25.6139, 77.2090],
    [22.5726, 88.3639],
  ];
  const fillBlue = { fillColor: 'blue', color: 'red', weight: '1' }
  const fillpurple = { fillColor: 'purple' }
  const fillRed = { fillColor: 'green' }

  function Mycomponent() {
    const map = useMapEvents({
      click: (e) => {
        showMark(true)
        console.log(e.latlng);
        const { lat, lng } = e.latlng;
        setLat(lat);
        setLng(lng);
        console.log(lat, lng);
      }
    })
    return null
  }

  return (
    <div>
      <MapContainer
        center={position}
        zoom={zoomLevel}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Polyline pathOptions={fillBlue} positions={polyline} />
        <Polygon pathOptions={fillpurple} positions={polygon} />
        <Rectangle pathOptions={fillRed} bounds={rectangle} />
        <Circle center={position} pathOptions={fillpurple} radius={200} />
        <CircleMarker center={[13.0827, 80.2707]} pathOptions={fillRed} radius={20}>
          <Popup>Popup in CircleMarker</Popup>
        </CircleMarker>
        {mark && (<Marker position={[lat, lng]}>
          <Popup>you clicked at {lat} and {lng}</Popup>
          <Tooltip>{lat} and {lng}</Tooltip>
        </Marker>)}
        <Mycomponent />
      </MapContainer>
    </div>
  )
}

export default Leafmap