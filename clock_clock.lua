timeBase = 21*60*60 + 21*60 + 15 - tmr.time()
local function printTime() 
  local time = timeBase + tmr.time()
  local sec = time % 60
  local min = time/60 % 60
  local hour = time/3600 % 24
  local d1 = min / 1 % 10
  local d2 = min / 10 % 10
  local d3 = hour / 1 % 10
  local d4 = hour / 10 % 10
  sN(0, d1, c0, c2)
  sN(8, d2, c0, c2)
  sN(20, d3, c0, c2)
  sN(28, d4, c0, c2)
end 

if clockTimer then clockTimer:unregister() end
clockTimer = tmr.create()
clockTimer:register(1000, tmr.ALARM_AUTO, printTime)
clockTimer:start()
