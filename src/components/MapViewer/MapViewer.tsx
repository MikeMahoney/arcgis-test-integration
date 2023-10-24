import {
  MapViewerContainer,
  MapViewerInfo,
  MapViewerInfoButton,
  MapViewerWrapper
} from './MapViewerStyles'
import esriConfig from '@arcgis/core/config.js'
import { API_KEY } from 'api/configs/axiosConfigs'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import Graphic from '@arcgis/core//Graphic'
import GraphicsLayer from '@arcgis/core/layers/GraphicsLayer'
import { useEffect, useState } from 'react'
import { useStoreState } from 'easy-peasy'
import { TAnimal, TAnimalLocation } from 'data/animalData'
import { InfoIcon } from 'sharedComponents/Icons/InfoIcon/InfoIcon'
import { TitleText, SubTitleText } from 'sharedComponents/TextStyles/TextStyles'

esriConfig.apiKey = API_KEY

interface IMapViewer {}

const MapViewer: React.FC<IMapViewer> = () => {
  const [infoExpanded, setInfoExpanded] = useState<boolean>(false)
  const selectedAnimal: TAnimal = useStoreState(
    (state: any) => state.selectedAnimal
  )

  useEffect(() => {
    const map = new Map({
      basemap: 'arcgis-topographic'
    })

    const view = new MapView({
      map: map,
      center: [-4.0, 57.027],
      container: 'viewDiv'
    })

    view.zoom = 7

    const graphicsLayer = new GraphicsLayer()
    map.add(graphicsLayer)

    selectedAnimal.locations.forEach((location: TAnimalLocation) => {
      if (location.rings) {
        const polygon: any = {
          type: 'polygon',
          rings: location.rings
        }
        const simpleFillSymbol = {
          type: 'simple-fill',
          color: [227, 139, 79, 0.5],
          outline: {
            color: [255, 255, 255],
            width: 1
          }
        }
        const polygonGraphic = new Graphic({
          geometry: polygon,
          symbol: simpleFillSymbol
        })
        graphicsLayer.add(polygonGraphic)
      }
    })
  }, [selectedAnimal])

  return (
    <MapViewerWrapper>
      <MapViewerContainer id='viewDiv' />
      <MapViewerInfoButton
        onClick={() => {
          setInfoExpanded(!infoExpanded)
        }}
      >
        <InfoIcon />
      </MapViewerInfoButton>
      <MapViewerInfo
        expanded={infoExpanded}
      >
        <TitleText>{selectedAnimal.name}</TitleText>
        <SubTitleText>{selectedAnimal.description}</SubTitleText>
      </MapViewerInfo>
    </MapViewerWrapper>
  )
}

export default MapViewer
