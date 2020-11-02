from bs4 import BeautifulSoup
import requests
import random
import sys


def main():

    # Directory will always be last argument.
    dir = " Add home dir here if you need default dir " if len(
        sys.argv) < 3 else str(sys.argv[-1])
    tags = str(sys.argv[0])
    # Just grab pic from page between 0-16. Tailored for gelbooru
    page_id = str(42*(random.randint(0, 16)))
    soup = BeautifulSoup(requests.get("https://gelbooru.com/index.php?page=post&s=list&tags=" +
                                      tags + "&pid=" + page_id).text, "html.parser")  # ad-hoc solution for gelbooru
    link_list = soup.find_all('span', class_="thumb")

    if (link_list == []):
        print("Bad set of Tags. Check if gelbooru supports tag string")
        return

    random_link = link_list[random.randint(0, len(link_list)-1)]

    link_attr = (random_link.a).attrs

    link = link_attr['href']
    link_name = link_attr['id']

    lowerSoup = BeautifulSoup(requests.get(
        "https://" + link[2:]).text, "html.parser")

    img_link = lowerSoup.find('img', id="image").attrs['src']

    r = requests.get(img_link)

    try:
        with open(dir + link_name + ".png", 'wb') as f:
            f.write(r.content)
    except:
        print("Probably a nonexistent path or something you don't have permission to write to. Check your image directory.")

    # Win fucko


if __name__ == '__main__':
    main()
