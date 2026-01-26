---
type: property
interface: ICavityFeatureData
member: UseUniformScale
returns: System.Boolean
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
  - useuniformscale
  - icavityfeaturedata
  - cavity
  - feature
  - data
  - use
  - uniform
  - scale
  - boolean
  - create
  - modify
  - vb
  - net
  - vba
readonly: null
---

# ICavityFeatureData.UseUniformScale

Gets or sets whether to uniformly scale this cavity feature.

## Signature

```csharp
System.Boolean UseUniformScale {get; set;}
```
## Parameters

None.

## Return Value

True to use a uniform scaling value, false to not

## Remarks

Use
ICavityFeatureData::UniformScale
to set the uniform scaling value for this cavity feature.

## Examples

- Create and Modify Cavity Feature (C#) (Create_and_Modify_Cavity_Feature_Example_CSharp.htm)
- Create and Modify Cavity Feature (VB.NET) (Create_and_Modify_Cavity_Feature_Example_VBNET.htm)
- Create and Modify Cavity Feature (VBA) (Create_and_Modify_Cavity_Feature_Example_VB.htm)

## See Also

- `ICavityFeatureData.GetScale`
- `ICavityFeatureData.ScaleType`
- `ICavityFeatureData.SetScale`