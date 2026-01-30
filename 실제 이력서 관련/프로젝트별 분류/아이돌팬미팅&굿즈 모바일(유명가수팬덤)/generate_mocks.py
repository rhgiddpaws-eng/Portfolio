from PIL import Image, ImageDraw, ImageFont
import os

# Configuration
WIDTH, HEIGHT = 600, 1200
BG_COLOR = "#FFFFFF"
PRIMARY_COLOR = "#FF4081"
SECONDARY_COLOR = "#7C4DFF"
DARK_COLOR = "#2D3436"
TEXT_COLOR = "#2D3436"

def create_base_image(bg_color=BG_COLOR):
    return Image.new("RGB", (WIDTH, HEIGHT), bg_color)

def draw_header(draw, title, dark=False):
    bg = DARK_COLOR if dark else "white"
    text = "white" if dark else DARK_COLOR
    draw.rectangle([0, 0, WIDTH, 100], fill=bg)
    
    # Try using a default font, size is tricky without .ttf, trying default
    # If possible load a specific font, but default is safer for portability
    # To get larger text without font file, we can't easily on some systems.
    # We will assume default font is small, so we might need to draw text multiple times or finding a system font.
    # For now, I'll rely on simple drawing.
    
    draw.text((30, 40), title, fill=text) # Standard PIL font is very small
    # To make it better, I'll try to use a large truetype if available (e.g. arial.ttf on windows)
    return bg

def get_font(size=40):
    try:
        return ImageFont.truetype("arial.ttf", size)
    except:
        try:
            return ImageFont.truetype("C:\\Windows\\Fonts\\arial.ttf", size)
        except:
            return ImageFont.load_default()

