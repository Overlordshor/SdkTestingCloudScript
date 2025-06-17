function GetEntityToken(params?: any, context?: IPlayFabContext): void {
  var getTokenRequest: PlayFabAuthenticationModels.GetEntityTokenRequest = {};
  var getTokenResponse: PlayFabAuthenticationModels.GetEntityTokenResponse =
    entity.GetEntityToken(getTokenRequest);
  if (!getTokenResponse.Entity) {
    throw new Error("Entity is undefined in GetEntityToken response");
  }

  var entityId: string = getTokenResponse.Entity.Id;
  var entityType: string = getTokenResponse.Entity.Type!;
}
handlers.GetEntityToken = GetEntityToken;

function GetObjects(params?: any, context?: IPlayFabContext) {
  var getObjRequest: PlayFabDataModels.GetObjectsRequest = {
    Entity: {
      Id: params.entityId,
      Type: params.entityType,
    },
  };
  var getObjResponse: PlayFabDataModels.GetObjectsResponse =
    entity.GetObjects(getObjRequest);
  if (!getObjResponse.Entity) {
    throw new Error("Entity is undefined in GetEntityToken response");
  }

  var entityId: string = getObjResponse.Entity.Id;
  var entityType: string = getObjResponse.Entity.Type!;
  if (getObjResponse.Objects && getObjResponse.Objects["testKey"]) {
    var entityObjs: PlayFabDataModels.ObjectResult =
      getObjResponse.Objects["testKey"];
  } else {
    throw new Error("Objects or testKey not found in response");
  }
}

handlers.GetObjects = GetObjects;
