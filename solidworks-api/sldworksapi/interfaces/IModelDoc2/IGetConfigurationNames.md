---
type: method
interface: IModelDoc2
member: IGetConfigurationNames
returns: System.String
parameters:
  -
    name: Count
    type: System.Int32
    description: Number of configurations
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
  - IModelDoc2.DeleteConfiguration2
  - IModelDoc2.GetConfigurationByName
  - IModelDoc2.GetConfigurationNames
  - IModelDoc2.IAddConfiguration3
  - IModelDoc2.IGetConfigurationByName
  - IModelDoc2.ShowConfiguration2
keywords:
  - name
  - configuration
  - see
  - also
  - iconfiguration
  - igetconfigurationnames
  - imodeldoc2
  - model
  - doc2
  - names
  - count
  - int32
  - string
---

# IModelDoc2.IGetConfigurationNames

Gets the names of the configurations in this document.

## Signature

```csharp
System.String IGetConfigurationNames( 
   out System.Int32
Count
)
```
## Parameters

- `Count` (System.Int32): Number of configurations

## Return Value

in-process, unmanaged C++: Pointer to an array of the names of the configurations VBA, VB.NET, C#, and C++/CLI: Not supported See In-process Methods for details about this type of method.

## Remarks

Use
IModelDoc2::GetConfigurationCount
to get the number of configurations in this part. Use the return value for Count to dimension the ConfigList array.
This method compares the number of configurations in the actual part with the number passed in. If the actual number of configurations is larger than the number passed in, no configurations are returned, and status returns S_ERROR. If the actual number of configurations is smaller than the number passed in, all of the configurations are returned in the configList, and configCount is changed to reflect the actual number of configurations.

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.AddConfiguration3`
- `IModelDoc2.DeleteConfiguration2`
- `IModelDoc2.GetConfigurationByName`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IAddConfiguration3`
- `IModelDoc2.IGetConfigurationByName`
- `IModelDoc2.ShowConfiguration2`