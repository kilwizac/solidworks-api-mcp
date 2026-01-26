---
type: property
interface: IFillPatternFeatureData
member: PatternLayoutType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related: []
keywords:
  - patternlayouttype
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - layout
  - type
  - int32
readonly: null
---

# IFillPatternFeatureData.PatternLayoutType

Gets or sets the layout of the pattern instances within the fill boundary of this fill pattern feature.

## Signature

```csharp
System.Int32 PatternLayoutType {get; set;}
```
## Parameters

None.

## Return Value

Fill pattern layout type as defined in swPatternLayoutType_e

## Remarks

After specifying this property, specify the following:
IFillPatternFeatureData::Margins
IFillPatternFeatureData::PatternDirection
IFillPatternFeatureData::GeometryPattern
IFillPatternFeatureData::PropagateVisualProperty
IFillPatternFeatureData::FeaturesToPatternType
Specify other properties as required by the settings above.

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)