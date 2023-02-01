import {ContainerGetLocation} from "./ModalStyle/locationStyle";
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

    const [selectedLocation, setSelectedLocation] = useState(null)
    const center = {
        center: [41.2825125, 69.1392826],
        zoom: 9
    }

    const onMapClick = (e) => {
        setSelectedLocation(e)
        console.log(selectedLocation)
    };

    return (
        <div>
            {
                toggle ?
                    <ContainerGetLocation>
                        <ModalBlock>
                            <ModalCard>
                                <YMaps query={{apikey: ""}}>
                                    <Map
                                        modules={["Placemark", "geocode", "geoObject.addon.balloon"]}
                                        onClick={(e) => onMapClick(e._sourceEvent.originalEvent.coords)}
                                        state={center}
                                        width='100%'
                                        height='500px'
                                    >
                                        {selectedLocation ? <Placemark geometry={selectedLocation}/> : null}
                                        <ZoomControl/>
                                        <FullscreenControl/>
                                        <SearchControl/>
                                        <GeolocationControl/>
                                    </Map>
                                </YMaps>
                            </ModalCard>
                        </ModalBlock>
                    </ContainerGetLocation> : ""
            }
        </div>
    )
}
export default GetLocation