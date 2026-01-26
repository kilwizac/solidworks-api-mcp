---
type: method
interface: IBody2
member: IMatchedBoolean4
returns: EnumBodies2
parameters:
  -
    name: OperationType
    type: System.Int32
    description: One of the following operation types: SWBODYADD SWBODYCUT SWBODYINTERSECT
  -
    name: ToolBodyCount
    type: System.Int32
    description: Number of bodies
  -
    name: ToolBodyArr
    type: Body2
    description: Array of bodies of size toolBodyCount
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
    name: MatchingTolerance
    type: System.Double
    description: Tolerance to use to check matching faces
  -
    name: ErrorCode
    type: System.Int32
    description: Error indicated as defined in swBodyOperationError_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - IBody2.MatchedBoolean4
keywords:
  - imatchedboolean4
  - ibody2
  - body2
  - matched
  - boolean4
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
  - tolerance
  - double
  - error
  - code
  - bodies2
---

# IBody2.IMatchedBoolean4

Performs a matched boolean on the specified bodies and supports an optional list of faces that match exactly.

## Signature

```csharp
EnumBodies2 IMatchedBoolean4( 
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
   System.Double
MatchingTolerance
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `OperationType` (System.Int32): One of the following operation types: SWBODYADD SWBODYCUT SWBODYINTERSECT
- `ToolBodyCount` (System.Int32): Number of bodies
- `ToolBodyArr` (Body2): Array of bodies of size toolBodyCount
- `NumOfMatchingFaces` (System.Int32): Number of matching faces
- `FaceList1` (Face2): First face list (see Remarks )
- `FaceList2` (Face2): Second face list (see Remarks )
- `MatchingTolerance` (System.Double): Tolerance to use to check matching faces
- `ErrorCode` (System.Int32): Error indicated as defined in swBodyOperationError_e

## Return Value

Unknown.

## Remarks

The concept of match means that the caller tells the boolean operator beforehand which faces can be considered to coincide. Basically the caller performs part of the boolean operation.
Sometimes the application knows that two faces match because of the way the bodies are constructed; i.e., the application knows which faces are intended to match.
Having a list of matching face pairs may allow the matched boolean operator to resolve other geometric operations that otherwise it would not be able to work out. In general, providing matched faces speeds up the boolean operation and makes results more reliable.
The arguments FaceList1 and FaceList2 arguments can be empty lists. If matching face pairs are passed in, these faces must match such that:
the surface geometry is coinciding.
for each edge in a face, there is an edge in the other face that coincides.
If MatchingTolerance is less than 1.0e-8 or 0.0, then a default tolerance of 2.0e-6 is used. You decide the tolerance value based on the similarities and subtle differences between the two bodies.
This method supports multibody parts.

## See Also

- `IBody2.MatchedBoolean4`