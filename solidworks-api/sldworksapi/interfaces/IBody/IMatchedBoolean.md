---
type: method
interface: IBody
member: IMatchedBoolean
returns: EnumBodies
parameters:
  -
    name: OperationType
    type: System.Int32
    description: 
  -
    name: ToolBody
    type: Body
    description: 
  -
    name: NumOfMatchingFaces
    type: System.Int32
    description: 
  -
    name: FaceList1
    type: Face
    description: 
  -
    name: FaceList2
    type: Face
    description: 
  -
    name: ErrorCode
    type: System.Int32
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related: []
keywords:
  - imatchedboolean
  - ibody
  - body
  - matched
  - boolean
  - operation
  - type
  - int32
  - tool
  - num
  - matching
  - faces
  - face
  - list1
  - list2
  - error
  - code
  - bodies
---

# IBody.IMatchedBoolean

Obsolete. Superseded by IBody2::IMatchedBoolean3.

## Signature

```csharp
EnumBodies IMatchedBoolean( 
   System.Int32
OperationType
,
   Body
ToolBody
,
   System.Int32
NumOfMatchingFaces
,
   ref Face
FaceList1
,
   ref Face
FaceList2
,
   out System.Int32
ErrorCode
)
```
## Parameters

- `OperationType` (System.Int32): 
- `ToolBody` (Body): 
- `NumOfMatchingFaces` (System.Int32): 
- `FaceList1` (Face): 
- `FaceList2` (Face): 
- `ErrorCode` (System.Int32): 

## Return Value

Unknown.