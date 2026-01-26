---
type: method
interface: ILoftedBendsFeatureData
member: IGetProfiles
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of profiles
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftedBendsFeatureData.ISetProfiles
  - ILoftedBendsFeatureData.Profiles
keywords:
  - igetprofiles
  - iloftedbendsfeaturedata
  - lofted
  - bends
  - feature
  - data
  - profiles
  - count
  - int32
  - object
---

# ILoftedBendsFeatureData.IGetProfiles

Gets the profiles for this lofted bends feature.

## Signature

```csharp
System.Object IGetProfiles( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of profiles

## Return Value

in-process, unmanaged C++: Pointer to an array profiles of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
ILoftedBendsFeatureData::GetProfileCount
before calling this method to get the size for Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILoftedBendsFeatureData.ISetProfiles`
- `ILoftedBendsFeatureData.Profiles`