import { useCallback, useState } from "react"
import styles from "./popup.module.css"

function Popup() {
  const [checked, setChecked] = useState(false)

  const handleToggle = useCallback(() => {
    setChecked((prev) => !prev)
    chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
      if (tabs[0].id) {
        chrome.tabs.sendMessage(
          tabs[0].id,
          { type: "TOGGLE_DARK_MODE" },
          (response) => {
            console.log("响应：", response)
          }
        )
      }
    })
  }, [])

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>🌙 Dark Mode 开关</h2>
      <label className={styles.switch}>
        <input type="checkbox" checked={checked} onChange={handleToggle} />
        <span className={styles.slider}></span>
      </label>
    </div>
  )
}

export default Popup
