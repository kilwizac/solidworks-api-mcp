---
type: method
interface: IBody
member: IDeleteFaces3
returns: void
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
    name: Option
    type: System.Int32
    description: 
  -
    name: DoLocalCheck
    type: System.Boolean
    description: 
  -
    name: LocalCheckResult
    type: System.Boolean
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - geometry
related: []
keywords:
  - ideletefaces3
  - ibody
  - body
  - delete
  - faces3
  - num
  - faces
  - int32
  - face
  - list
  - option
  - do
  - local
  - check
  - boolean
  - result
  - void
---

# IBody.IDeleteFaces3

Obsolete. Superseded by IBody2::IDeleteFaces3.

## Signature

```csharp
void IDeleteFaces3( 
   System.Int32
NumOfFaces
,
   ref Face
FaceList
,
   System.Int32
Option
,
   System.Boolean
DoLocalCheck
,
   ref System.Boolean
LocalCheckResult
)
```
## Parameters

- `NumOfFaces` (System.Int32): 
- `FaceList` (Face): 
- `Option` (System.Int32): 
- `DoLocalCheck` (System.Boolean): 
- `LocalCheckResult` (System.Boolean): 

## Return Value

Unknown.