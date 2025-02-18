#include "device_modules.h"

using namespace DeviceModules;
using namespace DeviceModules::TFT_Screen;

Adafruit_ST7735 TFT_Screen::tft = Adafruit_ST7735(LCD_CS,  LCD_AO, LCD_RESET);
GFXcanvas16 TFT_Screen::offscr_canvas(LCD_SCR_HEIGHT, LCD_SCR_WIDTH);

void TFT_Screen::setup(){
  tft.initR(INITR_BLACKTAB);
  tft.setRotation(3);
  offscr_canvas.fillScreen(ST77XX_BLACK);

  // Set text properties
  offscr_canvas.setTextSize(1);        // Set text size (2x scale)
  offscr_canvas.setTextColor(ST77XX_WHITE); // Set text color
}

void TFT_Screen::screen_update(){
  tft.drawRGBBitmap(0, 0, offscr_canvas.getBuffer(), offscr_canvas.width(), offscr_canvas.height());
}