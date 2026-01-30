import shutil
import os

src_files = [
    ("C:/Users/KUS/.gemini/antigravity/brain/c4d4d41d-8ba7-43dc-b3aa-3ed4f174f86f/live_streaming_ui_1769777115727.png", "2.png"),
    ("C:/Users/KUS/.gemini/antigravity/brain/c4d4d41d-8ba7-43dc-b3aa-3ed4f174f86f/merch_store_ui_1769777136449.png", "3.png"),
    ("C:/Users/KUS/.gemini/antigravity/brain/c4d4d41d-8ba7-43dc-b3aa-3ed4f174f86f/nfc_music_ui_1769777151548.png", "4.png"),
    ("C:/Users/KUS/.gemini/antigravity/brain/c4d4d41d-8ba7-43dc-b3aa-3ed4f174f86f/membership_ui_1769777167552.png", "5.png")
]

for src, dst in src_files:
    try:
        shutil.copy2(src, dst)
        print(f"Copied {src} to {dst}")
    except Exception as e:
        print(f"Error copying {src} to {dst}: {e}")
