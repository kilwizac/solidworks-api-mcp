---
type: method
interface: IConfigurationManager
member: AddConfiguration2
returns: Configuration
parameters:
  -
    name: Name
    type: System.String
    description: Name of the configuration
  -
    name: Comment
    type: System.String
    description: Comment displayed in Configuration Properties
  -
    name: AlternateName
    type: System.String
    description: Alternate configuration name (i.e., user-specified name); used if Options is set to swConfigurationOptions2_e_UseAlternateName
  -
    name: Options
    type: System.Int32
    description: Combination of one or more configuration options as defined in swConfigurationOptions2_e (see Remarks )
  -
    name: ParentConfigName
    type: System.String
    description: Name of parent configuration
  -
    name: Description
    type: System.String
    description: Text that identifies the configuration
  -
    name: Rebuild
    type: System.Boolean
    description: True to rebuild the model after adding this configuration, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.AddComponentConfiguration
  - IConfiguration.GetChildren
  - IConfiguration.GetParent
  - IConfiguration.Name
  - IConfigurationManager.ActiveConfiguration
  - IModelDoc2.AddConfiguration3
keywords:
  - parents
  - configurations
  - addconfiguration2
  - iconfigurationmanager
  - configuration
  - manager
  - add
  - configuration2
  - name
  - string
  - comment
  - alternate
  - options
  - int32
  - parent
  - config
  - description
  - rebuild
  - boolean
  - work
  - vba
---

# IConfigurationManager.AddConfiguration2

Creates a new configuration.

## Signature

```csharp
Configuration AddConfiguration2( 
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
,
   System.String
ParentConfigName
,
   System.String
Description
,
   System.Boolean
Rebuild
)
```
## Parameters

- `Name` (System.String): Name of the configuration
- `Comment` (System.String): Comment displayed in Configuration Properties
- `AlternateName` (System.String): Alternate configuration name (i.e., user-specified name); used if Options is set to swConfigurationOptions2_e_UseAlternateName
- `Options` (System.Int32): Combination of one or more configuration options as defined in swConfigurationOptions2_e (see Remarks )
- `ParentConfigName` (System.String): Name of parent configuration
- `Description` (System.String): Text that identifies the configuration
- `Rebuild` (System.Boolean): True to rebuild the model after adding this configuration, false to not

## Return Value

Newly created configuration

## Remarks

The Options argument can be a combination of any of the following values:
swConfigOption_SuppressByDefault
swConfigOption_HideByDefault
swConfigOption_MinFeatureManager
swConfigOption_UseAlternateName

## Examples

- Work with Configurations (VBA) (Work_with_Configurations_Example_VB.htm)

## See Also

- `IAssemblyDoc.AddComponentConfiguration`
- `IConfiguration.GetChildren`
- `IConfiguration.GetParent`
- `IConfiguration.Name`
- `IConfigurationManager.ActiveConfiguration`
- `IModelDoc2.AddConfiguration3`