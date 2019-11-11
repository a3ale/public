ws2812.init(ws2812.MODE_DUAL)
local buffer = ws2812.newBuffer(36, 3)

local m = {
   {1,1,1,0,1,1,1},
   {1,0,0,0,0,0,1},
   {0,1,1,1,0,1,1},
   {1,1,0,1,0,1,1},
   {1,1,1,0,1,1,1},
   {1,0,0,1,1,0,1},
   {1,1,0,0,1,1,0},
   {1,0,0,0,0,1,1},
   {1,1,1,0,1,1,1},
   {1,1,0,1,1,1,1},
}

c0 = {0,0,0}
c1 = {0,0,50}
c2 = {50,0,0}
c3 = {0,50,0}
c4 = {0,50,50}
c5 = {50,50,0}

function sC(i,c)
  buffer:set(i, unpack(c))
end

function sN(i,n,c0,c1)
 for j=1,7 do
  sC(i+j, (m[n+1][j] == 1) and c1 or c0)
 end
end


buffer:fill(0, unpack(c0)); 

if (tmrLed) then tmrLed:unregister() end
tmrLed = tmr.create()
tmrLed:register(250, tmr.ALARM_AUTO, function() ws2812.write(nil, buffer) end)
tmrLed:start()
