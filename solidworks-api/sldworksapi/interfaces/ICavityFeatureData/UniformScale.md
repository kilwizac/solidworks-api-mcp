---
type: property
interface: ICavityFeatureData
member: UniformScale
returns: System.Double
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ICavityFeatureData.GetScale
  - ICavityFeatureData.ScaleType
  - ICavityFeatureData.SetScale
keywords:
  - uniformscale
  - icavityfeaturedata
  - cavity
  - feature
  - data
  - uniform
  - scale
  - double
  - create
  - modify
  - vb
  - net
  - vba
readonly: null
---

# ICavityFeatureData.UniformScale

Gets or sets the value by which to scale this cavity feature in all directions.

## Signature

```csharp
System.Double UniformScale {get; set;}
```
## Parameters

None.

## Return Value

Scaling value for all directions

## Remarks

Use
ICavityFeatureData::UseUniformScale
to enable uniform scaling of this cavity feature.

## Examples

- Create and Modify Cavity Feature (C#) (Create_and_Modify_Cavity_Feature_Example_CSharp.htm)
- Create and Modify Cavity Feature (VB.NET) (Create_and_Modify_Cavity_Feature_Example_VBNET.htm)
- Create and Modify Cavity Feature (VBA) (Create_and_Modify_Cavity_Feature_Example_VB.htm)

## See Also

- `ICavityFeatureData.GetScale`
- `ICavityFeatureData.ScaleType`
- `ICavityFeatureData.SetScale`