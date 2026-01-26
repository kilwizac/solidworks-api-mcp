---
type: method
interface: ICoEdge
member: GetSense
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getsense
  - icoedge
  - co
  - edge
  - sense
  - boolean
  - select
  - tangent
  - edges
  - via
  - iteration
  - vba
  - each
  - coedge
  - loop
---

# ICoEdge.GetSense

Gets the sense of the coedge.

## Signature

```csharp
System.Boolean GetSense()
```
## Parameters

None.

## Return Value

True if the coedge has the same direction as the underlying edge, false if not

## Examples

- Select Tangent Edges via Iteration (VBA) (Select_Tangent_Edges_Example_VB.htm)
- Get Sense for Each Coedge in a Loop (VBA) (Get_Sense_for_Each_Coedge_in_a_Loop_Example_VB.htm)