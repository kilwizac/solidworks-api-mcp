---
type: method
interface: IConfiguration
member: GetChildren
returns: System.Object
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
related:
  - IConfiguration.GetChildrenCount
  - IConfiguration.GetParent
  - IConfiguration.GetRootComponent3
  - IConfiguration.IGetChildren
keywords:
  - configuration
  - see
  - also
  - iconfiguration
  - derived
  - configurations
  - children
  - getchildren
  - object
  - traverse
  - hierarchy
  - vba
  - work
---

# IConfiguration.GetChildren

Gets all of the children configurations of this derived configuration.

## Signature

```csharp
System.Object GetChildren()
```
## Parameters

None.

## Return Value

Array containing the children configurations of this configuration

## Remarks

To determine if this configuration is derived, call
IConfiguration::IsDerived
.

## Examples

- Traverse Hierarchy of Configurations (VBA) (Traverse_Hierarchy_of_Configurations_Example_VB.htm)
- Work with Configurations (VBA) (Work_with_Configurations_Example_VB.htm)

## See Also

- `IConfiguration.GetChildrenCount`
- `IConfiguration.GetParent`
- `IConfiguration.GetRootComponent3`
- `IConfiguration.IGetChildren`