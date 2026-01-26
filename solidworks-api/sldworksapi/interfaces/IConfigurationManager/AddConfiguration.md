---
type: method
interface: IConfigurationManager
member: AddConfiguration
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
    description: Alternate configuration name (i.e., user-specified name); used if swConfigOption_UseAlternateName is set to true
  -
    name: Options
    type: System.Int32
    description: Combination of one or more Boolean configuration options as defined in swConfigurationOptions2_e (see Remarks )
  -
    name: ParentConfigName
    type: System.String
    description: Name of parent configuration
  -
    name: Description
    type: System.String
    description: Text that identifies the configuration
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related:
  - IAssemblyDoc.AddComponentConfiguration
  - IComponent2.Name2
  - IConfiguration.AlternateName
  - IConfiguration.GetChildren
  - IConfiguration.GetParent
  - IConfiguration.IGetChildren
  - IConfiguration.Name
  - IConfigurationManager.ActiveConfiguration
  - IModelDoc2.AddConfiguration3
keywords:
  - addconfiguration
  - iconfigurationmanager
  - configuration
  - manager
  - add
  - name
  - string
  - comment
  - alternate
  - options
  - int32
  - parent
  - config
  - description
  - dimensions
  - mid
  - tolerance
  - vba
  - derived
  - configurations
---

# IConfigurationManager.AddConfiguration

Obsolete. Superseded by IConfigurationManager::AddConfiguration2.

## Signature

```csharp
Configuration AddConfiguration( 
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
)
```
## Parameters

- `Name` (System.String): Name of the configuration
- `Comment` (System.String): Comment displayed in Configuration Properties
- `AlternateName` (System.String): Alternate configuration name (i.e., user-specified name); used if swConfigOption_UseAlternateName is set to true
- `Options` (System.Int32): Combination of one or more Boolean configuration options as defined in swConfigurationOptions2_e (see Remarks )
- `ParentConfigName` (System.String): Name of parent configuration
- `Description` (System.String): Text that identifies the configuration

## Return Value

Newly created configuration

## Remarks

The Options argument can be a combination of any of the following values:
swConfigOption_SuppressByDefault - True if you want to suppress newly added features and mates in this configuration, false if not
swConfigOption_HideByDefault - True if you want newly added components to be hidden, false if not
swConfigOption_MinFeatureManager - True if you want newly added components to only display their component name in the FeatureManager design tree, false if you want newly added components to display their name and each of their features in the FeatureManager design tree

## Examples

- Set Dimensions to Mid-Tolerance (VBA) (Set_Dimensions_to_Mid-Tolerance_Example_VB.htm)
- Add Derived Configurations (VBA) (Add_Derived_Configurations_Example_VB.htm)

## See Also

- `IAssemblyDoc.AddComponentConfiguration`
- `IComponent2.Name2`
- `IConfiguration.AlternateName`
- `IConfiguration.GetChildren`
- `IConfiguration.GetParent`
- `IConfiguration.IGetChildren`
- `IConfiguration.Name`
- `IConfigurationManager.ActiveConfiguration`
- `IModelDoc2.AddConfiguration3`