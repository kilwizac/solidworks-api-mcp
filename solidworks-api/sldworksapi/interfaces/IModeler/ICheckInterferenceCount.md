---
type: method
interface: IModeler
member: ICheckInterferenceCount
returns: System.Boolean
parameters:
  -
    name: Body1
    type: Body
    description: 
  -
    name: Body2
    type: Body
    description: 
  -
    name: CoincidentInterference
    type: System.Boolean
    description: 
  -
    name: Body1InterferedFaceCount
    type: System.Int32
    description: 
  -
    name: Body2InterferedFaceCount
    type: System.Int32
    description: 
  -
    name: IntersectedBodyCount
    type: System.Int32
    description: 
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - icheckinterferencecount
  - imodeler
  - modeler
  - check
  - interference
  - count
  - body1
  - body
  - body2
  - coincident
  - boolean
  - interfered
  - face
  - int32
  - intersected
---

# IModeler.ICheckInterferenceCount

Obsolete. Superseded by IModeler::ICheckInterferenceCount2.

## Signature

```csharp
System.Boolean ICheckInterferenceCount( 
   Body
Body1
,
   Body
Body2
,
   System.Boolean
CoincidentInterference
,
   out System.Int32
Body1InterferedFaceCount
,
   out System.Int32
Body2InterferedFaceCount
,
   out System.Int32
IntersectedBodyCount
)
```
## Parameters

- `Body1` (Body): 
- `Body2` (Body): 
- `CoincidentInterference` (System.Boolean): 
- `Body1InterferedFaceCount` (System.Int32): 
- `Body2InterferedFaceCount` (System.Int32): 
- `IntersectedBodyCount` (System.Int32): 

## Return Value

Unknown.