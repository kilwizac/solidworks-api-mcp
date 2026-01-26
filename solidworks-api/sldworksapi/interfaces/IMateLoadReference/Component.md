---
type: property
interface: IMateLoadReference
member: Component
returns: Component2
parameters:
  -
    name: WhichOne
    type: System.Int32
    description: 0 = Component1 1 = Component2
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
related: []
keywords:
  - components
  - see
  - also
  - icomponent2
  - mate
  - load
  - reference
  - component
  - imateloadreference
  - which
  - one
  - int32
  - component2
  - insert
  - vb
  - net
  - vba
readonly: true
---

# IMateLoadReference.Component

Gets the specified component associated with the mate that owns this load reference.

## Signature

```csharp
Component2 Component( 
   System.Int32
WhichOne
) {get;}
```
## Parameters

- `WhichOne` (System.Int32): 0 = Component1 1 = Component2

## Return Value

Component associated with the mate that owns this load reference

## Examples

- Insert Mate Load Reference (C#) (Insert_Mate_Load_Reference_Example_CSharp.htm)
- Insert Mate Load Reference (VB.NET) (Insert_Mate_Load_Reference_Example_VBNET.htm)
- Insert Mate Load Reference (VBA) (Insert_Mate_Load_Reference_Example_VB.htm)