---
type: method
interface: IModelDoc2
member: GetConfigurationByName
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Configuration name
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
  - IModelDoc2.DeleteConfiguration2
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
  - name
  - getconfigurationbyname
  - imodeldoc2
  - model
  - doc2
  - string
  - object
  - add
  - derived
  - configurations
  - vba
  - change
  - properties
  - custom
  - save
  - data
  - vb
  - net
---

# IModelDoc2.GetConfigurationByName

Gets the specified configuration.

## Signature

```csharp
System.Object GetConfigurationByName( 
   System.String
Name
)
```
## Parameters

- `Name` (System.String): Configuration name

## Return Value

Configuration or NULL if the operation fails

## Remarks

If the specified configuration has not been activated, then some data may be unavailable. For example, attempting to traverse assembly components for a configuration that has not been activated results in a NULL root component being returned from
IConfiguration::GetRootComponent
. However, the IConfiguration object returned is useful for obtaining data that is stored with the IConfiguration object, such as the
IConfiguration::AlternateName
value. The specified configuration does not have to be activated to obtain this type of stored information.

## Examples

- Add Derived Configurations (VBA) (Add_Derived_Configurations_Example_VB.htm)
- Change Configuration Properties (VBA) (Change_Configuration_Properties_Example_VB.htm)
- Get Custom Properties (VBA) (Get_Custom_Properties_Example_VB.htm)
- Save Configuration Data (C#) (Save_Configuration_Data_Example_CSharp.htm)
- Save Configuration Data (VB.NET) (Save_Configuration_Data_Example_VBNET.htm)
- Save Configuration Data (VBA) (Save_Configuration_Data_Example_VB.htm)

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.AddConfiguration3`
- `IModelDoc2.ConfigurationManager`
- `IModelDoc2.DeleteConfiguration2`
- `IModelDoc2.GetConfigurationCount`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IAddConfiguration3`
- `IModelDoc2.IGetConfigurationByName`
- `IModelDoc2.IGetConfigurationNames`
- `IModelDoc2.ShowConfiguration2`