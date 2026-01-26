---
type: property
interface: IEdgeFlangeFeatureData
member: ReliefRatio
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.ReliefDepth
  - IEdgeFlangeFeatureData.ReliefTearType
  - IEdgeFlangeFeatureData.ReliefWidth
keywords:
  - reliefratio
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - relief
  - ratio
  - double
readonly: null
---

# IEdgeFlangeFeatureData.ReliefRatio

Gets or sets the relief ratio for this edge flange.

## Signature

```csharp
System.Double ReliefRatio {get; set;}
```
## Parameters

None.

## Return Value

Relief ratio; default value is 0.5

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

## Examples

- IEdgeFlangeFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEdgeFlangeFeatureData)

## See Also

- `IEdgeFlangeFeatureData.ReliefDepth`
- `IEdgeFlangeFeatureData.ReliefTearType`
- `IEdgeFlangeFeatureData.ReliefWidth`