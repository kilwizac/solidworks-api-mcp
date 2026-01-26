---
type: method
interface: ICavityFeatureData
member: SetScale
returns: void
parameters:
  -
    name: Xscale
    type: System.Double
    description: Scaling value for the x direction
  -
    name: YScale
    type: System.Double
    description: Scaling value for the y direction
  -
    name: ZScale
    type: System.Double
    description: Scaling value for the z direction
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICavityFeatureData.GetScale
  - ICavityFeatureData.ScaleType
  - ICavityFeatureData.UniformScale
  - ICavityFeatureData.UseUniformScale
keywords:
  - cavities
  - see
  - also
  - icavityfeaturedata
  - scaling
  - factor
  - setscale
  - cavity
  - feature
  - data
  - scale
  - xscale
  - double
  - void
---

# ICavityFeatureData.SetScale

Sets the values by which to scale this cavity feature.

## Signature

```csharp
void SetScale( 
   System.Double
Xscale
,
   System.Double
YScale
,
   System.Double
ZScale
)
```
## Parameters

- `Xscale` (System.Double): Scaling value for the x direction
- `YScale` (System.Double): Scaling value for the y direction
- `ZScale` (System.Double): Scaling value for the z direction

## Return Value

Unknown.

## See Also

- `ICavityFeatureData.GetScale`
- `ICavityFeatureData.ScaleType`
- `ICavityFeatureData.UniformScale`
- `ICavityFeatureData.UseUniformScale`