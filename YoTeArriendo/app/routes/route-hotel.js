import Route from '@ember/routing/route';

export default Route.extend({
    model() {
            return [{
                "agency": {
                    "name": "Arrendamientos Santa Fé",
                    "nit": "1123-1233-12313-51414"
                },
                "homes": [
                    {
                        "id": 1 ,
                        "name": "Torre davivienda",
                        "description": "Apartamento muy comodito",
                        "location": {
                            "address": "Avenida siempre viva 123",
                            "latitude": "4.1231231",
                            "longitude": "-421213212"
                        },
                        "city": "Medellín",
                        "type": "Apartamento",
                        "rating": "4.9",
                        "totalAmount": "932.234",
                        "pricePerNight": "100.233",
                        "thumbnail": "https://goo.gl/sccYgg"
                    }, 
                    {
                        "id": 2 ,
                        "name": "La quinta porra",
                        "description": "Apartamento muy lejos",
                        "location": {
                            "address": "Cra 1 # 1 A 1",
                            "latitude": "5.12",
                            "longitude": "21213212"
                        },
                        "city": "Medellín",
                        "type": "Casa",
                        "rating": "2",
                        "totalAmount": "50.000",
                        "pricePerNight": "20.000",
                        "thumbnail": "https://goo.gl/sccYgg"
                    }
                ]
            }];
    } 
});
