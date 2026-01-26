---
type: method
interface: IModelDocExtension
member: IGetObjectByPersistReference3
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Size of persistent reference ID (see Remarks )
  -
    name: PersistId
    type: System.Byte
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
  - IModelDocExtension.GetObjectByPersistReference3
  - IModelDocExtension.GetPersistReference3
  - IModelDocExtension.IsSamePersistentID
keywords:
  - persistent
  - reference
  - ids
  - objects
  - id
  - igetobjectbypersistreference3
  - imodeldocextension
  - model
  - doc
  - extension
  - object
  - persist
  - reference3
  - count
  - int32
  - byte
  - error
  - code
---

# IModelDocExtension.IGetObjectByPersistReference3

Gets the object assigned to the specified persistent reference ID.

## Signature

```csharp
System.Object IGetObjectByPersistReference3( 
   System.Int32
Count
,
   ref System.byte
PersistId
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `Count` (System.Int32): Size of persistent reference ID (see Remarks )
- `PersistId` (System.Byte): Object's persistent reference ID (see Remarks )
- `ErrorCode` (System.Int32): Success or error code as defined by swPersistReferencedObjectStates_e (see Remarks )

## Return Value

Object (see Remarks )

## Remarks

A persistent reference ID is related to a model. It is portable and can be saved within the model or in other places. Some persistent reference IDs are general to all models and can be instantiated from all models. Your application must handle persistent reference IDs and their relationships among models.
Before calling this method:
Call
IModelDocExtension::GetPersistentReferenceCount3
to determine the size of the persistent reference ID.
Call
IModelDocExtension::IGetPersistReference3
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

- `IModelDocExtension.GetObjectByPersistReference3`
- `IModelDocExtension.GetPersistReference3`
- `IModelDocExtension.IsSamePersistentID`