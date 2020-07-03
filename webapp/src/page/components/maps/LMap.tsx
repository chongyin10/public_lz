import L, { Map, TileLayer, Popup } from 'leaflet';
import { GET_MAP } from '../../constants/actions'

export default class LMap {
    constructor(target: string, dispatch?: any) {

        const accessToken: string = 'TAOcdZhbwquvuV9m2ZnwHIZbBd0TNaNU';
        const url_arcgis_yxt: string = 'https://server.arcgisonline.com/arcgis/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}';
        const url_arcgis_jdt: string = 'http://cache1.arcgisonline.cn/arcgis/rest/services/ChinaOnlineCommunity/MapServer/tile/{z}/{y}/{x}';

        // 创建切片图层
        // let titleLayer: TileLayer = new TileLayer(url_arcgis_yxt, {
        //     maxZoom: 13,
        //     id: 'mapbox/streets-v11',
        //     // accessToken: accessToken
        // });
        // 创建地图
        // let map: Map = new Map(target);
        // map.setView([39.896252, 116.40055], 19);

        let titleLayerYXT: TileLayer = new TileLayer(url_arcgis_yxt, {
            maxZoom: 13,
            id: 'map/arcgis/yxt',
        });
        let titleLayerJDT: TileLayer = new TileLayer(url_arcgis_jdt, {
            maxZoom: 13,
            id: 'map/arcgis/jdt',
        });

        let map: Map = new Map(target, {
            center: [39.896252, 116.40055],
            zoom: 19,
            layers: [titleLayerJDT, titleLayerYXT]
        })
        // 添加切片图层
        // map.addLayer(titleLayer);

        // 添加图层组
        const baseMap = {
            "arcGis影像图": titleLayerYXT,
            "arcGis街道图": titleLayerJDT
        }

        L.control.layers(baseMap).addTo(map);

        // 冒泡
        let popup = new Popup();
        map.on('click', function (e: any) {
            let content = '你临幸了这个点：<br>';
            content += e.latlng.toString();
            popup.setLatLng(e.latlng)
                .setContent(content)
                .openOn(map);
        });
        dispatch({ type: GET_MAP, payload: { Lmap: map } });
    }
}