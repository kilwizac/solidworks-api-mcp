---
type: method
interface: IBody2
member: MatchedBoolean3
returns: System.Object
parameters:
  -
    name: OperationType
    type: System.Int32
    description: One of the following operation types: SWBODYADD SWBODYCUT SWBODYINTERSECT
  -
    name: ToolBody
    type: System.Object
    description: Array of bodies
  -
    name: NumOfMatchingFaces
    type: System.Int32
    description: Number of matching faces
  -
    name: FaceList1
    type: System.Object
    description: First face list (see Remarks )
  -
    name: FaceList2
    type: System.Object
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
  - IBody2.IMatchedBoolean3
keywords:
  - matchedboolean3
  - ibody2
  - body2
  - matched
  - boolean3
  - operation
  - type
  - int32
  - tool
  - body
  - object
  - num
  - matching
  - faces
  - face
  - list1
  - list2
  - error
  - code
---

# IBody2.MatchedBoolean3

Obsolete. Superseded by IBody2::MatchedBoolean4.

## Signature

```csharp
System.Object MatchedBoolean3( 
   System.Int32
OperationType
,
   System.Object
ToolBody
,
   System.Int32
NumOfMatchingFaces
,
   System.Object
FaceList1
,
   System.Object
FaceList2
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `OperationType` (System.Int32): One of the following operation types: SWBODYADD SWBODYCUT SWBODYINTERSECT
- `ToolBody` (System.Object): Array of bodies
- `NumOfMatchingFaces` (System.Int32): Number of matching faces
- `FaceList1` (System.Object): First face list (see Remarks )
- `FaceList2` (System.Object): Second face list (see Remarks )
- `ErrorCode` (System.Int32): Error indicated as defined in swBodyOperationError_e

## Return Value

Array of bodies formed by the operation

## Remarks

The concept of match means that the caller tells the boolean operator beforehand which faces can be considered to coincide. Basically, the caller performs part of the boolean operation.
Sometimes the application knows that two faces match because of the way the bodies are constructed; i.e., the application knows which faces are intended to match.
Having a list of matching face pairs may allow the matched boolean operator to resolve other geometric operations that otherwise it would not be able to work out. In general, providing matched faces speeds up the boolean operation and makes results more reliable.
The arguments FaceList1 and FaceList2 arguments can be empty lists. If matching face pairs are passed in, these faces must match such that:
the surface geometry is coinciding.
for each edge in a face, there is an edge in the other face that coincides

## See Also

- `IBody2.IMatchedBoolean3`