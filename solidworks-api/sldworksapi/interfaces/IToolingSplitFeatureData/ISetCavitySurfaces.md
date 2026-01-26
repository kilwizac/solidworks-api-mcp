---
type: method
interface: IToolingSplitFeatureData
member: ISetCavitySurfaces
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of cavity surface bodies
  -
    name: BodyArr
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of cavity surface bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IToolingSplitFeatureData.CavitySurfaces
  - IToolingSplitFeatureData.GetCavitySurfacesCount
  - IToolingSplitFeatureData.IGetCavitySurfaces
keywords:
  - isetcavitysurfaces
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - cavity
  - surfaces
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# IToolingSplitFeatureData.ISetCavitySurfaces

Sets the cavity surface bodies for this tooling split feature.

## Signature

```csharp
void ISetCavitySurfaces( 
   System.Int32
Count
,
   ref Body2
BodyArr
)
```
## Parameters

- `Count` (System.Int32): Number of cavity surface bodies
- `BodyArr` (Body2): in-process, unmanaged C++: Pointer to an array of cavity surface bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IToolingSplitFeatureData.CavitySurfaces`
- `IToolingSplitFeatureData.GetCavitySurfacesCount`
- `IToolingSplitFeatureData.IGetCavitySurfaces`