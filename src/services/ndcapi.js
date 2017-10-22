const airShopping = (origin, destination, departure, passengers) => {
  return `
  <soapenv:Envelope xmlns:soapenv="http://schemas.xmlsoap.org/soap/envelope/" xmlns:ns="http://www.iata.org/IATA/EDIST/2016.1">
  <soapenv:Header/>
  <soapenv:Body>
  <ns:AirShoppingRQ Version="3.000">
        <ns:Document/>
        <ns:Party>
          <ns:Sender>
              <ns:TravelAgencySender>
                <ns:AgencyID>HELAY08DC</ns:AgencyID>
              </ns:TravelAgencySender>
          </ns:Sender>
        </ns:Party>
        <ns:Travelers>
          <!--1 or more repetitions:-->
          <ns:Traveler>
              <!--Optional:-->
              <ns:AnonymousTraveler>
                <ns:PTC Quantity="${passengers}">ADT</ns:PTC>
              </ns:AnonymousTraveler>
          </ns:Traveler>
        </ns:Travelers>
        <ns:CoreQuery>
          <ns:OriginDestinations>
              <ns:OriginDestination>
                <ns:Departure>
                    <ns:AirportCode>${origin}</ns:AirportCode>
                    <ns:Date>${departure}</ns:Date>
                </ns:Departure>
                <ns:Arrival>
                    <ns:AirportCode>${destination}</ns:AirportCode>
                </ns:Arrival>
              </ns:OriginDestination>
          </ns:OriginDestinations>
        </ns:CoreQuery>
        <ns:Preference>
          <ns:FarePreferences PreferencesContext="ECONOMY"/>
        </ns:Preference>
    </ns:AirShoppingRQ>
  </soapenv:Body>
  </soapenv:Envelope>
`;
};

const options = body => {
  return {
    method: "POST",
    headers: {
      "Content-Type": "text/xml;charset=UTF-8",
      SOAPAction: ""
    },
    body: body
  };
};

export function getQuotes(origin, destination, departure, passengers) {
  return fetch(
    `http://ec2-54-89-213-114.compute-1.amazonaws.com/`,
    options(airShopping(origin, destination, departure, passengers))
  );
}
