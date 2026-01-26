---
type: method
interface: IReplaceFaceFeatureData
member: IGetReplacementSurfaces
returns: Feature
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of replacement surfaces
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - geometry
related:
  - IReplaceFaceFeatureData.ISetReplacementSurfaces
  - IReplaceFaceFeatureData.ReplacementSurfaces
keywords:
  - igetreplacementsurfaces
  - ireplacefacefeaturedata
  - replace
  - face
  - feature
  - data
  - replacement
  - surfaces
  - count
  - int32
---

# IReplaceFaceFeatureData.IGetReplacementSurfaces

Gets the replacement surfaces for this feature.

## Signature

```csharp
Feature IGetReplacementSurfaces( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of replacement surfaces

## Return Value

in-process, unmanaged C++: Pointer to an array of replacement surfaces of size Count VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IReplaceFaceFeatureData::GetReplacementSurfaces
before calling this method to get the size of Count.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IReplaceFaceFeatureData.ISetReplacementSurfaces`
- `IReplaceFaceFeatureData.ReplacementSurfaces`