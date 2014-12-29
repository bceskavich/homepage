import os
from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.script import Manager
from flaskext.markdown import Markdown
from config import basedir

app = Flask(__name__)
app.debug=True
app.config.from_object('config')

Markdown(app)

from app import views, models
