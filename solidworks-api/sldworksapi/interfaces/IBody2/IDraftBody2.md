---
type: method
interface: IBody2
member: IDraftBody2
returns: System.Boolean
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: Number of faces to draft
  -
    name: FaceList
    type: Face2
    description: Array of faces to draft
  -
    name: EdgeList
    type: Edge
    description: Array of edges , one for each face, along which to apply the drafts
  -
    name: BasePoint
    type: MathPoint
    description: Pointer to a MathPoint object (x,y,z values of the base point)
  -
    name: DraftAngle
    type: System.Double
    description: Draft angle
  -
    name: Dir
    type: System.Double
    description: Array of 3 doubles (x, y, z), a vector which specifies the direction of the draft
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.DraftBody2
keywords:
  - idraftbody2
  - ibody2
  - body2
  - draft
  - num
  - faces
  - int32
  - face
  - list
  - face2
  - edge
  - base
  - point
  - math
  - angle
  - double
  - dir
  - boolean
---

# IBody2.IDraftBody2

Adds drafts to the specified faces on a temporary body. This method modifies the body.

## Signature

```csharp
System.Boolean IDraftBody2( 
   System.Int32
NumOfFaces
,
   ref Face2
FaceList
,
   ref Edge
EdgeList
,
   MathPoint
BasePoint
,
   System.Double
DraftAngle
,
   ref System.Double
Dir
)
```
## Parameters

- `NumOfFaces` (System.Int32): Number of faces to draft
- `FaceList` (Face2): Array of faces to draft
- `EdgeList` (Edge): Array of edges , one for each face, along which to apply the drafts
- `BasePoint` (MathPoint): Pointer to a MathPoint object (x,y,z values of the base point)
- `DraftAngle` (System.Double): Draft angle
- `Dir` (System.Double): Array of 3 doubles (x, y, z), a vector which specifies the direction of the draft

## Return Value

True if drafts are applied, false if not

## See Also

- `IBody2.DraftBody2`