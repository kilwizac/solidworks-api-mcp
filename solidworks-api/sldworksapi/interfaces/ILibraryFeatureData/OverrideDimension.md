---
type: property
interface: ILibraryFeatureData
member: OverrideDimension
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - features
related:
  - ILibraryFeatureData.ConfigurationName
  - ILibraryFeatureData.GetDimensions
  - ILibraryFeatureData.GetDimensionsCount
  - ILibraryFeatureData.IGetDimensions
  - ILibraryFeatureData.SetDimension
keywords:
  - library
  - feature
  - see
  - also
  - ilibraryfeaturedata
  - references
  - dimensions
  - dimension
  - idimension
  - overridedimension
  - data
  - override
  - boolean
  - vba
  - vb
  - net
readonly: null
---

# ILibraryFeatureData.OverrideDimension

Gets or sets whether to override the existing size dimension values of the library feature.

## Signature

```csharp
System.Boolean OverrideDimension {get; set;}
```
## Parameters

None.

## Return Value

True to override the existing size dimensions values of the library feature, false to not

## Remarks

See
Accessing Selections that Define Features
for additional details on using this property.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)

## See Also

- `ILibraryFeatureData.ConfigurationName`
- `ILibraryFeatureData.GetDimensions`
- `ILibraryFeatureData.GetDimensionsCount`
- `ILibraryFeatureData.IGetDimensions`
- `ILibraryFeatureData.SetDimension`