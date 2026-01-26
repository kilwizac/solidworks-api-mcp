---
type: method
interface: IFamilyTableFeature
member: SetConfigurations
returns: void
parameters:
  -
    name: ConfigArray
    type: System.Object
    description: Array of configurations
  -
    name: VisibilityArray
    type: System.Object
    description: Array of booleans indicating visiblity, in order, of ConfigArray items; null or Nothing to indicate that all configurations are visible
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - features
related: []
keywords:
  - setconfigurations
  - ifamilytablefeature
  - family
  - table
  - feature
  - configurations
  - config
  - array
  - object
  - visibility
  - void
---

# IFamilyTableFeature.SetConfigurations

Sets the configurations to use for this family table feature.

## Signature

```csharp
void SetConfigurations( 
   System.Object
ConfigArray
,
   System.Object
VisibilityArray
)
```
## Parameters

- `ConfigArray` (System.Object): Array of configurations
- `VisibilityArray` (System.Object): Array of booleans indicating visiblity, in order, of ConfigArray items; null or Nothing to indicate that all configurations are visible

## Return Value

Unknown.

## Remarks

This method is valid only if
IFamilyTableFeature::GetUseAllConfigurations
is set to false.