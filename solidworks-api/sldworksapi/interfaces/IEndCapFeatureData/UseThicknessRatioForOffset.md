---
type: property
interface: IEndCapFeatureData
member: UseThicknessRatioForOffset
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IEndCapFeatureData.Thickness
keywords:
  - usethicknessratioforoffset
  - iendcapfeaturedata
  - end
  - cap
  - feature
  - data
  - use
  - thickness
  - ratio
  - offset
  - boolean
readonly: null
---

# IEndCapFeatureData.UseThicknessRatioForOffset

Gets or sets whether a ratio of the thickness is used to specify the offset for this end-cap feature.

## Signature

```csharp
System.Boolean UseThicknessRatioForOffset {get; set;}
```
## Parameters

None.

## Return Value

True to use a ratio of the thickness, false to not

## Remarks

If this property is set to...
Then you can use...
True
IEndCapFeatureData::ThicknessRatioForOffset
to set the offset distance of the end cap as a ratio of the thickness of the structural member being capped.
False
IEndCapFeatureData::OffsetDistance
to set the offset distance for this end-cap feature.

## Examples

- IEndCapFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IEndCapFeatureData)

## See Also

- `IEndCapFeatureData.Thickness`