"use strict";

/**
 *  porffolio controller
 */

const { createCoreController } = require("@strapi/strapi").factories;

module.exports = createCoreController(
  "api::porffolio.porffolio",
  ({ strapi }) => ({
    async findOneByCategory(ctx) {
      const { category, slug: projectID } = ctx.params;

      const { query } = ctx;
      if (!query.filters) query.filters = {};
      query.filters.slug = { $eq: category };
      const populateList = ["porffolio", "porffolio.zone.Pictures"];

      populateList.push(ctx.query.populate);
      ctx.query.populate = populateList.join(",");
      const entity = await strapi.service("api::category.category").find(query);
      const { results } = await this.sanitizeOutput(entity, ctx);
      console.log(results);
      if (results[0].porffolio?.zone.length) {
        const data = results[0]?.porffolio?.zone?.filter(
          (v) => v.id == projectID
        );
        return this.transformResponse(data);
      } else {
        return new NotFound();
      }
    },
    async find(ctx) {
      const populateList = [
        "category",
        "category.Thumbnail",
        "zone",
        "zone.Pictures",
      ];
      // Push any additional query params to the array
      populateList.push(ctx.query.populate);
      ctx.query.populate = populateList.join(",");
      const content = await super.find(ctx);
      return content;
    },
    async findOne(ctx) {},
  })
);
