from flask import Flask, url_for, render_template

app = Flask(__name__)

@app.route("/", methods=['GET'])
def home():
    return render_template("home.html")

@app.route("/news", methods=['GET'])
def news():
    return render_template("news.html")

@app.route("/proj", methods=['GET'])
def proj():
    return render_template("proj.html")

@app.route("/support", methods=['GET'])
def support():
    return render_template("support.html")

if __name__ == "__main__":
    app.run(debug=True)