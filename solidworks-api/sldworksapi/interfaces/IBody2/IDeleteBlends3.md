---
type: method
interface: IBody2
member: IDeleteBlends3
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
    description: True to perform a local check, false to not
  -
    name: UsePlanarCap
    type: System.Boolean
    description: True to use planar caps, false to not (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.DeleteBlends3
  - IBody2.DeleteFaces5
keywords:
  - blended
  - faces
  - face
  - see
  - also
  - iface2
  - delete
  - ideleteblends3
  - ibody2
  - body2
  - blends3
  - num
  - int32
  - list
  - face2
  - do
  - local
  - check
  - boolean
  - use
  - planar
  - cap
---

# IBody2.IDeleteBlends3

Removes a set of fillet faces from a temporary body and heals the body.

## Signature

```csharp
System.Boolean IDeleteBlends3( 
   System.Int32
NumOfFaces
,
   ref Face2
FaceList
,
   System.Boolean
DoLocalCheck
,
   System.Boolean
UsePlanarCap
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces to delete
- `FaceList` (Face2): in-process, unmanaged C++: Pointer to an array of faces of size NumOfFaces to delete VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
- `DoLocalCheck` (System.Boolean): True to perform a local check, false to not
- `UsePlanarCap` (System.Boolean): True to use planar caps, false to not (see Remarks )

## Return Value

True if the set of fillet faces are removed, false if not

## Remarks

Typically when deleting blends, an entire chain of blends are deleted. However, if only a few blends are deleted from a chain of blends and the UsePlanarCap parameter is not set to true, then the resultant body might be invalid.

## See Also

- `IBody2.DeleteBlends3`
- `IBody2.DeleteFaces5`