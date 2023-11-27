
summa = 2_500_000
percent = 7.3
years = 20

month = years * 12
month_pecent = percent / 12 / 100




koef = (month_pecent * (1 + month_pecent)**month) / ((1 + month_pecent)**month - 1)

print(koef)

print(koef * summa)

print(koef * summa * 240)