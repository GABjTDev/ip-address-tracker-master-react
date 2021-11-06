export default function Address({ address }) {

    return (
        <div className="box box-lg">
            <div className="box-data">
                <h2>IP ADDRESS</h2>
                <p className="info">{address.ip}</p>
            </div>

            <div className="box-data">
                <h2>LOCATION</h2>
                <p className="info">{address.location.city}</p>
            </div>

            <div className="box-data">
                <h2>TIMEZONE</h2>
                <p className="info">{address.location.timezone}</p>
            </div>

            <div className="box-data">
                <h2>ISP</h2>
                <p className="info">{address.isp}</p>
            </div>
        </div>
    )


}