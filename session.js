//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//                                                                                                      //
//                                   𝗤𝗨𝗘𝗘𝗡-𝗔𝗡𝗝𝗨 𝗫ᴾᴿᴼ 𝐁𝐎𝐓                                               //
//                                                                                                      //
//                                         Ｖ：5.0.0                                                       //
//
//
//░██████╗░██╗░░░██╗███████╗███████╗███╗░░██╗  ░█████╗░███╗░░██╗░░░░░██╗██╗░░░██╗  ██╗░░██╗██████╗░██████╗░░█████╗░
//██╔═══██╗██║░░░██║██╔════╝██╔════╝████╗░██║  ██╔══██╗████╗░██║░░░░░██║██║░░░██║  ╚██╗██╔╝██╔══██╗██╔══██╗██╔══██╗
//██║██╗██║██║░░░██║█████╗░░█████╗░░██╔██╗██║  ███████║██╔██╗██║░░░░░██║██║░░░██║  ░╚███╔╝░██████╔╝██████╔╝██║░░██║
//╚██████╔╝██║░░░██║██╔══╝░░██╔══╝░░██║╚████║  ██╔══██║██║╚████║██╗░░██║██║░░░██║  ░██╔██╗░██╔═══╝░██╔══██╗██║░░██║
//░╚═██╔═╝░╚██████╔╝███████╗███████╗██║░╚███║  ██║░░██║██║░╚███║╚█████╔╝╚██████╔╝  ██╔╝╚██╗██║░░░░░██║░░██║╚█████╔╝
//░░░╚═╝░░░░╚═════╝░╚══════╝╚══════╝╚═╝░░╚══╝  ╚═╝░░╚═╝╚═╝░░╚══╝░╚════╝░░╚═════╝░  ╚═╝░░╚═╝╚═╝░░░░░╚═╝░░╚═╝░╚════╝░
//
//
//
//══════════════════════════════════════════════════════════════════════════════════════════════════════//
//*
//  * @project_name : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ
//  * @version      : 5.0
//  * @author       : Janith Rashmika
//  * @youtube      : https://www.youtube.com/@gamingrash2006
//  * @description  : © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ, A Multi-functional WhatsApp bot created by Janith Rashmika.
//*
//*
//Base by Janith Rashmika
//GitHub: @Mrrashmika
//WhatsApp: +94717775628
//Want more free bot scripts? Subscribe to my YouTube channel: https://youtube.com/@gamingrash2006
//   * Created By GitHub: Mrrashmika
//   * Credit To Janith Rashmika
//   * © 2025 © 𝚀𝚄𝙴𝙴𝙽 𝙰𝙽𝙹𝚄 𝗑ᴾᴿᴼ-V4.
// ⛥┌┤
// */

const fs = require("fs");
if (fs.existsSync("config.env"))
  require("dotenv").config({ path: "./config.env" });

