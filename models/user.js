const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema(
    {
        username: { type: String, required: true, unique: true,
        },
        email: { type: String, required: true, unique: true, match: /[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?/,
        },
        password: { type: String, required: true 
        },
        // TODO image field
        // img: 
        // {
        //     data: Buffer,
        //     contentType: String
        // },
        city: { type: String, required: true
        },
        posts:[{ type: Schema.Types.ObjectId, ref: "Post"
        }],
        // TODO make work!
        // comments: { type: Schema.Types.ObjectId, ref: "Comment" 
        // },
        date: { 
            type: Date, default:Date.now 
        },
    },
    { timestamps: true }
);

userSchema.set("toJSON", {
    transform: (doc, ret, opt) => {
        delete ret["password"];
        return ret;
    },
});

const User = mongoose.model("User", userSchema);

module.exports = User;
