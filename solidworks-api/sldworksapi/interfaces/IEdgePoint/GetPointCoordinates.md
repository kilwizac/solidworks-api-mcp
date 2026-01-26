---
type: method
interface: IEdgePoint
member: GetPointCoordinates
returns: void
parameters:
  -
    name: X
    type: System.Double
    description: x coordinate for this midpoint or endpoint
  -
    name: Y
    type: System.Double
    description: y coordinate for this midpoint or endpoint
  -
    name: Z
    type: System.Double
    description: z coordinate for this midpoint or endpoint
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - geometry
related: []
keywords:
  - getpointcoordinates
  - iedgepoint
  - edge
  - point
  - coordinates
  - double
  - void
  - create
  - reference
  - curve
  - vb
  - net
  - vba
---

# IEdgePoint.GetPointCoordinates

Gets the coordinates for this midpoint on an edge or an endpoint or midpoint on a reference curve.

## Signature

```csharp
void GetPointCoordinates( 
   out System.Double
X
,
   out System.Double
Y
,
   out System.Double
Z
)
```
## Parameters

- `X` (System.Double): x coordinate for this midpoint or endpoint
- `Y` (System.Double): y coordinate for this midpoint or endpoint
- `Z` (System.Double): z coordinate for this midpoint or endpoint

## Return Value

Unknown.

## Examples

- Create Reference Curve (C#) (Create_Reference_Curve_Example_CSharp.htm)
- Create Reference Curve (VB.NET) (Create_Reference_Curve_Example_VBNET.htm)
- Create Reference Curve (VBA) (Create_Reference_Curve_Example_VB.htm)