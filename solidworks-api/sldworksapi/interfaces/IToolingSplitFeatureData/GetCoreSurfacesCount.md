---
type: method
interface: IToolingSplitFeatureData
member: GetCoreSurfacesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IToolingSplitFeatureData.CoreSurfaces
  - IToolingSplitFeatureData.ISetCoreSurfaces
keywords:
  - getcoresurfacescount
  - itoolingsplitfeaturedata
  - tooling
  - split
  - feature
  - data
  - core
  - surfaces
  - count
  - int32
---

# IToolingSplitFeatureData.GetCoreSurfacesCount

Gets the number of core surface bodies in this tooling split feature.

## Signature

```csharp
System.Int32 GetCoreSurfacesCount()
```
## Parameters

None.

## Return Value

Number of core surface bodies

## Remarks

Call this method before calling
IToolingSplitFeatureData::IGetCoreSurfaces
to get the size of the array for that method.

## Examples

- IToolingSplitFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IToolingSplitFeatureData)

## See Also

- `IToolingSplitFeatureData.CoreSurfaces`
- `IToolingSplitFeatureData.ISetCoreSurfaces`