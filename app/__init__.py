import os
from flask import Flask
from flask.ext.sqlalchemy import SQLAlchemy
from flask.ext.script import Manager
from flask.ext.migrate import Migrate, MigrateCommand
from flask.ext.login import LoginManager
from flaskext.markdown import Markdown
from config import basedir, SQLALCHEMY_DATABASE_URI

app = Flask(__name__)
app.debug = True
app.config.from_object('config')

db = SQLAlchemy(app)
migrate = Migrate(app, db)

login_manager = LoginManager()
login_manager.init_app(app)
login_manager.login_view = 'login'

Markdown(app)

manager = Manager(app)
manager.add_command('db', MigrateCommand)

from app import views, models
