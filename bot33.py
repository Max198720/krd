import pytesseract
import cv2
import matplotlib.pyplot as plt
from PIL import Image
import requests
import time
import keyboard
import pyautogui

pytesseract.pytesseract.tesseract_cmd = r'C:\Program Files\Tesseract-OCR\tesseract.exe'

def hz(name):
    print('popa')
    
def picId_to_name(id):
    switcher = {
        457239033: 'шинобу',
        457239025: 'гию',
        457239026: 'урокодаки',
        457239027: 'мицури',
        457239028: 'кёджуро',
        457239029: 'обанай',
        457239030: 'санеми',
        457239031: 'муичиро',
        457239427: 'гёмей',
        457239034: 'узуй'
    }

    return switcher.get(id, 'nothing')

def reverse(bool):
    if(bool == True):
        bool = False
    elif(bool == False):
        bool = True
    return bool

status = False

keyboard.add_hotkey("ctrl+shift+o", lambda: start())

def start():
    global status
    status = reverse(status)
    if(status == True):
        while status == True:
            screen = pyautogui.screenshot('screenshot.png', region=(922, 234, 765, 610))
            r = requests.get('https://api.vk.com/method/messages.getHistory?access_token=vk1.a.XnKwuFbUXxQg0QQRPYr_VG8OuqdPGcvwECDm8oCN4l_tstx5WUTor_hBwOzln-kS-zm9tgtR4jTF2cu28K9WY5zDFR65lT1Bhmic6fTj8Xniz59cRiAVn72YXujaGFOr8jQoueqtYSUWEvOlRhHVgPsvvu2qOKx9GMdcfBOEP3pwwRmapvLVttA5xb6kWoDXHdfk6LTr1BIsbCjJITUd4g&offset=-1&count=1&peer_id=-218252023&start_message_id=-1&v=5.131')
            json = r.json()
            text = json['response']['items']
            if len(text):
                text = json['response']['items'][0]['text']
            else:
                r = requests.get('https://api.vk.com/method/messages.getHistory?access_token=vk1.a.XnKwuFbUXxQg0QQRPYr_VG8OuqdPGcvwECDm8oCN4l_tstx5WUTor_hBwOzln-kS-zm9tgtR4jTF2cu28K9WY5zDFR65lT1Bhmic6fTj8Xniz59cRiAVn72YXujaGFOr8jQoueqtYSUWEvOlRhHVgPsvvu2qOKx9GMdcfBOEP3pwwRmapvLVttA5xb6kWoDXHdfk6LTr1BIsbCjJITUd4g&offset=0&count=1&peer_id=-218252023&start_message_id=-1&v=5.131')
                json = r.json()
                text = json['response']['items'][0]['text']
            if text == "🔥Вы начали тренировку с вашим наставником. Чтобы закончить её, определите, кто на фото🔥":
                pic = json['response']['items'][0]['attachments'][0]['photo']['id']
                target_word = picId_to_name(pic)
            else:
                message = requests.post('https://api.vk.com/method/messages.send?access_token=vk1.a.XnKwuFbUXxQg0QQRPYr_VG8OuqdPGcvwECDm8oCN4l_tstx5WUTor_hBwOzln-kS-zm9tgtR4jTF2cu28K9WY5zDFR65lT1Bhmic6fTj8Xniz59cRiAVn72YXujaGFOr8jQoueqtYSUWEvOlRhHVgPsvvu2qOKx9GMdcfBOEP3pwwRmapvLVttA5xb6kWoDXHdfk6LTr1BIsbCjJITUd4g&random_id=0&peer_id=-218252023&v=5.131', data={'message': 'треша'})
                time.sleep(1.5)
                continue

            print(target_word)
                    
            image = cv2.imread("screenshot.png")

            image_copy = image.copy()

            data = pytesseract.image_to_data(image, output_type=pytesseract.Output.DICT, lang='rus')

            print(data)

            word_occurences = [ i for i, word in enumerate(data["text"]) if word.lower() == target_word ]

                # string = pytesseract.image_to_string(image, lang='rus')

            for occ in word_occurences:
                    # извлекаем ширину, высоту, верхнюю и левую позицию для обнаруженного слова
                w = data["width"][occ]
                h = data["height"][occ]
                l = data["left"][occ]
                t = data["top"][occ]

                global p5
                p5 = (l + round(w / 2) + 922, t + round(h / 2) + 234)
                    # рисуем 4 линии (прямоугольник)

            pyautogui.click(p5)
            time.sleep(11)
            pyautogui.click(1100, 748)
            time.sleep(2)
    
        # plt.imsave("Giyu.png", image_copy)
        # plt.imshow(image_copy)
        # plt.show()

keyboard.wait()


    