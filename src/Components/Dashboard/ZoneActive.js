import React, { useState } from "react";
import {
  MapContainer,
  TileLayer,
  Polygon,
  Popup,
  FeatureGroup,
} from "react-leaflet";
import { EditControl } from "react-leaflet-draw";
import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import L from "leaflet";
import { Icon } from "leaflet";
import "leaflet/dist/images/marker-icon-2x.png";
import "leaflet/dist/images/marker-shadow.png";
import { Box } from "@mui/system";
import "./leaflet.css";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Ouid Zid", 159, "6.0%"),
  createData("Zone 10", 237, "9.0%"),
  createData("Sarhna", 262, "16.0%"),
];

const polygonData = [
  {
    id: 1,
    coordinates: [
      [33.1051181, -8.6098137],
      [33.1017398, -8.6032476],
      [33.0989723, -8.6056509],
      [33.1019913, -8.6121311],
      [33.1050822, -8.6099424],
    ],
    workers: 10,
  },
  {
    id: 2,
    coordinates: [
      [33.1045015, -8.600956],
      [33.098751, -8.6053762],
      [33.0952286, -8.5988746],
      [33.1012489, -8.5944114],
    ],
    workers: 15,
  },
  {
    id: 3,
    coordinates: [
      [33.1078461, -8.6076593],
      [33.1048273, -8.6010933],
      [33.1019521, -8.6031318],
      [33.1052047, -8.6097836],
    ],
    workers: 25,
  },
  {
    id: 4,
    coordinates: [
      [33.120572, -8.6155729],
      [33.1161701, -8.6072044],
      [33.1113368, -8.6103802],
      [33.1160443, -8.6190276],
    ],

    workers: 25,
  },
  {
    id: 5,
    coordinates: [
      [33.1095393, -8.6229243],
      [33.1118752, -8.6214437],
      [33.1074334, -8.6135945],
      [33.10472, -8.6171222],
      [33.0997243, -8.6249971],
      [33.100497, -8.6267996],
      [33.10826, -8.6205554],
    ],

    workers: 25,
  },
  {
    id: 6,
    coordinates: [
      [33.1207018, -8.6156759],
      [33.1255885, -8.6120925],
      [33.1238638, -8.6087236],
      [33.1225343, -8.6076937],
      [33.1200011, -8.6063848],
      [33.117899, -8.6062775],
      [33.1161382, -8.6068997],
    ],

    workers: 0,
  },
  {
    id: 7,
    coordinates: [
      [33.0961038, -8.6164784],
      [33.0946661, -8.6175299],
      [33.0941, -8.616457],
      [33.0937765, -8.6162317],
      [33.0933002, -8.6166394],
      [33.0927251, -8.6170471],
      [33.093453, -8.6184633],
      [33.0927161, -8.6189568],
      [33.0912658, -8.616339],
      [33.0909423, -8.6154485],
      [33.0928294, -8.6143219],
      [33.0934314, -8.6154163],
      [33.0945801, -8.6147189],
      [33.0954068, -8.616178],
      [33.0957932, -8.6158991],
    ],

    workers: 0,
  },
  {
    id: 8,
    coordinates: [
      [33.1047452, -8.6011577],
      [33.1069195, -8.6053848],
      [33.1127234, -8.6006856],
      [33.1090399, -8.5933685],
      [33.1119508, -8.5913515],
      [33.1099563, -8.587575],
      [33.1070992, -8.5899782],
      [33.1051857, -8.5862446],
      [33.0929656, -8.5949092],
      [33.0951402, -8.5986428],
      [33.1014803, -8.5942011],
    ],

    workers: 0,
  },
  {
    id: 9,
    coordinates: [
      [33.1459995, -8.5963125],
      [33.1493492, -8.5910983],
      [33.1480799, -8.5899031],
      [33.1447212, -8.5953104],
    ],

    workers: 0,
  },
  {
    id: 10,
    coordinates: [
      [33.1461132, -8.5986922],
      [33.1458976, -8.5976086],
      [33.1456282, -8.5967932],
      [33.1463575, -8.5964756],
      [33.149643, -8.5960186],
      [33.1506308, -8.5954263],
      [33.1512235, -8.597497],
      [33.1502716, -8.59813],
      [33.1474607, -8.5983875],
      [33.1466974, -8.5985591],
    ],

    workers: 33,
  },
  {
    id: 10,
    coordinates: [
      [33.1507676, -8.5954585],
      [33.1513603, -8.5976257],
      [33.1608427, -8.592948],
      [33.1596575, -8.5900941],
      [33.1570894, -8.5871758],
      [33.1534616, -8.5872188],
      [33.1536771, -8.5903087],
      [33.1544673, -8.5933986],
      [33.1526354, -8.5945358],
    ],

    workers: 8,
  },
  {
    id: 11,
    coordinates: [
      [33.144273, -8.6041403],
      [33.143303, -8.5992479],
      [33.1384532, -8.6001062],
      [33.1326331, -8.6016941],
      [33.1332798, -8.6087751],
      [33.1372677, -8.606801],
      [33.1427642, -8.6050415],
    ],

    workers: 13,
  },
  {
    id: 12,
    coordinates: [
      [33.1330141, -8.5965657],
      [33.1348458, -8.5965443],
      [33.1356899, -8.5965657],
      [33.1366416, -8.5963511],
      [33.1373599, -8.5954499],
      [33.1384194, -8.5952139],
      [33.1386528, -8.5942826],
      [33.1394429, -8.5937891],
      [33.1395327, -8.5922656],
      [33.1397841, -8.5914288],
      [33.1392274, -8.5890255],
      [33.1391556, -8.5857425],
      [33.1384603, -8.5853906],
      [33.1374317, -8.5855708],
      [33.136049, -8.5861931],
      [33.1355891, -8.5869355],
      [33.1351043, -8.5875621],
      [33.1354205, -8.5889826],
      [33.1337145, -8.5898623],
      [33.133086, -8.5900769],
      [33.132619, -8.5907421],
      [33.1325293, -8.5921583],
      [33.1323856, -8.5926304],
      [33.1325652, -8.5964069],
    ],
    workers: 26,
  },
  {
    id: 13,
    coordinates: [
      [33.1024091, -8.6395326],
      [33.1029482, -8.6392751],
      [33.1033436, -8.6396613],
      [33.1038467, -8.6395969],
      [33.1047632, -8.6388245],
      [33.1053203, -8.6391807],
      [33.1072609, -8.6371851],
      [33.1069914, -8.6366701],
      [33.1069734, -8.6361766],
      [33.1067937, -8.6359835],
      [33.1077281, -8.6351037],
      [33.1074586, -8.6348462],
      [33.1077641, -8.6341596],
      [33.1084469, -8.6330223],
      [33.1081594, -8.6325932],
      [33.1082928, -8.6323099],
      [33.1077447, -8.6313765],
      [33.1050224, -8.6339943],
      [33.102007, -8.6375241],
      [33.1018992, -8.6381035],
      [33.1019711, -8.6388009],
      [33.1016835, -8.6394768],
      [33.1018093, -8.6396484],
      [33.1021867, -8.6391335],
      [33.1023934, -8.6394017],
    ],
    workers: 53,
  },
];

