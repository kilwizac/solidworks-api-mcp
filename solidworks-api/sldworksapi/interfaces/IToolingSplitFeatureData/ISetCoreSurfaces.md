---
type: method
interface: IToolingSplitFeatureData
member: ISetCoreSurfaces
returns: void
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of core surface bodies
  -
    name: BodyArr
    type: Body2
    description: in-process, unmanaged C++: Pointer to an array of core surface bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IToolingSplitFeatureData.CoreSurfaces
  - IToolingSplitFeatureData.GetCoreSurfacesCount
  - IToolingSplitFeatureData.IGetCoreSurfaces
keywords:
  - isetcoresurfaces
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - core
  - surfaces
  - count
  - int32
  - body
  - arr
  - body2
  - void
---

# IToolingSplitFeatureData.ISetCoreSurfaces

Sets the core surface bodies for this tooling split feature.

## Signature

```csharp
void ISetCoreSurfaces( 
   System.Int32
Count
,
   ref Body2
BodyArr
)
```
## Parameters

- `Count` (System.Int32): Number of core surface bodies
- `BodyArr` (Body2): in-process, unmanaged C++: Pointer to an array of core surface bodies VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Return Value

Unknown.

## Remarks

See
Accessing Selections that Define Features
for additional details.

## See Also

- `IToolingSplitFeatureData.CoreSurfaces`
- `IToolingSplitFeatureData.GetCoreSurfacesCount`
- `IToolingSplitFeatureData.IGetCoreSurfaces`