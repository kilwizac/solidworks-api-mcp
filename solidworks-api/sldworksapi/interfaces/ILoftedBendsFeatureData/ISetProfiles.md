---
type: method
interface: ILoftedBendsFeatureData
member: ISetProfiles
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of profiles
  -
    name: PDisp
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of profiles of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILoftedBendsFeatureData.GetProfileCount
  - ILoftedBendsFeatureData.IGetProfiles
  - ILoftedBendsFeatureData.Profiles
keywords:
  - isetprofiles
  - iloftedbendsfeaturedata
  - lofted
  - bends
  - feature
  - data
  - profiles
  - count
  - int32
  - disp
  - object
  - void
---

# ILoftedBendsFeatureData.ISetProfiles

Sets the profiles for this lofted bends feature.

## Signature

```csharp
void ISetProfiles( 
   System.Int32
Count
,
   ref System.Object
PDisp
)
```
## Parameters

- `Count` (System.Int32): Number of profiles
- `PDisp` (System.Object): in-process, unmanaged C++: Pointer to an array of profiles of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILoftedBendsFeatureData.GetProfileCount`
- `ILoftedBendsFeatureData.IGetProfiles`
- `ILoftedBendsFeatureData.Profiles`