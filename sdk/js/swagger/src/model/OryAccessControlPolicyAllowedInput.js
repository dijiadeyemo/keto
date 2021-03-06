/**
 * ORY Keto
 * A cloud native access control server providing best-practice patterns (RBAC, ABAC, ACL, AWS IAM Policies, Kubernetes Roles, ...) via REST APIs.
 *
 * OpenAPI spec version: Latest
 * Contact: hi@ory.sh
 *
 * NOTE: This class is auto generated by the swagger code generator program.
 * https://github.com/swagger-api/swagger-codegen.git
 *
 * Swagger Codegen version: 2.2.3
 *
 * Do not edit the class manually.
 *
 */

(function(root, factory) {
  if (typeof define === 'function' && define.amd) {
    // AMD. Register as an anonymous module.
    define(['ApiClient'], factory);
  } else if (typeof module === 'object' && module.exports) {
    // CommonJS-like environments that support module.exports, like Node.
    module.exports = factory(require('../ApiClient'));
  } else {
    // Browser globals (root is window)
    if (!root.OryKeto) {
      root.OryKeto = {};
    }
    root.OryKeto.OryAccessControlPolicyAllowedInput = factory(root.OryKeto.ApiClient);
  }
}(this, function(ApiClient) {
  'use strict';




  /**
   * The OryAccessControlPolicyAllowedInput model module.
   * @module model/OryAccessControlPolicyAllowedInput
   * @version Latest
   */

  /**
   * Constructs a new <code>OryAccessControlPolicyAllowedInput</code>.
   * @alias module:model/OryAccessControlPolicyAllowedInput
   * @class
   */
  var exports = function() {
    var _this = this;





  };

  /**
   * Constructs a <code>OryAccessControlPolicyAllowedInput</code> from a plain JavaScript object, optionally creating a new instance.
   * Copies all relevant properties from <code>data</code> to <code>obj</code> if supplied or a new instance if not.
   * @param {Object} data The plain JavaScript object bearing properties of interest.
   * @param {module:model/OryAccessControlPolicyAllowedInput} obj Optional instance to populate.
   * @return {module:model/OryAccessControlPolicyAllowedInput} The populated <code>OryAccessControlPolicyAllowedInput</code> instance.
   */
  exports.constructFromObject = function(data, obj) {
    if (data) {
      obj = obj || new exports();

      if (data.hasOwnProperty('action')) {
        obj['action'] = ApiClient.convertToType(data['action'], 'String');
      }
      if (data.hasOwnProperty('context')) {
        obj['context'] = ApiClient.convertToType(data['context'], {'String': Object});
      }
      if (data.hasOwnProperty('resource')) {
        obj['resource'] = ApiClient.convertToType(data['resource'], 'String');
      }
      if (data.hasOwnProperty('subject')) {
        obj['subject'] = ApiClient.convertToType(data['subject'], 'String');
      }
    }
    return obj;
  }

  /**
   * Action is the action that is requested on the resource.
   * @member {String} action
   */
  exports.prototype['action'] = undefined;
  /**
   * Context is the request's environmental context.
   * @member {Object.<String, Object>} context
   */
  exports.prototype['context'] = undefined;
  /**
   * Resource is the resource that access is requested to.
   * @member {String} resource
   */
  exports.prototype['resource'] = undefined;
  /**
   * Subject is the subject that is requesting access.
   * @member {String} subject
   */
  exports.prototype['subject'] = undefined;



  return exports;
}));


