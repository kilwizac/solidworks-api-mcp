---
type: method
interface: ILoop2
member: Select
returns: System.Boolean
parameters:
  -
    name: Edge
    type: System.Object
    description: Edge of the loop (see Remarks )
  -
    name: Append
    type: System.Boolean
    description: True to append this selection to the selection list, false to replace the selection list with this selection
  -
    name: SelectionData
    type: System.Object
    description: ISelectData object
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - documents
  - selections
related:
  - DAssemblyDocEvents_FileDropNotifyEventHandler
  - DPartDocEvents_FlipLoopNotifyEventHandler
keywords:
  - select
  - iloop2
  - loop2
  - edge
  - object
  - append
  - boolean
  - selection
  - data
---

# ILoop2.Select

Selects a loop in the graphics area.

## Signature

```csharp
System.Boolean Select( 
   System.Object
Edge
,
   System.Boolean
Append
,
   System.Object
SelectionData
)
```
## Parameters

- `Edge` (System.Object): Edge of the loop (see Remarks )
- `Append` (System.Boolean): True to append this selection to the selection list, false to replace the selection list with this selection
- `SelectionData` (System.Object): ISelectData object

## Return Value

True if the loop is selected, false if not

## Remarks

This loop can share Edge with an adjacent loop, if it exists.
If Edge is:
a valid edge on this loop, this method selects the adjacent loop.
Nothing or null, this method selects this loop.

## See Also

- `DAssemblyDocEvents_FileDropNotifyEventHandler`
- `DPartDocEvents_FlipLoopNotifyEventHandler`