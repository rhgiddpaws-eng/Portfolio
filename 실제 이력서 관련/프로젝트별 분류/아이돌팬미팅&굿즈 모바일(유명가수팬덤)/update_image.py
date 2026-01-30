import shutil
import time

src = "C:/Users/KUS/.gemini/antigravity/brain/c4d4d41d-8ba7-43dc-b3aa-3ed4f174f86f/live_streaming_ui_jisoo_1769777374778.png"
dst = "d:/AAA 이력서/실제 이력서 관련/프로젝트별 분류/아이돌팬미팅&굿즈 모바일(유명가수팬덤)/2.png"

try:
    shutil.copy2(src, dst)
    print(f"Successfully updated image to: {dst}")
except Exception as e:
    print(f"Failed to copy image: {e}")
