import React, { useEffect } from 'react';
import Header from './Header';
import { StringParam, useQueryParam } from 'use-query-params';
import DeviceDetail from './DeviceDetail';

const DeviceList = () => {
  const DeviceLists = JSON.parse(localStorage.getItem('List'));
  const [selectedDevice, setSelectedDevice] = useQueryParam('selectedDevice-f', StringParam);

  useEffect(() => {
    if(selectedDevice) {
      console.log("ticket:", selectedDevice)
      console.log("helllo")
    }
  }, [selectedDevice]);

  // const fetchDevice = async () => {
   
    // const [devices, setDevices] = useState([]);
    //   const response = await fetch('https://apidocs.everphone.app/#/default/get_v1_catalog');
    //   const data = await response.json();

    //   const allDevices = data.results.map((movieData) => {
    //     return {
    //         "id": 0,
    //         "manufacturer": "string",
    //         "name": "string",
    //         "color": "string",
    //         "edition": "string",
    //         "image_url": "string",
    //         "price": {
    //           "amount": 0,
    //           "currency": "EUR"
    //         },
    //         "storage": "string",
    //         "ram": "string",
    //         "display_size": "string",
    //         "accessory_ids": [
    //           0
    //         ]
    //     };
    //   });
    //   setDevices(allDevices);
    // }


  return (
    <div className="list-page container">
      <Header />
      <h3>You Can See Device Info Here!</h3>
      {DeviceLists !== null &&   <div  className="lists">
      {DeviceLists.map((device, index) => {
        return(
          <DeviceDetail 
            key={index}
            id={device.id} 
            deviceName={device.deviceName}
            deviceInfo={device.deviceInfo}
            onClick={() => setSelectedDevice(device.id)}
            />
        );
      })}
      </div>}
    </div>
  );
}

export default DeviceList;