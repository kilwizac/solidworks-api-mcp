---
type: method
interface: IBody2
member: IDraftBody
returns: System.Boolean
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: 
  -
    name: FaceList
    type: Face2
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
  - documents
  - geometry
related: []
keywords:
  - idraftbody
  - ibody2
  - body2
  - draft
  - body
  - num
  - faces
  - int32
  - face
  - list
  - face2
  - edge
  - angle
  - double
  - dir
  - boolean
---

# IBody2.IDraftBody

Obsolete. Superseded by IBody2::IDraftBody2.

## Signature

```csharp
System.Boolean IDraftBody( 
   System.Int32
NumOfFaces
,
   ref Face2
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
- `FaceList` (Face2): 
- `EdgeList` (Edge): 
- `DraftAngle` (System.Double): 
- `Dir` (System.Double): 

## Return Value

Unknown.