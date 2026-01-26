---
type: property
interface: ICommandGroup
member: SelectType
returns: System.Int32
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - selections
  - ui
related: []
keywords:
  - selecttype
  - icommandgroup
  - command
  - group
  - select
  - type
  - int32
readonly: null
---

# ICommandGroup.SelectType

This property:

## Signature

```csharp
System.Int32 SelectType {get; set;}
```
## Parameters

None.

## Return Value

Type of object as defined in swSelectType_e

## Remarks

This property only applies to CommandGroups created using
ICommandManager::AddContextMenu
.
If setting SelectType to a custom feature type such as an attribute (swSelATTRIBUTES),
then you must use
ICommandGroup::CustomNames
to set the name of the attribute definition.