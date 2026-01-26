---
type: method
interface: IModelDoc2
member: SetDisplayWhenAdded
returns: void
parameters:
  -
    name: Setting
    type: System.Boolean
    description: True to display new sketch entities when added, false to note
docset: sldworksapi
deprecated: true
since_version: unknown
categories:
  - core
  - documents
  - ui
related:
  - IModelDoc2.GetDisplayWhenAdded
keywords:
  - setdisplaywhenadded
  - imodeldoc2
  - model
  - doc2
  - display
  - when
  - added
  - setting
  - boolean
  - void
---

# IModelDoc2.SetDisplayWhenAdded

Obsolete. Superseded by ISketchManager::DisplayWhenAdded.

## Signature

```csharp
void SetDisplayWhenAdded( 
   System.Boolean
Setting
)
```
## Parameters

- `Setting` (System.Boolean): True to display new sketch entities when added, false to note

## Return Value

Unknown.

## Remarks

The sketch entities appear on the screen after performing
IModelDoc2::GraphicsRedraw2
or
IModelDoc2::EditRebuild3
is performed. Also,
IModelDoc2::SetAddToDB
must be True to use this method's settings.
This display setting remains even after your program run has ended. Therefore, it is recommended that you reset this parameter to True at the end of your program. For example, if you have ended your program and the display is set to false, then the user would have difficulty performing selections and newly created entities would not be seen until a redraw or a rebuild.
NOTES:
IModelDoc2::GraphicsRedraw2 is much faster than ModelDoc2::EditRebuild3.
IModelDoc2::SetAddToDB and
IModelDoc2::SetDisplayWhenAdded
also increase performance during sketch entity creation.

## See Also

- `IModelDoc2.GetDisplayWhenAdded`