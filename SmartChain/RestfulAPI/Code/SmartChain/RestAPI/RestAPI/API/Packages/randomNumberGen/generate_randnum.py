import random

def get_random_number():
    # 30 Digit random number
    return random.randint(100000000000000000000000000000,999999999999999999999999999999)

if __name__ == "__main__":
    print(get_random_number())
    