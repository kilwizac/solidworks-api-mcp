---
type: method
interface: IConfiguration
member: GetParent
returns: Configuration
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetChildren
  - IConfiguration.GetChildrenCount
  - IConfiguration.GetRootComponent3
  - IConfiguration.IGetChildren
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - derived
  - configurations
  - parents
  - getparent
  - parent
  - change
  - properties
  - vba
  - traverse
  - hierarchy
  - work
---

# IConfiguration.GetParent

Gets the parent configuration of this derived configuration.

## Signature

```csharp
Configuration GetParent()
```
## Parameters

None.

## Return Value

Parent configuration of this derived configuration

## Remarks

To determine if this configuration is derived, call
IConfiguration::IsDerived
.

## Examples

- Change Configuration Properties (VBA) (Change_Configuration_Properties_Example_VB.htm)
- Traverse Hierarchy of Configurations (VBA) (Traverse_Hierarchy_of_Configurations_Example_VB.htm)
- Work with Configurations (VBA) (Work_with_Configurations_Example_VB.htm)

## See Also

- `IConfiguration.GetChildren`
- `IConfiguration.GetChildrenCount`
- `IConfiguration.GetRootComponent3`
- `IConfiguration.IGetChildren`