# 1. Live Streaming UI
def create_streaming_image(filename):
    img = create_base_image(DARK_COLOR)
    draw = ImageDraw.Draw(img)
    font_lg = get_font(60)
    font_md = get_font(40)
    font_sm = get_font(25)

    # Video Area
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill="#111111")
    
    # Full screen video placeholder (gradient or solid)
    draw.rectangle([0, 150, WIDTH, 900], fill="#333333", outline=None)
    draw.text((WIDTH//2 - 100, HEIGHT//2), "LIVE VIDEO FEED", font=font_md, fill="#666666")

    # Header Overlay
    draw.text((30, 60), "JISOO", font=font_md, fill="white")
    
    # Live Badge
    draw.rectangle([WIDTH-150, 60, WIDTH-30, 110], fill="#FF0000")
    draw.text((WIDTH-125, 70), "LIVE", font=font_sm, fill="white")
    draw.text((WIDTH-230, 70), "👁 1.2M", font=font_sm, fill="white")

    # Chat Area
    y = 950
    chats = [
        ("User1", "So beautiful! ❤️"),
        ("User2", "We love you JISOO!"),
        ("User3", "Hello from Brazil!"),
        ("User4", "New album is amazing!")
    ]
    for user, msg in chats:
        draw.text((30, y), f"{user}: {msg}", font=font_sm, fill="white")
        y += 50
    
    # Hearts
    draw.ellipse([WIDTH-120, HEIGHT-120, WIDTH-40, HEIGHT-40], fill=PRIMARY_COLOR)
    draw.text((WIDTH-100, HEIGHT-90), "♥", font=font_lg, fill="white")

    img.save(filename)
    print(f"Saved {filename}")

# 2. Commerce / Goods
def create_commerce_image(filename):
    img = create_base_image(BG_COLOR)
    draw = ImageDraw.Draw(img)
    font_lg = get_font(50)
    font_md = get_font(35)
    font_sm = get_font(25)

    # Header
    draw.rectangle([0, 0, WIDTH, 120], fill="white")
    draw.text((30, 40), "JISOO STORE", font=font_lg, fill=DARK_COLOR)
    draw.text((WIDTH-80, 40), "🛍", font=font_lg, fill=DARK_COLOR)

    # Banner
    draw.rectangle([20, 140, WIDTH-20, 400], fill=SECONDARY_COLOR)
    draw.text((50, 240), "NEW COLLECTION\nFLOWER EDITION", font=font_lg, fill="white")

    # Product Grid
    # Product 1
    draw.rectangle([20, 440, WIDTH/2 - 10, 800], outline="#ddd", width=2)
    draw.rectangle([30, 450, WIDTH/2 - 20, 650], fill="#eee") # Image placeholder
    draw.text((30, 670), "JISOO 1st Album", font=font_sm, fill=DARK_COLOR)
    draw.text((30, 710), "₩ 24,000", font=font_md, fill=PRIMARY_COLOR)

    # Product 2
    draw.rectangle([WIDTH/2 + 10, 440, WIDTH-20, 800], outline="#ddd", width=2)
    draw.rectangle([WIDTH/2 + 20, 450, WIDTH-30, 650], fill="#eee") # Image placeholder
    draw.text((WIDTH/2 + 20, 670), "Light Stick", font=font_sm, fill=DARK_COLOR)
    draw.text((WIDTH/2 + 20, 710), "₩ 45,000", font=font_md, fill=PRIMARY_COLOR)

    # Bottom Nav
    draw.rectangle([0, HEIGHT-100, WIDTH, HEIGHT], fill="white", outline="#ddd")
    draw.text((80, HEIGHT-70), "🏠", font=font_md, fill="#ccc")
    draw.text((280, HEIGHT-70), "🛍", font=font_md, fill=PRIMARY_COLOR)
    draw.text((480, HEIGHT-70), "👤", font=font_md, fill="#ccc")

    img.save(filename)
    print(f"Saved {filename}")

# 3. NFC Player
def create_nfc_image(filename):
    img = create_base_image(DARK_COLOR)
    draw = ImageDraw.Draw(img)
    font_xl = get_font(70)
    font_lg = get_font(50)
    font_md = get_font(35)
    font_sm = get_font(25)

    # Background blur effect (simulated with solid color for now)
    draw.rectangle([0, 0, WIDTH, HEIGHT], fill="#202020")

    # Top Bar
    draw.text((WIDTH//2 - 50, 50), "Now Playing", font=font_md, fill="white")

    # Album Art
    margin = 80
    draw.rectangle([margin, 200, WIDTH-margin, 200 + (WIDTH-2*margin)], fill="#333")
    draw.rectangle([margin+10, 210, WIDTH-margin-10, 200 + (WIDTH-2*margin)-10], fill=SECONDARY_COLOR)
    draw.text((WIDTH//2 - 120, 350), "FLOWER\nALBUM", font=font_lg, fill="white", align="center")

    # Song Info
    draw.text((30, 750), "FLOWER", font=font_xl, fill="white")
    draw.text((30, 830), "JISOO", font=font_md, fill="#aaa")

    # Progress Bar
    draw.rectangle([30, 920, WIDTH-30, 925], fill="#444")
    draw.rectangle([30, 920, 250, 925], fill=PRIMARY_COLOR)
    draw.ellipse([240, 912, 260, 933], fill="white")
    draw.text((30, 940), "1:20", font=font_sm, fill="#aaa")
    draw.text((WIDTH-80, 940), "3:05", font=font_sm, fill="#aaa")

    # Controls
    draw.text((WIDTH//2 - 40, 1020), "▶", font=font_xl, fill="white")
    draw.text((WIDTH//2 - 150, 1030), "⏮", font=font_lg, fill="white")
    draw.text((WIDTH//2 + 90, 1030), "⏭", font=font_lg, fill="white")

    # NFC Tag Notification
    draw.rectangle([50, HEIGHT-150, WIDTH-50, HEIGHT-50], fill="#333", outline=PRIMARY_COLOR, width=2)
    draw.text((WIDTH//2 - 180, HEIGHT-110), "📡 Tag Album NFC to Authenticate", font=font_sm, fill="white")

    img.save(filename)
    print(f"Saved {filename}")

# 4. Membership Page
def create_membership_image(filename):
    img = create_base_image("#FBFAFF") # Light slightly purple
    draw = ImageDraw.Draw(img)
    font_xl = get_font(60)
    font_lg = get_font(45)
    font_md = get_font(35)
    font_sm = get_font(25)

    # Header
    draw.text((30, 50), "MEMBERSHIP", font=font_lg, fill=DARK_COLOR)

    # Card
    card_y = 150
    draw.rectangle([40, card_y, WIDTH-40, card_y+350], fill=DARK_COLOR, outline="#FFD700", width=3)
    # Gold accents
    draw.text((70, card_y+30), "BLINK PREMIUM", font=font_md, fill="#FFD700")
    draw.text((70, card_y+150), "JISOO OFFICIAL\nFANCLUB", font=font_lg, fill="white")
    draw.text((70, card_y+280), "No. 00001234", font=font_sm, fill="#aaa")

    # Benefits
    list_y = 550
    draw.text((40, list_y), "Membership Benefits", font=font_md, fill=DARK_COLOR)
    
    benefits = [
        "✨ Exclusive Pre-sale Tickets",
        "🎥 Member-only Live Content",
        "🎁 Special Welcome Kit",
        "💬 Private Community Access",
        "🏷️ Shop Discount 5%"
    ]
    
    y = list_y + 70
    for b in benefits:
        draw.text((50, y), b, font=font_sm, fill="#555")
        y += 60

    # Button
    btn_y = 950
    draw.rectangle([40, btn_y, WIDTH-40, btn_y+100], fill=PRIMARY_COLOR)
    draw.text((WIDTH//2 - 80, btn_y+30), "JOIN NOW", font=font_md, fill="white")

    img.save(filename)
    print(f"Saved {filename}")

if __name__ == "__main__":
    create_streaming_image("2.png")
    create_commerce_image("3.png")
    create_nfc_image("4.png")
    create_membership_image("5.png")
