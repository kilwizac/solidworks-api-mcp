---
type: method
interface: IBody2
member: DeleteFacesMakeSheetBodies
returns: System.Object
parameters:
  -
    name: FaceList
    type: System.Object
    description: Array of faces to delete
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IDeleteFacesMakeSheetBodies
  - IFace2.CreateSheetBody
  - IFace2.CreateSheetBodyByFaceExtension
  - IModeler.CreateSheetFromFaces
  - IModeler.CreateSheetFromSurface
keywords:
  - face
  - see
  - also
  - iface2
  - delete
  - sheet
  - bodies
  - deletefacesmakesheetbodies
  - ibody2
  - body2
  - faces
  - make
  - list
  - object
---

# IBody2.DeleteFacesMakeSheetBodies

Creates sheet bodies from deleted faces.

## Signature

```csharp
System.Object DeleteFacesMakeSheetBodies( 
   System.Object
FaceList
)
```
## Parameters

- `FaceList` (System.Object): Array of faces to delete

## Return Value

Array of sheet bodies created from the deleted faces

## See Also

- `IBody2.IDeleteFacesMakeSheetBodies`
- `IFace2.CreateSheetBody`
- `IFace2.CreateSheetBodyByFaceExtension`
- `IModeler.CreateSheetFromFaces`
- `IModeler.CreateSheetFromSurface`