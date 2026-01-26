---
type: method
interface: ILibraryFeatureData
member: GetConfigurationCount
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.ConfigurationName
  - ILibraryFeatureData.GetAllConfigurationNames
  - ILibraryFeatureData.IGetAllConfigurationNames
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - library
  - feature
  - getconfigurationcount
  - ilibraryfeaturedata
  - data
  - count
  - int32
---

# ILibraryFeatureData.GetConfigurationCount

Gets the number of library feature configurations.

## Signature

```csharp
System.Int32 GetConfigurationCount()
```
## Parameters

None.

## Return Value

Number of library feature configurations

## Remarks

Call this method before calling
ILibraryFeatureData::IGetAllConfigurationNames
.

## See Also

- `ILibraryFeatureData.ConfigurationName`
- `ILibraryFeatureData.GetAllConfigurationNames`
- `ILibraryFeatureData.IGetAllConfigurationNames`