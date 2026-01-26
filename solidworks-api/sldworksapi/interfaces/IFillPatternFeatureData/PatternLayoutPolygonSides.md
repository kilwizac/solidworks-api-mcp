---
type: property
interface: IFillPatternFeatureData
member: PatternLayoutPolygonSides
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - patternlayoutpolygonsides
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - layout
  - polygon
  - sides
  - int32
readonly: null
---

# IFillPatternFeatureData.PatternLayoutPolygonSides

Gets or sets the number of sides in the polygonal layout of this fill pattern feature.

## Signature

```csharp
System.Int32 PatternLayoutPolygonSides {get; set;}
```
## Parameters

None.

## Return Value

Number of sides in the polygonal layout of this fill pattern

## Remarks

This property is valid only if
IFillPatternFeatureData::PatternLayoutType
=
swPatternLayoutType_e
.swPatternLayoutPolygon.

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)