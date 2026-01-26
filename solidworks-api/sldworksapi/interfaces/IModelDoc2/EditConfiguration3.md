---
type: method
interface: IModelDoc2
member: EditConfiguration3
returns: System.Boolean
parameters:
  -
    name: Name
    type: System.String
    description: Current configuration name
  -
    name: NewName
    type: System.String
    description: New configuration name
  -
    name: Comment
    type: System.String
    description: Comment used in configuration properties
  -
    name: AlternateName
    type: System.String
    description: Alternate configuration name; used if swConfigOption_UseAlternateName is set to True
  -
    name: Options
    type: System.Int32
    description: Combination of one or more BOOLEAN configuration options as defined in swConfigurationOptions2_e (see Remarks )
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
  - IModelDoc2.GetConfigurationByName
  - IModelDoc2.GetConfigurationCount
  - IModelDoc2.GetConfigurationNames
  - IModelDoc2.IAddConfiguration3
  - IModelDoc2.IGetConfigurationByName
  - IModelDoc2.IGetConfigurationNames
  - IModelDoc2.ShowConfiguration2
keywords:
  - edit
  - configurations
  - configuration
  - see
  - also
  - iconfiguration
  - editconfiguration3
  - imodeldoc2
  - model
  - doc2
  - configuration3
  - name
  - string
  - new
  - comment
  - alternate
  - options
  - int32
  - boolean
---

# IModelDoc2.EditConfiguration3

Edits the specified configuration.

## Signature

```csharp
System.Boolean EditConfiguration3( 
   System.String
Name
,
   System.String
NewName
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

- `Name` (System.String): Current configuration name
- `NewName` (System.String): New configuration name
- `Comment` (System.String): Comment used in configuration properties
- `AlternateName` (System.String): Alternate configuration name; used if swConfigOption_UseAlternateName is set to True
- `Options` (System.Int32): Combination of one or more BOOLEAN configuration options as defined in swConfigurationOptions2_e (see Remarks )

## Return Value

True if configuration name was changed, false if not

## Remarks

The Options argument can be a combination of any of the following values:
swConfigOption_SuppressByDefault
True if you want to suppress newly added features and mates in this configuration, false if not
swConfigOption_HideByDefault - True if you want newly added components to be hidden, false if not
swConfigOption_MinFeatureManager
True if you want newly added components to only display their component name in the FeatureManager design tree, false if you want newly added components to display their name and each of their features in the FeatureManager design tree

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.AddConfiguration3`
- `IModelDoc2.ConfigurationManager`
- `IModelDoc2.DeleteConfiguration2`
- `IModelDoc2.GetConfigurationByName`
- `IModelDoc2.GetConfigurationCount`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IAddConfiguration3`
- `IModelDoc2.IGetConfigurationByName`
- `IModelDoc2.IGetConfigurationNames`
- `IModelDoc2.ShowConfiguration2`