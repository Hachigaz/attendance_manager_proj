#pragma once

namespace Device{
    enum class DeviceStatus{
        NOT_CONNECTED = 0,
        CONNECTED = 1
    };
    extern DeviceStatus current_status;
    void run();
}
