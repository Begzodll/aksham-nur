import React, {useEffect, useState} from "react";
import {CloseBtn, ContainerGetLocation, LocationBtn, MapStyle} from "./ModalStyle/locationStyle";
import {ModalBlock, ModalCard} from "./ModalStyle/locationStyle";
import {
    YMaps,
    Map,
    ZoomControl,
    Placemark,
    FullscreenControl,
    SearchControl,
    GeolocationControl
} from "react-yandex-maps";

const GetLocation = ({toggle, setToggler, setCurrentLocation, currentLocation}) => {

    const [centerSelected, setCenterSelected] = useState([40.709698, 72.057462]);

    const center = {
        center: centerSelected,
        zoom: 9
    };

    const onMapClick = (e) => {
        setCurrentLocation(e._sourceEvent.originalEvent.coords)
    };

    const findMe = () => {
        if (navigator?.geolocation) {
            navigator.geolocation.getCurrentPosition((location) => {
                if (location) {
                    setCurrentLocation([location.coords.latitude, location.coords.longitude]);
                    setCenterSelected([location.coords.latitude, location.coords.longitude])
                }
            });
        }
    }


    return (
        <div>
            {
                toggle ?
                    <ContainerGetLocation>
                        <ModalBlock>
                            <ModalCard>
                                <MapStyle>
                                    Loading...
                                  <YMaps>
                                            <Map
                                                state={center}
                                                width="100%"
                                                height="400px"
                                                modules={["control.SearchControl"]}
                                                onClick={(e) => onMapClick(e)}
                                            >
                                                <ZoomControl
                                                    options={{float: "none", position: {top: 100, right: 10}}}
                                                />
                                                <Placemark options={{
                                                    iconImageSize: [32, 32],
                                                }} geometry={currentLocation}/>
                                                <FullscreenControl/>
                                                <GeolocationControl/>
                                                <SearchControl/>
                                            </Map>
                                        </YMaps>
                                </MapStyle>
                                <CloseBtn onClick={() => setToggler(p => !p)}>X</CloseBtn>
                                <LocationBtn onClick={findMe}>Meni izlash</LocationBtn>
                                <LocationBtn onClick={() => setToggler(p => !p)}>Yopish</LocationBtn>
                            </ModalCard>
                        </ModalBlock>
                    </ContainerGetLocation> : ""
            }
        </div>
    )
}
export default GetLocation