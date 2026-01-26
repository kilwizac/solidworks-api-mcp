---
type: method
interface: IAssemblyDoc
member: ReplacePLMComponents
returns: System.Boolean
parameters:
  -
    name: PLMID
    type: System.String
    description: Unique ID of a replacement component in the collaboration space
  -
    name: ConfigName
    type: System.String
    description: Name of a configuration (Physical Product) in the replacement component; an empty string indicates the default configuration of the replacement component
  -
    name: ReplaceAllInstance
    type: System.Boolean
    description: True to replace all instances of the selected components with the replacement component, false to not
  -
    name: UseConfigChoice
    type: System.Int32
    description: Configuration to use as defined in swReplaceComponentsConfiguration_e
  -
    name: ReAttachMates
    type: System.Boolean
    description: True to reattach any existing mates to the replacement component, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - assemblies
  - core
  - ui
related:
  - IAssemblyDoc.AddPLMComponent
keywords:
  - solidworks
  - connected
  - 3dexperience
  - replaceplmcomponents
  - iassemblydoc
  - assembly
  - doc
  - replace
  - plm
  - components
  - plmid
  - string
  - config
  - name
  - all
  - instance
  - boolean
  - use
  - choice
  - int32
  - re
  - attach
  - mates
---

# IAssemblyDoc.ReplacePLMComponents

Replaces a selected SOLIDWORKS Design Augmented component in this assembly with the specified component from a 3DEXPERIENCE collaborative space.

## Signature

```csharp
System.Boolean ReplacePLMComponents( 
   System.String
PLMID
,
   System.String
ConfigName
,
   System.Boolean
ReplaceAllInstance
,
   System.Int32
UseConfigChoice
,
   System.Boolean
ReAttachMates
)
```
## Parameters

- `PLMID` (System.String): Unique ID of a replacement component in the collaboration space
- `ConfigName` (System.String): Name of a configuration (Physical Product) in the replacement component; an empty string indicates the default configuration of the replacement component
- `ReplaceAllInstance` (System.Boolean): True to replace all instances of the selected components with the replacement component, false to not
- `UseConfigChoice` (System.Int32): Configuration to use as defined in swReplaceComponentsConfiguration_e
- `ReAttachMates` (System.Boolean): True to reattach any existing mates to the replacement component, false to not

## Return Value

True if the selected component is replaced, false if not

## Remarks

Before calling this method, save any components that have been modified in this assembly. This method closes any open component files without saving modifications.

## See Also

- `IAssemblyDoc.AddPLMComponent`