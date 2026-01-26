---
type: method
interface: IDimension
member: IsAppliedToAllConfigurations
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
  - documents
related: []
keywords:
  - dimension
  - see
  - also
  - idimension
  - configurations
  - configuration
  - iconfiguration
  - dimensions
  - isappliedtoallconfigurations
  - applied
  - all
  - boolean
  - values
  - vba
---

# IDimension.IsAppliedToAllConfigurations

Gets whether a dimension is currently applied to all configurations of the model or to just the current configuration.

## Signature

```csharp
System.Boolean IsAppliedToAllConfigurations()
```
## Parameters

None.

## Return Value

True if the dimension is applied to all configurations, false if the dimension is applied only to the current configuration

## Remarks

If there is only one configuration of a part, this method returns True.
This method applies only to dimensions that are driven by or drive geometry. For example, this method does not apply to reference dimensions (see
IDimension::IsReference
and
IDimension::DrivenState
). This method returns True for reference dimensions.

## Examples

- Get Dimension Values in All Configurations (VBA) (Get_Dimension_Values_in_All_Configurations_Example_VB.htm)