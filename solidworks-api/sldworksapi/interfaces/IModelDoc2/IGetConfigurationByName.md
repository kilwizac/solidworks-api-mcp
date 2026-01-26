---
type: method
interface: IModelDoc2
member: IGetConfigurationByName
returns: Configuration
parameters:
  -
    name: Name
    type: System.String
    description: Specified configuration name
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IConfiguration
  - IConfigurationManager
  - IModelDoc2.AddConfiguration3
  - IModelDoc2.ConfigurationManager
  - IModelDoc2.DeleteConfiguration
  - IModelDoc2.GetConfigurationByName
  - IModelDoc2.GetConfigurationCount
  - IModelDoc2.GetConfigurationNames
  - IModelDoc2.IAddConfiguration3
  - IModelDoc2.IGetConfigurationNames
  - IModelDoc2.ShowConfiguration2
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - name
  - igetconfigurationbyname
  - imodeldoc2
  - model
  - doc2
  - string
---

# IModelDoc2.IGetConfigurationByName

Gets the specified configuration.

## Signature

```csharp
Configuration IGetConfigurationByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Specified configuration name

## Return Value

Configuration or NULL if the operation fails

## Remarks

If the specified configuration has not been activated, then some data may be unavailable. For example, attempting to traverse assembly components for a configuration that has not been activated results in a NULL root component being returned from
IConfiguration::IGetRootComponent2
. However, the IConfiguration object returned is useful for obtaining data that is stored with the IConfiguration object, such as the
IConfiguration::AlternateName
value. The specified configuration does not have to be activated to obtain this type of stored information.

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.AddConfiguration3`
- `IModelDoc2.ConfigurationManager`
- `IModelDoc2.DeleteConfiguration`
- `IModelDoc2.GetConfigurationByName`
- `IModelDoc2.GetConfigurationCount`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IAddConfiguration3`
- `IModelDoc2.IGetConfigurationNames`
- `IModelDoc2.ShowConfiguration2`