import vk_captchasolver as vc
import json
import sys
import argparse

parser = argparse.ArgumentParser()

parser.add_argument('--sid', default='')

args = parser.parse_args()

captcha = vc.solve(image='popa.png') #Solve by sid and s
print(captcha)

new_data = {'key': captcha, 'sid': args.sid}
with open('popa.json', encoding='utf8') as f:
    data = json.load(f)
    data.append(new_data)
with open('popa.json', 'w', encoding='utf8') as outfile:
    json.dump(data, outfile, ensure_ascii=False, indent=2)