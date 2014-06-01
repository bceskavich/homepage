from flask import render_template, flash, redirect, session, url_for, request, g
from flask.ext.login import login_user, logout_user, current_user, login_required
from app import app, db, login_manager

@app.route('/')
@app.route('/index')
def index():
    return render_template("index.html")
