---
type: property
interface: IConfiguration
member: HideNewComponentModels
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.SuppressNewComponentModels
keywords:
  - components
  - see
  - also
  - icomponent2
  - hide
  - hidenewcomponentmodels
  - iconfiguration
  - configuration
  - new
  - component
  - models
  - boolean
  - change
  - properties
  - vba
  - traverse
  - hierarchy
  - configurations
readonly: null
---

# IConfiguration.HideNewComponentModels

Gets or sets whether new components are hidden in this inactive configuration.

## Signature

```csharp
System.Boolean HideNewComponentModels {get; set;}
```
## Parameters

None.

## Return Value

True hides new components, false create new components as shown in this configuration

## Remarks

This setting is only valid when the configuration is not the active configuration.
This property applies only to assembly configurations. SOLIDWORKS always returns false when you get this property on a part configuration. This property has no effect on part configurations.

## Examples

- Change Configuration Properties (VBA) (Change_Configuration_Properties_Example_VB.htm)
- Traverse Hierarchy of Configurations (VBA) (Traverse_Hierarchy_of_Configurations_Example_VB.htm)

## See Also

- `IConfiguration.SuppressNewComponentModels`