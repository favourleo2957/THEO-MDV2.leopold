const fs = require('fs-extra')
if (fs.existsSync('.env')) require('dotenv').config({ path: __dirname+'/.env' })


//═══════[Required Variables]════════\\
global.audio= "" ;  
global.video= "" ;
global.port =process.env.PORT
global.appUrl=process.env.APP_URL || ""                       // put your app url here,
global.email ="theophilustemilade9@gmail.com"
global.location="Lagos,Nigeria."


global.mongodb= process.env.MONGODB_URI || "mongodb+srv://theobot:theobot@cluster0.nj0fs2q.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
global.allowJids= process.env.ALLOW_JID || "null" 
global.blockJids= process.env.BLOCK_JID || "null"
global.DATABASE_URL = process.env.DATABASE_URL || "postgres://u86b91ha7kn7sq:pf9929dc53188366098cd46987ab9938ebcbfbce32a85cf445a447ebcabf2f57b@c5flugvup2318r.cluster-czrs8kj4isg7.us-east-1.rds.amazonaws.com:5432/deoounlpb9jadg"

global.timezone= process.env.TZ || process.env.TIME_ZONE || "Africa/Lagos";
global.github=process.env.GITHUB|| "https://github.com/techtheo/THEO-MDV2";
global.gurl  =process.env.GURL  || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643";
global.website=process.env.GURL || "https://whatsapp.com/channel/0029Va9thusJP20yWxQ6N643" ; 
global.THUMB_IMAGE = process.env.THUMB_IMAGE || process.env.IMAGE || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg?raw=true" ; // SET LOGO FOR IMAGE 
global.caption = process.env.CAPTION || global.caption || "ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ" 


global.devs = "923184474176" // Developer Contact
global.sudo = process.env.SUDO ? process.env.SUDO.replace(/[\s+]/g, '') : "null";
global.owner= process.env.OWNER_NUMBER ? process.env.OWNER_NUMBER.replace(/[\s+]/g, '') : "";




//========================= [ BOT SETTINGS ] ======8===================\\
global.style = process.env.STYLE   || Math.floor(Math.random()*6) || '0'  // put '1' to "5" here to check bot styles
global.flush = process.env.FLUSH   || "false"; // Make it "true" if bot not responed
global.gdbye = process.env.GOODBYE || process.env.CAN_GOODBYE || "false"; 
global.wlcm  = process.env.WELCOME || process.env.CAN_WELCOME || "false";  // Make it "false" for disable WELCOME 

global.warncount = process.env.WARN_COUNT || 3
global.disablepm = process.env.DISABLE_PM || "false"
global.disablegroup = process.env.DISABLE_GROUPS || "false", // disable bot in groups when public mode

global.MsgsInLog = process.env.MSGS_IN_LOG|| "false" // "true"  to see messages , "log" to show logs , "false" to hide logs messages
global.userImages= process.env.USER_IMAGES || "https://i.postimg.cc/Jz0Lnts6/theohacker2.jpg" // "text" // set Image/video urls here
global.waPresence= process.env.WAPRESENCE ||  "null" ; // 'unavailable' | 'available' | 'composing' | 'recording' | 'paused'


//========================= [ AUTO READ MSGS & CMDS ] =========================\\
global.readcmds = process.env.READ_COMMAND || "false"
global.readmessage = process.env.READ_MESSAGE || "false"
global.readmessagefrom = process.env.READ_MESSAGE_FROM || "null,923xxxxxxxx";


//========================= [ AUTO SAVE & READ STATUS ] =========================\\
global.read_status = process.env.AUTO_READ_STATUS || "false"
global.save_status = process.env.AUTO_SAVE_STATUS || "false"
global.save_status_from =  process.env.SAVE_STATUS_FROM  || "null,923xxxxxxxx";
global.read_status_from =  process.env.READ_STATUS_FROM  ||  "923184474176,923xxxxxxxx";

global.api_smd = "https://api-smd.onrender.com" //  || "https://api-smd-1.vercel.app" // expires
global.scan = "https://suhail-md-vtsf.onrender.com";


