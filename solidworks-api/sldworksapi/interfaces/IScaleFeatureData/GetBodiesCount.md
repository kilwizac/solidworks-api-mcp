---
type: method
interface: IScaleFeatureData
member: GetBodiesCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IScaleFeatureData.Bodies
  - IScaleFeatureData.IGetBodies
  - IScaleFeatureData.ISetBodies
keywords:
  - getbodiescount
  - iscalefeaturedata
  - scale
  - feature
  - data
  - bodies
  - count
  - int32
---

# IScaleFeatureData.GetBodiesCount

Gets the number of scaled bodies for this scale feature.

## Signature

```csharp
System.Int32 GetBodiesCount()
```
## Parameters

None.

## Return Value

Number of bodies that are scaled

## Remarks

Call this method before calling
IScaleFeatureDta::IGetBodies
to get the size of the array for that method.

## Examples

- IScaleFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IScaleFeatureData)

## See Also

- `IScaleFeatureData.Bodies`
- `IScaleFeatureData.IGetBodies`
- `IScaleFeatureData.ISetBodies`