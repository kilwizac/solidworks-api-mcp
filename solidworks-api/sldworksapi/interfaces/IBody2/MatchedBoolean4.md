---
type: method
interface: IBody2
member: MatchedBoolean4
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
    description: Number of matching faces
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
  - IBody2.IMatchedBoolean4
keywords:
  - matchedboolean4
  - ibody2
  - body2
  - matched
  - boolean4
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
  - tolerance
  - double
  - error
  - code
---

# IBody2.MatchedBoolean4

Performs a matched boolean on the specified bodies and supports an optional list of faces that match exactly.

## Signature

```csharp
System.Object MatchedBoolean4( 
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
   System.Double
MatchingTolerance
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
- `FaceList2` (System.Object): Number of matching faces
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

- `IBody2.IMatchedBoolean4`