export default class Merch {
  constructor(AppConstants, $http, $q, GraphQLClient) {
    'ngInject';

    this._AppConstants = AppConstants;
    this._$http = $http;
    this._$q = $q;
    this._GQL = GraphQLClient;
  }

  get(res) {
    // let deferred = this._$q.defer();
    // if (!res.data.slug.replace(" ", "")) {
    //   deferred.reject("Item slug is empty");
    //   return deferred.promise;
    // }
    // console.log(res.data.type);
    // let query = "query getItem{"+res.data.type.toLowerCase()+"(slug:\"" + res.data.slug.toLowerCase() + "\"){id slug name brand {name} sizes colors}}";

    let query = `
        query shoes{
          ${res.data.type}(slug:"${res.data.slug.toLowerCase()}"){
            id
            slug
            name
            description
            brand {id name}
            sizes
            colors
            images
          }
        }
      `
    // console.log(query);
    // let query = 'query getItem{shoes(slug:"adidas-streetcheck-y12gw5"){id slug name brand {name} sizes colors}}';
    // console.log(this._GQL.get(query));
    return this._GQL.get(query);
  }

  getAll() {
    let query = `
        query getMerch{
            sweatshirts{
                id
                slug
                name
                brand {
                  id
                  slug
                  name
                }
                images
              }
              shoeses{
                id
                slug
                name
                brand {
                  id
                  slug
                  name
                }
                images
              }
          }
      `;
    return this._GQL.get(query);
  }

  createItem(type, input) {
    let query = `
      mutation create${type}($input: ${type}Input){
          create${type}(input: $input){
              id
              slug
              name
              description
              brand
              sizes
              colors
              images
          }
      }
    `;
    let variables = {
      "input": input
    }
    return this._GQL.post(query, variables);
  }

  addToWishlist(input) {
    let query = `
      mutation addToWishlist($input: WishlistInput){
        addToWishlist(input: $input){
              ok
          }
      }
    `;
    let variables = {
      "input": {
        "id":input
      }
    }
    return this._GQL.post(query, variables);
  }

}