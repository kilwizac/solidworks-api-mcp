---
type: property
interface: IConfiguration
member: SuppressNewFeatures
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - features
related: []
keywords:
  - suppress
  - features
  - suppressnewfeatures
  - iconfiguration
  - configuration
  - new
  - boolean
  - change
  - properties
  - vba
  - traverse
  - hierarchy
  - configurations
readonly: null
---

# IConfiguration.SuppressNewFeatures

Gets or sets whether to suppress new features in this configuration.

## Signature

```csharp
System.Boolean SuppressNewFeatures {get; set;}
```
## Parameters

None.

## Return Value

True suppresses the new feature in this configuration, false does not

## Remarks

This setting applies only to inactive configurations. This property applies to new mates and features for assembly configurations.

## Examples

- Change Configuration Properties (VBA) (Change_Configuration_Properties_Example_VB.htm)
- Traverse Hierarchy of Configurations (VBA) (Traverse_Hierarchy_of_Configurations_Example_VB.htm)