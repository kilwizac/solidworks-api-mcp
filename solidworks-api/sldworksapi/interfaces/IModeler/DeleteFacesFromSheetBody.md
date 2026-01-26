---
type: method
interface: IModeler
member: DeleteFacesFromSheetBody
returns: System.Boolean
parameters:
  -
    name: FaceVar
    type: System.Object
    description: Array of faces to delete from the sheet (surface) body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IModeler.IDeleteFacesFromSheetBody
keywords:
  - sheet
  - bodies
  - see
  - also
  - ibody2
  - deletefacesfromsheetbody
  - imodeler
  - modeler
  - delete
  - faces
  - body
  - face
  - var
  - object
  - boolean
---

# IModeler.DeleteFacesFromSheetBody

Deletes the unused faces of the sheet body.

## Signature

```csharp
System.Boolean DeleteFacesFromSheetBody( 
   System.Object
FaceVar
)
```
## Parameters

- `FaceVar` (System.Object): Array of faces to delete from the sheet (surface) body

## Return Value

Unknown.

## Remarks

Use this method to remove the unused faces from the sheet body created by
IModeler::CreateBrepBody3
and
IModeler::ICreateBrepBody3
.

## See Also

- `IModeler.IDeleteFacesFromSheetBody`