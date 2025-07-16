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
    "ANJU-XPRO~eyJub2lzZUtleSI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidURFajJWVFpGR3gzR2VwSHF3OG0xOWJaU2lESmxwRXFYWHppcHBJZ0JWbz0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiMnVjUnhuWWNkb2hYM0Jxa0pZcWFxMmVPOVJBRjg5NVJ0RmxWaXVqdzYyND0ifX0sInBhaXJpbmdFcGhlbWVyYWxLZXlQYWlyIjp7InByaXZhdGUiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJtSHNIQUszb21Dem5yYkp3N1hQYnU2aXJnUUxxQVhSWTNoQThvOGRHQ0Y0PSJ9LCJwdWJsaWMiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJ6ekI1YUZwNytrMHFvT2k0SWtLRzJpVkx2eXpsSytvbFA1UzRXUmFTY0FBPSJ9fSwic2lnbmVkSWRlbnRpdHlLZXkiOnsicHJpdmF0ZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IndNSVN5dExObGx2UklBY010NWY2aEVEbnVKRnd4QkRMdGhOS1NFblNtbFU9In0sInB1YmxpYyI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6InptcFArWnR5Z00rVStFaDhSUnozMS80cWhWekQ4MnUzOUN1Y1NMT3Nsbk09In19LCJzaWduZWRQcmVLZXkiOnsia2V5UGFpciI6eyJwcml2YXRlIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoidUM1SEc5ZGlkbGJUVDlpOWZjM2lqcjhGRjY5K1NoMUZxd0tIcmtwbDIyVT0ifSwicHVibGljIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiTkVWajJnaUM5Ti8zeHBrWG5BakZGRTdMNkNyL1MxUmtpV1hCUkpTSmZ6Zz0ifX0sInNpZ25hdHVyZSI6eyJ0eXBlIjoiQnVmZmVyIiwiZGF0YSI6IkQxYmM3a3lZN0NONTR6MUt5VG5UMFJLOWJsb1FtY1h1enIzVERTK21lWndtNzVrcjhlYjhxMmczRUhvQjNTc09WWUxBQ2ZDb1FnV0pUL3lZa2dVSkJnPT0ifSwia2V5SWQiOjF9LCJyZWdpc3RyYXRpb25JZCI6MTU2LCJhZHZTZWNyZXRLZXkiOiJrUWg4M0ZJdGtBR0JoYnpId01QWERUWG9jUit3OWtwb1JzVU1OMWNLcDA0PSIsInByb2Nlc3NlZEhpc3RvcnlNZXNzYWdlcyI6W10sIm5leHRQcmVLZXlJZCI6MzEsImZpcnN0VW51cGxvYWRlZFByZUtleUlkIjozMSwiYWNjb3VudFN5bmNDb3VudGVyIjowLCJhY2NvdW50U2V0dGluZ3MiOnsidW5hcmNoaXZlQ2hhdHMiOmZhbHNlfSwiZGV2aWNlSWQiOiJfdTNWdXVtdlJuS25zWXAyS2I1ejJRIiwicGhvbmVJZCI6IjA5NmZjMmU2LWJlYTYtNDJmNS1iMDQxLTFkNDEwMTg1ODRiMiIsImlkZW50aXR5SWQiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJncC9jS1VrTVlsRGQvR2loa2k1Z2l2aVlsSVk9In0sInJlZ2lzdGVyZWQiOnRydWUsImJhY2t1cFRva2VuIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiM284SjNMS3JiMUdYRlVtVnlocVVwWi9TVnpvPSJ9LCJyZWdpc3RyYXRpb24iOnt9LCJwYWlyaW5nQ29kZSI6IkNRUVNZVkNHIiwibWUiOnsiaWQiOiI5NDc1Mjk3ODIzNzo0NkBzLndoYXRzYXBwLm5ldCIsImxpZCI6IjY0Nzk0NTE0MjEwODU0OjQ2QGxpZCJ9LCJhY2NvdW50Ijp7ImRldGFpbHMiOiJDTmVWaFpBR0VJakEyY01HR0NrZ0FDZ0EiLCJhY2NvdW50U2lnbmF0dXJlS2V5IjoieHJGRHFzWE5tSDZRS0lvMmlmSTFLYTlSN1BHYThqMXRhb3E1cXR1VE8wWT0iLCJhY2NvdW50U2lnbmF0dXJlIjoiak5NODZvdWxUWmpRZzBSZWVIcE4rOTZOWUNrRERhSy9VWXVwNDhPVmdwWTE2azArbHM5ay9obzhFYU80d3o1WTQ0QzQ5Ky9ZVmc3dHNXK1J4MmpDREE9PSIsImRldmljZVNpZ25hdHVyZSI6ImVGdDV3L0lDalFJODFmdit4RFdxUzg0blMwYnIwbmoxOXpiYU9Cc3kwVU51REFISGFzMXkySUV4VzVDSEV0YVFGa25XUGVBNXlyRkR4OFJVSWNFdkNBPT0ifSwic2lnbmFsSWRlbnRpdGllcyI6W3siaWRlbnRpZmllciI6eyJuYW1lIjoiOTQ3NTI5NzgyMzc6NDZAcy53aGF0c2FwcC5uZXQiLCJkZXZpY2VJZCI6MH0sImlkZW50aWZpZXJLZXkiOnsidHlwZSI6IkJ1ZmZlciIsImRhdGEiOiJCY2F4UTZyRnpaaCtrQ2lLTm9ueU5TbXZVZXp4bXZJOWJXcUt1YXJia3p0RyJ9fV0sInBsYXRmb3JtIjoiYW5kcm9pZCIsInJvdXRpbmdJbmZvIjp7InR5cGUiOiJCdWZmZXIiLCJkYXRhIjoiQ0FJSURRPT0ifSwibGFzdEFjY291bnRTeW5jVGltZXN0YW1wIjoxNzUyNTg4MzA4LCJsYXN0UHJvcEhhc2giOiIxSzRoSDQiLCJteUFwcFN0YXRlS2V5SWQiOiJBQUFBQU0rSCJ9",
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
