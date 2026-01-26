---
type: method
interface: IModelDoc2
member: AddConfiguration3
returns: System.Object
parameters:
  -
    name: Name
    type: System.String
    description: Name of the new configuration
  -
    name: Comment
    type: System.String
    description: Comment displayed in Configuration Properties
  -
    name: AlternateName
    type: System.String
    description: Alternate configuration name; used if swConfigOption_UseAlternateName is set to true
  -
    name: Options
    type: System.Int32
    description: Combination of one or more configuration options as defined in swConfigurationOptions2_e
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
  - IModelDoc2.ConfigurationManager
  - IModelDoc2.DeleteConfiguration2
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
  - add
  - addconfiguration3
  - imodeldoc2
  - model
  - doc2
  - configuration3
  - name
  - string
  - comment
  - alternate
  - options
  - int32
  - object
  - promote
  - child
  - components
  - bom
  - vb
  - net
  - vba
---

# IModelDoc2.AddConfiguration3

Adds a new configuration to this model document.

## Signature

```csharp
System.Object AddConfiguration3( 
   System.String
Name
,
   System.String
Comment
,
   System.String
AlternateName
,
   System.Int32
Options
)
```
## Parameters

- `Name` (System.String): Name of the new configuration
- `Comment` (System.String): Comment displayed in Configuration Properties
- `AlternateName` (System.String): Alternate configuration name; used if swConfigOption_UseAlternateName is set to true
- `Options` (System.Int32): Combination of one or more configuration options as defined in swConfigurationOptions2_e

## Return Value

Newly created configuration

## Examples

- Add Configuration and Promote Child Components in BOM (C#) (Add_Configuration_and_Promote_Child_Components_in_BOM_Example_CSharp.htm)
- Add Configuration and Promote Child Components in BOM (VB.NET) (Add_Configuration_and_Promote_Child_Components_in_BOM_Example_VBNET.htm)
- Add Configuration and Promote Child Components in BOM (VBA) (Add_Configuration_and_Promote_Child_Components_in_BOM_Example_VB.htm)

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.ConfigurationManager`
- `IModelDoc2.DeleteConfiguration2`
- `IModelDoc2.EditConfiguration3`
- `IModelDoc2.GetConfigurationByName`
- `IModelDoc2.GetConfigurationCount`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IAddConfiguration3`
- `IModelDoc2.IGetConfigurationByName`
- `IModelDoc2.IGetConfigurationNames`
- `IModelDoc2.ShowConfiguration2`