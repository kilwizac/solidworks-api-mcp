---
type: method
interface: IBody2
member: IDeleteFacesMakeSheetBodiesCount
returns: System.Int32
parameters:
  -
    name: FaceCount
    type: System.Int32
    description: Number of faces to delete from the body
  -
    name: FaceList
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of the faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - sheet
  - bodies
  - face
  - see
  - also
  - iface2
  - delete
  - ideletefacesmakesheetbodiescount
  - ibody2
  - body2
  - faces
  - make
  - count
  - int32
  - list
  - face2
---

# IBody2.IDeleteFacesMakeSheetBodiesCount

Gets the number of sheet bodies to create from the deleted faces.

## Signature

```csharp
System.Int32 IDeleteFacesMakeSheetBodiesCount( 
   System.Int32
FaceCount
,
   ref Face2
FaceList
)
```
## Parameters

- `FaceCount` (System.Int32): Number of faces to delete from the body
- `FaceList` (Face2): in-process, unmanaged C++: Pointer to an array of the faces VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Number of sheet bodies to create from the deleted faces

## Remarks

To create sheet bodies from deleted faces, call
IBody2::IDeleteFacesMakeSheetBodies
.