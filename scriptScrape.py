from bs4 import BeautifulSoup

# import requests
import os
import urllib
import urllib.request

endpt=urllib.request.urlopen('https://www.brainyquote.com').read()
site=BeautifulSoup.BeautifulSoup(endpt,'lxml')


counter=0
links=list()
for url in site.find_all('a'):
    if 'https' in url.get('href') and 'trump' in url.get('href') :
        links.append(url.get('href'))
counter+=1




quoteLinks=list()
for i in links:
    templink=urllib.request.urlopen(i).read()
    a=BeautifulSoup.BeautifulSoup(templink,'lxml')
    for quote in a.find_all('class="qt_532490"'):
        imgLinks.append(quote.get())
        print(image.get())
for quote in quoteLinks:
    if 'https' in img:
        counter+=1
urllib.request.urlretrieve(img,'dTrump_img'+str(counter)+'.jpg')



# url = raw_input("www.brainyquote.com")

# r  = requests.get("https://" +url)
