from selenium import webdriver
from selenium.webdriver.chrome.options import Options
from selenium.webdriver.support.select import Select
from selenium.webdriver.common.by import By
from selenium.webdriver.support.ui import WebDriverWait
from selenium.webdriver.support import expected_conditions as EC
import time
import requests
from PIL import Image
import re

def picId_to_name(id):
    switcher = {
        457239033: 'Шинобу Кочо',
        457239025: 'Гию Томиока',
        457239026: 'Саконджи Урокодаки',
        457239027: 'Мицури Канроджи',
        457239028: 'Кёджуро Ренгоку',
        457239029: 'Обанай Игуро',
        457239030: 'Санеми Шинадзугава',
        457239031: 'Муичиро Токито',
        457239427: 'Гёмей Химеджима',
        457239034: 'Тенген Узуй'
    }

    return switcher.get(id, 'nothing')

def getNeedBtn(array_of_buttons, attachment):
    need_button = None
    for i in array_of_buttons:
        if i.get_attribute('data-label') == picId_to_name(attachment):
            need_button = i
            break

    return need_button

o = Options()
o.add_experimental_option("detach", True)
userdatadir = 'C:/Users/mdovg/AppData/Local/Google/Chrome/User Data/'
o.add_argument(f"--user-data-dir={userdatadir}")

browser = webdriver.Chrome(options=o)
browser.maximize_window()
browser.get('https://vk.com/im?sel=-218252023')


while True:
    r = requests.get('https://api.vk.com/method/messages.getHistory?access_token=vk1.a.XnKwuFbUXxQg0QQRPYr_VG8OuqdPGcvwECDm8oCN4l_tstx5WUTor_hBwOzln-kS-zm9tgtR4jTF2cu28K9WY5zDFR65lT1Bhmic6fTj8Xniz59cRiAVn72YXujaGFOr8jQoueqtYSUWEvOlRhHVgPsvvu2qOKx9GMdcfBOEP3pwwRmapvLVttA5xb6kWoDXHdfk6LTr1BIsbCjJITUd4g&offset=-1&count=1&peer_id=-218252023&start_message_id=-1&v=5.131')
    json = r.json()
    text = json['response']['items']
    if len(text):
        text = json['response']['items'][0]['text']
        id = json['response']['items'][0]['id']
    else:
        r = requests.get('https://api.vk.com/method/messages.getHistory?access_token=vk1.a.XnKwuFbUXxQg0QQRPYr_VG8OuqdPGcvwECDm8oCN4l_tstx5WUTor_hBwOzln-kS-zm9tgtR4jTF2cu28K9WY5zDFR65lT1Bhmic6fTj8Xniz59cRiAVn72YXujaGFOr8jQoueqtYSUWEvOlRhHVgPsvvu2qOKx9GMdcfBOEP3pwwRmapvLVttA5xb6kWoDXHdfk6LTr1BIsbCjJITUd4g&offset=0&count=1&peer_id=-218252023&start_message_id=-1&v=5.131')
        json = r.json()
        text = json['response']['items'][0]['text']
        id = json['response']['items'][0]['id']
        
    # msg = browser.find_elements(By.CSS_SELECTOR, f'li[data-msgid="{id}"]')

    if text == "🔥Вы начали тренировку с вашим наставником. Чтобы закончить её, определите, кто на фото🔥":
        attachment = json['response']['items'][0]['attachments'][0]['photo']['id']
    elif "Вы успешно прошли тренировку!🔥" in text:
        browser.find_element(By.CLASS_NAME, 'im-chat-input--text').send_keys('Тренировка&#128170;')
        time.sleep(0.5)
        browser.find_element(By.XPATH, '//*[@id="content"]/div/div/div[3]/div[2]/div[4]/div[4]/div[4]/div[1]/button').click()
        time.sleep(0.5)
        continue
    elif "Для следующей тренировки подождите" in text:
        needTime = int(re.findall(r"\d{1}", text)[0])
        time.sleep(needTime + 0.5)
        browser.find_element(By.CLASS_NAME, 'im-chat-input--text').send_keys('Тренировка&#128170;')
        time.sleep(0.5)
        browser.find_element(By.XPATH, '//*[@id="content"]/div/div/div[3]/div[2]/div[4]/div[4]/div[4]/div[1]/button').click()
        time.sleep(0.5)
        continue
    elif text == "Тренировка💪":
        browser.find_element(By.CLASS_NAME, 'im-chat-input--text').send_keys('Тренировка&#128170;')
        time.sleep(0.5)
        browser.find_element(By.XPATH, '//*[@id="content"]/div/div/div[3]/div[2]/div[4]/div[4]/div[4]/div[1]/button').click()
        time.sleep(15)
        continue
    else:
        browser.find_element(By.CLASS_NAME, 'im-chat-input--text').send_keys('Тренировка&#128170;')
        time.sleep(0.5)
        browser.find_element(By.XPATH, '//*[@id="content"]/div/div/div[3]/div[2]/div[4]/div[4]/div[4]/div[1]/button').click()
        time.sleep(0.5)
        continue

    container = browser.find_element(By.CLASS_NAME, f'_im_msg_media{id}')
    keyboard = container.find_element(By.CLASS_NAME, 'MessageKeyboard')
    buttons = keyboard.find_elements(By.TAG_NAME, 'button')

    # attachment = popa.find_element(By.TAG_NAME, 'a')
    # attachment = attachment.get_attribute('href')
    # attachment = int(re.findall(r'\d{9}', attachment)[1])
    # rows = keyboard.find_elements(By.CLASS_NAME, 'MessageKeyboard__row')

    getNeedBtn(buttons, attachment).click()

    time.sleep(10)

    browser.find_element(By.CLASS_NAME, 'im-chat-input--text').send_keys('Тренировка&#128170;')
    time.sleep(0.5)
    browser.find_element(By.XPATH, '//*[@id="content"]/div/div/div[3]/div[2]/div[4]/div[4]/div[4]/div[1]/button').click()
    time.sleep(0.5)
