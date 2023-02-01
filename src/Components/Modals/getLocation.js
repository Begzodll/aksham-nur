import {ContainerGetLocation, LocationBtn, MapStyle} from "./ModalStyle/locationStyle";
import {ModalBlock, ModalCard} from "./ModalStyle/locationStyle";

import {
    YMaps,
    Map,
    ZoomControl,
    FullscreenControl,
    SearchControl,
    GeolocationControl,
    Placemark
} from "react-yandex-maps";
import React, {useState} from "react";

const GetLocation = ({toggle}) => {

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);

    const center = {
        center: [41.2825125, 69.1392826],
        zoom: 9
    };

    const onMapClick = (e) => {
        setSelectedLocation(e)
        console.log(selectedLocation)
    };

    const getLocation = () => {
        fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en')
            .then((res) => res.json())
            .then((data) => setCurrentLocation(data))
            .catch(err => console.error(err))
    };

    return (
        <div>
            {
                toggle ?
                    <ContainerGetLocation>
                        <ModalBlock>
                            <ModalCard>
                                <MapStyle>
                                    <YMaps >
                                        <Map
                                            modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                                            onClick={(e) => onMapClick(e._sourceEvent.originalEvent.coords)}
                                            state={center}
                                            style={{width:"100%",height:'auto'}}
                                        >
                                            {selectedLocation ? <Placemark geometry={selectedLocation}/> : null}
                                            <ZoomControl/>
                                            <FullscreenControl/>
                                            <SearchControl/>
                                            <GeolocationControl/>
                                        </Map>
                                    </YMaps>
                                    <LocationBtn onClick={getLocation}>Meni izlash</LocationBtn>
                                </MapStyle>
                            </ModalCard>
                        </ModalBlock>
                    </ContainerGetLocation> : ""
            }
        </div>
    )
}
export default GetLocation