#include "device.h"

#include "device_modules/device_modules.h"

using namespace Device;

DeviceStatus Device::current_status = DeviceStatus::NOT_CONNECTED;

void Device::run(){
    while(current_status==DeviceStatus::NOT_CONNECTED){
        //wait for connection from client
        if(Serial.available()){
            String client_info = Serial.readString();
            if(client_info == "DEVICE_CONNECT"){
                Serial.write("DEVICE_ACK");
                Serial.flush();
                Serial.end();
                current_status = DeviceStatus::CONNECTED;
            }
        }
        delay(250);
    }
    while(current_status==DeviceStatus::CONNECTED){
        //wait for client to send sql queries or send enabling rfid signal
        if(Serial.available()){
            String client_command = Serial.readString();
        }
    }
}