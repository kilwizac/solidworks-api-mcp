---
type: method
interface: ICommandGroup
member: AddSpacer2
returns: System.Int32
parameters:
  -
    name: Position
    type: System.Int32
    description: Position of the spacer within the CommandGroup NOTE: Specify 0 to add this a spacer to the beginning of the CommandGroup, or specify -1 to add it to the end of the CommandGroup. This argument specifies the position of the spacer in relation to its immediate parent item.
  -
    name: MenuTBOption
    type: System.Int32
    description: Command item type as defined in swCommandItemType_e
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related: []
keywords:
  - addspacer2
  - icommandgroup
  - command
  - group
  - add
  - spacer2
  - position
  - int32
  - menu
  - tb
  - option
---

# ICommandGroup.AddSpacer2

Adds a spacer between items in a CommandGroup.

## Signature

```csharp
System.Int32 AddSpacer2( 
   System.Int32
Position
,
   System.Int32
MenuTBOption
)
```
## Parameters

- `Position` (System.Int32): Position of the spacer within the CommandGroup NOTE: Specify 0 to add this a spacer to the beginning of the CommandGroup, or specify -1 to add it to the end of the CommandGroup. This argument specifies the position of the spacer in relation to its immediate parent item.
- `MenuTBOption` (System.Int32): Command item type as defined in swCommandItemType_e

## Return Value

Index of the item within the CommandGroup as assigned by SOLIDWORKS