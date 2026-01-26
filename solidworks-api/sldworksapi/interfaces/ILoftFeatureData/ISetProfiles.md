---
type: method
interface: ILoftFeatureData
member: ISetProfiles
returns: void
parameters:
  -
    name: Count
    type: System.Int16
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
  - ILoftFeatureData.GetProfileCount
  - ILoftFeatureData.IGetProfiles
  - ILoftFeatureData.Profiles
keywords:
  - isetprofiles
  - iloftfeaturedata
  - loft
  - feature
  - data
  - profiles
  - count
  - int16
  - disp
  - object
  - void
---

# ILoftFeatureData.ISetProfiles

Sets the profiles for this loft feature.

## Signature

```csharp
void ISetProfiles( 
   System.Int16
Count
,
   ref System.Object
PDisp
)
```
## Parameters

- `Count` (System.Int16): Number of profiles
- `PDisp` (System.Object): in-process, unmanaged C++: Pointer to an array of profiles of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

Each profile is an
IFeature
object that contains a
sketch
.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `ILoftFeatureData.GetProfileCount`
- `ILoftFeatureData.IGetProfiles`
- `ILoftFeatureData.Profiles`