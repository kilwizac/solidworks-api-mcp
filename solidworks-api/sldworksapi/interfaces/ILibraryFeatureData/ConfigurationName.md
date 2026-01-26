---
type: property
interface: ILibraryFeatureData
member: ConfigurationName
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.GetAllConfigurationNames
  - ILibraryFeatureData.GetConfigurationCount
  - ILibraryFeatureData.GetDimensions
  - ILibraryFeatureData.GetDimensionsCount
  - ILibraryFeatureData.IGetAllConfigurationNames
  - ILibraryFeatureData.IGetDimensions
  - ILibraryFeatureData.OverrideDimension
  - ILibraryFeatureData.SetDimension
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - library
  - feature
  - configurationname
  - ilibraryfeaturedata
  - data
  - name
  - string
  - vba
  - vb
  - net
readonly: null
---

# ILibraryFeatureData.ConfigurationName

Gets or sets the name of the active library feature configuration.

## Signature

```csharp
System.String ConfigurationName {get; set;}
```
## Parameters

None.

## Return Value

Name of active library feature configuration

## Remarks

If the size dimensions are overridden, then the get version of this property returns an empty string.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)

## See Also

- `ILibraryFeatureData.GetAllConfigurationNames`
- `ILibraryFeatureData.GetConfigurationCount`
- `ILibraryFeatureData.GetDimensions`
- `ILibraryFeatureData.GetDimensionsCount`
- `ILibraryFeatureData.IGetAllConfigurationNames`
- `ILibraryFeatureData.IGetDimensions`
- `ILibraryFeatureData.OverrideDimension`
- `ILibraryFeatureData.SetDimension`