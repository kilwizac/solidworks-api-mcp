---
type: method
interface: IModelDocExtension
member: GetObjectByPersistReference3
returns: System.Object
parameters:
  -
    name: PersistId
    type: System.Object
    description: Object's persistent reference ID (see Remarks )
  -
    name: ErrorCode
    type: System.Int32
    description: Success or error code as defined by swPersistReferencedObjectStates_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - ui
related:
  - IModelDocExtension.GetPersistReference3
  - IModelDocExtension.GetPersistReferenceCount3
  - IModelDocExtension.IGetObjectByPersistReference3
  - IModelDocExtension.IsSamePersistentID
  - IView.ReferencedConfigurationID
keywords:
  - persistent
  - reference
  - ids
  - objects
  - id
  - getobjectbypersistreference3
  - imodeldocextension
  - model
  - doc
  - extension
  - object
  - persist
  - reference3
  - error
  - code
  - int32
---

# IModelDocExtension.GetObjectByPersistReference3

Gets the object assigned to the specified persistent reference ID.

## Signature

```csharp
System.Object GetObjectByPersistReference3( 
   System.Object
PersistId
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `PersistId` (System.Object): Object's persistent reference ID (see Remarks )
- `ErrorCode` (System.Int32): Success or error code as defined by swPersistReferencedObjectStates_e (see Remarks )

## Return Value

Object (see Remarks )

## Remarks

A persistent reference ID is related to a model. It is portable and can be saved within the model or in other places. Some persistent reference IDs are general to all models and can be instantiated from all models. Your application must handle persistent reference IDs and their relationships among models.
Before calling this method, call
IModelDocExtension::GetPersistReference3
to get the object's persistent reference ID.
The swPersistReferencedObject_Suppressed and swPersistReferencedObject_Deleted enumerators only apply to references of topological entities.
IModelDocExtension::GetObjectByPersistReference3 was designed to return the base class of a feature to take advantage of the base feature class functionality. Objects returned by IModelDocExtension::GetObjectByPersistReference3 are often features, including
IConfiguration
,
IRefPlane
, and
IRefAxis
objects. You must first obtain a reference to a feature, and then use
IFeature::GetSpecificFeature2
to get the original object.
See
Persistent Reference IDs
for more information.

## See Also

- `IModelDocExtension.GetPersistReference3`
- `IModelDocExtension.GetPersistReferenceCount3`
- `IModelDocExtension.IGetObjectByPersistReference3`
- `IModelDocExtension.IsSamePersistentID`
- `IView.ReferencedConfigurationID`