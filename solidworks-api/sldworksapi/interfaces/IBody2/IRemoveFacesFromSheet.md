---
type: method
interface: IBody2
member: IRemoveFacesFromSheet
returns: void
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: Number of faces generated when these two bodies intersect
  -
    name: FacesToRemove
    type: Face2
    description: Pointer to an array of faces to remove
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.RemoveFacesFromSheet
keywords:
  - sheet
  - bodies
  - iremovefacesfromsheet
  - ibody2
  - body2
  - remove
  - faces
  - num
  - int32
  - face2
  - void
---

# IBody2.IRemoveFacesFromSheet

Removes the specified faces from a sheet (surface) body.

## Signature

```csharp
void IRemoveFacesFromSheet( 
   System.Int32
NumOfFaces
,
   ref Face2
FacesToRemove
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces generated when these two bodies intersect
- `FacesToRemove` (Face2): Pointer to an array of faces to remove

## Return Value

Unknown.

## See Also

- `IBody2.RemoveFacesFromSheet`