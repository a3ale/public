local cntMap = {20,8,16,17,36,28}
local cnt = 0;
local function printTime() 
  local time = timeBase + tmr.time()
  local sec = time % 60
  local secIdx = sec / 10 +1
  if cnt == 0 then 
   sC(18,c0)
   sC(19,c0)
   cnt = 1
  else 
   sC(18,c5)
   sC(19,c5)
   cnt = 0

   for i=1,6 do
    sC(cntMap[i], i == secIdx and c5 or c0)
   end
  end
end 

if clockTimerSec then clockTimerSec:unregister() end
clockTimerSec = tmr.create()
clockTimerSec:register(500, tmr.ALARM_AUTO, printTime)
clockTimerSec:start()
