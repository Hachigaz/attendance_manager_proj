import { createContext, ReactNode, useContext, useState } from "react";
import { SerialPort } from "serialport";

interface AppContextData {
    serial_port:SerialPort | null
    connectSerial: ()=>Promise<boolean>
}

const AppContext = createContext<AppContextData>(null);

interface AppProviderProps {
    children: ReactNode; // Accepts any valid React children (components, JSX, etc.)
}

export const AppProvider: React.FC<AppProviderProps> = ({ children }) => {
    const SERIAL_BAUD = 921600
    let connecting = false;
    let device_connected = false
    const [serial_port, setPort] = useState<SerialPort | null>(null);

    const connectSerial = async () => {
        if(!connecting){
            console.log("connecting")
            connecting=true;
            const ports = await SerialPort.list()
            port_loop: for (const port_info of ports){
                const port = new SerialPort({
                    path:port_info.path,
                    baudRate:SERIAL_BAUD
                })

                console.log(port_info)
            }
        }
        else{
            console.log("not connecting")
        }
        if(!device_connected){
            connecting=false
        }
        return device_connected;
    };

    return (
        <AppContext.Provider value={{ serial_port, connectSerial }}>
            {children}
        </AppContext.Provider>
    );
};

export const useAppContext = () => useContext(AppContext);