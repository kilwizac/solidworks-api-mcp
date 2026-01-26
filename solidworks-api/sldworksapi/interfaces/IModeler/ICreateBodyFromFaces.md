---
type: method
interface: IModeler
member: ICreateBodyFromFaces
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
  - icreatebodyfromfaces
  - imodeler
  - modeler
  - create
  - body
  - faces
  - num
  - int32
  - face
  - do
  - local
  - check
  - boolean
  - result
---

# IModeler.ICreateBodyFromFaces

Obsolete. Superseded by IModeler::ICreateBodyFromFace3.

## Signature

```csharp
Body ICreateBodyFromFaces( 
   System.Int32
NumOfFaces
,
   ref Face
Faces
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
- `Faces` (Face): 
- `DoLocalCheck` (System.Boolean): 
- `LocalCheckResult` (System.Boolean): 

## Return Value

Unknown.