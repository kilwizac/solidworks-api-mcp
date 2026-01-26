---
type: method
interface: IToolingSplitFeatureData
member: ISetPartingSurfaces
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of parting surface bodies
  -
    name: BodyArr
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of parting surface bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
  - parts
related:
  - IToolingSplitFeatureData.GetPartingSurfacesCount
  - IToolingSplitFeatureData.IGetPartingSurfaces
  - IToolingSplitFeatureData.PartingSurfaces
keywords:
  - isetpartingsurfaces
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - parting
  - surfaces
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# IToolingSplitFeatureData.ISetPartingSurfaces

Sets the parting surface bodies for this tooling split feature.

## Signature

```csharp
void ISetPartingSurfaces( 
   System.Int32
Count
,
   ref Body2
BodyArr
)
```
## Parameters

- `Count` (System.Int32): Number of parting surface bodies
- `BodyArr` (Body2): in-process, unmanaged C++: Pointer to an array of parting surface bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IToolingSplitFeatureData.GetPartingSurfacesCount`
- `IToolingSplitFeatureData.IGetPartingSurfaces`
- `IToolingSplitFeatureData.PartingSurfaces`