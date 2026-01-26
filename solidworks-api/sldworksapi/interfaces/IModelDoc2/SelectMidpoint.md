---
type: method
interface: IModelDoc2
member: SelectMidpoint
returns: void
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - selections
  - ui
related: []
keywords:
  - midpoints
  - selectmidpoint
  - imodeldoc2
  - model
  - doc2
  - select
  - midpoint
  - void
  - edge
  - vba
  - vb
  - net
---

# IModelDoc2.SelectMidpoint

Puts the midpoint (swSelMIDPOINTS) of that edge on the selection list and removes the edge from the selection list when an edge is selected.

## Signature

```csharp
void SelectMidpoint()
```
## Parameters

None.

## Return Value

Unknown.

## Remarks

If the edge whose midpoint is desired is already on the selection list and you use
IModelDocExtension::SelectByID2
to select it again, then IModelDoc2::SelectMidpoint leaves both the edge and the point on the selection list.
This method does not support 3D sketches.

## Examples

- Select the Midpoint of an Edge (VBA) (Put_a_Midpoint_on_an_Edge_Example_VB.htm)
- Select the Midpoint of an Edge (VB.NET) (Put_a_Midpoint_on_an_Edge_Example_VBNET.htm)
- Select the Midpoint of an Edge (C#) (Put_a_Midpoint_on_an_Edge_Example_CSharp.htm)