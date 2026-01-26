---
type: method
interface: IModeler
member: ICheckInterference
returns: void
parameters:
  -
    name: Body1InterferedFaceArray
    type: Face
    description: 
  -
    name: Body2InterferedFaceArray
    type: Face
    description: 
  -
    name: IntersectedBodyArray
    type: Body
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - icheckinterference
  - imodeler
  - modeler
  - check
  - interference
  - body1
  - interfered
  - face
  - array
  - body2
  - intersected
  - body
  - void
---

# IModeler.ICheckInterference

Obsolete. Superseded by IModeler::ICheckInterference2.

## Signature

```csharp
void ICheckInterference( 
   out Face
Body1InterferedFaceArray
,
   out Face
Body2InterferedFaceArray
,
   out Body
IntersectedBodyArray
)
```
## Parameters

- `Body1InterferedFaceArray` (Face): 
- `Body2InterferedFaceArray` (Face): 
- `IntersectedBodyArray` (Body): 

## Return Value

Unknown.