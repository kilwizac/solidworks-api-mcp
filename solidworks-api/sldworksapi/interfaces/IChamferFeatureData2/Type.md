---
type: property
interface: IChamferFeatureData2
member: Type
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - type
  - ichamferfeaturedata2
  - chamfer
  - feature
  - data2
  - int32
  - distances
  - vb
  - net
  - vba
readonly: null
---

# IChamferFeatureData2.Type

Gets or sets the type of chamfer feature.

## Signature

```csharp
System.Int32 Type {get; set;}
```
## Parameters

None.

## Return Value

Type of chamfer as defined in swChamferType_e

## Remarks

Both swChamferType_e.swChamferAngleDistance and swChamferType_e.swChamferDistanceDistance are edge chamfers. This means that all measurements are from edges. An angle-distance chamfer requires an angle and a distance; a distance-distance chamfer requires two distances, one for each side of the chamfered edge.
A swChamferType_e.swChamferVertex chamfer only works on a vertex with three adjacent edges of the same convexity. A vertex chamfer requires three distances along three adjacent edges. For non-linear edges, this value is an arc length value; it is not a chordal value. See
IVertex::EnumEdgesOriented
to determine the edge order used by this method.
See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Get Chamfer Distances (VB.NET) (Get_Chamfer_Distances_Example_VBNET.htm)
- Get Chamfer Distances (C#) (Get_Chamfer_Distances_Example_CSharp.htm)
- Get Chamfer Distances (VBA) (Get_Chamfer_Distances_Example_VB.htm)