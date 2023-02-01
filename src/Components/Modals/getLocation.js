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
import React, {useEffect, useState} from "react";

const GetLocation = ({toggle}) => {

    const [selectedLocation, setSelectedLocation] = useState(null);
    const [currentLocation, setCurrentLocation] = useState(null);
    const [findMe, setFindMe] = useState(null)
    const options = {
        center: findMe,
        zoom: 9
    };
    
    useEffect(()=>{
        if(currentLocation == null){
            setFindMe([41.2825125, 69.1392826])
        }
    },[currentLocation])

    const onMapClick = (e) => {
        setSelectedLocation(e)
    };

    const getLocation = () => {
        fetch('https://api.bigdatacloud.net/data/reverse-geocode-client?latitude=XXXXXXXXXXXX&longitude=XXXXXXXXXXXX&localityLanguage=en')
            .then((res) => res.json())
            .then((data) => setCurrentLocation(data))
            .catch(err => console.error(err))

        if (currentLocation != null) {
            setFindMe([currentLocation.latitude, currentLocation.longitude])
        }
    };


    return (
        <div>
            {
                toggle ?
                    <ContainerGetLocation>
                        <ModalBlock>
                            <ModalCard>
                                <MapStyle>
                                    <YMaps>
                                        <Map
                                            modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                                            onClick={(e) => onMapClick(e._sourceEvent.originalEvent.coords)}
                                            state={options}
                                            style={{width: "100%", height: 'auto'}}
                                        >
                                            {selectedLocation ? <Placemark geometry={selectedLocation}/> : null}
                                            <ZoomControl/>
                                            <FullscreenControl/>
                                            <SearchControl/>
                                            <GeolocationControl/>
                                        </Map>
                                    </YMaps>
                                </MapStyle>
                                <LocationBtn onClick={getLocation}>Meni izlash</LocationBtn>
                            </ModalCard>
                        </ModalBlock>
                    </ContainerGetLocation> : ""
            }
        </div>
    )
}
export default GetLocation