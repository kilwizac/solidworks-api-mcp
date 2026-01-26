---
type: property
interface: IFillPatternFeatureData
member: StaggerAngle
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - staggerangle
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - stagger
  - angle
  - double
readonly: null
---

# IFillPatternFeatureData.StaggerAngle

Gets or sets the angle by which to stagger the rows of pattern instances in the perforation layout of this fill pattern feature.

## Signature

```csharp
System.Double StaggerAngle {get; set;}
```
## Parameters

None.

## Return Value

Stagger angle for perforation layout

## Remarks

This property is valid only if
IFillPatternFeatureData::PatternLayoutType
=
swPatternLayoutType_e
.swPatternLayoutPerforation

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)