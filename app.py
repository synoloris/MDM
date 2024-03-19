from flask import Flask
from flask.helpers import send_file
app = Flask(__name__, static_url_path='/', static_folder='web')

@app.route("/")
def indexPage():
    return send_file("web/index.html")

@app.route('/user/<username>')
def show_user_profile(username):
    return f'User {username}'
@app.route('/post/<int:post_id>')
def show_post(post_id):
    return f'Post {post_id}'
@app.route('/path/<path:subpath>')
def show_subpath(subpath):
    return f'Subpath {subpath}'

from flask import request
    
@app.route("/sentiment", methods=["GET"])
def test():
    text = request.args.get('text')
    if (text == ""):
        return "Please use text parameter in GET URL"
    return text