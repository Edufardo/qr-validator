import { useEffect, useState } from 'react'
var QRCode = require('qrcode')

const Qr = () => {

    const [text, setText] = useState('')
    const generateQr = async () => {
        try {
            const res = QRCode.toDataURL("youtube.com").then(setText)
            return res
        } catch (error) {        
        }
    }

    useEffect(() => {
        generateQr()
    }, [])

    return (
        <div>
            <img src={text} />
        </div>
    )
}
export default Qr;