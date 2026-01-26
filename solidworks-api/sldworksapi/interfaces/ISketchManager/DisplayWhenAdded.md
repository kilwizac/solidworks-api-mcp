---
type: property
interface: ISketchManager
member: DisplayWhenAdded
returns: System.Boolean
parameters: []
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - sketches
related: []
keywords:
  - display
  - sketch
  - entities
  - see
  - also
  - isketch
  - displaywhenadded
  - isketchmanager
  - manager
  - when
  - added
  - boolean
readonly: null
---

# ISketchManager.DisplayWhenAdded

Gets or sets whether new sketch entities are immediately displayed when created.

## Signature

```csharp
System.Boolean DisplayWhenAdded {get; set;}
```
## Parameters

None.

## Return Value

True to display new sketch entities when added, false to not

## Remarks

The sketch entities appear on the screen after performing
IModelView::GraphicsRedraw
or
IModelView::IGraphicsRedraw
or
IModelDoc2::EditRebuild3
is performed. Also,
ISketchManager::AddToDB
must be true to use this method's settings.
This display setting remains even after your program run has ended. Therefore, it is recommended that you reset this parameter to TRUE at the end of your program. For example, if you have ended your program and the display is set to FALSE, then the user would have difficulty performing selections and newly created entities would not be seen until a redraw or a rebuild.
NOTES:
IModelView::GraphicsRedraw and IModelView::IGraphicsRedraw are much faster than IModelDoc2::EditRebuild3.
ISketchManager::AddToDB and ISketchManager::DisplayWhenAdded also increase performance during sketch entity creation.