global.SESSION_ID = process.env.SESSION_ID ||  "SUHAIL_09_43_09_20_ewogICJjcmVkcy5qc29uIjogIntcbiAgXCJub2lzZUtleVwiOiB7XG4gICAgXCJwcml2YXRlXCI6IHtcbiAgICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgMTc2LFxuICAgICAgICAzNCxcbiAgICAgICAgNzQsXG4gICAgICAgIDEyLFxuICAgICAgICAyMDksXG4gICAgICAgIDIyNCxcbiAgICAgICAgOTksXG4gICAgICAgIDI0NyxcbiAgICAgICAgMTAyLFxuICAgICAgICAxNjEsXG4gICAgICAgIDcsXG4gICAgICAgIDEyNCxcbiAgICAgICAgMjEzLFxuICAgICAgICAyMzMsXG4gICAgICAgIDQsXG4gICAgICAgIDUyLFxuICAgICAgICAxNzUsXG4gICAgICAgIDUyLFxuICAgICAgICAxODUsXG4gICAgICAgIDE0MixcbiAgICAgICAgNTYsXG4gICAgICAgIDY2LFxuICAgICAgICAxOTUsXG4gICAgICAgIDY0LFxuICAgICAgICAxNzYsXG4gICAgICAgIDM4LFxuICAgICAgICAzLFxuICAgICAgICAyMjcsXG4gICAgICAgIDUzLFxuICAgICAgICAyMzgsXG4gICAgICAgIDk1LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA0LFxuICAgICAgICAxMjEsXG4gICAgICAgIDg2LFxuICAgICAgICAxMTEsXG4gICAgICAgIDE3NyxcbiAgICAgICAgMTA3LFxuICAgICAgICAyMDUsXG4gICAgICAgIDIxLFxuICAgICAgICAyNTIsXG4gICAgICAgIDEwMixcbiAgICAgICAgNTgsXG4gICAgICAgIDgyLFxuICAgICAgICAxOSxcbiAgICAgICAgMTU3LFxuICAgICAgICAxLFxuICAgICAgICAyNTAsXG4gICAgICAgIDU2LFxuICAgICAgICAxNzMsXG4gICAgICAgIDE0OCxcbiAgICAgICAgMSxcbiAgICAgICAgMjM5LFxuICAgICAgICAxMDcsXG4gICAgICAgIDE4NCxcbiAgICAgICAgMTQ3LFxuICAgICAgICA1NSxcbiAgICAgICAgMTcwLFxuICAgICAgICA1NixcbiAgICAgICAgMTM1LFxuICAgICAgICAxNzIsXG4gICAgICAgIDYwLFxuICAgICAgICAxODMsXG4gICAgICAgIDQ1XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyXCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgMjA3LFxuICAgICAgICAxMDUsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMjI4LFxuICAgICAgICAxNTQsXG4gICAgICAgIDE3MSxcbiAgICAgICAgMTM5LFxuICAgICAgICAyMTUsXG4gICAgICAgIDIxMyxcbiAgICAgICAgMTAxLFxuICAgICAgICAxMSxcbiAgICAgICAgNzcsXG4gICAgICAgIDEwOSxcbiAgICAgICAgMjI4LFxuICAgICAgICAyMTAsXG4gICAgICAgIDIyLFxuICAgICAgICAxMSxcbiAgICAgICAgMjQwLFxuICAgICAgICAxOTUsXG4gICAgICAgIDIxNCxcbiAgICAgICAgMTUyLFxuICAgICAgICAyOCxcbiAgICAgICAgMjI5LFxuICAgICAgICAyMCxcbiAgICAgICAgMTE2LFxuICAgICAgICAxNjgsXG4gICAgICAgIDE5OSxcbiAgICAgICAgNjAsXG4gICAgICAgIDcwLFxuICAgICAgICAxNDIsXG4gICAgICAgIDEwOVxuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAyNCxcbiAgICAgICAgOSxcbiAgICAgICAgNDYsXG4gICAgICAgIDE3OCxcbiAgICAgICAgMzAsXG4gICAgICAgIDIwLFxuICAgICAgICAxMjgsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMzcsXG4gICAgICAgIDIzNyxcbiAgICAgICAgMTg3LFxuICAgICAgICA5NCxcbiAgICAgICAgMTExLFxuICAgICAgICAxOTYsXG4gICAgICAgIDE1NixcbiAgICAgICAgMyxcbiAgICAgICAgMjIyLFxuICAgICAgICA5NCxcbiAgICAgICAgMTI1LFxuICAgICAgICAyNDYsXG4gICAgICAgIDIzMSxcbiAgICAgICAgMzcsXG4gICAgICAgIDI1MyxcbiAgICAgICAgMTM5LFxuICAgICAgICAxODEsXG4gICAgICAgIDE0MCxcbiAgICAgICAgMSxcbiAgICAgICAgMTAxLFxuICAgICAgICAyMjgsXG4gICAgICAgIDI0MixcbiAgICAgICAgMTYsXG4gICAgICAgIDQ5XG4gICAgICBdXG4gICAgfVxuICB9LFxuICBcInNpZ25lZElkZW50aXR5S2V5XCI6IHtcbiAgICBcInByaXZhdGVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICAxMzYsXG4gICAgICAgIDE3MixcbiAgICAgICAgMTAxLFxuICAgICAgICAyNDIsXG4gICAgICAgIDEyMSxcbiAgICAgICAgMTQxLFxuICAgICAgICA1MSxcbiAgICAgICAgMTA2LFxuICAgICAgICAyMSxcbiAgICAgICAgMTE0LFxuICAgICAgICAxOTMsXG4gICAgICAgIDUyLFxuICAgICAgICAxMDEsXG4gICAgICAgIDUwLFxuICAgICAgICA1NixcbiAgICAgICAgNDQsXG4gICAgICAgIDczLFxuICAgICAgICAxNTAsXG4gICAgICAgIDExNSxcbiAgICAgICAgMTM1LFxuICAgICAgICAyMTMsXG4gICAgICAgIDI0NCxcbiAgICAgICAgMTYxLFxuICAgICAgICA3OCxcbiAgICAgICAgNjgsXG4gICAgICAgIDc3LFxuICAgICAgICAxMjAsXG4gICAgICAgIDI0NixcbiAgICAgICAgMTczLFxuICAgICAgICAyMCxcbiAgICAgICAgMTk0LFxuICAgICAgICA5N1xuICAgICAgXVxuICAgIH0sXG4gICAgXCJwdWJsaWNcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA1NixcbiAgICAgICAgMjIzLFxuICAgICAgICAxOTksXG4gICAgICAgIDY5LFxuICAgICAgICA0LFxuICAgICAgICAxNzMsXG4gICAgICAgIDI0MCxcbiAgICAgICAgMjI0LFxuICAgICAgICAyLFxuICAgICAgICAzOSxcbiAgICAgICAgMTI4LFxuICAgICAgICA3NSxcbiAgICAgICAgMjUsXG4gICAgICAgIDEzOSxcbiAgICAgICAgMjEsXG4gICAgICAgIDc4LFxuICAgICAgICAxNDAsXG4gICAgICAgIDIzOSxcbiAgICAgICAgMzUsXG4gICAgICAgIDIyOCxcbiAgICAgICAgMTY0LFxuICAgICAgICA5NSxcbiAgICAgICAgNDgsXG4gICAgICAgIDEyLFxuICAgICAgICAxMjYsXG4gICAgICAgIDk4LFxuICAgICAgICAxOTIsXG4gICAgICAgIDU0LFxuICAgICAgICAxODYsXG4gICAgICAgIDExOCxcbiAgICAgICAgMjQ0LFxuICAgICAgICA4MVxuICAgICAgXVxuICAgIH1cbiAgfSxcbiAgXCJzaWduZWRQcmVLZXlcIjoge1xuICAgIFwia2V5UGFpclwiOiB7XG4gICAgICBcInByaXZhdGVcIjoge1xuICAgICAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICAgICAgXCJkYXRhXCI6IFtcbiAgICAgICAgICAxNixcbiAgICAgICAgICAyOCxcbiAgICAgICAgICAyMTgsXG4gICAgICAgICAgMTIwLFxuICAgICAgICAgIDE2OSxcbiAgICAgICAgICA2OCxcbiAgICAgICAgICAyMzgsXG4gICAgICAgICAgMTIzLFxuICAgICAgICAgIDEzNSxcbiAgICAgICAgICAxNDcsXG4gICAgICAgICAgNjQsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkzLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDIzNyxcbiAgICAgICAgICAyMTIsXG4gICAgICAgICAgMjAzLFxuICAgICAgICAgIDI0MyxcbiAgICAgICAgICAxNzUsXG4gICAgICAgICAgNCxcbiAgICAgICAgICA3NSxcbiAgICAgICAgICAyMzAsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDE0NCxcbiAgICAgICAgICA3NyxcbiAgICAgICAgICAxMDMsXG4gICAgICAgICAgMjI4LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDE2NyxcbiAgICAgICAgICA2NSxcbiAgICAgICAgICAxODgsXG4gICAgICAgICAgOTZcbiAgICAgICAgXVxuICAgICAgfSxcbiAgICAgIFwicHVibGljXCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNTcsXG4gICAgICAgICAgMjMsXG4gICAgICAgICAgMjI3LFxuICAgICAgICAgIDE3MixcbiAgICAgICAgICAyLFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDE4LFxuICAgICAgICAgIDU5LFxuICAgICAgICAgIDk4LFxuICAgICAgICAgIDM0LFxuICAgICAgICAgIDkxLFxuICAgICAgICAgIDE5NyxcbiAgICAgICAgICAyMDQsXG4gICAgICAgICAgMTgzLFxuICAgICAgICAgIDEwMixcbiAgICAgICAgICAxMjksXG4gICAgICAgICAgMTgwLFxuICAgICAgICAgIDE0NyxcbiAgICAgICAgICAxMCxcbiAgICAgICAgICA4NixcbiAgICAgICAgICA3OSxcbiAgICAgICAgICA1OSxcbiAgICAgICAgICAyMixcbiAgICAgICAgICA2OSxcbiAgICAgICAgICAyMjQsXG4gICAgICAgICAgNTUsXG4gICAgICAgICAgMTMxLFxuICAgICAgICAgIDEwMCxcbiAgICAgICAgICAyMjAsXG4gICAgICAgICAgMyxcbiAgICAgICAgICAzMixcbiAgICAgICAgICAxMDlcbiAgICAgICAgXVxuICAgICAgfVxuICAgIH0sXG4gICAgXCJzaWduYXR1cmVcIjoge1xuICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICBcImRhdGFcIjogW1xuICAgICAgICA2MyxcbiAgICAgICAgMTEwLFxuICAgICAgICAxNDMsXG4gICAgICAgIDEwOCxcbiAgICAgICAgODMsXG4gICAgICAgIDE0NixcbiAgICAgICAgNjMsXG4gICAgICAgIDE0MixcbiAgICAgICAgMzEsXG4gICAgICAgIDQ3LFxuICAgICAgICAxNzUsXG4gICAgICAgIDMxLFxuICAgICAgICA0OCxcbiAgICAgICAgMTY1LFxuICAgICAgICAyMjMsXG4gICAgICAgIDE3OSxcbiAgICAgICAgMTMwLFxuICAgICAgICAxMTEsXG4gICAgICAgIDQ2LFxuICAgICAgICAxOTMsXG4gICAgICAgIDE3OCxcbiAgICAgICAgNzIsXG4gICAgICAgIDExNyxcbiAgICAgICAgMTY4LFxuICAgICAgICAyNDcsXG4gICAgICAgIDE5LFxuICAgICAgICAxMDIsXG4gICAgICAgIDE5NixcbiAgICAgICAgNzksXG4gICAgICAgIDIyOSxcbiAgICAgICAgMTIxLFxuICAgICAgICAyNixcbiAgICAgICAgMjM0LFxuICAgICAgICAxMSxcbiAgICAgICAgMjAyLFxuICAgICAgICAxMjAsXG4gICAgICAgIDQ5LFxuICAgICAgICAyMSxcbiAgICAgICAgMTM0LFxuICAgICAgICAyOCxcbiAgICAgICAgMjMxLFxuICAgICAgICAxMTUsXG4gICAgICAgIDIyNSxcbiAgICAgICAgMjQyLFxuICAgICAgICAxNjIsXG4gICAgICAgIDE4MCxcbiAgICAgICAgMTUsXG4gICAgICAgIDE5OCxcbiAgICAgICAgMjQ3LFxuICAgICAgICA0MSxcbiAgICAgICAgMTU1LFxuICAgICAgICA2NSxcbiAgICAgICAgNjcsXG4gICAgICAgIDE0MyxcbiAgICAgICAgMjU1LFxuICAgICAgICAzNSxcbiAgICAgICAgMTg5LFxuICAgICAgICAxNjksXG4gICAgICAgIDI0MyxcbiAgICAgICAgNTcsXG4gICAgICAgIDEwOCxcbiAgICAgICAgMzYsXG4gICAgICAgIDEwNSxcbiAgICAgICAgMTQzXG4gICAgICBdXG4gICAgfSxcbiAgICBcImtleUlkXCI6IDFcbiAgfSxcbiAgXCJyZWdpc3RyYXRpb25JZFwiOiAyNDYsXG4gIFwiYWR2U2VjcmV0S2V5XCI6IFwic1N6Tm5HRTlRL1BOZzkzTkxITXVoaDAxTTg3a25JajJYYXpaVUpFWWhjZz1cIixcbiAgXCJwcm9jZXNzZWRIaXN0b3J5TWVzc2FnZXNcIjogW10sXG4gIFwibmV4dFByZUtleUlkXCI6IDMxLFxuICBcImZpcnN0VW51cGxvYWRlZFByZUtleUlkXCI6IDMxLFxuICBcImFjY291bnRTeW5jQ291bnRlclwiOiAwLFxuICBcImFjY291bnRTZXR0aW5nc1wiOiB7XG4gICAgXCJ1bmFyY2hpdmVDaGF0c1wiOiBmYWxzZVxuICB9LFxuICBcImRldmljZUlkXCI6IFwidG1qZFBpRlBTeE9hTkhEcV96c0J4d1wiLFxuICBcInBob25lSWRcIjogXCJjYTM0YTE0Yy02YzcwLTQzM2MtOTdlMi1lYWU1NDc4NmZlNzVcIixcbiAgXCJpZGVudGl0eUlkXCI6IHtcbiAgICBcInR5cGVcIjogXCJCdWZmZXJcIixcbiAgICBcImRhdGFcIjogW1xuICAgICAgNTksXG4gICAgICAyMDgsXG4gICAgICAyMjAsXG4gICAgICAxMzgsXG4gICAgICAxNzksXG4gICAgICA2NSxcbiAgICAgIDIxOSxcbiAgICAgIDI1MyxcbiAgICAgIDIwNixcbiAgICAgIDc2LFxuICAgICAgNTAsXG4gICAgICAxNzcsXG4gICAgICAyNTEsXG4gICAgICAyOCxcbiAgICAgIDIxNSxcbiAgICAgIDEsXG4gICAgICAxMDQsXG4gICAgICAyNTMsXG4gICAgICA3MSxcbiAgICAgIDE0NVxuICAgIF1cbiAgfSxcbiAgXCJyZWdpc3RlcmVkXCI6IHRydWUsXG4gIFwiYmFja3VwVG9rZW5cIjoge1xuICAgIFwidHlwZVwiOiBcIkJ1ZmZlclwiLFxuICAgIFwiZGF0YVwiOiBbXG4gICAgICAxMzYsXG4gICAgICA4LFxuICAgICAgMjUsXG4gICAgICAxMDksXG4gICAgICAxOTQsXG4gICAgICAxODYsXG4gICAgICAxOTQsXG4gICAgICAyMzUsXG4gICAgICAxNDUsXG4gICAgICA0LFxuICAgICAgMTY1LFxuICAgICAgOTksXG4gICAgICAxNDcsXG4gICAgICAyMzAsXG4gICAgICA2NSxcbiAgICAgIDE1MCxcbiAgICAgIDEzMyxcbiAgICAgIDE1OCxcbiAgICAgIDM1LFxuICAgICAgMjE0XG4gICAgXVxuICB9LFxuICBcInJlZ2lzdHJhdGlvblwiOiB7fSxcbiAgXCJwYWlyaW5nQ29kZVwiOiBcIjFZWFNZTlQ0XCIsXG4gIFwibWVcIjoge1xuICAgIFwiaWRcIjogXCIyMzQ5MDM0MjcxNjU5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICBcImxpZFwiOiBcIjE3NjE1ODQ2OTU1MDI0Nzo3QGxpZFwiXG4gIH0sXG4gIFwiYWNjb3VudFwiOiB7XG4gICAgXCJkZXRhaWxzXCI6IFwiQ0tEbGdiOEJFS3VIdGJjR0dBRWdBQ2dBXCIsXG4gICAgXCJhY2NvdW50U2lnbmF0dXJlS2V5XCI6IFwiTWo5UzAxaFRTYUZKTC9INnJsVWswTnVlNFRqbHVockw2V1hNWDNGUnpsbz1cIixcbiAgICBcImFjY291bnRTaWduYXR1cmVcIjogXCJiUzlJUk04Q1BoSWlKQUM2cFMxcy9kSFk3MGlpVldzam1HK1lwNW93OVkvYnloQW5sWUsybVlBOE4vbkxVTndPYkJjL1hmZm5PMENyNXVDdjI5WVlEdz09XCIsXG4gICAgXCJkZXZpY2VTaWduYXR1cmVcIjogXCJ2VjluQ2xVdUV2QlhjR3FmUmdPQ1NmTnVvTnNPL1YwUFJiUlNzbUJoZmo0a2xXOTBlNzhUZ054S1ExWFg2ZVpvR21JaGhLTHhLSHIrN2ZUdU95YXlpQT09XCJcbiAgfSxcbiAgXCJzaWduYWxJZGVudGl0aWVzXCI6IFtcbiAgICB7XG4gICAgICBcImlkZW50aWZpZXJcIjoge1xuICAgICAgICBcIm5hbWVcIjogXCIyMzQ5MDM0MjcxNjU5OjdAcy53aGF0c2FwcC5uZXRcIixcbiAgICAgICAgXCJkZXZpY2VJZFwiOiAwXG4gICAgICB9LFxuICAgICAgXCJpZGVudGlmaWVyS2V5XCI6IHtcbiAgICAgICAgXCJ0eXBlXCI6IFwiQnVmZmVyXCIsXG4gICAgICAgIFwiZGF0YVwiOiBbXG4gICAgICAgICAgNSxcbiAgICAgICAgICA1MCxcbiAgICAgICAgICA2MyxcbiAgICAgICAgICA4MixcbiAgICAgICAgICAyMTEsXG4gICAgICAgICAgODgsXG4gICAgICAgICAgODMsXG4gICAgICAgICAgNzMsXG4gICAgICAgICAgMTYxLFxuICAgICAgICAgIDczLFxuICAgICAgICAgIDQ3LFxuICAgICAgICAgIDI0MSxcbiAgICAgICAgICAyNTAsXG4gICAgICAgICAgMTc0LFxuICAgICAgICAgIDg1LFxuICAgICAgICAgIDM2LFxuICAgICAgICAgIDIwOCxcbiAgICAgICAgICAyMTksXG4gICAgICAgICAgMTU4LFxuICAgICAgICAgIDIyNSxcbiAgICAgICAgICA1NixcbiAgICAgICAgICAyMjksXG4gICAgICAgICAgMTg2LFxuICAgICAgICAgIDI2LFxuICAgICAgICAgIDIwMyxcbiAgICAgICAgICAyMzMsXG4gICAgICAgICAgMTAxLFxuICAgICAgICAgIDIwNCxcbiAgICAgICAgICA5NSxcbiAgICAgICAgICAxMTMsXG4gICAgICAgICAgODEsXG4gICAgICAgICAgMjA2LFxuICAgICAgICAgIDkwXG4gICAgICAgIF1cbiAgICAgIH1cbiAgICB9XG4gIF0sXG4gIFwicGxhdGZvcm1cIjogXCJhbmRyb2lkXCIsXG4gIFwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wXCI6IDE3MjY4MjUzOTJcbn0iLAogICJhcHAtc3RhdGUtc3luYy1rZXktdW5kZWZpbmVkLmpzb24iOiB7fQp9" //PUT SESSION-ID HERE


