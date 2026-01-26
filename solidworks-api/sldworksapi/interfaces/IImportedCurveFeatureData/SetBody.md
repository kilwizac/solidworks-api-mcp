---
type: method
interface: IImportedCurveFeatureData
member: SetBody
returns: void
parameters:
  -
    name: DispBody
    type: Body2
    description: Wire body
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - file-io
  - geometry
related: []
keywords:
  - wire
  - bodies
  - see
  - also
  - ibody2
  - setbody
  - iimportedcurvefeaturedata
  - imported
  - curve
  - feature
  - data
  - body
  - disp
  - body2
  - void
---

# IImportedCurveFeatureData.SetBody

Modifies the wire body for this imported curve feature.

## Signature

```csharp
void SetBody( 
   Body2
DispBody
)
```
## Parameters

- `DispBody` (Body2): Wire body

## Return Value

Unknown.

## Remarks

Wire bodies contain wires, loops, coedges, edges, and vertices. Wires typically represent profiles, construction lines, and center lines of swept shapes. Wires can also represent wire frames that, when surfaced, form shells.
The following methods create wire bodies:
IEdge::CreateWireBody
ICurve::CreateWireBody
IModeler::CreateWireBody
See
Accessing Selections that Define Features
for additional details on using this method.