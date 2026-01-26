---
type: method
interface: IModelDoc2
member: IAddConfiguration3
returns: Configuration
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
  - IModelDoc2.GetConfigurationByName
  - IModelDoc2.GetConfigurationCount
  - IModelDoc2.GetConfigurationNames
  - IModelDoc2.IGetConfigurationByName
  - IModelDoc2.IGetCustomInfoNames2
  - IModelDoc2.ShowConfiguration2
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - add
  - iaddconfiguration3
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
---

# IModelDoc2.IAddConfiguration3

Adds a new configuration to this model document.

## Signature

```csharp
Configuration IAddConfiguration3( 
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
- `AlternateName` (System.String): Alternate configuration name; used if swConfigOption_UseAlternateName is set to True
- `Options` (System.Int32): Combination of one or more BOOLEAN configuration options as defined in swConfigurationOptions2_e (see Remarks )

## Return Value

Unknown.

## Remarks

The Options argument can be a combination of any of the following values:
swConfigOption_SuppressByDefault
True if you want to suppress newly added features and mates in this configuration, false if not
swConfigOption_HideByDefault - True if you want newly added components to be hidden, false if not
swConfigOption_MinFeatureManager
True if you want newly added components to only display their component name in the FeatureManager design tree, false if you want newly added components to display their name and each of their features in the FeatureManager design tree
swConfigOption_DontActivate - True if you do not want the new configuration activated, false if not

## See Also

- `IConfiguration`
- `IConfigurationManager`
- `IModelDoc2.AddConfiguration3`
- `IModelDoc2.GetConfigurationByName`
- `IModelDoc2.GetConfigurationCount`
- `IModelDoc2.GetConfigurationNames`
- `IModelDoc2.IGetConfigurationByName`
- `IModelDoc2.IGetCustomInfoNames2`
- `IModelDoc2.ShowConfiguration2`