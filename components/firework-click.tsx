"use client"

import { useEffect } from "react"

const colors = ["#FF5252", "#FFD700", "#00B4FF", "#9D4EDD", "#4ADE80"]

export function FireworkClick() {
  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      createFirework(e.clientX, e.clientY)
    }

    const createFirework = (x: number, y: number) => {
      const container = document.createElement("div")
      container.className = "firework-click"
      container.style.left = `${x}px`
      container.style.top = `${y}px`

      // ランダムな数の火花を生成（15-25個）
      const sparkCount = Math.floor(Math.random() * 11) + 15

      for (let i = 0; i < sparkCount; i++) {
        const spark = document.createElement("div")
        spark.className = "spark"

        // ランダムな色を選択
        const color = colors[Math.floor(Math.random() * colors.length)]
        spark.style.backgroundColor = color
        spark.style.boxShadow = `0 0 8px ${color}`

        // ランダムなサイズ（大きめに）
        const size = Math.random() * 4 + 4
        spark.style.width = `${size}px`
        spark.style.height = `${size}px`

        // ランダムな方向と距離（より遠くへ）
        const angle = (Math.PI * 2 * i) / sparkCount + (Math.random() - 0.5) * 0.5
        const distance = Math.random() * 150 + 100
        const dx = Math.cos(angle) * distance
        const dy = Math.sin(angle) * distance

        spark.style.setProperty("--dx", `${dx}px`)
        spark.style.setProperty("--dy", `${dy}px`)

        container.appendChild(spark)
      }

      document.body.appendChild(container)

      // アニメーション終了後に要素を削除
      setTimeout(() => {
        if (container.parentNode) {
          container.parentNode.removeChild(container)
        }
      }, 1000)
    }

    document.addEventListener("click", handleClick)

    return () => {
      document.removeEventListener("click", handleClick)
    }
  }, [])

  return null
}
