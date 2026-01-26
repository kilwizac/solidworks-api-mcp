---
type: method
interface: ILibraryFeatureData
member: GetAllConfigurationNames
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.ConfigurationName
  - ILibraryFeatureData.GetConfigurationCount
  - ILibraryFeatureData.IGetAllConfigurationNames
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - library
  - feature
  - getallconfigurationnames
  - ilibraryfeaturedata
  - data
  - all
  - names
  - object
  - vba
  - vb
  - net
---

# ILibraryFeatureData.GetAllConfigurationNames

Gets the names of the library feature configurations.

## Signature

```csharp
System.Object GetAllConfigurationNames()
```
## Parameters

None.

## Return Value

Names of the library feature configurations

## Remarks

If the library feature part document is not open or the library feature is not linked to the library feature part, then only the name of the active library feature configuration is returned.

## Examples

- Get Library Feature Data (VBA) (Get_Library_Feature_Data_Example_VB.htm)
- Get Library Feature Data (VB.NET) (Get_Library_Feature_Data_Example_VBNET.htm)
- Get Library Feature Data (C#) (Get_Library_Feature_Data_Example_CSharp.htm)

## See Also

- `ILibraryFeatureData.ConfigurationName`
- `ILibraryFeatureData.GetConfigurationCount`
- `ILibraryFeatureData.IGetAllConfigurationNames`