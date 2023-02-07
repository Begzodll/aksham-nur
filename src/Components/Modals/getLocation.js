import React, {useState, Suspense} from "react";
import {CloseBtn, ContainerGetLocation, LocationBtn,MapStyle} from "./ModalStyle/locationStyle";
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

const Loader = React.lazy(() => import('../Loader/Loader'));

const GetLocation = ({toggle, setToggler, setCurrentLocation, currentLocation}) => {

    const [centerSelected, setCenterSelected] = useState([40.709698, 72.057462]);

    const center = {
        center: centerSelected,
        zoom: 13
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
        <Suspense fallback={<Loader/>}>
            {
                toggle ?
                    <ContainerGetLocation>
                        <ModalBlock>
                            <ModalCard>
                                <MapStyle>
                                    Loading...
                                  <YMaps query={{ apikey: "87bff623-64c1-4b91-afd2-02f03408074c" }}>
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
                                <LocationBtn onClick={() => setToggler(p => !p)}>Kiritish</LocationBtn>
                            </ModalCard>
                        </ModalBlock>
                    </ContainerGetLocation> : ""
            }
        </Suspense>
    )
}
export default GetLocation