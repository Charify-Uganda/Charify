import requests
from flask import Flask, render_template, request, jsonify, redirect, url_for,send_from_directory

app = Flask(__name__)
test_url = "https://api.flutterwave.com/v3/charges?type=mobilemoneyuganda"

FLUTTER_WAVE_SECRET_KEY = "FLWSECK_TEST-87625d768135217a414f3d02b79c5673-X"

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/charge', methods=['POST','GET'])
def charge():
    amount = int(request.form['amount'])
    email = request.form['email']
    fullName = request.form['fullName']
    phone_number = request.form['phoneNumber']
    txRef = request.form['txRef']

    payload = {
        "tx_ref": txRef,
        "amount": amount,
        "currency": "UGX",
        "redirect_url": "https://charify-api.onrender.com/success",
        "payment_type": "mobilemoneyuganda",
        "meta": {
            "consumer_id": "user_id",
            "consumer_mac": "92a3-912ba-1193a",
        },
        "customer": {
            "email": email,
            "fullname": fullName,
            "phone_number": phone_number,
        },
    }

    headers = {
        "Authorization": f"Bearer {FLUTTER_WAVE_SECRET_KEY}",
        "Content-Type": "application/json",
    }

    response = requests.post(
        "https://api.flutterwave.com/v3/payments",
        json=payload,
        headers=headers,
    )

    response_data = response.json()
    # return response.json()
    redirect_url = response_data.get('data', {}).get('link', '')  # Get the redirect URL from the response data

    if redirect_url:
        return redirect(redirect_url)
    else:
        return "Payment initiation failed."

@app.route('/images/<filename>')
def get_image(filename):
    return send_from_directory('images', filename)

@app.route('/success')
def success():
    return render_template('success.html')

# if __name__ == '__main__':
#     app.run()
