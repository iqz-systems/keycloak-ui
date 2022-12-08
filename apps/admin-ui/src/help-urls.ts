const adminGuide =
  "https://www.keycloak.org/docs/latest/server_admin/index.html";
const phasetwoDocs = "https://phasetwo.io/docs";

export default {
  documentationUrl: `${adminGuide}`,
  clientsUrl: `${adminGuide}#assembly-managing-clients_server_administration_guide`,
  clientScopesUrl: `${adminGuide}#_client_scopes`,
  realmRolesUrl: `${adminGuide}#assigning-permissions-using-roles-and-groups`,
  usersUrl: `${adminGuide}#assembly-managing-users_server_administration_guide`,
  groupsUrl: `${adminGuide}#proc-managing-groups_server_administration_guide`,
  sessionsUrl: `${adminGuide}#managing-user-sessions`,
  eventsUrl: `${adminGuide}#configuring-auditing-to-track-events`,
  realmSettingsUrl: `${adminGuide}#configuring-realms`,
  authenticationUrl: `${adminGuide}#configuring-authentication`,
  identityProvidersUrl: `${adminGuide}#_identity_broker`,
  userFederationUrl: `${adminGuide}#_user-storage-federation`,
  orgsUrl: `${phasetwoDocs}/organizations/`,
  stylesUrl: `${phasetwoDocs}/getting-started/customizing-ui`,
};
