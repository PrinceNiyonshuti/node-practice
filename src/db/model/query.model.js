/** @format */

import mongoose from "mongoose";

const QuerySchema = new mongoose.Schema({
	name: {
		type: String,
		required: true,
	},
	email: {
		type: String,
		required: true,
	},
	subject: {
		type: String,
		required: true,
	},
	content: {
		type: String,
		required: true,
	},
	createdAt: {
		type: Date,
		default: new Date(),
	},
});
const Query = mongoose.model("Query", QuerySchema);
export default Query;
