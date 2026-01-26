---
type: method
interface: ISketchSegment
member: CreateWireBody
returns: Body2
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - geometry
  - sketches
related: []
keywords:
  - wire
  - bodies
  - createwirebody
  - isketchsegment
  - sketch
  - segment
  - create
  - body
  - body2
---

# ISketchSegment.CreateWireBody

Creates a wire body using the selected sketch segment.

## Signature

```csharp
Body2 CreateWireBody()
```
## Parameters

None.

## Return Value

Body2

## Remarks

Wire bodies contain wires, loops, coedges, edges, and vertices. Wires typically represent profiles, construction lines, and center lines of swept shapes. Wires can also represent wire frames that, when surfaced, form shells.