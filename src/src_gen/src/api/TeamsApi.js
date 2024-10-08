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
import CreateTeamResponse from '../model/CreateTeamResponse';
import InlineResponse2002 from '../model/InlineResponse2002';
import TeamRequest from '../model/TeamRequest';
import TeamResponse from '../model/TeamResponse';
import UserResponse from '../model/UserResponse';

/**
* Teams service.
* @module api/TeamsApi
* @version 1.1.0
*/
export default class TeamsApi {

    /**
    * Constructs a new TeamsApi. 
    * @alias module:api/TeamsApi
    * @class
    * @param {module:ApiClient} [apiClient] Optional API client implementation to use,
    * default to {@link module:ApiClient#instanc
    e} if unspecified.
    */
    constructor(apiClient) {
        this.apiClient = apiClient || ApiClient.instance;
    }

    /**
     * Callback function to receive the result of the approveUserTeam operation.
     * @callback moduleapi/TeamsApi~approveUserTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Approve connected user with team lead
     * @param {String} teamId The ID of the team
     * @param {String} userId The ID of the user
     * @param {module:api/TeamsApi~approveUserTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    approveUserTeam(teamId, userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling approveUserTeam");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling approveUserTeam");
      }

      let pathParams = {
        'teamId': teamId,'userId': userId
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
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/api/v1/teams/{teamId}/members/{userId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the connectUserTeam operation.
     * @callback moduleapi/TeamsApi~connectUserTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Connect user with team
     * @param {String} teamId The ID of the team
     * @param {String} userId The ID of the user
     * @param {module:api/TeamsApi~connectUserTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    connectUserTeam(teamId, userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling connectUserTeam");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling connectUserTeam");
      }

      let pathParams = {
        'teamId': teamId,'userId': userId
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
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/api/v1/teams/{teamId}/members/{userId}', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the createTeam operation.
     * @callback moduleapi/TeamsApi~createTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/CreateTeamResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Create a new team
     * @param {module:model/TeamRequest} body 
     * @param {module:api/TeamsApi~createTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    createTeam(body, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling createTeam");
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
      let returnType = CreateTeamResponse;

      return this.apiClient.callApi(
        '/api/v1/teams', 'POST',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the deleteTeam operation.
     * @callback moduleapi/TeamsApi~deleteTeamCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Delete a team
     * @param {String} teamId 
     * @param {module:api/TeamsApi~deleteTeamCallback} callback The callback function, accepting three arguments: error, data, response
     */
    deleteTeam(teamId, callback) {
      
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling deleteTeam");
      }

      let pathParams = {
        'teamId': teamId
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
        '/api/v1/teams/{teamId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the getTeamById operation.
     * @callback moduleapi/TeamsApi~getTeamByIdCallback
     * @param {String} error Error message, if any.
     * @param {module:model/TeamResponse{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get a team by ID
     * @param {String} teamId 
     * @param {module:api/TeamsApi~getTeamByIdCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    getTeamById(teamId, callback) {
      
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling getTeamById");
      }

      let pathParams = {
        'teamId': teamId
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
      let returnType = TeamResponse;

      return this.apiClient.callApi(
        '/api/v1/teams/{teamId}', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the leaveUserFromTeam operation.
     * @callback moduleapi/TeamsApi~leaveUserFromTeamCallback
     * @param {String} error Error message, if any.
     * @param {module:model/InlineResponse2002{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Leave user from team
     * @param {String} teamId The ID of the team
     * @param {String} userId The ID of the user
     * @param {module:api/TeamsApi~leaveUserFromTeamCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    leaveUserFromTeam(teamId, userId, callback) {
      
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling leaveUserFromTeam");
      }
      // verify the required parameter 'userId' is set
      if (userId === undefined || userId === null) {
        throw new Error("Missing the required parameter 'userId' when calling leaveUserFromTeam");
      }

      let pathParams = {
        'teamId': teamId,'userId': userId
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
      let returnType = InlineResponse2002;

      return this.apiClient.callApi(
        '/api/v1/teams/{teamId}/members/{userId}', 'DELETE',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the listTeams operation.
     * @callback moduleapi/TeamsApi~listTeamsCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/TeamResponse>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * List all teams
     * @param {module:api/TeamsApi~listTeamsCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    listTeams(callback) {
      
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
      let returnType = [TeamResponse];

      return this.apiClient.callApi(
        '/api/v1/teams', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the teamMembers operation.
     * @callback moduleapi/TeamsApi~teamMembersCallback
     * @param {String} error Error message, if any.
     * @param {Array.<module:model/UserResponse>{ data The data returned by the service call.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Get all members of a team
     * @param {String} teamId 
     * @param {module:api/TeamsApi~teamMembersCallback} callback The callback function, accepting three arguments: error, data, response
     * data is of type: {@link <&vendorExtensions.x-jsdoc-type>}
     */
    teamMembers(teamId, callback) {
      
      let postBody = null;
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling teamMembers");
      }

      let pathParams = {
        'teamId': teamId
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
      let returnType = [UserResponse];

      return this.apiClient.callApi(
        '/api/v1/teams/{teamId}/members', 'GET',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }
    /**
     * Callback function to receive the result of the updateTeam operation.
     * @callback moduleapi/TeamsApi~updateTeamCallback
     * @param {String} error Error message, if any.
     * @param data This operation does not return a value.
     * @param {String} response The complete HTTP response.
     */

    /**
     * Update a team
     * @param {module:model/TeamRequest} body 
     * @param {String} teamId 
     * @param {module:api/TeamsApi~updateTeamCallback} callback The callback function, accepting three arguments: error, data, response
     */
    updateTeam(body, teamId, callback) {
      
      let postBody = body;
      // verify the required parameter 'body' is set
      if (body === undefined || body === null) {
        throw new Error("Missing the required parameter 'body' when calling updateTeam");
      }
      // verify the required parameter 'teamId' is set
      if (teamId === undefined || teamId === null) {
        throw new Error("Missing the required parameter 'teamId' when calling updateTeam");
      }

      let pathParams = {
        'teamId': teamId
      };
      let queryParams = {
        
      };
      let headerParams = {
        
      };
      let formParams = {
        
      };

      let authNames = [];
      let contentTypes = ['application/json'];
      let accepts = [];
      let returnType = null;

      return this.apiClient.callApi(
        '/api/v1/teams/{teamId}', 'PUT',
        pathParams, queryParams, headerParams, formParams, postBody,
        authNames, contentTypes, accepts, returnType, callback
      );
    }

}