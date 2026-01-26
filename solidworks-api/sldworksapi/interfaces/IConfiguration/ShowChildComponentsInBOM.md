---
type: property
interface: IConfiguration
member: ShowChildComponentsInBOM
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - documents
related: []
keywords:
  - showchildcomponentsinbom
  - iconfiguration
  - configuration
  - show
  - child
  - components
  - bom
  - boolean
  - change
  - properties
  - vba
  - traverse
  - hierarchy
  - configurations
readonly: null
---

# IConfiguration.ShowChildComponentsInBOM

Obsolete. Superseded by IConfiguration::ChildComponentDisplayInBOM.

## Signature

```csharp
System.Boolean ShowChildComponentsInBOM {get; set;}
```
## Parameters

None.

## Return Value

True displays child components in a BOM, false does not

## Remarks

This property applies only to assembly configurations. SOLIDWORKS always returns false when you get this property on a part configuration. Setting this property on a part configuration has no effect.
How the components appear in the report is mainly controlled by the display format of a BOM. However, this property does affect the output format. Specifically, if this property is set to false, the report includes only the subassembly, not the component parts of this model configuration (even if the BOM report requests that all parts be displayed).

## Examples

- Change Configuration Properties (VBA) (Change_Configuration_Properties_Example_VB.htm)
- Traverse Hierarchy of Configurations (VBA) (Traverse_Hierarchy_of_Configurations_Example_VB.htm)