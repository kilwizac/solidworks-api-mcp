---
type: method
interface: INote
member: MakeStackedBalloon
returns: void
parameters:
  -
    name: StackedBalloonOptions
    type: System.Object
    description: IStackedBalloonOptions
docset: sldworksapi
deprecated: false
since_version: unknown
categories:
  - dimensions
related:
  - IModelDocExtension.InsertStackedBalloon2
  - INote.GetBalloonOptions
keywords:
  - makestackedballoon
  - inote
  - note
  - make
  - stacked
  - balloon
  - options
  - object
  - void
---

# INote.MakeStackedBalloon

Converts this balloon to a stacked balloon.

## Signature

```csharp
void MakeStackedBalloon( 
   System.Object
StackedBalloonOptions
)
```
## Parameters

- `StackedBalloonOptions` (System.Object): IStackedBalloonOptions

## Return Value

Unknown.

## Remarks

Before calling this method, use
IModelDocExtension::SelectByID2
to select the entity to add to the balloon stack.
After calling this method to convert the balloon to a stacked balloon, add more balloons by calling:
INote::GetBalloonStack
IBalloonStack::AddTo

## See Also

- `IModelDocExtension.InsertStackedBalloon2`
- `INote.GetBalloonOptions`