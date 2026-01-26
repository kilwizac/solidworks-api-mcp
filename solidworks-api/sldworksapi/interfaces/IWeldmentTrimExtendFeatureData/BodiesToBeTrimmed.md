---
type: property
interface: IWeldmentTrimExtendFeatureData
member: BodiesToBeTrimmed
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWeldmentTrimExtendFeatureData.GetBodiesToBeTrimmedCount
  - IWeldmentTrimExtendFeatureData.IGetBodiesToBeTrimmed
  - IWeldmentTrimExtendFeatureData.ISetBodiesToBeTrimmed
keywords:
  - bodiestobetrimmed
  - iweldmenttrimextendfeaturedata
  - weldment
  - trim
  - extend
  - feature
  - data
  - bodies
  - trimmed
  - object
readonly: null
---

# IWeldmentTrimExtendFeatureData.BodiesToBeTrimmed

Gets or sets the bodies to trim.

## Signature

```csharp
System.Object BodiesToBeTrimmed {get; set;}
```
## Parameters

None.

## Return Value

Bodies to trim (see Remarks )

## Remarks

Only end-trim corner types (swEndConditionTrim) can have multiple bodies to trim. Use
IWeldmentTrimExtendFeatureData::CornerType
to determine the type of corner.
You must set the bodies to trim and set the
trimming boundary
if changing a corner type.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IWeldmentTrimExtendFeatureData.GetBodiesToBeTrimmedCount`
- `IWeldmentTrimExtendFeatureData.IGetBodiesToBeTrimmed`
- `IWeldmentTrimExtendFeatureData.ISetBodiesToBeTrimmed`