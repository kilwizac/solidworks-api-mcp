---
type: method
interface: IFeature
member: IsSuppressed2
returns: System.Object
parameters:
  -
    name: Config_opt
    type: System.Int32
    description: Configuration option as defined by swInConfigurationOpts_e
  -
    name: Config_names
    type: System.Object
    description: Array of configuration names
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - features
related:
  - IFeature.IIsSuppressed2
  - IFeature.ISetSuppression2
  - IFeature.SetSuppression2
  - IFeature.Visible
keywords:
  - suppress
  - features
  - issuppressed2
  - ifeature
  - feature
  - suppressed2
  - config
  - opt
  - int32
  - names
  - object
  - suppressed
  - configuration
  - vba
  - solid
  - bodies
  - cut
  - list
  - folders
  - custom
  - properties
  - vb
  - net
---

# IFeature.IsSuppressed2

Gets whether the feature in the specified configurations is suppressed.

## Signature

```csharp
System.Object IsSuppressed2( 
   System.Int32
Config_opt
,
   System.Object
Config_names
)
```
## Parameters

- `Config_opt` (System.Int32): Configuration option as defined by swInConfigurationOpts_e
- `Config_names` (System.Object): Array of configuration names

## Return Value

Array of Booleans indicating the suppression states for the feature in the specified configurations

## Examples

- Is Feature Suppressed in Configuration (VBA) (Is_Feature_Suppressed_in_Specified_Configurations_Example_VB.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (C#) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_CSharp.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (VB.NET) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_VBNET.htm)
- Get Solid Bodies from Cut-list Folders and Get Custom Properties (VBA) (Get_Solid_Bodies_from_Cut-list_Folders_and_Get_Custom_Properties_Example_VB.htm)

## See Also

- `IFeature.IIsSuppressed2`
- `IFeature.ISetSuppression2`
- `IFeature.SetSuppression2`
- `IFeature.Visible`