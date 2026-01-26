---
type: property
interface: ICommandGroup
member: SmallIconList
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
  - ICommandGroup.SmallMainIcon
keywords:
  - smalliconlist
  - icommandgroup
  - command
  - group
  - small
  - icon
  - list
  - string
  - create
  - submenus
  - commandmanager
readonly: null
---

# ICommandGroup.SmallIconList

Obsolete. Superseded by ICommandGroup::IconList.

## Signature

```csharp
System.String SmallIconList {get; set;}
```
## Parameters

None.

## Return Value

Path for the bitmap or PNG file containing all of the small images of the buttons and separators for this CommandGroup

## Remarks

The bitmap or PNG file should contain all of the images for all of the small buttons and separators for this CommandGroup, in a single bitmap for both parent and child toolbars. Each image of each button must be 16x16. The images should use a 256-color palette.
You can only set this property for the top-level CommandGroup.

## Examples

- Create Submenus in the CommandManager (C#) (Create_Submenus_in_the_CommandManager_Example_CSharp.htm)

## See Also

- `ICommandGroup.AddCommandItem2`
- `ICommandGroup.LargeIconList`
- `ICommandGroup.LargeMainIcon`
- `ICommandGroup.SmallMainIcon`