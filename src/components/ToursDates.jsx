import { useEffect, useState } from "react";
import { ref, onValue } from "firebase/database";
import { database } from "../firebase"; // Ajuste le chemin si besoin

const ToursDates = () => {
  const [tours, setTours] = useState([]);

  useEffect(() => {
    const dbRef = ref(database, "Tour-DB");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      const loadedTours = [];
      for (const key in data) {
        loadedTours.push({ key, ...data[key] });
      }
      setTours(loadedTours);
    });
  }, []);

  return (
    <div>
      <div
        style={{
          flex: 1,
          display: "flex",
          flexWrap: "wrap",
          gap: "1rem",
          marginTop: 0,
        }}
      >
        {tours.map((tour) => (
          <div key={tour.key} style={cardStyle}>
            <h3 style={{ margin: 0 }}>{tour.CITY}, {tour.COUNTRY}</h3>
            <p>{tour.DATE}</p>
            <p>{tour.PLACE}</p>
            <p>{tour.STATUS}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ToursDates;

const cardStyle = {
  background: "#fff",
  borderRadius: "8px",
  boxShadow: "0 4px 8px rgba(0,0,0,0.1)",
  padding: "1rem",
  width: "220px",
};