from flask import render_template, flash, redirect, session, url_for, request, g
from app import app
from flask.ext.markdown import Markdown
from models import DB


@app.route('/')
@app.route('/index')
def index():
    markdown = "markdown"
    return render_template("index.html",
        mkd = markdown)

@app.route('/about')
def about():
    db = DB('main', 'bio')
    bio = db.get_bio()

    bio_text = 'None'
    if bio['status']:
        bio_text = bio['bio']

    return render_template("about.html", bio=bio_text)

@app.route('/work')
def work():
    db = DB('main', 'work')
    resp = db.get_work_list()
    if resp['status']:
        work_list = [item for item in resp['data']]
    return render_template("work.html", work_list=work_list)
