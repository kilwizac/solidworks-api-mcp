---
type: method
interface: IToolingSplitFeatureData
member: IGetPartingSurfaces
returns: Body2
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of parting surface bodies
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IToolingSplitFeatureData.ISetPartingSurfaces
  - IToolingSplitFeatureData.PartingSurfaces
keywords:
  - igetpartingsurfaces
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - parting
  - surfaces
  - count
  - int32
  - body2
---

# IToolingSplitFeatureData.IGetPartingSurfaces

Gets the parting surface bodies in this tooling split feature.

## Signature

```csharp
Body2 IGetPartingSurfaces( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of parting surface bodies

## Return Value

in-process, unmanaged C++: Pointer to an array of parting surface bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Call
IToolingSplitFeatureData::GetPartingSurfacesCount
before calling this method to get Count.

## See Also

- `IToolingSplitFeatureData.ISetPartingSurfaces`
- `IToolingSplitFeatureData.PartingSurfaces`