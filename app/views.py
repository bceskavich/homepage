from flask import render_template, flash, redirect, session, url_for, request, g
from flask.ext.login import login_user, logout_user, current_user, login_required
from app import app, db, login_manager

@app.route('/')
@app.route('/index')
def index():
  return render_template("index.html")

@app.route('/about')
def about():
  return render_template("about.html")

@app.route('/work')
def work():
  return render_template("work.html")

@app.route('/bio.html')
def bio():
  return render_template("bio.html")
