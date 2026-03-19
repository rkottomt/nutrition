import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import { useStore } from '../store/useStore';
import { DivIcon } from 'leaflet';
import 'leaflet/dist/leaflet.css';
import { getMenuForRestaurant } from '../data/menuData';

const CMU_CENTER: [number, number] = [40.4444, -79.9428];
const GATES_HILLMAN: [number, number] = [40.4435, -79.9425];

const youAreHereIcon = new DivIcon({
  html: `<div style="background:#3b82f6;width:14px;height:14px;border-radius:50%;border:3px solid white;box-shadow:0 0 8px rgba(59,130,246,0.5);"></div>`,
  className: '',
  iconSize: [20, 20],
  iconAnchor: [10, 10],
});

const restaurantIcon = new DivIcon({
  html: `<div style="background:#60a5fa;width:12px;height:12px;border-radius:50%;border:2px solid white;box-shadow:0 1px 4px rgba(0,0,0,0.2);"></div>`,
  className: '',
  iconSize: [16, 16],
  iconAnchor: [8, 8],
});

export default function MapView() {
  const { restaurants, selectRestaurant } = useStore();

  return (
    <div className="flex-1 relative">
      <MapContainer center={CMU_CENTER} zoom={15} className="w-full h-full" style={{ background: '#f8fafc' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={GATES_HILLMAN} icon={youAreHereIcon}>
          <Popup>
            <div style={{ fontFamily: 'DM Sans' }}>
              <strong>📍 You are here</strong><br />
              Gates-Hillman Center, CMU
            </div>
          </Popup>
        </Marker>
        {restaurants.map(r => {
          const menu = getMenuForRestaurant(r.id);
          const topItems = [...menu].sort((a, b) => b.proteinEfficiency - a.proteinEfficiency).slice(0, 3);
          return (
            <Marker key={r.id} position={[r.lat, r.lng]} icon={restaurantIcon} eventHandlers={{ click: () => selectRestaurant(r) }}>
              <Popup>
                <div style={{ fontFamily: 'DM Sans', minWidth: 180 }}>
                  <strong style={{ fontSize: 13 }}>{r.name}</strong>
                  <div style={{ fontSize: 11, color: '#64748b', marginBottom: 4 }}>{r.cuisineType} • ★ {r.rating} • {r.distance} mi</div>
                  {topItems.length > 0 && (
                    <>
                      <div style={{ fontSize: 10, fontWeight: 600, color: '#333' }}>Top protein picks:</div>
                      {topItems.map(item => (
                        <div key={item.id} style={{ fontSize: 10, color: '#64748b', padding: '1px 0' }}>{item.name} — {item.calories} cal, {item.protein}g protein</div>
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
