from flask import url_for
from app import app, db

class Admin(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    username = db.Column(db.String(64), unique = True)
    password = db.Column(db.String(64))

    def is_authenticated(self):
        return True

    def is_active(self):
        return True

    def is_anonymous(self):
        return False

    def get_id(self):
        return unicode(self.id)

    def __repr__(self):
        return '<User %r>' % (self.username)

class Work(db.Model):
    id = db.Column(db.Integer, primary_key = True)
    title = db.Column(db.String(256), index = True)
    description = db.Column(db.Text)
    url = db.Column(db.String(256))
    imagename = db.Column(db.String(256))

