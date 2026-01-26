---
type: method
interface: IWeldmentTrimExtendFeatureData
member: ISetBodiesToBeTrimmed
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of bodies to trim
  -
    name: BodiesIn
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of bodies to trim (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IWeldmentTrimExtendFeatureData.BodiesToBeTrimmed
  - IWeldmentTrimExtendFeatureData.GetBodiesToBeTrimmedCount
  - IWeldmentTrimExtendFeatureData.IGetBodiesToBeTrimmed
keywords:
  - isetbodiestobetrimmed
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
  - void
---

# IWeldmentTrimExtendFeatureData.ISetBodiesToBeTrimmed

Sets the bodies to trim.

## Signature

```csharp
void ISetBodiesToBeTrimmed( 
   System.Int32
Count
,
   ref Body2
BodiesIn
)
```
## Parameters

- `Count` (System.Int32): Number of bodies to trim
- `BodiesIn` (Body2): in-process, unmanaged C++: Pointer to an array of bodies to trim (see Remarks ) VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Only end-trim corner types (swEndConditionTrim) can have multiple bodies to trim. Use
IWeldmentTrimExtendFeatureData::CornerType
to determine the type of corner.
See
Accessing Selections that Define Features
for additional details.

## See Also

- `IWeldmentTrimExtendFeatureData.BodiesToBeTrimmed`
- `IWeldmentTrimExtendFeatureData.GetBodiesToBeTrimmedCount`
- `IWeldmentTrimExtendFeatureData.IGetBodiesToBeTrimmed`