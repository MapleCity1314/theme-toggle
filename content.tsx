import type { PlasmoCSConfig } from "plasmo"
import "./style.css"

export const config: PlasmoCSConfig = {
  matches: ["<all_urls>"]
}

chrome.runtime.onMessage.addListener((msg, sender, sendResponse) => {
  if (msg.type === "TOGGLE_DARK_MODE") {
    document.documentElement.classList.toggle("dark-mode")
    sendResponse({ status: "ok" })
  }
})
