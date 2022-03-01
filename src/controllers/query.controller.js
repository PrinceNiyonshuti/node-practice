/** @format */

import Query from "../db/model/query.model";

export const saveQuery = async (req, res) => {
	const query = req.body;
	const newQuery = new Query(query);
	await newQuery.save();
	res.status(201).json({ success: true, data: newQuery });
};
