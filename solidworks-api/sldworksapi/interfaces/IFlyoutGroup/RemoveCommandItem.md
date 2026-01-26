---
type: method
interface: IFlyoutGroup
member: RemoveCommandItem
returns: System.Boolean
parameters:
  -
    name: Position
    type: System.Int32
    description: 0-based index of the item to remove from the flyout
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - ui
related:
  - IFlyoutGroup.RemoveAllCommandItems
  - IFlyoutGroup.ReplaceCommandItem
keywords:
  - removecommanditem
  - iflyoutgroup
  - flyout
  - group
  - remove
  - command
  - item
  - position
  - int32
  - boolean
---

# IFlyoutGroup.RemoveCommandItem

Removes a command item at the specified position.

## Signature

```csharp
System.Boolean RemoveCommandItem( 
   System.Int32
Position
)
```
## Parameters

- `Position` (System.Int32): 0-based index of the item to remove from the flyout

## Return Value

True if successful, false if not

## See Also

- `IFlyoutGroup.RemoveAllCommandItems`
- `IFlyoutGroup.ReplaceCommandItem`