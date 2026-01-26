---
type: method
interface: IBody2
member: IMatchedBoolean2
returns: EnumBodies2
parameters:
  -
    name: OperationType
    type: System.Int32
    description: 
  -
    name: ToolBodyCount
    type: System.Int32
    description: 
  -
    name: ToolBodyArr
    type: Body2
    description: 
  -
    name: NumOfMatchingFaces
    type: System.Int32
    description: 
  -
    name: FaceList1
    type: Face2
    description: 
  -
    name: FaceList2
    type: Face2
    description: 
  -
    name: ErrorCode
    type: System.Int32
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - imatchedboolean2
  - ibody2
  - body2
  - matched
  - boolean2
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

# IBody2.IMatchedBoolean2

Obsolete. Superseded by IBody2::IMatchedBoolean3.

## Signature

```csharp
EnumBodies2 IMatchedBoolean2( 
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

- `OperationType` (System.Int32): 
- `ToolBodyCount` (System.Int32): 
- `ToolBodyArr` (Body2): 
- `NumOfMatchingFaces` (System.Int32): 
- `FaceList1` (Face2): 
- `FaceList2` (Face2): 
- `ErrorCode` (System.Int32): 

## Return Value

Unknown.