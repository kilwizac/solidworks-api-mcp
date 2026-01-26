---
type: method
interface: IBody2
member: DeleteFaces4
returns: System.Boolean
parameters:
  -
    name: FaceList
    type: System.Object
    description: Array containing the faces for deletion
  -
    name: Option
    type: System.Int32
    description: Additional control (see Remarks )
  -
    name: DoLocalCheck
    type: System.Boolean
    description: True checks the bodies during the operation and sets the return value to indicate whether or not the resultant body is valid, false does not
  -
    name: BodyList
    type: System.Object
    description: Array of temporary bodies
  -
    name: LocalCheckResult
    type: System.Boolean
    description: True if body is valid, false if not; to obtain this value, you must pass True for the DoLocalCheck argument
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.DeleteBlends2
  - IBody2.EnumFaces
  - IBody2.GetFaceCount
  - IBody2.GetFaces
  - IBody2.GetFirstFace
  - IBody2.IDeleteBlends2
  - IBody2.IGetFaces
  - IBody2.IGetFirstFace
keywords:
  - deletefaces4
  - ibody2
  - body2
  - delete
  - faces4
  - face
  - list
  - object
  - option
  - int32
  - do
  - local
  - check
  - boolean
  - body
  - result
---

# IBody2.DeleteFaces4

Obsolete. Superseded by IBody2::DeleteFaces5.

## Signature

```csharp
System.Boolean DeleteFaces4( 
   System.Object
FaceList
,
   System.Int32
Option
,
   System.Boolean
DoLocalCheck
,
   out System.Object
BodyList
,
   out System.Boolean
LocalCheckResult
)
```
## Parameters

- `FaceList` (System.Object): Array containing the faces for deletion
- `Option` (System.Int32): Additional control (see Remarks )
- `DoLocalCheck` (System.Boolean): True checks the bodies during the operation and sets the return value to indicate whether or not the resultant body is valid, false does not
- `BodyList` (System.Object): Array of temporary bodies
- `LocalCheckResult` (System.Boolean): True if body is valid, false if not; to obtain this value, you must pass True for the DoLocalCheck argument

## Return Value

True if set of faces are deleted, false if not

## Remarks

All of the specified faces, which must belong to this temporary body, are deleted from IBody2. If the resulting body does not have a complete boundary, then SOLIDWORKS treats any holes as wounds and heals them as specified by the option argument. The option argument takes the following values:
Value
Loops on the faces to delete are...
0
Dependent on each other and should be healed at the same time. If extending faces does not yield a solution, then SOLIDWORKS tries to shrink the faces.
1
Independent and should be healed separately. This option also grows the parent faces around the hole to cover it.
2
Independent and should be healed separately. This option also finds a surface in which all edges of a hole lie and attaches this to a face covering the hole (SOLIDWORKS creates a new face to cover the hole).
For example, consider a cube with a through hole made up of four faces (a square hole). To delete these four faces, specify option 0 because the loop on the first face to be deleted is dependent on the loop of the second face to be deleted. Likewise, the loop on the second face to be deleted is dependent on the third face to be deleted, and so on.
Now consider the same cube with a through hole, except this through hole is a simple cylinder (one face). To delete the cylindrical face, specify option 1 to heal the loops independently. This is necessary because the cylindrical face actually has two loops (one at either end of the cylinder) that need to be healed separately.
It is possible to generate invalid geometry when you use this method because checking is disabled. Call
IBody2::Check3
to verify that the body is a valid solid after using this method.

## See Also

- `IBody2.DeleteBlends2`
- `IBody2.EnumFaces`
- `IBody2.GetFaceCount`
- `IBody2.GetFaces`
- `IBody2.GetFirstFace`
- `IBody2.IDeleteBlends2`
- `IBody2.IGetFaces`
- `IBody2.IGetFirstFace`