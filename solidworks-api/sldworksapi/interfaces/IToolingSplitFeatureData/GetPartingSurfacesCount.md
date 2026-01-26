---
type: method
interface: IToolingSplitFeatureData
member: GetPartingSurfacesCount
returns: System.Int32
parameters: []
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
  - getpartingsurfacescount
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - parting
  - surfaces
  - count
  - int32
---

# IToolingSplitFeatureData.GetPartingSurfacesCount

Gets the number of parting surface bodies in this tooling split feature.

## Signature

```csharp
System.Int32 GetPartingSurfacesCount()
```
## Parameters

None.

## Return Value

Number of parting surface bodies

## Remarks

Call this method before calling
IToolingSplitFeatureData::IGetPartingSurfaces
to get the size of the array for that method.

## Examples

- IToolingSplitFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IToolingSplitFeatureData)

## See Also

- `IToolingSplitFeatureData.ISetPartingSurfaces`
- `IToolingSplitFeatureData.PartingSurfaces`