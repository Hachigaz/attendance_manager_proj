#include <Arduino.h>

#include "device.h"
#include "device_modules/device_modules.h"
#include "common/defs.h"

TaskHandle_t device_task_handle = NULL;
void device_task_run(void *pvParameters){
    try{
        Device::run();
    }
    catch(const char* err){
        Serial.print("Caught exception: ");
        Serial.println(err);
    }

    device_task_handle = NULL;
}


void setup() {
    Serial.begin(921600);
}

void loop(){
    if(!DeviceModules::device_modules_ready){
        if(!DeviceModules::setup_modules()){
            return;
        }
    }

    //execute on different task
    if(device_task_handle==NULL){
        xTaskCreatePinnedToCore(
            device_task_run,   // Task function
            "Task1",  // Task name
            2048,    // Stack size (bytes)
            NULL,     // Task parameters
            2,        // Priority (1 is low, 3+ is high)
            &device_task_handle,     // Task handle
            1         // Core 1
        );
    }
    else{
        #ifdef _DEBUG
        //monitor stack usage if necessary
        UBaseType_t remainingStack = uxTaskGetStackHighWaterMark(device_task_handle);
        // Serial.print("Remaining stack: ");
        // Serial.print(remainingStack * 4);
        // Serial.println(" bytes");
        delay(1000);
        #endif
    }

    //run directly on loop
    // device_task_run();
}