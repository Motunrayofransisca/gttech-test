data = [73, 102, 32, 121, 111, 117, 32, 99, 97, 110, 32, 100, 101, 99, 111, 100, 101, 32, 116, 104, 105, 115, 44, 32,
        116, 104, 101, 110, 32, 121, 111, 117, 32, 104, 97, 118, 101, 32, 98, 101, 101, 110, 32, 97, 98, 108, 101, 32,
        116, 111, 32, 115, 111, 108, 118, 101, 32, 116, 104, 105, 115, 32, 113, 117, 101, 115, 116, 105, 111, 110]

data1 = [chr(number) for number in data]
print(''.join(data1))

code = 'If you can decode this, then you have been able to solve this question'
code1 = [ord(each) for each in code]
print(code1)
print(code1 == data)