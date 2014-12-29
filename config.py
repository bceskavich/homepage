import os
from app.models import DB

CSRF_ENABLED = True
basedir = os.path.abspath(os.path.dirname(__file__))

def insert_work():
    title = raw_input('Work item title: ')
    description = raw_input('Work item description: ')
    image_name = raw_input('Main image name: ')
    main_link = raw_input('Main link URL: ')

    tags = []
    flag = 1
    while flag:
        tag_name = raw_input('Input tag name: ')
        tag_url = raw_input('Input tag link URL: ')

        tags.append({'tag_name': tag_name, 'tag_url': tag_url})

        yn = raw_input('Add more tags? [y/n]: ')
        if yn == 'n':
            flag = 0

    doc = {
        'title'         : title,
        'description'   : description,
        'image_name'    : 'http://www.ceskavich.com/static/img/' + image_name,
        'main_link'     : main_link,
        'tags'          : tags
    }

    db = DB('main', 'work')

    resp = db.insert(doc)
    if resp['status']:
        print '\n'
        print 'SUCCESS!'
    else:
        print '\n'
        print 'Oops. Something went wrong. Please try again.'

if __name__ == "__main__":
    insert_work()
