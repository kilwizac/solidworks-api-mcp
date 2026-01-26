---
type: method
interface: ICurve
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
  - IEdge.CreateWireBody
  - IImportedCurveFeatureData.SetBody
  - IModeler.CreateWireBody
  - IModeler.ICreateWireBody
keywords:
  - wire
  - bodies
  - see
  - also
  - ibody2
  - createwirebody
  - icurve
  - curve
  - create
  - body
  - body2
---

# ICurve.CreateWireBody

Creates a wire body from this curve.

## Signature

```csharp
Body2 CreateWireBody()
```
## Parameters

None.

## Return Value

Pointer to the newly body

## Remarks

Wire bodies contain wires, loops, coedges, edges, and vertices. Wires typically represent profiles, construction lines, and center lines of swept shapes. Wires can also represent wire frames that, when surfaced, form shells.

## See Also

- `IEdge.CreateWireBody`
- `IImportedCurveFeatureData.SetBody`
- `IModeler.CreateWireBody`
- `IModeler.ICreateWireBody`