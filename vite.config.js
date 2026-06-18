import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // 🌟 核心修正：换成现代标准的官方插件

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/CareerOasis_Portfolio/', // 🎯 保持你的仓库路径大小写完全一致
})