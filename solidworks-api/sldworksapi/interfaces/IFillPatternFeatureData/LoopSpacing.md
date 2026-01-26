---
type: property
interface: IFillPatternFeatureData
member: LoopSpacing
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - loopspacing
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - loop
  - spacing
  - double
readonly: null
---

# IFillPatternFeatureData.LoopSpacing

Gets or sets the distance between loops of pattern instances in this fill pattern feature.

## Signature

```csharp
System.Double LoopSpacing {get; set;}
```
## Parameters

None.

## Return Value

Distance between loops of pattern instances

## Remarks

All fill patterns except those with perforated layouts are created by positioning a pattern seed instance within the fill boundary and copying the pattern in concentric loops about the seed instance. This property sets the spacing between the centers of instances in adjacent pattern loops.
This property is valid only if
IFillPatternFeatureData::PatternLayoutType
is set to one of the following:
swPatternLayoutType_e
.swPatternLayoutCircular
swPatternLayoutType_e.swPatternLayoutPolygon
swPatternLayoutType_e.swPatternLayoutSquare

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)