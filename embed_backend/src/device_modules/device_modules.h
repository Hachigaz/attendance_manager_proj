#pragma once
#include <Adafruit_GFX.h>    // Core graphics library
#include <Adafruit_ST7735.h> // Hardware-specific library for ST7735

#include <cstdint>

namespace DeviceModules{
    extern bool device_modules_ready;

    namespace TFT_Screen{
        constexpr int8_t LCD_CS = 4;
        constexpr int8_t LCD_SDA = 23;
        constexpr int8_t LCD_LED = 32;
        constexpr int8_t LCD_RESET = 0;
        constexpr int8_t LCD_SCK = 18;
        constexpr int8_t LCD_AO = 2;
        
        constexpr uint16_t LCD_SCR_WIDTH = 128u;
        constexpr uint16_t LCD_SCR_HEIGHT = 160u;
        
        extern Adafruit_ST7735 tft;
        extern GFXcanvas16 offscr_canvas;
        
        void setup();

        //clear the screen and render new one
        void screen_update();
    }

    bool setup_modules();
}