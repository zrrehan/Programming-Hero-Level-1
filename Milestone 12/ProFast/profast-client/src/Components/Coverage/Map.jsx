import { Marker, Popup } from 'react-leaflet';
import { MapContainer } from 'react-leaflet/MapContainer'
import { TileLayer } from 'react-leaflet/TileLayer'
import { useMap, useMapEvents } from 'react-leaflet/hooks'
import 'leaflet/dist/leaflet.css';
import { warehouse } from './warehouses';
import { useState } from 'react';

function Map({ position, zoom, setMapRef }) {
    // const position = [23.8041, 90.4152];
    console.log(position, zoom);
    

    // const mapEvents = useMapEvents({
    //     zoomend: () => {
    //         setZoomLevel(mapEvents.getZoom());
    //     },
    // });

    return(
        <div>
            <div className='h-[800px] rounded-4xl shadow-2xl overflow-hidden mt-16'>
                <MapContainer  
                    whenReady={({ target }) => setMapRef(target)}
                    center={position} zoom={parseInt(zoom)} scrollWheelZoom={false} style={{ height: '800px', width: '100%' }} >
                    <TileLayer
                        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    />
                    {
                        warehouse.map((singleWarehouse => {
                            return <Marker position={[singleWarehouse.latitude, singleWarehouse.longitude]}>
                                <Popup>
                                    {singleWarehouse.city}
                                </Popup>
                            </Marker>
                        }))
                    }
                </MapContainer>
            </div>
        </div>
    )
}

export default Map;