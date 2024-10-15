import fastify from "fastify";

const server = fastify({logger:true});

const teams = [
  { id: 1, name: "Ferrari", base: "Italy" },
  { id: 2, name: "Mercedes", base: "United Kingdom" },
  { id: 3, name: "Red Bull Racing", base: "United Kingdom" },
  { id: 4, name: "McLaren", base: "United Kingdom" },
  { id: 5, name: "Aston Martin", base: "United Kingdom" },
  { id: 6, name: "Alpine", base: "France" },
  { id: 7, name: "AlphaTauri", base: "Italy" },
  { id: 8, name: "Haas", base: "United States" },
  { id: 9, name: "Williams", base: "United Kingdom" },
  { id: 10, name: "Alfa Romeo", base: "Switzerland" }
];

const drivers = [
  { id: 1, name: "Max Verstappen", country: "Netherlands" },
  { id: 2, name: "Lewis Hamilton", country: "United Kingdom" },
  { id: 3, name: "Charles Leclerc", country: "Monaco" },
  { id: 4, name: "Carlos Sainz", country: "Spain" },
  { id: 5, name: "Sergio Perez", country: "Mexico" },
  { id: 6, name: "Fernando Alonso", country: "Spain" },
  { id: 7, name: "Lando Norris", country: "United Kingdom" },
  { id: 8, name: "George Russell", country: "United Kingdom" },
  { id: 9, name: "Esteban Ocon", country: "France" },
  { id: 10, name: "Valtteri Bottas", country: "Finland" }
];

server.get("/teams", async(req, res)=>{
  res.type("application/json").code(200)

  return teams;
});

server.get("/drivers", async(req, res)=>{
  res.type("application/json").code(200)

  return drivers;
});

interface DriverParams{
  id:string
}

server.get<{Params:DriverParams}>("/drivers/:id", async (req, res)=>{
  const id = parseInt(req.params.id);
  const driver = drivers.find( d => d.id === id );
  if(!driver){
    res.type("application.json").code(404);
  }else{
    res.type("application.json").code(200);
  }
  return driver;
})

server.listen({port:3366}, ()=>{
  console.log("Server up");
})
