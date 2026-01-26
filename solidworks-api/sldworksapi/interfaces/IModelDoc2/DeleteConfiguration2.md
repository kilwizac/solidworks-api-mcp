---
type: method
interface: IModelDoc2
member: DeleteConfiguration2
returns: System.Boolean
parameters:
  -
    name: ConfigurationName
    type: System.String
    description: Name of the configuration to delete
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
  - IModelDoc2.EditConfiguration3
  - IModelDoc2.GetConfigurationByName
  - IModelDoc2.GetConfigurationCount
  - IModelDoc2.GetConfigurationNames
  - IModelDoc2.IAddConfiguration3
  - IModelDoc2.IGetConfigurationByName
  - IModelDoc2.IGetConfigurationNames
  - IModelDoc2.ShowConfiguration2
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - delete
  - deleteconfiguration2
  - imodeldoc2
  - model
  - doc2
  - configuration2
  - name
  - string
  - boolean
---

# IModelDoc2.DeleteConfiguration2

Deletes a configuration.

## Signature

```csharp
System.Boolean DeleteConfiguration2( 
   System.String
ConfigurationName
)
```
## Parameters

- `ConfigurationName` (System.String): Name of the configuration to delete

## Return Value

True if the configuration is deleted, false if not

## Remarks

The configuration cannot be the active configuration.

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.AddConfiguration3`
- `IModelDoc2.ConfigurationManager`
- `IModelDoc2.EditConfiguration3`
- `IModelDoc2.GetConfigurationByName`
- `IModelDoc2.GetConfigurationCount`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IAddConfiguration3`
- `IModelDoc2.IGetConfigurationByName`
- `IModelDoc2.IGetConfigurationNames`
- `IModelDoc2.ShowConfiguration2`