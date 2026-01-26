---
type: method
interface: IBody2
member: ICreateBodyFromFaces
returns: Body2
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: Number of faces to use to create the body
  -
    name: FaceList
    type: System.Object
    description: Array containing the faces to use to create the body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.CreateBodyFromFaces
keywords:
  - temporary
  - bodies
  - icreatebodyfromfaces
  - ibody2
  - body2
  - create
  - body
  - faces
  - num
  - int32
  - face
  - list
  - object
---

# IBody2.ICreateBodyFromFaces

Creates a temporary body from the faces.

## Signature

```csharp
Body2 ICreateBodyFromFaces( 
   System.Int32
NumOfFaces
,
   System.Object
FaceList
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces to use to create the body
- `FaceList` (System.Object): Array containing the faces to use to create the body

## Return Value

IBody2 object

## See Also

- `IBody2.CreateBodyFromFaces`