---
type: method
interface: IEdge
member: CreateWireBody
returns: Body2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related:
  - ICurve.CreateWireBody
  - IImportedCurveFeatureData.SetBody
  - IModeler.CreateWireBody
keywords:
  - wire
  - bodies
  - see
  - also
  - ibody2
  - createwirebody
  - iedge
  - edge
  - create
  - body
  - body2
---

# IEdge.CreateWireBody

Creates a wire body from this edge.

## Signature

```csharp
Body2 CreateWireBody()
```
## Parameters

None.

## Return Value

Pointer to the newly created IBody2 object

## Remarks

Wire bodies contain wires, loops, coedges, edges, and vertices. Wires typically represent profiles, construction lines, and center lines of swept shapes. Wires can also represent wire frames that, when surfaced, form shells.

## See Also

- `ICurve.CreateWireBody`
- `IImportedCurveFeatureData.SetBody`
- `IModeler.CreateWireBody`