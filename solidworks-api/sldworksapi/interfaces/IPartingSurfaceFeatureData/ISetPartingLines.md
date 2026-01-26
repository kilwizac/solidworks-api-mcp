---
type: method
interface: IPartingSurfaceFeatureData
member: ISetPartingLines
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of parting lines
  -
    name: EntIn
    type: System.Object
    description: in-process, unmanaged C++: Pointer to an array of edges or parting-line features used as parting lines VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingSurfaceFeatureData.GetPartingLinesCount
  - IPartingSurfaceFeatureData.GetPartingLinesType
  - IPartingSurfaceFeatureData.IGetPartingLines
  - IPartingSurfaceFeatureData.PartingLines
keywords:
  - isetpartinglines
  - ipartingsurfacefeaturedata
  - parting
  - surface
  - feature
  - data
  - lines
  - count
  - int32
  - ent
  - object
  - void
---

# IPartingSurfaceFeatureData.ISetPartingLines

Sets the parting lines for this parting surface feature.

## Signature

```csharp
void ISetPartingLines( 
   System.Int32
Count
,
   ref System.Object
EntIn
)
```
## Parameters

- `Count` (System.Int32): Number of parting lines
- `EntIn` (System.Object): in-process, unmanaged C++: Pointer to an array of edges or parting-line features used as parting lines VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IPartingSurfaceFeatureData.GetPartingLinesCount`
- `IPartingSurfaceFeatureData.GetPartingLinesType`
- `IPartingSurfaceFeatureData.IGetPartingLines`
- `IPartingSurfaceFeatureData.PartingLines`