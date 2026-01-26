---
type: property
interface: ICommandGroup
member: CustomNames
returns: System.String
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandManager.AddContextMenu
keywords:
  - customnames
  - icommandgroup
  - command
  - group
  - custom
  - names
  - string
readonly: null
---

# ICommandGroup.CustomNames

Gets or sets the custom names in the CommandGroup.

## Signature

```csharp
System.String CustomNames {get; set;}
```
## Parameters

None.

## Return Value

String containing the custom names in the CommandGroup (see Remarks )

## Remarks

Format CustomNames as a semicolon-separated list of the names of the custom feature types.
This method is applicable only if
ICommandGruop::SelectType
is a custom feature type, like swSelATTRIBUTES.
For example, if you want a context-sensitive, pop-up menu to appear for an attribute when the user right-clicks the attribute in the FeatureManager design tree, then:
Create the attribute (see
IAttributeDef::CreateInstance5
)
Set the name of the attribute in
ICommandGroup::SelectType
.
Set the name of the attribute definition in ICommandGroup::CustomNames.

## See Also

- `ICommandManager.AddContextMenu`