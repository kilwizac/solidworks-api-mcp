---
type: property
interface: IEdgeFlangeFeatureData
member: UseReliefRatio
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IEdgeFlangeFeatureData.ReliefDepth
  - IEdgeFlangeFeatureData.ReliefRatio
  - IEdgeFlangeFeatureData.ReliefTearType
  - IEdgeFlangeFeatureData.ReliefWidth
keywords:
  - usereliefratio
  - iedgeflangefeaturedata
  - edge
  - flange
  - feature
  - data
  - use
  - relief
  - ratio
  - boolean
readonly: null
---

# IEdgeFlangeFeatureData.UseReliefRatio

Gets or sets whether to use the relief ratio for this edge flange.

## Signature

```csharp
System.Boolean UseReliefRatio {get; set;}
```
## Parameters

None.

## Return Value

True uses the relief ratio (default), false does not

## Remarks

This property is valid only if
IEdgeFlangeFeatureData::UseDefaultBendRelief
is false
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
- `IEdgeFlangeFeatureData.ReliefRatio`
- `IEdgeFlangeFeatureData.ReliefTearType`
- `IEdgeFlangeFeatureData.ReliefWidth`