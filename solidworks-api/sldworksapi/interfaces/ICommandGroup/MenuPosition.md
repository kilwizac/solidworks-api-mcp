---
type: property
interface: ICommandGroup
member: MenuPosition
returns: System.Int32
parameters:
  -
    name: Context
    type: System.Int32
    description: Context as defined in swDocTemplateTypes_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - ICommandGroup.HasMenu
keywords:
  - menuposition
  - icommandgroup
  - command
  - group
  - menu
  - position
  - context
  - int32
readonly: null
---

# ICommandGroup.MenuPosition

Gets or sets the position of the CommandGroup for the specified document templates.

## Signature

```csharp
System.Int32 MenuPosition( 
   System.Int32
Context
) {get; set;}
```
## Parameters

- `Context` (System.Int32): Context as defined in swDocTemplateTypes_e

## Return Value

Position of the CommandGroup in the CommandManager NOTE: Specify 0 to add the CommandGroup to the beginning of the CommandMananger, or specify -1 to add it to the end of the CommandManager.

## Remarks

If setting the position of the CommandGroup using this property, you must use it before using
ICommandGroup::Activate
. If you use this property after using ICommandGroup::Activate, then this property has no effect.
If you do not use this property to set the position of the ICommandGroup, then the position specified in
ICommandManager::CreateCommandGroup
is used.
Calling this property to get the position of the CommandGroup returns the position of the CommandGroup set by either this property or ICommandManager::CreateCommandGroup.

## See Also

- `ICommandGroup.HasMenu`