---
type: property
interface: ICommandGroup
member: LargeIconList
returns: System.String
parameters: []
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.AddCommandItem2
  - ICommandGroup.LargeMainIcon
  - ICommandGroup.SmallIconList
  - ICommandGroup.SmallMainIcon
keywords:
  - largeiconlist
  - icommandgroup
  - command
  - group
  - large
  - icon
  - list
  - string
  - create
  - submenus
  - commandmanager
readonly: null
---

# ICommandGroup.LargeIconList

Obsolete. Superseded by ICommandGroup::IconList.

## Signature

```csharp
System.String LargeIconList {get; set;}
```
## Parameters

None.

## Return Value

Path for the bitmap or PNG files containing all of the large images of the toolbar buttons and separators for this CommandGroup

## Remarks

The bitmap or PNG file should contain all of the images for all of the large buttons and separators for this CommandGroup, in a single bitmap for both parent and child toolbars. Each image of each button must be 24x24. The images should use a 256-color palette.
You can only set this property for the top-level CommandGroup.

## Examples

- Create Submenus in the CommandManager (C#) (Create_Submenus_in_the_CommandManager_Example_CSharp.htm)

## See Also

- `ICommandGroup.AddCommandItem2`
- `ICommandGroup.LargeMainIcon`
- `ICommandGroup.SmallIconList`
- `ICommandGroup.SmallMainIcon`