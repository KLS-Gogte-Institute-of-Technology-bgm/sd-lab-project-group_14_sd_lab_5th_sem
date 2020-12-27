from flask import Flask, render_template,request,redirect
import requests
from flask_sqlalchemy import SQLAlchemy
from datetime import datetime
import Algorithmia
import asyncio

app = Flask(__name__)
app.config['SQLALCHEMY_DATABASE_URI']='sqlite:///test.db'
db = SQLAlchemy(app)

class Painter(db.Model):
    id = db.Column(db.Integer, primary_key=True)
    content = db.Column(db.String(200),nullable=False)
    completed = db.Column(db.Integer,default=0)
    date_created = db.Column(db.DateTime,default=datetime.utcnow)

    def __repr__(self):
        return '<Task %r>' % self.id

@app.route('/',methods=['POST','GET'])
def index():
    if request.method == 'POST':
        task_content = request.form['content']
        new_task = Painter(content=task_content)
        
        try:
            db.session.add(new_task)
            db.session.commit()

            input = {
            "image": task_content
            }
            client = Algorithmia.client('simLUQYP0xwbUAfli3j4JkeqW6/1')
            algo = client.algo('deeplearning/ColorfulImageColorization/1.1.14')
            algo.set_options(timeout=300) # optional
            print(algo.pipe(input).result)

            # uploads = os.path.join(current_app.root_path, app.config['UPLOAD_FOLDER'])
            # send_from_directory(directory=uploads, filename=filename)

            return redirect('/')
        except:
            return ' ERROR !!'
    else:
        tasks = Painter.query.order_by(Painter.date_created).all()
        return render_template("index.html",tasks=tasks)

@app.route('/delete/<int:id>')
def delete(id):
    task_to_delete = Painter.query.get_or_404(id)

    try:
        db.session.delete(task_to_delete)
        db.session.commit()
        return redirect('/')
    except:
        return 'Not deleted'

@app.route('/update/<int:id>',methods=['POST','GET'])
def update(id):
    task = Painter.query.get_or_404(id)

    if request.method == 'POST':
        task.content = request.form['content']

        try:
            db.session.commit()
            return redirect('/')
        except:
            return 'cannot update'
    else:
        return render_template('update.html',task=task)

@app.route('/signin',methods=['POST','GET'])
def signin():
    if request.method == 'POST':
        return redirect('/')
        
    return render_template('signin.html')

if __name__ =="__main__":
    app.run(debug=True)