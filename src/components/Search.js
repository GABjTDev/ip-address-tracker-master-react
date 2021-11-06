import { useRef } from "react"
import Icon from '../images/icon-arrow.svg'

export default function Search({ ip, setIp }) {

    let ipInput = useRef();

    let handleSubmit = (e) => {
        e.preventDefault();
        setIp(ipInput.current.value);
    }

    return (
        <div className="box input">
            <form className="form" onSubmit={(handleSubmit)}>
                <input value={ip} onChange={(e) => setIp(e.target.value)} placeholder="Search for any IP address or domain" ref={ipInput} />
                <button>
                    <img src={Icon} alt="submit" />
                </button>
            </form>
        </div >
    )

}