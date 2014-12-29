from flask import render_template, flash, redirect, session, url_for, request, g
from flask.ext.login import login_user, logout_user, current_user, login_required
from app import app, db, login_manager
from flask.ext.markdown import Markdown

@app.route('/')
@app.route('/index')
def index():
    markdown = "markdown"
    return render_template("index.html",
        mkd = markdown)

@app.route('/about')
def about():
    return render_template("about.html")

@app.route('/work')
def work():
    return render_template("work.html")

@app.route('/bio.html')
@app.route('/bio')
def bio():
    return render_template("bio.html")
