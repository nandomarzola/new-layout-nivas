import QRCodeGenerator from "../components/QRCode";

export default function QRCode() {
    return (
        <div style={{background:'#FFF', height:'100vh', padding:'250px'}}>
            <div>
                <QRCodeGenerator />
            </div>
        </div>
    );
}