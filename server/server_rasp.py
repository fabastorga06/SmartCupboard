from flask import Flask
from flask import g
import RPi.GPIO as GPIO
import time
import json
import os
###################################
lights = [5,6,13]
sensors = [4,17,27,22,10,9]
dir = '192.168.0.103'
weight = [19,26,21,20,16]
###################################
GPIO.setmode(GPIO.BCM)
GPIO.setup(lights[0],GPIO.OUT)
GPIO.setup(lights[1],GPIO.OUT)
GPIO.setup(lights[2],GPIO.OUT)
GPIO.setup(sensors[0],GPIO.IN)
GPIO.setup(sensors[1],GPIO.IN)
GPIO.setup(sensors[2],GPIO.IN)
GPIO.setup(sensors[3],GPIO.IN)
GPIO.setup(sensors[4],GPIO.IN)
GPIO.setup(sensors[5],GPIO.IN)
GPIO.setup(weight[0],GPIO.IN)
GPIO.setup(weight[1],GPIO.IN)
GPIO.setup(weight[2],GPIO.IN)
GPIO.setup(weight[3],GPIO.IN)
GPIO.setup(weight[4],GPIO.IN)
###################################



app = Flask(__name__)

@app.route('/lights')
def turn_on_off():
    f = open("lights.txt", "r")
    if(f.read()=='true'):
      GPIO.output(lights[0],GPIO.HIGH)
      GPIO.output(lights[1],GPIO.HIGH)
      GPIO.output(lights[2],GPIO.HIGH)
      f.close()
      f = open("lights.txt", "w")
      f.write("false")
      f.close()
      return '{"status": "On"}'
    else:
      GPIO.output(lights[0],GPIO.LOW)
      GPIO.output(lights[1],GPIO.LOW)
      GPIO.output(lights[2],GPIO.LOW)
      f.close()
      f = open("lights.txt", "w")
      f.write("true")
      f.close()
      return '{"status": "Off"}'

@app.route('/products')
def value_sensors():
    response = {}
    response['caseA'] = str(3-(GPIO.input(sensors[0])+GPIO.input(sensors[1])+GPIO.input(sensors[2])))+' units'
    response['caseB'] = str(3-(GPIO.input(sensors[3])+GPIO.input(sensors[4])+GPIO.input(sensors[5])))+' units'
    if(GPIO.input(weight[0])==1):
        response['caseC'] = '400g'
    elif(GPIO.input(weight[1])==1):
        response['caseC'] = '800g'
    elif(GPIO.input(weight[2])==1):
        response['caseC'] = '1200g'
    elif(GPIO.input(weight[3])==1):
        response['caseC'] = '1600g'
    elif(GPIO.input(weight[4])==1):
        response['caseC'] = '2000g'
    else:
        response['caseC'] = '400g'
    return json.dumps(response)

@app.route('/products/buy')
def value_sensors_buy():
    response = {}
    response['caseA'] = str((GPIO.input(sensors[0])+GPIO.input(sensors[1])+GPIO.input(sensors[2])))+' units'
    response['caseB'] = str((GPIO.input(sensors[3])+GPIO.input(sensors[4])+GPIO.input(sensors[5])))+' units'
    if(GPIO.input(weight[0])==1):
        response['caseC'] = '2000g'
    elif(GPIO.input(weight[1])==1):
        response['caseC'] = '1600g'
    elif(GPIO.input(weight[2])==1):
        response['caseC'] = '1200g'
    elif(GPIO.input(weight[3])==1):
        response['caseC'] = '800g'
    elif(GPIO.input(weight[4])==1):
        response['caseC'] = '0g'
    else:
        response['caseC'] = '0g'
    return json.dumps(response)

@app.route('/inventory')
def inventory():
  sum = GPIO.input(sensors[0])+GPIO.input(sensors[1])+GPIO.input(sensors[2])+GPIO.input(sensors[4])+GPIO.input(sensors[5])
  if(sum == 5 and GPIO.input(weight[0])==1):
    return '{"status": "false"}'
  else:
    return '{"status": "true"}'

if __name__ == '__main__':
    app.run(host=dir, port=5000)
