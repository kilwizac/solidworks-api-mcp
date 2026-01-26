---
type: method
interface: IModeler
member: IDeleteFacesFromSheetBody
returns: System.Boolean
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of faces to delete
  -
    name: FaceVar
    type: Face2
    description: Array of faces to delete from the sheet (surface) body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.DeleteFacesFromSheetBody
keywords:
  - sheet
  - bodies
  - see
  - also
  - ibody2
  - ideletefacesfromsheetbody
  - imodeler
  - modeler
  - delete
  - faces
  - body
  - count
  - int32
  - face
  - var
  - face2
  - boolean
---

# IModeler.IDeleteFacesFromSheetBody

Deletes the unused faces of the sheet body.

## Signature

```csharp
System.Boolean IDeleteFacesFromSheetBody( 
   System.Int32
Count
,
   ref Face2
FaceVar
)
```
## Parameters

- `Count` (System.Int32): Number of faces to delete
- `FaceVar` (Face2): Array of faces to delete from the sheet (surface) body

## Return Value

True if all of the faces are deleted, false if not

## Remarks

Use this method to remove the unused faces from the sheet body created by
IModeler::CreateBrepBody3
and
IModeler::ICreateBrepBody3
.

## See Also

- `IModeler.DeleteFacesFromSheetBody`