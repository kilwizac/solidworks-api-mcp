---
type: property
interface: ICommandGroup
member: SmallMainIcon
returns: System.String
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.AddCommandItem2
  - ICommandGroup.LargeIconList
  - ICommandGroup.LargeMainIcon
  - ICommandGroup.SmallIconList
keywords:
  - smallmainicon
  - icommandgroup
  - command
  - group
  - small
  - main
  - icon
  - string
  - create
  - submenus
  - commandmanager
readonly: null
---

# ICommandGroup.SmallMainIcon

Obsolete. Superseded by ICommandGroup::MainIconList.

## Signature

```csharp
System.String SmallMainIcon {get; set;}
```
## Parameters

None.

## Return Value

Path of the small bitmap or PNG for this CommandGroup

## Remarks

The small bitmap must be 16x16 and use a 256-color palette.

## Examples

- Create Submenus in the CommandManager (C#) (Create_Submenus_in_the_CommandManager_Example_CSharp.htm)

## See Also

- `ICommandGroup.AddCommandItem2`
- `ICommandGroup.LargeIconList`
- `ICommandGroup.LargeMainIcon`
- `ICommandGroup.SmallIconList`