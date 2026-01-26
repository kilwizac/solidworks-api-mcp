---
type: property
interface: IEdgeFlangeFeatureData
member: ReliefWidth
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.PositionType
  - IEdgeFlangeFeatureData.ReliefDepth
  - IEdgeFlangeFeatureData.ReliefRatio
  - IEdgeFlangeFeatureData.ReliefTearType
keywords:
  - reliefwidth
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - relief
  - width
  - double
readonly: null
---

# IEdgeFlangeFeatureData.ReliefWidth

Gets or sets the width of the relief for this edge flange.

## Signature

```csharp
System.Double ReliefWidth {get; set;}
```
## Parameters

None.

## Return Value

Relief width; default value is 0.0003683 m

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

- `IEdgeFlangeFeatureData.PositionType`
- `IEdgeFlangeFeatureData.ReliefDepth`
- `IEdgeFlangeFeatureData.ReliefRatio`
- `IEdgeFlangeFeatureData.ReliefTearType`