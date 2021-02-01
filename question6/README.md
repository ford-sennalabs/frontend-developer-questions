#### Explain the difference between mutable and immutable objects.

- **mutable object** คือ object ที่เมื่อถูกสร้างขึ้นมาแล้ว ค่าในที่อยู่ใน object ยังคงสามารถเปลี่ยนแปลงได้
- **immutable object** คือ object ที่เมื่อถูกสร้างขึ้นมาแล้ว จะไม่สามารถเปลี่ยนแปลงค่าที่อยู่ใน object ได้ สามารถอ่านค่าได้เพียงอย่างเดียว

#### What is an example of an immutable object in JavaScript?
-  ตัวแปรต่างๆที่ประกาศโดยใช้ const เช่น const num = 20

#### What are the pros and cons of immutability?
- **ข้อดี** คือ ค่าจะไม่สามารถถูกเปลี่ยนแปลงได้ จึงไม่ต้องกังวลว่าเมื่อนำไปใช้งานแล้วค่าจะมีการเปลี่ยน
- **ข้อเสีย** คือ เนื่องจากไม่สามารถเปลี่ยนแปลงค่า ทำให้หากต้องการจะแก้ค่าที่อยู่ในตัวแปร immtable จะต้องประกาศตัวแปรใหม่เสมอ ซึ่งอาจจะมีผลกระทบกับประสิทธิภาพในการทำงานได้ หากมีการประกาศตัวแปรใหม่เพื่ออ่านค่าจาก immutable object เยอะเกินไป

#### How can you achieve immutability in your own code?
- ประกาศตัวแปรใหม่ เพื่ออ่านค่าจาก immutable object จากนั้น จึงแก้ไขค่าในตัวแปรใหม่ที่ประกาศขึ้นแทน