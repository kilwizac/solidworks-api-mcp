---
type: method
interface: IToolingSplitFeatureData
member: IGetCavitySurfaces
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of cavity surface bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IToolingSplitFeatureData.CavitySurfaces
  - IToolingSplitFeatureData.ISetCavitySurfaces
keywords:
  - igetcavitysurfaces
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - cavity
  - surfaces
  - count
  - int32
  - body2
---

# IToolingSplitFeatureData.IGetCavitySurfaces

Gets the cavity surface bodies in this tooling split feature.

## Signature

```csharp
Body2 IGetCavitySurfaces( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of cavity surface bodies

## Return Value

in-process, unmanaged C++: Pointer to an array of cavity surface bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IToolingSplitFeatureData::GetCavitySurfacesCount
before calling this method to get Count.

## See Also

- `IToolingSplitFeatureData.CavitySurfaces`
- `IToolingSplitFeatureData.ISetCavitySurfaces`