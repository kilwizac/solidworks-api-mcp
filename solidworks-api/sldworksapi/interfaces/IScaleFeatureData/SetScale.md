---
type: method
interface: IScaleFeatureData
member: SetScale
returns: void
parameters:
  -
    name: X
    type: System.Double
    description: X-direction scale factor
  -
    name: Y
    type: System.Double
    description: Y-direction scale factor
  -
    name: Z
    type: System.Double
    description: Z-direction scale factor
  -
    name: Uniform
    type: System.Boolean
    description: True for uniform scaling, false for non-uniform scaling
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IScaleFeatureData.GetScale
  - IScaleFeatureData.IsUniform
  - IScaleFeatureData.ScaleUniform
  - IScaleFeatureData.ScaleX
  - IScaleFeatureData.ScaleY
  - IScaleFeatureData.ScaleZ
keywords:
  - setscale
  - iscalefeaturedata
  - scale
  - feature
  - data
  - double
  - uniform
  - boolean
  - void
---

# IScaleFeatureData.SetScale

Sets the scale factor for this scale feature in the x, y,and z directions.

## Signature

```csharp
void SetScale( 
   System.Double
X
,
   System.Double
Y
,
   System.Double
Z
,
   System.Boolean
Uniform
)
```
## Parameters

- `X` (System.Double): X-direction scale factor
- `Y` (System.Double): Y-direction scale factor
- `Z` (System.Double): Z-direction scale factor
- `Uniform` (System.Boolean): True for uniform scaling, false for non-uniform scaling

## Return Value

Unknown.

## See Also

- `IScaleFeatureData.GetScale`
- `IScaleFeatureData.IsUniform`
- `IScaleFeatureData.ScaleUniform`
- `IScaleFeatureData.ScaleX`
- `IScaleFeatureData.ScaleY`
- `IScaleFeatureData.ScaleZ`