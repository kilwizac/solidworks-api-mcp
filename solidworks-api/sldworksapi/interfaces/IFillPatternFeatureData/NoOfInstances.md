---
type: property
interface: IFillPatternFeatureData
member: NoOfInstances
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - noofinstances
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - no
  - instances
  - int32
readonly: null
---

# IFillPatternFeatureData.NoOfInstances

Gets or sets the number of instances per loop or side of the layout of this fill pattern feature.

## Signature

```csharp
System.Int32 NoOfInstances {get; set;}
```
## Parameters

None.

## Return Value

Number of instances per loop or side of the pattern layout

## Remarks

This property is valid only if both are true:
IFillPatternFeatureData::LayoutSpacingType
=
swPatternLayoutSpacingType_e
.swPatternLayoutInstances
And:
IFillPatternFeatureData::PatternLayoutType
is set to one of the following:
swPatternLayoutType_e
.swPatternLayoutCircular
swPatternLayoutType_e.swPatternLayoutPolygon
swPatternLayoutType_e.swPatternLayoutSquare

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)