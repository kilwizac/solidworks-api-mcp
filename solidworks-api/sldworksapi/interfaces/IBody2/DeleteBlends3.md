---
type: method
interface: IBody2
member: DeleteBlends3
returns: System.Boolean
parameters:
  -
    name: FaceList
    type: System.Object
    description: List of faces to delete
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
  - IBody2.DeleteFaces5
  - IBody2.IDeleteBlends3
keywords:
  - face
  - see
  - also
  - iface2
  - delete
  - blended
  - faces
  - bodies
  - ibody2
  - blends
  - deleteblends3
  - body2
  - blends3
  - list
  - object
  - do
  - local
  - check
  - boolean
  - use
  - planar
  - cap
  - vb
  - net
  - vba
---

# IBody2.DeleteBlends3

Removes a set of fillet faces from a temporary body and heals the body.

## Signature

```csharp
System.Boolean DeleteBlends3( 
   System.Object
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

- `FaceList` (System.Object): List of faces to delete
- `DoLocalCheck` (System.Boolean): True to perform a local check, false to not
- `UsePlanarCap` (System.Boolean): True to use planar caps, false to not (see Remarks )

## Return Value

True if the set of fillet faces are removed, false if not

## Remarks

Typically when deleting blends, an entire chain of blends is deleted. However, if only a few blends are deleted from a chain of blends and the UsePlanarCap parameter is not set to true, then the resultant body might be invalid.

## Examples

- Delete Blended Faces (C#) (Delete_Blended_Faces_Example_CSharp.htm)
- Delete Blended Faces (VB.NET) (Delete_Blended_Faces_Example_VBNET.htm)
- Delete Blended Faces (VBA) (Delete_Blended_Faces_Example_VB.htm)

## See Also

- `IBody2.DeleteFaces5`
- `IBody2.IDeleteBlends3`