module.exports = {

  menu: process.env.MENU || "", /**  Available @MENU @Schemes 1: Aztec_Md, 2: A17_Md, 3: Suhail-Md Default ---------- If Not Choose then it Randomely Pic One Of Them Each time **/

  HANDLERS: process.env.PREFIX  || ".",
  BRANCH  : process.env.BRANCH  || "main",
  VERSION : process.env.VERSION || "1.3.8",
  caption : global.caption || "" , // ```『 ᴘᴏᴡᴇʀᴇᴅ ʙʏ THEO²²¹-ᴍᴅ 』```", //*『sᴜʙsᴄʀɪʙᴇ • sᴜʜᴀɪʟ ᴛᴇᴄʜ』*\n youtube.com/@suhailtechinfo0"),
 
  author : process.env.PACK_AUTHER|| "",
  packname: process.env.PACK_NAME || "",
  botname : process.env.BOT_NAME  || "THEO-MD",
  ownername:process.env.OWNER_NAME|| "Fav",


  errorChat : process.env.ERROR_CHAT || "",
  KOYEB_API : process.env.KOYEB_API  || "false",

  REMOVE_BG_KEY : process.env.REMOVE_BG_KEY  || "",
  OPENAI_API_KEY: process.env.OPENAI_API_KEY || "",
  HEROKU_API_KEY: process.env.HEROKU_API_KEY || "",
  HEROKU_APP_NAME:process.env.HEROKU_APP_NAME|| "",
  antilink_values:process.env.ANTILINK_VALUES|| "all",
  HEROKU: process.env.HEROKU_APP_NAME && process.env.HEROKU_API_KEY,


  WORKTYPE: process.env.WORKTYPE || process.env.MODE|| "private",
  LANG: ( process.env.THEME ||  "SUHAIL"  ).toUpperCase(),



};



