/* FSR simple testing sketch. 
 
Connect one end of FSR to power, the other end to Analog 0.
Then connect one end of a 10K resistor from Analog 0 to ground 
 
For more information see www.ladyada.net/learn/sensors/fsr.html */
 
int fsrPin = 0;     // the FSR and 10K pulldown are connected to a0
int fsrReading;     // the analog reading from the FSR resistor divider
int d1 = 7;
int d2 = 6;
int d3 = 5;
int d4 = 4;
int d5 = 3;
 
void setup(void) {
  // We'll send debugging information via the Serial monitor
  pinMode(d1, OUTPUT);
  pinMode(d2, OUTPUT);
  pinMode(d3, OUTPUT);
  pinMode(d4, OUTPUT);
  pinMode(d5, OUTPUT);
  Serial.begin(9600);   
}
 
void loop(void) {
  fsrReading = analogRead(fsrPin);  
  Serial.print(fsrReading);     // the raw analog reading
 
  // We'll have a few threshholds, qualitatively determined
  if (fsrReading < 200) {
    Serial.println(" Low ");
    digitalWrite(d1, HIGH);
    digitalWrite(d2, LOW);
    digitalWrite(d3, LOW);
    digitalWrite(d4, LOW);
    digitalWrite(d5, LOW);
  } else if (fsrReading < 400) {
    Serial.println(" Medium Low");
    digitalWrite(d2, HIGH);
    digitalWrite(d1, LOW);
    digitalWrite(d3, LOW);
    digitalWrite(d4, LOW);
    digitalWrite(d5, LOW);
  } else if (fsrReading < 600) {
    Serial.println(" Medium");
    digitalWrite(d3, HIGH);
    digitalWrite(d2, LOW);
    digitalWrite(d1, LOW);
    digitalWrite(d4, LOW);
    digitalWrite(d5, LOW);
  } else if (fsrReading < 800) {
    Serial.println(" Medium High");
    digitalWrite(d4, HIGH);
    digitalWrite(d2, LOW);
    digitalWrite(d3, LOW);
    digitalWrite(d1, LOW);
    digitalWrite(d5, LOW);
  } else {
    Serial.println(" High");
    digitalWrite(d5, HIGH);
    digitalWrite(d2, LOW);
    digitalWrite(d3, LOW);
    digitalWrite(d4, LOW);
    digitalWrite(d1, LOW);
  }
  delay(1000);
} 
