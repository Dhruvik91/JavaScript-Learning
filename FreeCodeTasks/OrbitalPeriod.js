function orbitalPeriod(arr) {

    const GM = 398600.4418;
    const earthRadius = 6367.4447;
    const map = new Map();
  
    arr.forEach((item) => {
  
      const a = Math.pow(earthRadius + item.avgAlt, 3);
      const pie = 2 * Math.PI;
      const obtPeriod = pie * Math.sqrt(a / GM);
  
      if (!map.has(item.name)) {
        map.set("name", { name: item.name, corbitalPeriod: Math.round(obtPeriod) })
      }
    });
  
    console.log(Array.from(map.values()));
    return Array.from(map.values());
  }
  
  orbitalPeriod([{ name: "sputnik", avgAlt: 35873.5553 }]);