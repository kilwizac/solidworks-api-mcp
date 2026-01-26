---
type: method
interface: IBody2
member: RemoveFacesFromSheet
returns: void
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: Number of faces generated when these two bodies intersect
  -
    name: FacesToRemove
    type: System.Object
    description: Array of faces to remove
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IRemoveFacesFromSheet
keywords:
  - sheet
  - bodies
  - removefacesfromsheet
  - ibody2
  - body2
  - remove
  - faces
  - num
  - int32
  - object
  - void
---

# IBody2.RemoveFacesFromSheet

Removes the specified faces from a sheet (surface) body.

## Signature

```csharp
void RemoveFacesFromSheet( 
   System.Int32
NumOfFaces
,
   System.Object
FacesToRemove
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces generated when these two bodies intersect
- `FacesToRemove` (System.Object): Array of faces to remove

## Return Value

Unknown.

## See Also

- `IBody2.IRemoveFacesFromSheet`