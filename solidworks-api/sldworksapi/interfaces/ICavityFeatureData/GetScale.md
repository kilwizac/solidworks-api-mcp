---
type: method
interface: ICavityFeatureData
member: GetScale
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
  - ICavityFeatureData.ScaleType
  - ICavityFeatureData.SetScale
  - ICavityFeatureData.UniformScale
  - ICavityFeatureData.UseUniformScale
keywords:
  - cavities
  - see
  - also
  - icavityfeaturedata
  - scaling
  - factor
  - getscale
  - cavity
  - feature
  - data
  - scale
  - xscale
  - double
  - void
  - create
  - modify
  - vb
  - net
  - vba
---

# ICavityFeatureData.GetScale

Gets the values used to scale this cavity feature.

## Signature

```csharp
void GetScale( 
   out System.Double
Xscale
,
   out System.Double
YScale
,
   out System.Double
ZScale
)
```
## Parameters

- `Xscale` (System.Double): Scaling value for the x direction
- `YScale` (System.Double): Scaling value for the y direction
- `ZScale` (System.Double): Scaling value for the z direction

## Return Value

Unknown.

## Examples

- Create and Modify Cavity Feature (C#) (Create_and_Modify_Cavity_Feature_Example_CSharp.htm)
- Create and Modify Cavity Feature (VB.NET) (Create_and_Modify_Cavity_Feature_Example_VBNET.htm)
- Create and Modify Cavity Feature (VBA) (Create_and_Modify_Cavity_Feature_Example_VB.htm)

## See Also

- `ICavityFeatureData.ScaleType`
- `ICavityFeatureData.SetScale`
- `ICavityFeatureData.UniformScale`
- `ICavityFeatureData.UseUniformScale`