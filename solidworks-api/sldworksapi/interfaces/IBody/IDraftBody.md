---
type: method
interface: IBody
member: IDraftBody
returns: System.Boolean
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: 
  -
    name: FaceList
    type: Face
    description: 
  -
    name: EdgeList
    type: Edge
    description: 
  -
    name: DraftAngle
    type: System.Double
    description: 
  -
    name: Dir
    type: System.Double
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related: []
keywords:
  - idraftbody
  - ibody
  - body
  - draft
  - num
  - faces
  - int32
  - face
  - list
  - edge
  - angle
  - double
  - dir
  - boolean
---

# IBody.IDraftBody

Obsolete. Superseded by IBody2::IDraftBody2.

## Signature

```csharp
System.Boolean IDraftBody( 
   System.Int32
NumOfFaces
,
   ref Face
FaceList
,
   ref Edge
EdgeList
,
   System.Double
DraftAngle
,
   ref System.Double
Dir
)
```
## Parameters

- `NumOfFaces` (System.Int32): 
- `FaceList` (Face): 
- `EdgeList` (Edge): 
- `DraftAngle` (System.Double): 
- `Dir` (System.Double): 

## Return Value

Unknown.