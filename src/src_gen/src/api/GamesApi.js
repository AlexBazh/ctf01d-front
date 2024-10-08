/*
 * CTF Management API
 * API for managing CTF (Capture The Flag) games, teams, users, and services.
 *
 * OpenAPI spec version: 1.1.0
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 3.0.60
 *
 * Do not edit the class manually.
 *
 */
import ApiClient from "../ApiClient";
import CreateGameResponse from '../model/CreateGameResponse';
import GameRequest from '../model/GameRequest';
import GameResponse from '../model/GameResponse';

/**
* Games service.
* @module api/GamesApi
* @version 1.1.0
*/
export default class GamesApi {

    /**
    * Constructs a new GamesApi. 
    * @alias module:api/GamesApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the createGame operation.
     * @callback moduleapi/GamesApi~createGameCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateGameResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new game
     * @param {module:model/GameRequest} body 
     * @param {module:api/GamesApi~createGameCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createGame(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createGame");
      }

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = CreateGameResponse;

      return this.apiClient.callApi(
        '/api/v1/games', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteGame operation.
     * @callback moduleapi/GamesApi~deleteGameCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a game
     * @param {String} gameId 
     * @param {module:api/GamesApi~deleteGameCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteGame(gameId, callback) {
      
      let postBody = null;
      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling deleteGame");
      }

      let pathParams = {
        'gameId': gameId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/v1/games/{gameId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getGameById operation.
     * @callback moduleapi/GamesApi~getGameByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/GameResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a game by ID
     * @param {String} gameId 
     * @param {module:api/GamesApi~getGameByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getGameById(gameId, callback) {
      
      let postBody = null;
      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling getGameById");
      }

      let pathParams = {
        'gameId': gameId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = GameResponse;

      return this.apiClient.callApi(
        '/api/v1/games/{gameId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listGames operation.
     * @callback moduleapi/GamesApi~listGamesCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/GameResponse>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all games
     * @param {module:api/GamesApi~listGamesCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listGames(callback) {
      
      let postBody = null;

      let pathParams = {
        
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = [];
      let accepts = ['application/json'];
      let returnType = [GameResponse];

      return this.apiClient.callApi(
        '/api/v1/games', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateGame operation.
     * @callback moduleapi/GamesApi~updateGameCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a game
     * @param {module:model/GameRequest} body 
     * @param {String} gameId 
     * @param {module:api/GamesApi~updateGameCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateGame(body, gameId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateGame");
      }
      // verify the required parameter 'gameId' is set
      if (gameId === undefined || gameId === null) {
        throw new Error("Missing the required parameter 'gameId' when calling updateGame");
      }

      let pathParams = {
        'gameId': gameId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = ['application/json'];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/v1/games/{gameId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}