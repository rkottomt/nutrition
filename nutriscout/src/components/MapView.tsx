import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useStore } from '../store/useStore';
import { getNutriScoreColor } from '../utils/formatters';
import { DivIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getMenuForRestaurant } from '../data/menuData';

const CMU_CENTER: [number, number] = [40.4444, -79.9428];
const GATES_HILLMAN: [number, number] = [40.4435, -79.9425];

const youAreHereIcon = new DivIcon({
  html: `<div style="background:#4fc3f7;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 0 8px rgba(79,195,247,0.6);"></div>`,
  className: '',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

function createRestaurantIcon(nutriScore: string) {
  const color = getNutriScoreColor(nutriScore);
  return new DivIcon({
    html: `<div style="background:${color};width:12px;height:12px;border-radius:50%;border:2px solid #0a0a0f;box-shadow:0 0 6px ${color}80;"></div>`,
    className: '',
    iconSize: [16, 16],
    iconAnchor: [8, 8],
  });
}

export default function MapView() {
  const { restaurants, selectRestaurant } = useStore();

  return (
    <div className="flex-1 relative">
      <MapContainer
        center={CMU_CENTER}
        zoom={15}
        className="w-full h-full"
        style={{ background: '#12121a' }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.basemaps.cartocdn.com/dark_all/{z}/{x}/{y}{r}.png"
        />

        <Marker position={GATES_HILLMAN} icon={youAreHereIcon}>
          <Popup>
            <div style={{ color: '#0a0a0f', fontFamily: 'DM Sans' }}>
              <strong>📍 You are here</strong><br />
              Gates-Hillman Center, CMU
            </div>
          </Popup>
        </Marker>

        {restaurants.map(r => {
          const menu = getMenuForRestaurant(r.id);
          const topItems = [...menu]
            .sort((a, b) => b.proteinEfficiency - a.proteinEfficiency)
            .slice(0, 3);

          return (
            <Marker
              key={r.id}
              position={[r.lat, r.lng]}
              icon={createRestaurantIcon(r.nutriScore)}
              eventHandlers={{ click: () => selectRestaurant(r) }}
            >
              <Popup>
                <div style={{ color: '#0a0a0f', fontFamily: 'DM Sans', minWidth: 180 }}>
                  <strong style={{ fontSize: 13 }}>{r.name}</strong>
                  <div style={{ fontSize: 11, color: '#666', marginBottom: 4 }}>
                    {r.cuisineType} • ★ {r.rating} • {r.distance} mi
                  </div>
                  <div style={{ fontSize: 10, fontWeight: 600, marginBottom: 4, color: getNutriScoreColor(r.nutriScore) }}>
                    NutriScore: {r.nutriScore}
                  </div>
                  {topItems.length > 0 && (
                    <>
                      <div style={{ fontSize: 10, fontWeight: 600, color: '#333' }}>Top protein picks:</div>
                      {topItems.map(item => (
                        <div key={item.id} style={{ fontSize: 10, color: '#555', padding: '1px 0' }}>
                          {item.name} — {item.calories} cal, {item.protein}g protein
                        </div>
                      ))}
                    </>
                  )}
                </div>
              </Popup>
            </Marker>
          );
        })}
      </MapContainer>
    </div>
  );
}
