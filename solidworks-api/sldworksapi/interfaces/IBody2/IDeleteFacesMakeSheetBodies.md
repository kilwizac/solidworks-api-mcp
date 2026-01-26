---
type: method
interface: IBody2
member: IDeleteFacesMakeSheetBodies
returns: Body2
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces to delete
  -
    name: FaceList
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of the faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: SheetCount
    type: System.Int32
    description: Number of sheets bodies to create
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.DeleteFacesMakeSheetBodies
  - IFace2.ICreateSheetBody
  - IFace2.ICreateSheetBodyByFaceExtension
  - IModeler.ICreateSheetFromFaces
  - IModeler.ICreateSheetFromSurface2
keywords:
  - sheet
  - bodies
  - face
  - see
  - also
  - iface2
  - delete
  - ideletefacesmakesheetbodies
  - ibody2
  - body2
  - faces
  - make
  - count
  - int32
  - list
  - face2
---

# IBody2.IDeleteFacesMakeSheetBodies

Creates sheet bodies from deleted faces.

## Signature

```csharp
Body2 IDeleteFacesMakeSheetBodies( 
   System.Int32
FaceCount
,
   ref Face2
FaceList
,
   System.Int32
SheetCount
)
```
## Parameters

- `FaceCount` (System.Int32): Number of faces to delete
- `FaceList` (Face2): in-process, unmanaged C++: Pointer to an array of the faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `SheetCount` (System.Int32): Number of sheets bodies to create

## Return Value

in-process, unmanaged C++: Pointer to an array of sheet bodies created from the deleted faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
IBody2:IDeleteFacesMakeSheetBodiesCount
to get the number of sheet bodies to create from the deleted faces.

## See Also

- `IBody2.DeleteFacesMakeSheetBodies`
- `IFace2.ICreateSheetBody`
- `IFace2.ICreateSheetBodyByFaceExtension`
- `IModeler.ICreateSheetFromFaces`
- `IModeler.ICreateSheetFromSurface2`