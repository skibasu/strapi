"use strict";

/**
 *  page controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController("api::page.page", ({ strapi }) => ({
  async findOne(ctx) {
    console.log(ctx.params);
    const { id: pageId } = ctx.params;
    const { query } = ctx;
    if (!query.filters) query.filters = {};
    query.filters.pageId = { $eq: pageId };
    const populateList = ["Sections", "Sections.Picture", "thumbnail"];
    // Push any additional query params to the array
    populateList.push(ctx.query.populate);
    ctx.query.populate = populateList.join(",");
    const entity = await strapi.service("api::page.page").find(query);
    const { results } = await this.sanitizeOutput(entity, ctx);

    return this.transformResponse(results[0]);
  },
}));
