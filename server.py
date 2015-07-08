# Pick up, close, and then let go
# 
# 

import dweepy
import partlycloudy as cloud
from flask import Flask, request

app = Flask(__name__, static_url_path='')

@app.route('/')
def root():
  return app.send_static_file('index.html')

@app.route('/grab')
def grab():
  grabStrength = request.args.get('grabStrength')
  print grabStrength
  return ""

if __name__ == '__main__':
    app.run()




# ACCESS_TOKEN = 'f0a027b4f61f4a10ad06212f96ca7477a93584055895d6d6175a03c636ea8509'
# DEVICE_ID = '243c200cce9f'

# bit = cloud.Bit(ACCESS_TOKEN, DEVICE_ID)

# bit.output(30, 3000)