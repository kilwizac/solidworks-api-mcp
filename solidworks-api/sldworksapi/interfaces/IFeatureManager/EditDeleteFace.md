---
type: method
interface: IFeatureManager
member: EditDeleteFace
returns: System.Boolean
parameters:
  -
    name: Refill
    type: System.Int32
    description: 1 refills the face after it is deleted 0 does not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IDeleteFaceFeatureData
  - IModelDocExtension.InsertDeleteFace
keywords:
  - face
  - see
  - also
  - iface2
  - delete
  - faces
  - editdeleteface
  - ifeaturemanager
  - feature
  - manager
  - edit
  - refill
  - int32
  - boolean
---

# IFeatureManager.EditDeleteFace

Edits a DeleteFace feature.

## Signature

```csharp
System.Boolean EditDeleteFace( 
   System.Int32
Refill
)
```
## Parameters

- `Refill` (System.Int32): 1 refills the face after it is deleted 0 does not

## Return Value

True if the operation succeeds, false if not

## Remarks

This method assumes that the new faces to delete and the
DeleteFace
feature are selected.

## See Also

- `IDeleteFaceFeatureData`
- `IModelDocExtension.InsertDeleteFace`