

from flask import Flask, jsonify

app = Flask(__name__)

# Mock database (dictionary)
users = {
    1: "Alice",
    2: "Bob",
    3: "Charlie"
}

@app.route('/user/<int:user_id>', methods=['GET'])
def get_user(user_id):
    try:
        user_name = users[user_id]
        return jsonify({"user_id": user_id, "user_name": user_name})
    except KeyError:
        return jsonify({"error": "User not found"}), 404

if __name__ == "__main__":
    app.run(debug=True)




#   Used as demo :

# users = {
#     1: "Alice",
#     2: "Bob",
#     3: "Charlie"
# }