const baseMaps = {
  OpenStreetMap: "https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png",
  Satellite:
    "https://server.arcgisonline.com/ArcGIS/rest/services/World_Imagery/MapServer/tile/{z}/{y}/{x}",
  // Add more base maps here...
};

const PolygonMap = () => {
  const [activePolygon, setActivePolygon] = useState(null);
  const [selectedBaseMap, setSelectedBaseMap] = useState("OpenStreetMap");
  const [drawnPolygon, setDrawnPolygon] = useState(null);

  const handleBaseMapChange = (event) => {
    setSelectedBaseMap(event.target.value);
  };

  const handleDrawCreated = (e) => {
    const { layer } = e;
    setDrawnPolygon(layer.toGeoJSON());
  };

  const countWorkersInsidePolygon = () => {
    if (!drawnPolygon) return 0;

    const drawnPoly = L.geoJSON(drawnPolygon);
    let count = 0;

    polygonData.forEach((polygon) => {
      const poly = L.polygon(polygon.coordinates);
      if (drawnPoly.getBounds().contains(poly.getBounds())) {
        count += polygon.workers;
      }
    });

    return count;
  };

  delete Icon.Default.prototype._getIconUrl;
  Icon.Default.mergeOptions({
    iconRetinaUrl: require("leaflet/dist/images/marker-icon-2x.png"),
    iconUrl: require("leaflet/dist/images/marker-icon.png"),
    shadowUrl: require("leaflet/dist/images/marker-shadow.png"),
  });

  return (
    <Box style={{ Width: "311px", borderRadius: "8px" }}>
      <MapContainer
        center={[33.1051181, -8.6098137]}
        zoom={13}
        style={{ height: "400px", width: "65%",paddingBottom:"30px",borderRadius:"10px" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url={baseMaps[selectedBaseMap]}
        />
        {polygonData.map((polygon) => (
          <Polygon
            key={polygon.id}
            positions={polygon.coordinates}
            color={polygon.workers === 0 ? "red" : "blue"}
            eventHandlers={{
              click: () => {
                setActivePolygon(polygon);
              },
            }}
          />
        ))}
        {activePolygon && (
          <Popup 
            position={[
              activePolygon.coordinates[0][0],
              activePolygon.coordinates[0][1]
              
            ]}
            onClose={() => {
              setActivePolygon(null);
            }}
          >
            <div>
              <h2>Zone {activePolygon.id}</h2>
              <p>Workers: {activePolygon.workers}</p>
            </div>
          </Popup>
        )}

        <FeatureGroup>
          <EditControl
            position="topright"
            onCreated={handleDrawCreated}
            draw={{
              rectangle: false,
              polyline: false,
              circle: false,
              circlemarker: false,
              marker: false,
            }}
          />
        </FeatureGroup>

        {/* Base Map Selector */}
        <div
          style={{
            marginTop: "330px",
            position: "absolute",
            top: 10,
            right: 10,
            zIndex: 1000,
            backgroundColor: "white",
            padding: 10,
            borderRadius: 5,
          }}
        >
          <label htmlFor="baseMapSelect">Base Map:</label>
          <select
            id="baseMapSelect"
            value={selectedBaseMap}
            onChange={handleBaseMapChange}
          >
            {Object.keys(baseMaps).map((mapName) => (
              <option key={mapName} value={mapName}>
                {mapName}
              </option>
            ))}
          </select>
          {drawnPolygon && (
            <p>Workers inside drawn polygon: {countWorkersInsidePolygon()}</p>
          )}
        </div>
      </MapContainer>

    </Box>
  );
};
export default PolygonMap;
