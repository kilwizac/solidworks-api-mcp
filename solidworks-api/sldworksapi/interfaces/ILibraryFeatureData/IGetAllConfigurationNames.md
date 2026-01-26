---
type: method
interface: ILibraryFeatureData
member: IGetAllConfigurationNames
returns: System.String
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of library configurations
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - ILibraryFeatureData.ConfigurationName
  - ILibraryFeatureData.GetAllConfigurationNames
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - library
  - feature
  - igetallconfigurationnames
  - ilibraryfeaturedata
  - data
  - all
  - names
  - count
  - int32
  - string
---

# ILibraryFeatureData.IGetAllConfigurationNames

Gets the names of the library feature configurations.

## Signature

```csharp
System.String IGetAllConfigurationNames( 
   System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of library configurations

## Return Value

in-process, unmanaged C++: Pointer to an array of strings of the names of the library feature configurations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Before calling this method, call
ILibraryFeatureData::GetConfigurationCount
to determine the size of the array.
If the library feature part document is not open or the library feature is not linked to the library feature part, then only the name of the active library feature configuration is returned.

## See Also

- `ILibraryFeatureData.ConfigurationName`
- `ILibraryFeatureData.GetAllConfigurationNames`