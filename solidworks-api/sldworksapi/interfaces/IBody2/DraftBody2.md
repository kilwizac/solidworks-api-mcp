---
type: method
interface: IBody2
member: DraftBody2
returns: System.Boolean
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: Number of faces to draft
  -
    name: FaceList
    type: System.Object
    description: Array of faces to draft
  -
    name: EdgeList
    type: System.Object
    description: Array of edges , one for each face, along which to apply the drafts
  -
    name: BasePoint
    type: System.Object
    description: Pointer to a MathPoint object (x,y,z values of the base point)
  -
    name: DraftAngle
    type: System.Double
    description: Draft angle
  -
    name: Dir
    type: System.Object
    description: Array of 3 doubles (x, y, z), a vector which specifies the direction of the draft
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.IDraftBody2
keywords:
  - temporary
  - bodies
  - draftbody2
  - ibody2
  - body2
  - draft
  - num
  - faces
  - int32
  - face
  - list
  - object
  - edge
  - base
  - point
  - angle
  - double
  - dir
  - boolean
---

# IBody2.DraftBody2

Adds drafts to the specified faces on a temporary body. This method modifies the body.

## Signature

```csharp
System.Boolean DraftBody2( 
   System.Int32
NumOfFaces
,
   System.Object
FaceList
,
   System.Object
EdgeList
,
   System.Object
BasePoint
,
   System.Double
DraftAngle
,
   System.Object
Dir
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces to draft
- `FaceList` (System.Object): Array of faces to draft
- `EdgeList` (System.Object): Array of edges , one for each face, along which to apply the drafts
- `BasePoint` (System.Object): Pointer to a MathPoint object (x,y,z values of the base point)
- `DraftAngle` (System.Double): Draft angle
- `Dir` (System.Object): Array of 3 doubles (x, y, z), a vector which specifies the direction of the draft

## Return Value

True if drafts are applied, false if not

## See Also

- `IBody2.IDraftBody2`