function convertToBool(text, fault = "true") {
  return text === fault ? true : false;
}
module.exports = {
  SESSION_ID:
    process.env.SESSION_ID ||
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoia0tTNUF4aFZ4MDc2cnVNamxDRjg2dzYrQmlRNmNHR29kWURPQkFoTVJrVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiN2JtREV1aHNkZVY3UWgwc2F1SGcwSVJ4N0x0RTN4QzA4RkRIQjEzalNYWT0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJpTzUxTXhkY1dHSG13Q1RZSmJpL0FKdklhQm85TzBJQUZBVU5zb29Vc1dNPSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJVUjdUSjc0VU5nVGtoaU9acVRHWmtWanN6N0xaVk4xaDNDb2sxSFZialJvPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6ImtOWVNVYUh1WWVwZkpHV3k4bTRTako5TGJWbjMrdU9IMUp5bzRDN3JZMmc9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJTVjdRVzN0cnpEdHViQXJGZnYwZUZaWTJSMHF5a3ZMSi9aU1FqdlVRbXM9In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoieVAzU3Z3ZVVkeUs5Y0hodFVEVkdyZ1JjOEx6YmEwUU1tQTU4OXFuZDYwQT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiemp3elY5WTdaUlU3cGU2M0lvZHpIb01KbTI5cHJvR1d5aGJGbEx4L2Z4RT0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkFWeXpaS05kcVJQaG9la2tIeER2Sk9sUkFIcGlIcExCTE50K0JLOTUrT2pETzVPT1JLSEl6cnRrRFQxeURoNW0rTnhnYXdraWk1YUE0bTAzWnpHekR3PT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTQ4LCJhZHZTZWNyZXRLZXkiOiJhY2JPU1BjdGd3Wk93Q0dIcmgwblBKbkt6c3NXNzZIS0VMdDFEL1U5eVJzPSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W3sia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUyOTc4MjM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IkQ1NzZBRTFBNDMxOEZCMUI1MDE4QTE0MEYyOTM1MTEwIn0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTIzMzMzMTR9LHsia2V5Ijp7InJlbW90ZUppZCI6Ijk0NzUyOTc4MjM3QHMud2hhdHNhcHAubmV0IiwiZnJvbU1lIjp0cnVlLCJpZCI6IjE1NTk4RDM1RTI4N0YwRUQ1RDAyQzNGM0U0NEE3QTc3In0sIm1lc3NhZ2VUaW1lc3RhbXAiOjE3NTIzMzMzMTV9XSwibmV4dFByZUtleUlkIjozMSwiZmlyc3RVbnVwbG9hZGVkUHJlS2V5SWQiOjMxLCJhY2NvdW50U3luY0NvdW50ZXIiOjEsImFjY291bnRTZXR0aW5ncyI6eyJ1bmFyY2hpdmVDaGF0cyI6ZmFsc2V9LCJkZXZpY2VJZCI6IkhTckdCS0s4Umo2cWhvMmVfbUp3eUEiLCJwaG9uZUlkIjoiYjZmNjU5MTMtOWRiNy00MDc5LTg4MjctNzI3Y2IyNGRlM2E4IiwiaWRlbnRpdHlJZCI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IjdIT1RhaTNwaXZna1F1eGllUGxMNnBmd3U4bz0ifSwicmVnaXN0ZXJlZCI6dHJ1ZSwiYmFja3VwVG9rZW4iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJkN2p6cXdaVkNKbGR4bHhvMW53eHlueDNISmc9In0sInJlZ2lzdHJhdGlvbiI6e30sInBhaXJpbmdDb2RlIjoiTVQ1UkwxS1giLCJtZSI6eyJpZCI6Ijk0NzUyOTc4MjM3OjM0QHMud2hhdHNhcHAubmV0IiwibGlkIjoiNjQ3OTQ1MTQyMTA4NTQ6MzRAbGlkIiwibmFtZSI6IkRVTEEgOVjwn5G/4pig77iPIn0sImFjY291bnQiOnsiZGV0YWlscyI6IkNOZVZoWkFHRVBQM3ljTUdHQjBnQUNnQSIsImFjY291bnRTaWduYXR1cmVLZXkiOiJ4ckZEcXNYTm1INlFLSW8yaWZJMUthOVI3UEdhOGoxdGFvcTVxdHVUTzBZPSIsImFjY291bnRTaWduYXR1cmUiOiJNS3huRkFiUWtxUEdyMU5YWTdMREZDUUdtRVJxa1hQbFdINkw5VUp2dVZYZHk5dVdzaFlVQjFlVFRKaEMydVZ2Tkswc1d4Skl0dHMvTzJ2dXpTVS9BQT09IiwiZGV2aWNlU2lnbmF0dXJlIjoid2xtS0I2dGpQY3hVNnFQMExUK0ozV0dGWU94T1VGUHVRenlaMDNiK3R5ekNFODA4d29sZThpejlod1VVZ2lSZ3paMFJCWHc4MVNoS3J6bHdBb2VhQ3c9PSJ9LCJzaWduYWxJZGVudGl0aWVzIjpbeyJpZGVudGlmaWVyIjp7Im5hbWUiOiI5NDc1Mjk3ODIzNzozNEBzLndoYXRzYXBwLm5ldCIsImRldmljZUlkIjowfSwiaWRlbnRpZmllcktleSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkJjYXhRNnJGelpoK2tDaUtOb255TlNtdlVlenhtdkk5YldxS3VhcmJrenRHIn19XSwicGxhdGZvcm0iOiJhbmRyb2lkIiwicm91dGluZ0luZm8iOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJDQUlJRFE9PSJ9LCJsYXN0QWNjb3VudFN5bmNUaW1lc3RhbXAiOjE3NTIzMzMzMTIsImxhc3RQcm9wSGFzaCI6IjFLNGhINCIsIm15QXBwU3RhdGVLZXlJZCI6IkFBQUFBTTkzIn0=",
  BOT_NUMBER:
    process.env.BOT_NUMBER || "94752978237",
  PASSWORD: 
    process.env.PASSWORD || "dulina2011@##",
  SUDO: process.env.SUDO
    ? process.env.SUDO.split(",")
    : ["94752978237", "94758775628"],
  PORT: process.env.PORT || "3000",
  SESSION_DIR: process.env.SESSION_DIR || "sess",
};
