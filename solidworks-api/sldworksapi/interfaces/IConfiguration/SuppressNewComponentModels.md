---
type: property
interface: IConfiguration
member: SuppressNewComponentModels
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetComponentSuppressionState
  - IConfiguration.HideNewComponentModels
keywords:
  - components
  - see
  - also
  - icomponent2
  - suppress
  - suppressnewcomponentmodels
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

# IConfiguration.SuppressNewComponentModels

Gets or sets whether new components are suppressed in this configuration.

## Signature

```csharp
System.Boolean SuppressNewComponentModels {get; set;}
```
## Parameters

None.

## Return Value

True suppresses the new component in this configuration, false resolves it

## Remarks

This setting applies only to inactive configurations.
This property applies only to assembly configurations. SOLIDWORKS always returns false when you get this property on a part configuration. Setting this property on a part configuration has no effect.

## Examples

- Change Configuration Properties (VBA) (Change_Configuration_Properties_Example_VB.htm)
- Traverse Hierarchy of Configurations (VBA) (Traverse_Hierarchy_of_Configurations_Example_VB.htm)

## See Also

- `IConfiguration.GetComponentSuppressionState`
- `IConfiguration.HideNewComponentModels`