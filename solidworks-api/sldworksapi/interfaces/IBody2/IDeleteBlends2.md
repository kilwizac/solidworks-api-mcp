---
type: method
interface: IBody2
member: IDeleteBlends2
returns: System.Boolean
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: Number of faces to delete
  -
    name: FaceList
    type: Face2
    description: in-process, unmanaged C++: Pointer to an array of faces of size NumOfFaces to delete VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
  -
    name: DoLocalCheck
    type: System.Boolean
    description: True to perform a local check, false if not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.DeleteBlends2
  - IBody2.DeleteFaces5
keywords:
  - ideleteblends2
  - ibody2
  - body2
  - delete
  - blends2
  - num
  - faces
  - int32
  - face
  - list
  - face2
  - do
  - local
  - check
  - boolean
---

# IBody2.IDeleteBlends2

Obsolete. Superseded by IBody2::DeleteBlends3.

## Signature

```csharp
System.Boolean IDeleteBlends2( 
   System.Int32
NumOfFaces
,
   ref Face2
FaceList
,
   System.Boolean
DoLocalCheck
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces to delete
- `FaceList` (Face2): in-process, unmanaged C++: Pointer to an array of faces of size NumOfFaces to delete VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `DoLocalCheck` (System.Boolean): True to perform a local check, false if not

## Return Value

True if a set of fillet faces are removed, false if not

## See Also

- `IBody2.DeleteBlends2`
- `IBody2.DeleteFaces5`