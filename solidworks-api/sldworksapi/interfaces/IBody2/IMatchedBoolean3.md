---
type: method
interface: IBody2
member: IMatchedBoolean3
returns: EnumBodies2
parameters:
  -
    name: OperationType
    type: System.Int32
    description: One of these operation types: SWBODYADD SWBODYCUT SWCODYINTERSECT
  -
    name: ToolBodyCount
    type: System.Int32
    description: Number of bodies
  -
    name: ToolBodyArr
    type: Body2
    description: Array of bodies of size ToolBodyCount
  -
    name: NumOfMatchingFaces
    type: System.Int32
    description: Number of matching faces
  -
    name: FaceList1
    type: Face2
    description: First face list (see Remarks )
  -
    name: FaceList2
    type: Face2
    description: Second face list (see Remarks )
  -
    name: ErrorCode
    type: System.Int32
    description: Error indicated as defined in swBodyOperationError_e
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.MatchedBoolean3
keywords:
  - imatchedboolean3
  - ibody2
  - body2
  - matched
  - boolean3
  - operation
  - type
  - int32
  - tool
  - body
  - count
  - arr
  - num
  - matching
  - faces
  - face
  - list1
  - face2
  - list2
  - error
  - code
  - bodies2
---

# IBody2.IMatchedBoolean3

Obsolete. Superseded by IBody2::IMatchedBoolean4.

## Signature

```csharp
EnumBodies2 IMatchedBoolean3( 
   System.Int32
OperationType
,
   System.Int32
ToolBodyCount
,
   ref Body2
ToolBodyArr
,
   System.Int32
NumOfMatchingFaces
,
   ref Face2
FaceList1
,
   ref Face2
FaceList2
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `OperationType` (System.Int32): One of these operation types: SWBODYADD SWBODYCUT SWCODYINTERSECT
- `ToolBodyCount` (System.Int32): Number of bodies
- `ToolBodyArr` (Body2): Array of bodies of size ToolBodyCount
- `NumOfMatchingFaces` (System.Int32): Number of matching faces
- `FaceList1` (Face2): First face list (see Remarks )
- `FaceList2` (Face2): Second face list (see Remarks )
- `ErrorCode` (System.Int32): Error indicated as defined in swBodyOperationError_e

## Return Value

Pointer to the IEnumBodies2 object for a list of matches

## Remarks

The concept of match means that the caller tells the boolean operator beforehand which faces can be considered to coincide. Basically, the caller performs part of the boolean operation.
Sometimes the application knows that two faces match because of the way the bodies are constructed; i.e., the application knows which faces are intended to match.
Having a list of matching face pairs may allow the matched boolean operator to resolve other geometric operations that otherwise it would not be able to work out. In general, providing matched faces speeds up the boolean operation and makes results more reliable.
The arguments FaceList1 and FaceList2 arguments can be empty lists. If matching face pairs are passed in, these faces must match such that:
the surface geometry is coinciding.
for each edge in a face, there is an edge in the other face that coincides

## See Also

- `IBody2.MatchedBoolean3`