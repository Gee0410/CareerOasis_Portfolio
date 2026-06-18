import { defineConfig } from 'vite'
import react from '@vitejs/react-refresh' // 或者 @vitejs/plugin-react

export default defineConfig({
  plugins: [react()],
  base: '/CareerOasis_Portfolio/', // 🎯 必须和你的 GitHub 仓库名大小写完全一致！
})