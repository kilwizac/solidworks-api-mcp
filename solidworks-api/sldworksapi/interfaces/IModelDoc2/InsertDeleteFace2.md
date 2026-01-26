---
type: method
interface: IModelDoc2
member: InsertDeleteFace2
returns: System.Boolean
parameters:
  -
    name: Refill
    type: System.Int32
    description: 1 refills the face after it is deleted 0 does not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - geometry
  - ui
related:
  - IFeatureManager.EditDeleteFace
keywords:
  - insertdeleteface2
  - imodeldoc2
  - model
  - doc2
  - insert
  - delete
  - face2
  - refill
  - int32
  - boolean
  - selected
  - faces
  - vba
---

# IModelDoc2.InsertDeleteFace2

Obsolete. Superseded by IModelDocExtension::InsertDeleteFace.

## Signature

```csharp
System.Boolean InsertDeleteFace2( 
   System.Int32
Refill
)
```
## Parameters

- `Refill` (System.Int32): 1 refills the face after it is deleted 0 does not

## Return Value

True if a DeleteFace feature is inserted in the model, false if not

## Remarks

This is a part-level operation and only works when the model is a
IPartDoc
.

## Examples

- Delete Selected Faces (VBA) (Delete_Selected_Faces_Example_VB.htm)

## See Also

- `IFeatureManager.EditDeleteFace`