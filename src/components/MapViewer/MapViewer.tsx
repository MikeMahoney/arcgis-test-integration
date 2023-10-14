import { MapViewerContainer, MapViewerWrapper } from './MapViewerStyles'
import esriConfig from '@arcgis/core/config.js'
import { API_KEY } from 'api/configs/axiosConfigs'
import Map from '@arcgis/core/Map'
import MapView from '@arcgis/core/views/MapView'
import { useEffect } from 'react'

esriConfig.apiKey = API_KEY

interface IMapViewer {}

const MapViewer: React.FC<IMapViewer> = () => {
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
  }, [])

  return (
    <MapViewerWrapper>
      <MapViewerContainer id='viewDiv'></MapViewerContainer>
    </MapViewerWrapper>
  )
}

export default MapViewer
