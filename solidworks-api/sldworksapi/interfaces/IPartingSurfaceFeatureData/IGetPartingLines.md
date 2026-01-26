---
type: method
interface: IPartingSurfaceFeatureData
member: IGetPartingLines
returns: System.Object
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of parting lines
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IPartingSurfaceFeatureData.GetPartingLinesType
  - IPartingSurfaceFeatureData.ISetPartingLines
  - IPartingSurfaceFeatureData.PartingLines
keywords:
  - igetpartinglines
  - ipartingsurfacefeaturedata
  - parting
  - surface
  - feature
  - data
  - lines
  - count
  - int32
  - object
---

# IPartingSurfaceFeatureData.IGetPartingLines

Gets the parting lines for this parting surface feature.

## Signature

```csharp
System.Object IGetPartingLines( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of parting lines

## Return Value

in-process, unmanaged C++: Pointer to an array of edges or parting line features used as parting lines VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IPartingSurfaceFeatureData::GetPartingLinesCount
before calling this method to get the number of parting lines for this parting surface feature.
See
Accessing Selections that Define Features
for additional details on using this method.

## See Also

- `IPartingSurfaceFeatureData.GetPartingLinesType`
- `IPartingSurfaceFeatureData.ISetPartingLines`
- `IPartingSurfaceFeatureData.PartingLines`