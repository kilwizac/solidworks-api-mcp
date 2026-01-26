---
type: property
interface: IWeldmentTrimExtendFeatureData
member: CornerType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWeldmentTrimExtendFeatureData.BodiesToBeTrimmed
  - IWeldmentTrimExtendFeatureData.GetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.IGetBodiesToBeTrimmed
  - IWeldmentTrimExtendFeatureData.IGetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.ISetBodiesToBeTrimmed
  - IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary
  - IWeldmentTrimExtendFeatureData.SetTrimmingBoundary
keywords:
  - cornertype
  - iweldmenttrimextendfeaturedata
  - weldment
  - trim
  - extend
  - feature
  - data
  - corner
  - type
  - int32
readonly: null
---

# IWeldmentTrimExtendFeatureData.CornerType

Gets or sets the corner type.

## Signature

```csharp
System.Int32 CornerType {get; set;}
```
## Parameters

None.

## Return Value

Type of corner as defined in swSolidworksWeldmentEndCondOptions_e (see Remarks )

## Remarks

You must set the bodies to trim and the trimming boundary when changing the corner type.
Valid values for type are:
swEndConditionButt1
swEndConditionButt2
swEndConditionMiter
swEndConditionTrim
These values are not valid for type:
swEndConditionNone
swEndConditionUseDefault
See
Accessing Selections that Define Features
for additional details.

## Examples

- IWeldmentTrimExtendFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IWeldmentTrimExtendFeatureData)

## See Also

- `IWeldmentTrimExtendFeatureData.BodiesToBeTrimmed`
- `IWeldmentTrimExtendFeatureData.GetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.IGetBodiesToBeTrimmed`
- `IWeldmentTrimExtendFeatureData.IGetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.ISetBodiesToBeTrimmed`
- `IWeldmentTrimExtendFeatureData.ISetTrimmingBoundary`
- `IWeldmentTrimExtendFeatureData.SetTrimmingBoundary`