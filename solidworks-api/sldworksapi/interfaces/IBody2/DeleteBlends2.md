---
type: method
interface: IBody2
member: DeleteBlends2
returns: System.Boolean
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: Number of faces to delete
  -
    name: FaceList
    type: System.Object
    description: List of faces to delete
  -
    name: DoLocalCheck
    type: System.Boolean
    description: True to perform a local check, false to not
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IDeleteBlends2
keywords:
  - deleteblends2
  - ibody2
  - body2
  - delete
  - blends2
  - num
  - faces
  - int32
  - face
  - list
  - object
  - do
  - local
  - check
  - boolean
---

# IBody2.DeleteBlends2

Obsolete. Superseded by IBody2::DeleteBlends3.

## Signature

```csharp
System.Boolean DeleteBlends2( 
   System.Int32
NumOfFaces
,
   System.Object
FaceList
,
   System.Boolean
DoLocalCheck
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces to delete
- `FaceList` (System.Object): List of faces to delete
- `DoLocalCheck` (System.Boolean): True to perform a local check, false to not

## Return Value

True if the set of fillet faces are removed, false if not

## See Also

- `IBody2.IDeleteBlends2`