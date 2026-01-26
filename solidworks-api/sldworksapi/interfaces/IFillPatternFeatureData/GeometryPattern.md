---
type: property
interface: IFillPatternFeatureData
member: GeometryPattern
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - geometrypattern
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - geometry
  - boolean
readonly: null
---

# IFillPatternFeatureData.GeometryPattern

Gets or sets whether to create this fill pattern using an exact copy of the seed feature.

## Signature

```csharp
System.Boolean GeometryPattern {get; set;}
```
## Parameters

None.

## Return Value

True to create the pattern using an exact copy of the seed feature, false to solve individual instances of the seed feature

## Remarks

This property is valid only if
IFillPatternFeatureData::PatternElement
is
swPatternElementSelection_e
.swFeatureFaces.

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)