global.ELEVENLAB_API_KEY = process.env.ELEVENLAB_API_KEY || "";
global.aitts_Voice_Id = process.env.AITTS_ID|| "37";





















global.rank = "updated"
global.isMongodb = false; 
let file = require.resolve(__filename)
fs.watchFile(file, () => { fs.unwatchFile(file);console.log(`Update'${__filename}'`);delete require.cache[file];	require(file); })
 

// ========================= [ Disables in V.1.2.8 ] ===============================\\  
  //style : process.env.STYLE || "2",  // put '1' & "2" here to check bot styles
  //readmessage:process.env.READ_MESSAGE|| "false",
  //warncount: process.env.WARN_COUNT || 3,
  //userImages:process.env.USER_IMAGES|| "text",  // SET IMAGE AND VIDEO URL FOR BOT MENUS 
  //disablepm: process.env.DISABLE_PM || "false",
  //MsgsInLog: process.env.MSGS_IN_LOG|| "false", // "true"  to see messages , "log" to open logs , "false" to hide logs messages
  //readcmds:process.env.READ_COMMANDS|| "false", 
  //alwaysonline:process.env.WAPRESENCE|| "unavailable", // 'unavailable' | 'online' | 'composing' | 'recording' | 'paused'
  //read_status: process.env.AUTO_READ_STATUS || "false",
  //save_status: process.env.AUTO_SAVE_STATUS || "false",
  //aitts_Voice_Id : process.env.AITTS_ID || "37",
  //ELEVENLAB_API_KEY: process.env.ELEVENLAB_API_KEY  || "",
