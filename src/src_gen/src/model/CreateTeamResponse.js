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
import ApiClient from '../ApiClient';

/**
 * The CreateTeamResponse model module.
 * @module model/CreateTeamResponse
 * @version 1.1.0
 */
export default class CreateTeamResponse {
  /**
   * Constructs a new <code>CreateTeamResponse</code>.
   * @alias module:model/CreateTeamResponse
   * @class
   * @param data {String} 
   * @param id {String} 
   */
  constructor(data, id) {
    this.data = data;
    this.id = id;
  }

  /**
   * Constructs a <code>CreateTeamResponse</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/CreateTeamResponse} obj Optional instance to populate.
   * @return {module:model/CreateTeamResponse} The populated <code>CreateTeamResponse</code> instance.
   */
  static constructFromObject(data, obj) {
    if (data) {
      obj = obj || new CreateTeamResponse();
      if (data.hasOwnProperty('data'))
        obj.data = ApiClient.convertToType(data['data'], 'String');
      if (data.hasOwnProperty('id'))
        obj.id = ApiClient.convertToType(data['id'], 'String');
    }
    return obj;
  }
}

/**
 * @member {String} data
 */
CreateTeamResponse.prototype.data = undefined;

/**
 * @member {String} id
 */
CreateTeamResponse.prototype.id = undefined;

