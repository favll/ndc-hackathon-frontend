const servicesfixture = `
<SOAP-ENV:Envelope xmlns:SOAP-ENV="http://schemas.xmlsoap.org/soap/envelope/">
<Header xmlns="http://schemas.xmlsoap.org/soap/envelope/"/>
<Body xmlns="http://schemas.xmlsoap.org/soap/envelope/">
   <ServiceListRS Version="3.000" xmlns="http://www.iata.org/IATA/EDIST/2016.1">
      <Document/>
      <Success/>
      <ShoppingResponseID>
         <ResponseID>ResponseID</ResponseID>
      </ShoppingResponseID>
      <Services>
         <Service ObjectKey="SRV1">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S1</ServiceID>
            <Name>PRE PAID BAGGAGE</Name>
            <Encoding>
               <Code>XBAG</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">30.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV2">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S10</ServiceID>
            <Name>BIKE</Name>
            <Encoding>
               <Code>BIKE</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">45.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV3">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S40</ServiceID>
            <Name>MEDIUM SPORTING EQUIPMENT</Name>
            <Encoding>
               <Code>SPEQ</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">30.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV4">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S41</ServiceID>
            <Name>GOLF EQUIPMENT</Name>
            <Encoding>
               <Code>GOLF</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">30.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV5">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S42</ServiceID>
            <Name>SKI EQUIPMENT</Name>
            <Encoding>
               <Code>SPEQ</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">30.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV6">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S43</ServiceID>
            <Name>BICYCLE</Name>
            <Encoding>
               <Code>BIKE</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">30.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV7">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S44</ServiceID>
            <Name>HOCKEY EQUIPMENT</Name>
            <Encoding>
               <Code>SPEQ</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">30.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV8">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S45</ServiceID>
            <Name>CANOE/KAYAK</Name>
            <Encoding>
               <Code>SPEQ</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">100.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV9">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S48</ServiceID>
            <Name>INFLIGHT ENTERTAINMENT</Name>
            <Encoding>
               <Code>ENTB</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">20.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV10">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S56</ServiceID>
            <Name>INTERNET ACCESS</Name>
            <Encoding>
               <Code>WEBB</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">20.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV11">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S57</ServiceID>
            <Name>WHEELCHAIR</Name>
            <Encoding>
               <Code>WCHR</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">50.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV12">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S63</ServiceID>
            <Name>CHAMPAGNE</Name>
            <Encoding>
               <Code>DRNK</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">30.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV13">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S64</ServiceID>
            <Name>VEGETARIAN MEAL</Name>
            <Encoding>
               <Code>VGML</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">10.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV14">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S65</ServiceID>
            <Name>SPECIAL MEAL</Name>
            <Encoding>
               <Code>SPML</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">30.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV15">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S66</ServiceID>
            <Name>PET IN CABIN TYPE F</Name>
            <Encoding>
               <Code>PETC</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">40.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV16">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S86</ServiceID>
            <Name>PASSENGER ASSISTANT</Name>
            <Encoding>
               <Code>MAAS</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">100.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV17">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S87</ServiceID>
            <Name>UNACCOMPANIED MINOR</Name>
            <Encoding>
               <Code>UMNR</Code>
            </Encoding>
            <Price>
               <Total Code="EUR">70.00</Total>
            </Price>
            <Associations>
               <Traveler>
                  <TravelerReferences>PAX1</TravelerReferences>
               </Traveler>
               <Flight>
                  <SegmentReference>SEG1</SegmentReference>
               </Flight>
            </Associations>
         </Service>
         <Service ObjectKey="SRV18">
         <ServiceID Owner="AY">SULL-15806151678019274138-1-11S88</ServiceID>
         <Name>FOOD AT THE GATE</Name>
         <Encoding>
             <Code>FATG</Code>
         </Encoding>
         <Price>
             <Total Code="EUR">30.00</Total>
         </Price>
         <Associations>
             <Traveler>
             <TravelerReferences>PAX1</TravelerReferences>
             </Traveler>
             <Flight>
             <SegmentReference>SEG1</SegmentReference>
             </Flight>
         </Associations>
        </Service>
        <Service ObjectKey="SRV19">
            <ServiceID Owner="AY">SULL-15806151678019274138-1-11S89</ServiceID>
            <Name>SEAT ASSIGNMENT</Name>
            <Encoding>
                <Code>SASG</Code>
            </Encoding>
            <Price>
                <Total Code="EUR">25.00</Total>
            </Price>
            <Associations>
                <Traveler>
                <TravelerReferences>PAX1</TravelerReferences>
                </Traveler>
                <Flight>
                <SegmentReference>SEG1</SegmentReference>
                </Flight>
            </Associations>
        </Service>
      
        <Service ObjectKey="SRV20">
          <ServiceID Owner="AY">SULL-15806151678019274138-1-11S90</ServiceID>
          <Name>VISA INFORMATION</Name>
          <Encoding>
            <Code>VINF</Code>
          </Encoding>
          <Price>
            <Total Code="EUR">75.00</Total>
          </Price>
          <Associations>
            <Traveler>
            <TravelerReferences>PAX1</TravelerReferences>
            </Traveler>
            <Flight>
            <SegmentReference>SEG1</SegmentReference>
            </Flight>
          </Associations>
        </Service>
        <Service ObjectKey="SRV21">
          <ServiceID Owner="AY">SULL-15806151678019274138-1-11S91</ServiceID>
          <Name>CABIN UPGRADE</Name>
          <Encoding>
            <Code>CUPG</Code>
          </Encoding>
          <Price>
            <Total Code="EUR">125.00</Total>
          </Price>
          <Associations>
            <Traveler>
            <TravelerReferences>PAX1</TravelerReferences>
            </Traveler>
            <Flight>
            <SegmentReference>SEG1</SegmentReference>
            </Flight>
          </Associations>
        </Service>
      </Services>
      <DataLists>
         <AnonymousTravelerList>
            <AnonymousTraveler ObjectKey="PAX1">
               <PTC>ADT</PTC>
            </AnonymousTraveler>
         </AnonymousTravelerList>
         <FlightSegmentList>
            <FlightSegment SegmentKey="SEG1">
               <Departure>
                  <AirportCode>CDG</AirportCode>
                  <Date>2017-10-24Z</Date>
                  <Time>08:30</Time>
                  <Terminal>
                     <Name>1</Name>
                  </Terminal>
               </Departure>
               <Arrival>
                  <AirportCode>RVN</AirportCode>
                  <Date>2017-10-24Z</Date>
                  <Time>12:30</Time>
                  <Terminal>
                     <Name>W</Name>
                  </Terminal>
               </Arrival>
               <MarketingCarrier>
                  <AirlineID>AY</AirlineID>
                  <FlightNumber>535</FlightNumber>
               </MarketingCarrier>
               <OperatingCarrier>
                  <AirlineID>AY</AirlineID>
               </OperatingCarrier>
            </FlightSegment>
         </FlightSegmentList>
      </DataLists>
   </ServiceListRS>
</Body>
</SOAP-ENV:Envelope>
`;
export default servicesfixture;
