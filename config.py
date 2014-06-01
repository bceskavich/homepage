import os

CSRF_ENABLED = True

basedir = os.path.abspath(os.path.dirname(__file__))

SQLALCHEMY_DATABSE_URI = 'sqlite://app.db'
