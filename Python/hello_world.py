# Hello world

print("Hello, Python")

'''
This
is
a
comment
'''

my_string = "This is a string"
my_string = "Here I change the value of the string"
print(type(my_string))
print(my_string)

my_string = 6 # Dynamic typing
print(type(my_string))
print(my_string)

my_other_string: str = "This is another string"
# my_other_string = 10 # The type would be changed accordingly

my_int = 7
my_int = my_int + 4
print(my_int)
print(my_int - 1)
print(my_int)

my_float = 6.5
print(type(my_float))
print(my_float)

print(my_int + my_float)
# print(my_int + my_float + my_other_string) # Error

my_bool = True
my_bool = False
print(type(my_bool))
print(my_bool)

print("The value of my integer is " + str(my_int) + " and the value of my bool is " + str(my_bool))
print(f"The value of my integer is {my_int} and the value of my bool is {my_bool}")

my_list = [my_other_string, my_int, my_float, my_bool]
print(type(my_list))
my_list.append(my_bool)
print(my_list)
print(my_list[0])
# print(my_list[4]) # Error

my_dict = {"string": my_other_string, "int": my_int, "float": my_float, "bool": my_bool, "lubocadev": "Lucas Borondo"}
print(type(my_dict))
print(my_dict)
print(my_dict["lubocadev"])

my_set = {my_other_string, my_int, my_float, my_bool, my_bool, my_bool}
print(type(my_set))
print(my_set)

my_tuple = (my_other_string, my_int, my_float, my_bool, my_bool, my_bool)
print(type(my_tuple))
print(my_tuple)

if my_int == 11 or my_bool == True:
    print("The value is 11")
elif my_int == 12:
    print("The value is 12")
else:
    print("The value is neither 11 nor 12")

for my_item in my_list:
    print(my_item)

for my_item in range(10):
    print(my_item)

for my_item in my_dict:
    print(my_item)

for my_item in my_set:
    print(my_item)

for my_item in my_tuple:
    print(my_item)

def my_function():
    print("This is a function")

for my_item in range(10):
    my_function()

def my_function_with_return(param):
    return 10 + param

my_return = my_function_with_return(5)
print(my_return)

class MyClass:

    def __init__(self, my_name):
        self.my_name = my_name

    def print_name(self):
        print(self.my_name)


my_class = MyClass("Lucas")
my_class.print_name()
my_class.my_name = "LuBoCaDev"
print(type(my_class))
print(my_class.my_name)