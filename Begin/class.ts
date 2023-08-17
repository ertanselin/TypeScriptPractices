interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  currentLocation: Point;
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {
  // Sadece taksiye ait olan özellikleri burada ekleyebiliriz.
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`Taksi X: ${point.x} Y:${point.y} konumuna gidiyor.`);
  }
}

class Bus implements Vehicle {
  // Sadece otobüse ait olan özellikleri burada ekleyebiliriz.
  currentLocation: Point;
  travelTo(point: Point): void {
    console.log(`Otobüs X: ${point.x} Y:${point.y} konumuna gidiyor.`);

  }
}
