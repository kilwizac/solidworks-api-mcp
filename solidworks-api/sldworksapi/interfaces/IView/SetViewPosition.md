---
type: method
interface: IView
member: SetViewPosition
returns: System.Boolean
parameters:
  -
    name: Position
    type: System.Object
    description: Array of two doubles giving the new x,y position of this drawing view relative to the sheet origin (see Remarks )
  -
    name: MoveChildViews
    type: System.Boolean
    description: True to also move child views, false to not
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - drawings
  - ui
related:
  - DDrawingDocEvents_ViewPositionChangeNotifyEventHandler
  - IView.Position
keywords:
  - setviewposition
  - iview
  - view
  - position
  - object
  - move
  - child
  - views
  - boolean
---

# IView.SetViewPosition

Moves this drawing view.

## Signature

```csharp
System.Boolean SetViewPosition( 
   System.Object
Position
,
   System.Boolean
MoveChildViews
)
```
## Parameters

- `Position` (System.Object): Array of two doubles giving the new x,y position of this drawing view relative to the sheet origin (see Remarks )
- `MoveChildViews` (System.Boolean): True to also move child views, false to not

## Return Value

True if view position successfully set, false if not

## Remarks

Take careful note of view alignments when specifying Position. Any view alignments that might affect this view are handled the same way as if you were using the SOLIDWORKS Design user interface to draw the view to move it. If this view is aligned with another view, it will only be allowed to move along the alignment vector.

## See Also

- `DDrawingDocEvents_ViewPositionChangeNotifyEventHandler`
- `IView.Position`