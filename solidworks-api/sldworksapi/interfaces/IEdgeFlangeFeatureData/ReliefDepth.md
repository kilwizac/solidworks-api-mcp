---
type: property
interface: IEdgeFlangeFeatureData
member: ReliefDepth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.ReliefRatio
  - IEdgeFlangeFeatureData.ReliefTearType
  - IEdgeFlangeFeatureData.ReliefWidth
keywords:
  - reliefdepth
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - relief
  - depth
  - double
readonly: null
---

# IEdgeFlangeFeatureData.ReliefDepth

Gets or sets the relief depth of the edge flange.

## Signature

```csharp
System.Double ReliefDepth {get; set;}
```
## Parameters

None.

## Return Value

Depth of relief; default value is 0.0003683 m

## Remarks

This property is valid only if:
IEdgeFlangeFeatureData::UseDefaultBendRelief
is set to false,
- and -
IEdgeFlangeFeatureData::UseReliefRatio
is true.
- and -
IEdgeFlangeFeatureData::AutoReliefType
is set to
swSheetMetalReliefTypes_e
.:
swSheetMetalReliefObround
- or -
swSheetMetalReliefRectangle.

## See Also

- `IEdgeFlangeFeatureData.ReliefRatio`
- `IEdgeFlangeFeatureData.ReliefTearType`
- `IEdgeFlangeFeatureData.ReliefWidth`