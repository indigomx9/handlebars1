import express from "express";
// Connection to the Model/Database.

export const home = async (req, res: express.Response, next) => {
    await res.render("index", { title: "Handlebars" });
};
