---
type: method
interface: IAssemblyDoc
member: AddComponentConfiguration
returns: Configuration
parameters:
  -
    name: Name
    type: System.String
    description: Name of new configuration
  -
    name: Comment
    type: System.String
    description: Comment displayed in Configuration Properties
  -
    name: AlternateName
    type: System.String
    description: Alternate configuration name; used if swConfigOption_UseAlternateName is set to true (see Remarks )
  -
    name: Options
    type: System.Int32
    description: Combination of one or more BOOLEAN configuration options as defined in swConfigurationOptions2_e (see Remarks )
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related: []
keywords:
  - components
  - see
  - also
  - icomponent2
  - names
  - addcomponentconfiguration
  - iassemblydoc
  - assembly
  - doc
  - add
  - component
  - configuration
  - name
  - string
  - comment
  - alternate
  - options
  - int32
---

# IAssemblyDoc.AddComponentConfiguration

Adds a new configuration for the last selected assembly component.

## Signature

```csharp
Configuration AddComponentConfiguration( 
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

- `Name` (System.String): Name of new configuration
- `Comment` (System.String): Comment displayed in Configuration Properties
- `AlternateName` (System.String): Alternate configuration name; used if swConfigOption_UseAlternateName is set to true (see Remarks )
- `Options` (System.Int32): Combination of one or more BOOLEAN configuration options as defined in swConfigurationOptions2_e (see Remarks )

## Return Value

IConfiguration

## Remarks

The Options argument can be a combination of any of the following values:
swConfigOption_SuppressByDefault True if you want to suppress newly added features and mates in this configuration, false if not
swConfigOption_HideByDefault - True if you want newly added components to be hidden, false if not
swConfigOption_MinFeatureManager True if you want newly added components to only display their component name in the FeatureManager design tree, false if you want newly added components to display their name and each of their features in the FeatureManager design tree
swConfigOption_DontActivate - True if you do not want the new configuration activated, false if not