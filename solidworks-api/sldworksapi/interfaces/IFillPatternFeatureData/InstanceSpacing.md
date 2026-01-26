---
type: property
interface: IFillPatternFeatureData
member: InstanceSpacing
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - instancespacing
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - instance
  - spacing
  - double
readonly: null
---

# IFillPatternFeatureData.InstanceSpacing

Gets or sets the distance between the pattern instance centers of this fill pattern feature.

## Signature

```csharp
System.Double InstanceSpacing {get; set;}
```
## Parameters

None.

## Return Value

Distance between pattern instance centers

## Remarks

This property is....
If...
Always valid
IFillPatternFeatureData::PatternLayoutType
=
swPatternLayoutType_e
.swPatternLayoutPerforation
Only valid
Both are true:
IFillPatternFeatureData::LayoutSpacingType
=
swPatternLayoutSpacingType_e
.swPatternLayoutTargetSpacing
And:
IFillPatternFeatureData::PatternLayoutType is set to one of the following:
swPatternLayoutType_e.swPatternLayoutCircle
swPatternLayoutType_e.swPatternLayoutSquare
swPatternLayoutType_e.swPatternLayoutPolygon

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)