import { useEffect, useState } from 'react';
import './App.css';

// Components
import Search from './components/Search';
import Address from './components/Address';
import Map from './components/Map';

function App() {

  const [ip, setIp] = useState("");
  const [address, setAddress] = useState({});
  const [ubication, setUbication] = useState([]);


  useEffect(() => {

    let url = `https://geo.ipify.org/api/v1?apiKey=at_SVbeH0NxUm5sddN0Ccwm7b9hJMh5m&ipAddress=${ip}`

    async function getAddress() {

      let res = await fetch(url);
      let location = await res.json();

      if (location.code === 422) {
        console.log('IP INVALIDA')
        setAddress({})
        setUbication([])
      } else {
        setAddress({ ...location })
        setUbication([location.location.lat, location.location.lng])
      }

    }

    getAddress()
  }, [ip])

  return (
    <>
      <header className="header">
        <div className="App container">
          <h1>IP Address Tracker</h1>
          <Search setIp={setIp} ip={ip} />
          {
            address.location &&
            <Address address={address} />
          }
        </div>
      </header>
      <main className="main">
        {ubication.length > 0 &&
          <Map ubication={ubication} />
        }
      </main>
    </>
  );
}

export default App;
