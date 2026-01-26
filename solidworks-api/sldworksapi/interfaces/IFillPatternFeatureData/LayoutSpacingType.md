---
type: property
interface: IFillPatternFeatureData
member: LayoutSpacingType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFillPatternFeatureData.PatternLayoutType
keywords:
  - layoutspacingtype
  - ifillpatternfeaturedata
  - fill
  - pattern
  - feature
  - data
  - layout
  - spacing
  - type
  - int32
readonly: null
---

# IFillPatternFeatureData.LayoutSpacingType

Gets or sets the type of spacing between the instances in the layout of this fill pattern feature.

## Signature

```csharp
System.Int32 LayoutSpacingType {get; set;}
```
## Parameters

None.

## Return Value

Pattern layout spacing type as defined in swPatternLayoutSpacingType_e

## Remarks

If this property is set to...
Then also set...
swPatternLayoutSpacingType_e.swPatternLayoutInstances
IFillPatternFeatureData::NoOfInstances
;
IFillPatternFeatureData::InstanceSpacing
is not valid
swPatternLayoutSpacingType_e.swPatternLayoutTargetSpacing
IFillPatternFeatureData::InstanceSpacing; IFillPatternFeatureData::NoOfInstances is not valid

## Examples

- IFillPatternFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IFillPatternFeatureData)

## See Also

- `IFillPatternFeatureData.PatternLayoutType`