---
type: method
interface: IModeler
member: ICreateBodyFromFaces2
returns: Body
parameters:
  -
    name: NumOfFaces
    type: System.Int32
    description: 
  -
    name: Faces
    type: Face
    description: 
  -
    name: ActionType
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
  - documents
  - geometry
related: []
keywords:
  - icreatebodyfromfaces2
  - imodeler
  - modeler
  - create
  - body
  - faces2
  - num
  - faces
  - int32
  - face
  - action
  - type
  - do
  - local
  - check
  - boolean
  - result
---

# IModeler.ICreateBodyFromFaces2

Obsolete. Superseded by IModeler::ICreateBodyFromFace3.

## Signature

```csharp
Body ICreateBodyFromFaces2( 
   System.Int32
NumOfFaces
,
   ref Face
Faces
,
   System.Int32
ActionType
,
   System.Boolean
DoLocalCheck
,
   out System.Boolean
LocalCheckResult
)
```
## Parameters

- `NumOfFaces` (System.Int32): 
- `Faces` (Face): 
- `ActionType` (System.Int32): 
- `DoLocalCheck` (System.Boolean): 
- `LocalCheckResult` (System.Boolean): 

## Return Value

Unknown.