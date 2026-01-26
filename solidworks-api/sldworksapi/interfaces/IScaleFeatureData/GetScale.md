---
type: method
interface: IScaleFeatureData
member: GetScale
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
  - IScaleFeatureData.IsUniform
  - IScaleFeatureData.ScaleUniform
  - IScaleFeatureData.ScaleX
  - IScaleFeatureData.ScaleY
  - IScaleFeatureData.ScaleZ
  - IScaleFeatureData.SetScale
keywords:
  - getscale
  - iscalefeaturedata
  - scale
  - feature
  - data
  - double
  - uniform
  - boolean
  - void
---

# IScaleFeatureData.GetScale

Gets the scale factor for this scale feature in x, y,and z directions.

## Signature

```csharp
void GetScale( 
   out System.Double
X
,
   out System.Double
Y
,
   out System.Double
Z
,
   out System.Boolean
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

## Examples

- IScaleFeatureData (ms-xhelp:///?id=SolidWorks.Interop.sldworks~SolidWorks.Interop.sldworks.IScaleFeatureData)

## See Also

- `IScaleFeatureData.IsUniform`
- `IScaleFeatureData.ScaleUniform`
- `IScaleFeatureData.ScaleX`
- `IScaleFeatureData.ScaleY`
- `IScaleFeatureData.ScaleZ`
- `IScaleFeatureData.SetScale`