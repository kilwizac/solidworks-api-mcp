---
type: method
interface: IWeldmentTrimExtendFeatureData
member: IGetBodiesToBeTrimmed
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies to trim
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWeldmentTrimExtendFeatureData.BodiesToBeTrimmed
  - IWeldmentTrimExtendFeatureData.ISetBodiesToBeTrimmed
keywords:
  - igetbodiestobetrimmed
  - iweldmenttrimextendfeaturedata
  - weldment
  - trim
  - extend
  - feature
  - data
  - bodies
  - trimmed
  - count
  - int32
  - body2
---

# IWeldmentTrimExtendFeatureData.IGetBodiesToBeTrimmed

Gets the bodies to trim.

## Signature

```csharp
Body2 IGetBodiesToBeTrimmed( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of bodies to trim

## Return Value

in-process, unmanaged C++: Pointer to an array of bodies to trim (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Only end-trim corner types (swEndConditionTrim) can have multiple bodies to trim. Use
IWeldmentTrimExtendFeatureData::CornerType
to determine the type of corner.
Before calling this method, call
IWeldmentTrimExtendFeatureData::GetBodiesToBeTrimmedCount
to get Count.

## See Also

- `IWeldmentTrimExtendFeatureData.BodiesToBeTrimmed`
- `IWeldmentTrimExtendFeatureData.ISetBodiesToBeTrimmed`