#include "device_modules.h"

using namespace DeviceModules;

bool DeviceModules::device_modules_ready = false;



//setup rfids, sd card device, sqlite database
bool DeviceModules::setup_modules(){
    if(1){
        device_modules_ready = true;
    }
    return device_modules_ready;
}