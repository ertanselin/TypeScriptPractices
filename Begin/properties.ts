interface Point {
  x: number;
  y: number;
}

interface Vehicle {
  travelTo(point: Point): void;
}

class Taxi implements Vehicle {

  constructor(private location?: Point, private color?: string) {

  }

  travelTo(point: Point): void {
    if (this.location) {
      console.log(`Taksi X: ${this.location.x} Y: ${this.location.y} konumundan X: ${point.x} Y: ${point.y} konumuna gidiyor.`);
    } else {
      console.log(`Taksi belirli bir konumda değil.`);
    }
  }

  getLocation(): Point | undefined {
    return this.location;
  }

  setLocation(value: Point): void {
    if (value.x < 0 || value.y < 0) {
      throw new Error("Koordinat bilgileri negatif olamaz.");
    }
    this.location = value;
  }
}

let taxi_1: Taxi = new Taxi({ x: 2, y: 5 });
taxi_1.travelTo({ x: 1, y: 2 });
